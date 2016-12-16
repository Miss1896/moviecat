(function (angular) {
    // "use strict";

    // start your ride
    angular.module('moviecat',[
        'moviecat.home',
        'moviecat.movieDetail',
        'moviecat.movielist',
        'moviecat.jsonp',
        'moviecat.autoActive'
          
    ]).controller('MainController',['$scope','$location',function($scope,$location){
    	$scope.query = '';
    	$scope.search = function(){
    		$location.url('/search/?q=' + $scope.query);
    	}

    }])

})(angular);