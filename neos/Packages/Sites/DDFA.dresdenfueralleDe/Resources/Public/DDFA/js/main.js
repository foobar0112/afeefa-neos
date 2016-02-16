require.config({
    
    // baseUrl: '_Resources/Static/Packages/DDFA.dresdenfueralleDe/DDFA/js',
    
    paths: {
        modernizr: '../../H5BP/js/vendor/modernizr-2.8.3.min',
        domReady: '../../requirejs/domReady',
        jquery: '../../jquery/jquery-2.1.3',
        perfectScrollbarJQuery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.6.7/js/min/perfect-scrollbar.jquery.min',
        restive: '../../restive/restive.min',
        qx: '../../qooxdoo/qx-oo-4.1.min',
        underscore: '../../underscore/underscore-min',
        leaflet: '../../leaflet/leaflet',
        leafletCluster: 'https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster',
        hammer: '../../hammerjs/hammer.min',
        cartodb: 'http://libs.cartocdn.com/cartodb.js/v3/3.12/cartodb',
        bootstrap: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min',
        mapbox: 'https://api.tiles.mapbox.com/mapbox.js/v2.1.9/mapbox',
        d3: 'http://d3js.org/d3.v3.min'
    },

    waitSeconds: 0	// disable "Load timeout for modules" error
});

require([
	'domReady',
	'jquery',
	'perfectScrollbarJQuery',
	'qx',
	'underscore',
	'hammer',
	'modernizr',
	'bootstrap',
	'Daddy',
	'restive',
	'APPDDFA',
	'DataManager',
	'Router',
	'LanguageManager',
	'Views/View',
	'Views/MapView',
	'Views/DetailView',
	'Views/MenuView',
	'Views/LegendView',
	'Views/LanguageView',
	'Views/PlusView',
	'Views/FormView',
	'Views/IncludeView'
], function(domReady, $, qx, _, Hammer) {

	domReady(function(){

		// require( [ 'modernizr'], function(  ){

			// require( [], function(){

				// require( [], function(){

					APP = new APPDDFA();
					
					// initialize app (e.g. fetch data)
					APP.init(function(){
						
						// var views;
						
						// if( APP.getUserDevice() === 'phone' ) {
						// 	views = ['Views/MapView', 'Views/DetailView', 'Views/DetailViewMobile', 'Views/PlusView'];
						// } else {
						// 	views = ['Views/MapView', 'Views/DetailView', 'Views/PlusView'];
						// }

						// require( views, function(){
						// 	APP.getRouter().navigate();
						// });

						// require( [], function(){
							
							if( APP.getUserDevice() === 'mobile' ) {
								
								require( ['Views/DetailViewMobile', 'Views/LanguageViewMobile'], function(){
									APP.getRouter().initialNavigate();
								});

							} else {
								APP.getRouter().initialNavigate();
							}
						
							APP.say('appInitialized');

						// });
					

					});



					//////////////
					// MENU //
					//////////////
					
					// console.debug(mapdata);

					// show menu
					// var $menu = $('#mobile-menu-off-canvas-left');
					// $('#menu-btn').click(function(){
					// 	$menu.addClass('active');
					// });

					// // hide menu (click the map)
					// $('#map-container').click(function(){
					// 	$menu.removeClass('active');
					// });
					// var myElement = document.getElementById('myElement');

					// // hide menu (swipe back)
					// var mc = new Hammer($menu[0]);
					// mc.on("swipeleft", function(ev) {
					// 	$menu.removeClass('active');
					// });

					// // show legend
					// var $legend = $('#mobile-menu-off-canvas-right');
					// $('#legend-btn').click(function(){
					// 	$legend.addClass('active');
					// });

					// // hide legend (click the map)
					// $('#map-container').click(function(){
					// 	$legend.removeClass('active');
					// });
					// var myElement = document.getElementById('myElement');

					// // hide legend (swipe back)
					// var mc = new Hammer($legend[0]);
					// mc.on("swiperight", function(ev) {
					// 	$legend.removeClass('active');
					// });

				// });
			
			// });

		// });
	});

});

