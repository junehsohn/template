(function(window, $, angular, _, undefined){

	angular.module('App01.list',[])
		.controller('App01.list.listManager',['$scope', '$timeout', ListManager])
		.directive('list-comp',['$q', ListComp])
		.controller('App01.list.ctrl',['$scope', ListCompCtrl]);

	function ListManager($scope, $timeout){
		var vm = this;
		vm.app01List = _getList(10);
		vm.app02List = _getList(5);
		_init();

		function _init(){
			$timeout(function(){
				vm.app01List = getList(10);
			},1500);
		}

		function _getList(__len){
			var l = [], i, iTotal = __len || parseInt(Math.random()*10+5, 10);
			for( i=0; i<iTotal; ++i ){
				l.push({name:'name-'+(i+1),id:'id_'+(i+1)});
			}
			return l;
		}
	}

	function ListComp($q){
		return {
			restrict:'A',
			scope:{
				list:'='
			},
			controller:'App01.list.ctrl',
			controllerAs:'ListCtrl',
			link: function postLink( scope, iEle, iAttr ){
				
				
			}
		};
	}

	function ListCompCtrl($scope){
		var vm = this;

		vm.title = 'ListTitle';
		vm.list = $scope.list;
		vm.say = function say(__str){
			alert(__str);
		};

		/*$scope.$watch('list', function(newVal, oldVal){
			if(newVal != oldVal){
				vm.list = newVal;
			}
		});*/


	}

})( window, window.jQuery, window.angular, window._ );