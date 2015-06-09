module.exports = {
   
    setUp: function(autoHideNavigationBar, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'NavigationBar',
            'setUp',
            [autoHideNavigationBar]
        ); 
    },
    hideNavigationBar: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'NavigationBar',
            'hideNavigationBar',
            []
        ); 
    }
};
