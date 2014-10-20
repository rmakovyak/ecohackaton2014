'use strict';

define([
    'utils/request',
    'views/profile'
],function (request, ProfileView) {

    var $ = Dom7;

    return {
        init: function (q) {
            $('.preloader.main').show();
            FB.api('me', function (response) {
                // request.get('/users/1', function (err, data) {
                    // if (err) { return console.log(err, data); }

                    $('.preloader.main').hide();

                    var profileView = new ProfileView(response);
                    profileView.render();
                    profileView.bindEvents({
                        'click -> .remove-plant': function (id) {
                            // request.delete('/plants/' + id, function (err, data) {
                            //     if (err) { return console.log(err, data); }
                            // });

                            console.log('Plant has been removed!');
                        }
                    });

                    FB.api('me/picture?width=280', function (response) {
                        var image = response.data.url;
                        $('.profile-image')[0].style.background = 'url('+image+')';
                    });
                // });
            });
        }
    };
});
