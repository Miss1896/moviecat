/**
 * Created by Administrator on 2016/12/12 0012.
 */
(function(angular){

    angular.module('moviecat.coming_soon',[]).config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/coming_soon',{
            templateUrl:'./coming_soon/view.html',
            controller:'coming_soonController'
        })

    }]).controller('coming_soonController',['$scope','$http',function($scope,$http){

        $http({
            method:'GET',
            url:'./coming_soon/data.json'
        }).then(function(response){
            // console.log(response);
            $scope.movie = response.data;
        },function(){

        })
    }])

})(angular)