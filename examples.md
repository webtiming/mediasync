---
layout: default
title: Examples
---
---
#### Example
```javascript
var video = document.getElementById('vid');
var sync = mediascape.mediaSync(video, motion);


// Using Shared Motions from the Motion Corporation
<script type="text/javascript" src="http://www.mcorp.no/lib/mcorp-2.0.js"></script>
<script type="text/javascript" src="mediasync.js"></script>
// APP_ID comes from http://dev.mcorp.no/
var app = MCorp.app(APP_ID);
app.run = function() {
  var video = document.getElementById('vid');
  app.sync = mediascape.mediaSync(video, app.msvs.private);
}
window.onload = app.init;
```

