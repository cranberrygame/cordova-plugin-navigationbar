module.exports = {
   
    setUp: function(autoHide, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'NavigationBar',
            'setUp',
            [autoHide]
        ); 
    },
    hide: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'NavigationBar',
            'hide',
            []
        ); 
    }
};
