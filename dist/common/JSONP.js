!function(n){n.module("moviecat.jsonp",[]).service("myjsonp",["$window",function(n){var o=n.document;this.jsonp=function(a,c,e){a+="?";for(var i in c)a+=i+"="+c[i]+"&";var t="jsonp_"+(new Date-0);n[t]=function(n){e(n)},a+="callback="+t;var r=o.createElement("script");r.src=a,o.body.appendChild(r)}}])}(angular);