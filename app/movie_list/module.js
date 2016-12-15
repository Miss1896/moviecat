(function(angular){

	angular.module('moviecat.movielist',['ngRoute']).config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/:movieType/:page?',{
			templateUrl:'./movie_list/view.html',
			controller:'movie_listController'
		}).otherwise({
			redirectTo:'/home_page'
		})
	}]).controller('movie_listController',["$scope","$routeParams","$route","myjsonp",function($scope,$routeParams,$route,myjsonp){
		$scope.isLoaded = true;
		$scope.curPage = $routeParams.page || 1;
		$scope.pageSize = 5;
		var start = ($scope.curPage - 1) * $scope.pageSize;

		myjsonp.jsonp(
			'http://api.douban.com/v2/movie/'+ $routeParams.movieType,
			{
				start:start,
				count:$scope.pageSize
			},
			function(data){
				$scope.totalPages = Math.ceil(data.total / $scope.pageSize);
				$scope.movie = data;
				$scope.isLoaded = false;
				$scope.$apply();
			})
		$scope.goPages = function(current){
			if(current <= 0 || current > $scope.totalPages){
				return false;
			}
			$route.updateParams({page:current});
		}
		

	}])

})(angular)