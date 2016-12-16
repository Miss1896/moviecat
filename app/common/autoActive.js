(function(angular){

	angular.module('moviecat.autoActive',[]).directive('autoActive',['$location',function($location){


		return {
			link:function(scope,element){
				scope.location = $location;
				scope.$watch('location.url()',function(newValue){
					var aLink = element.children().attr('href');
					// console.log(element);
					// console.log(aLink)
					if(aLink.indexOf(newValue) > -1){
					
						console.log(element);
						element.parent().children().removeClass('active');
						element.addClass('active');
					}
				})
				// console.log(element);
				// element.on('click',function(){
				// 	console.log(element)
				// 	element.parent().children().removeClass('active');
				// 	element.addClass('active');
				// })
			}
		}

	}])

})(angular);