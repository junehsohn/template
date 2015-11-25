(function(window, $, angular, _, undefined){

	angular.module('App01', ['ui.router', 'App01.list']);

	var goPromise = null;
	angular.module('App01').config([ "$stateProvider", "$urlRouterProvider", "$httpProvider", function( $stateProvider, $urlRouterProvider, $httpProvider ){
	        $stateProvider.state( "list", {
	            url : "/list",
	            templateUrl : "/app01/views/listContainer.html",
	            controller : "App01.list.listManager",
	            controllerAs : "ListManager",
	            resolve : {
	                go : function()
	                {
	                	console.log('list GO~!!');
	                    return goPromise;
	                }
	            }
	        });

	        // $stateProvider.state( "detail", {
	        //     url : "/detail",
	        //     templateUrl : "/app01/views/detail.html",
	        //     controller : "App01.detail.detailManager",
	        //     controllerAs : "DetailManager",
	        //     resolve : {
	        //         go : function()
	        //         {
	        //             return goPromise;
	        //         }
	        //     }
	        // });

	        $urlRouterProvider.otherwise( "/list" );
	        $httpProvider.defaults.headers.common["ajax-request"] = "true";
	    }]).controller('App01.ctrl', ['$scope', function($scope){
	    	var vm = this;
	    	vm.title = 'App01.ctrl!!';
	    }]);

})( window, window.jQuery, window.angular, window._ );