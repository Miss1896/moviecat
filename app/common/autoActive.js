(function(angular){

	angular.module('moviecat.autoActive',[]).directive('autoActive',['$location',function($location){


		return {
			link:function(scope,element){
				scope.location = $location;
				scope.$watch('location.url()',function(newValue){
					var aLink = element.children().attr('href');
					console.log(aLink)
					if(aLink.indexOf(newValue) > -1){
						element.parent().children().removeClass('active');
						element.addClass('active');
					}
				})
				// element.on('click',function(){
				// 	element.parent().children().removeClass('active');
				// 	element.addClass('active');
				// })
			}
		}

	}])

})(angular);