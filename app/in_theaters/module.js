/**
 * Created by Administrator on 2016/12/12 0012.
 */
(function(angular){

    angular.module('moviecat.in_theaters',['ngRoute']).config(['$routeProvider',function($routeProvider){

        $routeProvider.when('/in_theaters',{
            templateUrl: './in_theaters/view.html',
            controller:'in_theatersController'
        })
    }]).controller('in_theatersController',['$scope','$http',function($scope,$http){

        $http({
            method:'GET',
            url: './in_theaters/data.json'
        }).then(function(response){
            //console.log(response);
            $scope.movie = response.data;

        },function(){
            console.log(234);
        })
    }])


})(angular);