(function (angular) {
    // "use strict";

    // start your ride
    angular.module('moviecat',[
        'moviecat.home',
        'moviecat.movielist',
        // 'moviecat.in_theaters',
        // 'moviecat.coming_soon',
        // 'moviecatTop250',
        'moviecat.jsonp'
    ]);

})(angular);