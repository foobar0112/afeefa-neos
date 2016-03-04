qx.Class.define("IncludeView", {
	
	extend : View,
	type: "singleton",

	properties: {
		includes: {},
		baseUrl: {},
		includeKey: {}
	},

	construct: function(){
		var that = this;

		that.setViewId('includeView');
		that.setIncludes({
			refugeeGuide: 'refugeeGuide',
			supporterGuide: 'supporterGuide',
			imprint: 'imprint',
			press: 'press',
			about: 'about',
			intro: 'intro',
			entryFormGuide: 'entryFormGuide'
		});
		that.setBaseUrl( '_Resources/Static/Packages/DDFA.dresdenfueralleDe/DDFA/inc/' );
	},

	members : {
		
		render: function(){
			var that = this;

			// view container
			that.view = $("<div />");
			that.view.attr('id', that.getViewId());

			// content container
			that.contentContainer  = $("<div />");
			that.contentContainer.addClass('content-container');
			that.view.append(that.contentContainer);

			that.closeBtn = $("<div />").addClass('closeBtn').append('');
			that.view.append(that.closeBtn);

			$('#main-container').append(that.view);

			// if( APP.getUserDevice() == 'desktop') that.contentContainer.perfectScrollbar();

			this.base(arguments);
		},

		// TODO option: modal
		load: function( includeKey ){
			var that = this;

			that.reset();
			
			that.setIncludeKey(includeKey);

			that.view.addClass('active');
			that.view.addClass(includeKey);
			that.setViewState(1);

			that.say('includeViewOpened');
			
				
			that.contentContainer.load( that.getBaseUrl() + that.getIncludes()[includeKey] + '_' + APP.getLM().getCurrentLang() + ".html", function( response, status, xhr ) {

				if ( status == "error" ) {

					that.contentContainer.load( that.getBaseUrl() + that.getIncludes()[includeKey] + '_en.html', function( response, status, xhr ) {
						
						if ( status == "error" ) {

							that.contentContainer.load( that.getBaseUrl() + that.getIncludes()[includeKey] + '_de.html', function( response, status, xhr ) {
								loadComplete();
							});

						}

						loadComplete();

					});

				}

				loadComplete();

			});

			function loadComplete(){
				
				// location links
				$('span.locationLink').click(function(){
					APP.getMapView().selectMarkerFromLink( $(this).attr('name') );
				});

				// scrolling
				const headerEl = that.contentContainer.find('.header');
				const contentEl = that.contentContainer.find('.content');

				if( APP.getUserDevice() == 'desktop') {
					contentEl
						.perfectScrollbar()
						.on('ps-scroll-down', function() {
							headerEl.addClass('min');
							$(this).perfectScrollbar('update');
						})
						.on('ps-y-reach-start', function() {
							headerEl.removeClass('min');
						});
				}

				// minimizing
				headerEl.click(function(){
					if(that.getViewState() == 2) that.minimize(false);
				});

				// scan buttons
				$('button').click(function(){
					const action = $(this).attr('data-action');
					switch(action) {
						case 'close':
							that.close();
							break;
						case 'openForm':
			   			that.close();
			   			APP.getFormView().load( APP.getFormView().getFormTypes().marketOffer );
			   			break;
						default:
					}
				});
			}

		},

		reset: function(){
			var that = this;

			that.setIncludeKey(null);

			// that.view.find('h1').remove();
			that.contentContainer.empty();
		},

		minimize: function(bool){
			var that = this;

			// only min/max if view is active
			if( that.getViewState() === 0 ) return false;

			if( bool ) {
				that.view.addClass('min')
				that.setViewState(2);
			}
			else {
				that.view.removeClass('min')  
				that.setViewState(1);
			}
		},

		addEvents: function(){
			var that = this;

			// call superclass
			this.base(arguments);
			
			that.view.click(function(){
				that.say('includeViewClicked', {viewState: that.getViewState()} );
			});

			that.closeBtn.click(function(){
				that.close();
				that.say('includeViewClosed');
			});

			that.listen('detailViewOpened', function(){
				that.minimize(true);
			});

			// that.listen('detailViewMobileMaximized', function(){
			//     that.minimize(true);
			// });

			// that.listen('detailViewMobileMinimized', function(){
			//     that.minimize(true);
			// });

			that.listen('detailViewClosed', function(){
				that.minimize(false);
			});

			that.listen('searchFieldFocused', function(){
				that.close();
			});


			// that.menuBtn.click(function(){
			//     $('#main-container').addClass('shifted-left');
			// });

			// that.listen('curtainclicked', function(){
			//     $('#main-container').removeClass('shifted-left');
			// });
			
		},

		close: function(){
			var that = this;

			that.view.removeClass('active');
			_.each(that.getIncludes(), function(value, key){
				that.view.removeClass(value);
			});
			
			that.setViewState(0);

			that.say('includeViewClosed');
		},

		changeLanguage: function(){
			var that = this;

			that.load( that.getIncludeKey() );
		}
	}

});