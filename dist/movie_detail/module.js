!function(o){o.module("moviecat.movieDetail",["ngRoute"]).config(["$routeProvider",function(o){o.when("/details/:id?",{templateUrl:"./movie_detail/view.html",controller:"movieDetailController"})}]).controller("movieDetailController",["$scope","$routeParams","myjsonp",function(o,e,t){var i=e.id;t.jsonp("http://api.douban.com/v2/movie/subject/"+i,{},function(e){console.log(e),o.movieDetail=e,o.$apply()})}])}(angular);