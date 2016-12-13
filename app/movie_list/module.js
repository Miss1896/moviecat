/**
 * Created by Administrator on 2016/12/12 0012.
 */
(function(angular){

    angular.module('moviecat.movielist',['ngRoute']).config(['$routeProvider',function($routeProvider){

        $routeProvider.when('/:movieType/:page?',{
            templateUrl: './movie_list/view.html',
            controller:'movieListController'
        })
    }]).controller('movieListController',['$scope','$http','$routeParams','$route','itcastJSONP',function($scope,$http,$routeParams,$route,itcastJSONP){
        
        $scope.pageSize = 5;
        $scope.curPage = $routeParams.page || 1;
        var start = ($scope.curPage - 1) * $scope.pageSize ;
        $scope.curActive = $routeParams.movieType;

        itcastJSONP.jsonp('http://api.douban.com/v2/movie/'+$routeParams.movieType,
            {start:start,count:$scope.pageSize},
            function(data){
                $scope.movie = data;
                // $scope.curActive = $routeParams.movieType;
                // $scope.active = 'active';
                console.log($scope.curActive);
                console.log($scope.curActive == 'in_theaters');
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