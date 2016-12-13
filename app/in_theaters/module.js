/**
 * Created by Administrator on 2016/12/12 0012.
 */
(function(angular){

    angular.module('moviecat.in_theaters',['ngRoute']).config(['$routeProvider',function($routeProvider){

        $routeProvider.when('/in_theaters/:page?',{
            templateUrl: './in_theaters/view.html',
            controller:'in_theatersController'
        })
    }]).controller('in_theatersController',['$scope','$http','$routeParams','$route','itcastJSONP',function($scope,$http,$routeParams,$route,itcastJSONP){

        // $http({
        //     method:'GET',
        //     url: './in_theaters/data.json'
        // }).then(function(response){
        //     //console.log(response);
        //     $scope.movie = response.data;

        // },function(){
        //     // console.log(234);
        // })
        
        $scope.pageSize = 5;
        $scope.curPage = $routeParams.page || 1;
        var start = ($scope.curPage - 1) * $scope.pageSize ;

        itcastJSONP.jsonp('http://api.douban.com/v2/movie/in_theaters',
            {start:start,count:$scope.pageSize},
            function(data){
                $scope.movie = data;
                console.log(data);
                $scope.totalPages = Math.ceil(data.total / $scope.pageSize);
                $scope.$apply();
        });
        
        $scope.goPages = function(current){
            if(current <=0  || current > $scope.totalPages){
                return false;
            }
            $route.updateParams({page:current});
        }

    }])


})(angular);