'use strict';

define(function() {

    var request = function (method, url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, 'http://planter.romanliutikov.com/organicgarden/api' + url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'json';
        xhr.onload = function() {
            if (xhr.status === 200) {
                callback(null, xhr.response);
            } else {
                callback(xhr.status, xhr.response);
            }
        };
        xhr.send();
    };

    return {
        get: function (url, callback) {
            request('get', url, callback);
        }
    };
});
