(function(window, $, angular, _, undefined){

	angular.module('App01', ['ui.router', 'App01.list', 'App01.detail']);

	var goPromise = null;
	angular.module('App01').config([ "$stateProvider", "$urlRouterProvider", "$httpProvider", function( $stateProvider, $urlRouterProvider, $httpProvider ){
	        $stateProvider.state( "list", {
	            url : "/list",
	            templateUrl : "/app01/views/listContainer.html",
	            controller : "App01.list.listController",
	            controllerAs : "ListController",
	            resolve : {
	                go : function()
	                {
	                	console.log('list GO~!!');
	                    return goPromise;
	                }
	            }
	        });

	        $stateProvider.state( "detail", {
	            url : "/detail",
	            templateUrl : "/app01/views/detailContainer.html",
	            controller : "App01.detail.detailController",
	            controllerAs : "DetailController",
	            resolve : {
	                go : function()
	                {
	                    return goPromise;
	                }
	            }
	        });

	        $urlRouterProvider.otherwise( "/list" );
	        $httpProvider.defaults.headers.common["ajax-request"] = "true";
	    }]).controller('App01.ctrl', ['$scope', '$state', function($scope, $state){
	    	var vm = this;
	    	vm.title = 'App01.ctrl!!';
	    	vm.goState = _goState;

	    	function _goState(__state){
	    		$state.go(__state);
	    	}
	    }])

})( window, window.jQuery, window.angular, window._ );