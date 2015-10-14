var DEMO = function () {
	

	// initialise DOM
	var html = "";
	html += "<p id='buttons'>";
	html += "<button id='tostart'>Reset</button>";
	html += "<button id='pause'>Pause</button>";
	html += "<b><button id='forward'>Play</button></b>";
	html += "<button id='skipforward'>Skip 5 Ahead</button>";
	html += "<button id='skipbackward'>Skip 5 Back </button>";
	html += "<b><span id='position' style='float:right'></span></b>";
	html += "</p>";
	html += "<p>";
	//html += '<video src="media/thefox.mp4" id="player" ></video>';
	html += "</p>";

	var run = function (motions) {
		var root = document.getElementById('demo');
		var to = motions.shared;
		root.innerHTML = html;

		// set up button click handlers
		var buttonsElem = document.getElementById("buttons");
		var self = this;
		buttonsElem.onclick = function (e) {

			var elem, evt = e ? e:event;
			if (evt.srcElement)  elem = evt.srcElement;
			else if (evt.target) elem = evt.target;
			if (elem.id === "pause") to.update(null, 0.0);
			else if (elem.id === "tostart") to.update(0.0);
			else if (elem.id === "skipforward") to.update(to.query().pos + 5);
			else if (elem.id === "skipbackward") to.update(to.query().pos - 5);
			else if (elem.id === "forward") {
				var v = to.query();
				if (v.pos === 100 && v.vel === 0) to.update(0.0, 1.0);
				else to.update(null, 1.0);
			}
			else if (elem.id === "toend") to.update(100.0);
		}

		// set up refresh of timingobject position
		to.on("timeupdate", function () {
			document.getElementById("position").innerHTML = to.query().pos.toFixed(2);
		}, this);

		// set up video sync
		var sync = mediascape.mediaSync(document.getElementById('player'), to);
	};
	return { run : run };
}();
