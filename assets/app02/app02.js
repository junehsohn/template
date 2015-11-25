(function(window, $, angular, _, undefined){

	angular.module('App01', ['ui.router', 'App01.list'])
		.config([ "$stateProvider", "$urlRouterProvider", "$httpProvider", function( $stateProvider, $urlRouterProvider, $httpProvider ){
	        $stateProvider.state( "list", {
	            url : "/list",
	            templateUrl : "/app01/views/list.html",
	            controller : "App01.list.listManager",
	            controllerAs : "ListManager",
	            resolve : {
	                go : function()
	                {
	                    return goPromise;
	                }
	            }
	        });

	        /*$stateProvider.state( "detail", {
	            url : "/detail",
	            templateUrl : "/app01/views/detail.html",
	            controller : "App01.detail.detailManager",
	            controllerAs : "DetailManager",
	            resolve : {
	                go : function()
	                {
	                    return goPromise;
	                }
	            }
	        });*/

	        $urlRouterProvider.otherwise( "/list" );
	        $httpProvider.defaults.headers.common["ajax-request"] = "true";
	    }]);

})( window, window.jQuery, window.angular, window._ );