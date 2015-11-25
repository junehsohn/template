(function(window, $, angular, _, undefined){

	angular.module('App01.list',[])
		.controller('App01.list.listManager',['$scope', '$timeout', ListManager])
		.controller('App01.list.ctrl',['$scope', ListCompCtrl])
		.directive('list-box',['$q', ListComp]);
		

	function ListManager($scope, $timeout){
		var vm = this;
		vm.listArr = _getList(10);
		vm.detailArr = _getList(5);
		_init();

		function _init(){
			console.log('App01.list.listManager init');
			$timeout(function(){
				vm.listArr = _getList(10);
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
			restrict:'EA',
			scope:{
				list:'='
			},
			replace:true,
			controller:'App01.list.ctrl',
			controllerAs:'ListCtrl',
			bindToController:true,
			templateUrl:'/app01/views/list.html',
			link: function postLink( scope, iEle, iAttr ){
				console.log('ListComp directive link init');
				
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

		console.log('App01.list.ctrl init');

		$scope.$watch('list', function(newVal, oldVal){
			if(newVal != oldVal){
				vm.list = newVal;
			}
		});


	}

})( window, window.jQuery, window.angular, window._ );