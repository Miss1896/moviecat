(function(angular){

	angular.module('moviecat.movieDetail', ['ngRoute']).config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/details/:id?',
				{
				templateUrl: './movie_detail/view.html',
				controller: 'movieDetailController'
			})

	}]).controller('movieDetailController',['$scope','$routeParams','myjsonp',function($scope,$routeParams,myjsonp){
			var id = $routeParams.id;
			myjsonp.jsonp('http://api.douban.com/v2/movie/subject/'+id, {}, function(data){
				console.log(data);
				$scope.movieDetail = data;
				$scope.$apply();

			})
	}])

})(angular);
