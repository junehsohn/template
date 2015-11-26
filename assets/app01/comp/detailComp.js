(function(window, $, angular, _, undefined){

	angular.module('App01.detail',[])
		.controller('App01.detail.detailController',['$scope', '$timeout', DetailController]);
		
	function DetailController($scope, $timeout){
		var vm = this;
		vm.title = 'DetailTitle';
		vm.say = function say(__str){
			alert(__str);
		};
		vm.listArr = _getList(5);
		vm.detailArr = _getList(10);
		_init();

		function _init(){
			console.log('App01.detail.detailController init');
			_destroy();
		}

		function _getList(__len){
			var l = [], i, iTotal = __len || parseInt(Math.random()*10+5, 10);
			for( i=0; i<iTotal; ++i ){
				l.push({name:'detail-'+(i+1),id:'id_'+(i+1)});
			}
			return l;
		}

		function _destroy(){
			$scope.$on("$destroy", function() {
		        console.log('detailController destroy');
		    });
		}
	}


})( window, window.jQuery, window.angular, window._ );