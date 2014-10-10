# Overview #
hide and auto hide navigation bar.

[android] [phonegap cli] [crosswalk]
# Install phonegap plugin #

## Phonegap build service (config.xml) ##
```c
not yet supported
```
## Phonegap cli ##
```c
cordova plugin add http://github.com/cranberrygame/com.cranberrygame.phonegap.plugin.navigationbar
```
## Crosswalk ##
```c
XDK PORJECTS - your_xdk_project - CORDOVA 3.X HYBRID MOBILE APP SETTINGS - PLUGINS AND PERMISSIONS - Third Party Plugins - Add a Third Party Plugin - Get Plugin from the Web -

Name: navigationbar
Plugin ID: com.cranberrygame.phonegap.plugin.navigationbar
Repo URL: https://github.com/cranberrygame/com.cranberrygame.phonegap.plugin.navigationbar
```
# API #
```javascript
document.addEventListener("deviceready", function(){
	var autoHide = true;
	window.navigationbar.setUp(autoHide);		
}, false);	
```
# Examples #
<a href="https://github.com/cranberrygame/com.cranberrygame.phonegap.plugin.navigationbar/blob/master/example/basic/index.html">example/basic/index.html</a><br>
<a href="https://github.com/cranberrygame/com.cranberrygame.phonegap.plugin.navigationbar/blob/master/example/advanced/index.html">example/advanced/index.html</a>
# Test #

# Useful links #
Construct 2: a games/apps maker<br>
https://www.scirra.com/

Phonegap related c2 plugins (+Crosswalk)<br>
https://www.scirra.com/forum/viewtopic.php?t=109586

Games/Apps with phonegap related c2 plugins (+Crosswalk)<br>
https://www.scirra.com/forum/viewtopic.php?f=148&t=115517
