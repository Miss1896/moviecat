(function(angular){

	angular.module('moviecat.jsonp',[]).service('itcastJSONP',['$window',function($window){
		var doc = $window.document;
		this.jsonp = function(url,params,callback){
			url += "?";
			for(var k in params){
				url += k + "=" + params[k] + "&";
			}
			var cbName = "itcast_jsonp_" + (new Date() - 0);
			url += "callback=" + cbName;

			$window[cbName] = function(data){
				callback(data);
				console.log(url)
			}

			var script = doc.createElement('script');
			script.src = url;
			doc.body.appendChild(script);
		}
	}])

})(angular)