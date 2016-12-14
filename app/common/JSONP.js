(function(angular){

	angular.module('moviecat.jsonp',[]).service('myjsonp',['$window',function($window){

		var doc = $window.document;
		this.jsonp = function(url,params,callback){
			url += '?';
			for(var k in params){
				url += k + "=" + params[k] + "&";
			}
			var cbName = 'jsonp_' + (new Date() - 0);
			$window[cbName] = function(data){
				callback(data);
			}
			url += "callback=" + cbName;
			var script = doc.createElement('script');
			script.src = url;
			doc.body.appendChild(script);
		}

	}])

})(angular)