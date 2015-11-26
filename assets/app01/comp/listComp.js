(function(window, $, angular, _, undefined){

	angular.module('App01.list',[])
		.controller('App01.list.listController',['$scope', '$timeout', ListController]);
		

	function ListController($scope, $timeout){
		var vm = this;
		vm.title = 'ListTitle';
		vm.say = function say(__str){
			alert(__str);
		};
		vm.listArr = _getList(10);
		vm.detailArr = _getList(5);
		_init();

		function _init(){
			console.log('App01.list.listController init');
			_destroy();
		}

		function _getList(__len){
			var l = [], i, iTotal = __len || parseInt(Math.random()*10+5, 10);
			for( i=0; i<iTotal; ++i ){
				l.push({name:'list-'+(i+1),id:'id_'+(i+1)});
			}
			return l;
		}

		function _destroy(){
			$scope.$on("$destroy", function() {
		        console.log('listController destroy');
		    });
		}
	}


})( window, window.jQuery, window.angular, window._ );