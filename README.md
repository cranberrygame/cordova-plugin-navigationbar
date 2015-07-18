Cordova NavigationBar plugin
====================

# Overview #
Hide and auto hide navigation bar.

[android] [cordova cli] [xdk] [cocoon]

This is open source cordova plugin.

You can see Plugins For Cordova in one page: http://cranberrygame.github.io?referrer=github

# Change log #
```c	
```
# Install plugin #

## Cordova cli ##
https://cordova.apache.org/docs/en/edge/guide_cli_index.md.html#The%20Command-Line%20Interface - npm install -g cordova@5.0.0
```c
cordova plugin add cordova-plugin-navigationbar
(when build error, use github url: cordova plugin add https://github.com/cranberrygame/cordova-plugin-navigationbar)
```

## Xdk ##
https://software.intel.com/en-us/intel-xdk - Download XDK - XDK PORJECTS - [specific project] - CORDOVA 3.X HYBRID MOBILE APP SETTINGS - PLUGINS - Third Party Plugins - Add a Third Party Plugin - Get Plugin from the Web -
```c
Name: navigationbar
Plugin ID: cordova-plugin-navigationbar
[v] Plugin is located in the Apache Cordova Plugins Registry
```

## Cocoon ##
https://cocoon.io - Create project - [specific project] - Setting - Plugins - Custom - Git Url: https://github.com/cranberrygame/cordova-plugin-navigationbar.git - INSTALL - Save<br>

## Phonegap build service (config.xml) ##
https://build.phonegap.com/ - Apps - [specific project] - Update code - Zip file including config.xml
```c
<gap:plugin name="cordova-plugin-navigationbar" source="npm" />
```

## Construct2 ##
Download construct2 plugin<br>
https://dl.dropboxusercontent.com/u/186681453/pluginsforcordova/index.html<br>
How to install c2 native plugins in xdk, cocoon and cordova cli<br>
https://plus.google.com/102658703990850475314/posts/XS5jjEApJYV

# Server setting #
```c
```

# API #
```javascript
document.addEventListener("deviceready", function(){
	var autoHideNavigationBar = false;
	window.navigationbar.setUp(autoHideNavigationBar);		
}, false);

window.navigationbar.hide();
```
# Examples #
<a href="https://github.com/cranberrygame/cordova-plugin-navigationbar/blob/master/example/basic/index.html">example/basic/index.html</a><br>
<a href="https://github.com/cranberrygame/cordova-plugin-navigationbar/blob/master/example/advanced/index.html">example/advanced/index.html</a>

# Test #

# Useful links #

Plugins For Cordova<br>
http://cranberrygame.github.io?referrer=github

# Credits #
