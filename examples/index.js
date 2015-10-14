var DEMO = function () {
	
	var run = function (motions) {
		console.log("demo");
		var sync = mediascape.mediaSync(document.getElementById('player'), app.msvs.shared);
	};

	return { run : run };
}();
