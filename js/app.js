/**
 *
 **/
document.write("<script src='../js/base64.js' type='text/javascript'></script>");

var api = "https://api.jules.xin";

(function($, doc) {
	$.getJSON("../language/chs.json", function(data) {
		var chs = data;
		chs = JSON.stringify(chs)
		localStorage.setItem('chs', chs)
	})
	$.getJSON("../language/eng.json", function(data) {
		var eng = data;
		eng = JSON.stringify(eng)
		localStorage.setItem('eng', eng)
	})


}(mui, window.app = {}));