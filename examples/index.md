---
layout: default
title: The Fox
demoappid: 4651377100653748657,
demojs: index
---

This demonstrates multi-device timed playback and control of a HTML5 video.

Open this page in multiple tabs/windows in order to appreciate precisely timed playback across multiple agents. 

You may also verify multi-device playback by opening this page on different computers. 


```javascript
var sync = mediascape.mediaSync(document.getElementById('player'), app.msvs.shared);
```
<video src="thefox.mp4" id='player'></video>


