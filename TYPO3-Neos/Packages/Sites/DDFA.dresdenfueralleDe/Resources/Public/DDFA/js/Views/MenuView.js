qx.Class.define("MenuView", {
    
    extend : View,
	type: "singleton",

    construct: function(){
    	var that = this;

        that.setViewId('menuView');
    },

    members : {
        
    	render: function(){
    		var that = this;

            // view container
            that.view = $("<div />");
            that.view.attr('id', that.getViewId());
            $('#main-container').append(that.view);

            // menu button
            that.menuBtn = $("<div />");
            that.menuBtn.addClass('menu-btn');
            that.view.append(that.menuBtn);

            // menu
            that.menu  = $("<div />");
            that.menu.attr('id', 'main-menu');
            that.view.append(that.menu);

            // logo
            var a = $('<a />').attr('href', 'http://afeefa.de');
            that.logo  = $('<img />').attr('src', APP.getConfig().imgPath + 'afeefa_light.svg');
            that.logo.attr('id', 'logo');
            a.append(that.logo);
            that.menu.append(a);
            
            // btn refugee guide
            that.refugeeBtn = $('<div />').addClass('item refugee-guide');
            that.refugeeLBtnLabel = $('<span />');
            that.refugeeBtn.append(that.refugeeLBtnLabel);
            that.menu.append(that.refugeeBtn);

            // btn supporter guide
            that.supporterBtn = $('<div />').addClass('item supporter-guide');
            that.supporterBtnLabel = $('<span />');
            that.supporterBtn.append(that.supporterBtnLabel);
            that.menu.append(that.supporterBtn);

            // btn help
            that.helpBtn = $('<div />').addClass('item help');
            that.helpBtnLabel = $('<span />');
            that.helpBtn.append(that.helpBtnLabel);
            that.menu.append(that.helpBtn);

            // btn about
            that.aboutBtn = $('<div />').addClass('item about');
            that.aboutBtnLabel = $('<span />');
            that.aboutBtn.append(that.aboutBtnLabel);
            that.menu.append(that.aboutBtn);

            this.base(arguments);
    	},

        addEvents: function(){
            var that = this;

            // call superclass
            this.base(arguments);
            
            that.menuBtn.click(function(){
                that.load();    
                that.say('mainMenuOpened');
            });
            
            that.listen('curtainclicked', function(){
                that.close();
            });

            // interferring with other left shifting menus
            that.listen('languageMenuOpened', function(){
                that.menu.addClass('hidden');
            });
            that.listen('shiftMenuClosed', function(){
                that.menu.removeClass('hidden');
            });
            
        },

        load: function(){
            var that = this;

            that.reset();

            $('#main-container').addClass('shifted');

            that.refugeeLBtnLabel.append( that.getWording('menu_refugee') );
            that.supporterBtnLabel.append( that.getWording('menu_supporter') );
            that.helpBtnLabel.append( that.getWording('menu_help') );
            that.aboutBtnLabel.append( that.getWording('menu_about') );

        },

        reset: function(){
            var that = this;

            that.refugeeLBtnLabel.empty();
            that.supporterBtnLabel.empty();
            that.helpBtnLabel.empty();
            that.aboutBtnLabel.empty();

        },

        close: function(){
            var that = this;

            $('#main-container').removeClass('shifted');
        },

        changeLanguage: function(){
            var that = this;
        }
    }

});