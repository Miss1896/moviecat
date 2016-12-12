/**
 * Created by Administrator on 2016/12/12 0012.
 */
(function(angular){

    angular.module('moivecatTop250',['ngRoute']).config(['$routeProvider',function($routeProvider){

        $routeProvider.when('/top250',{
            templateUrl:'./top250/view.html',
            controller:'Top250Controller'
        })

    }]).controller('Top250Controller',['$scope','$http',function($scope,$http){

        $http({
            method:'GET',
            url:'./top250/data.json'
        }).then(function(response){
            console.log(123);
            $scope.movie = response.data;
        },function(){

        })

    }])

})(angular);