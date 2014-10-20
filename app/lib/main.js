'use strict';

require.config({
    paths: {
        handlebars: 'bower_components/handlebars/handlebars',
        text: 'bower_components/requirejs-text/text',
        hbs: '../../bower_components/hbs/hbs'
    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require([
    'router'
], function (Router) {

    /* FB login code */
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=848073511893100";
        fjs.parentNode.insertBefore(js, fjs);
        js.onload = function() {
            setTimeout(function() {
                var $ = Dom7;

                Router.init();

                var planter = new Framework7({ animateNavBackIcon: true });

                var mainView = planter.addView('.view-main', {
                    dynamicNavbar: true
                });

                window.app = {
                    planter: planter,
                    mainView: mainView,
                    router: Router
                };

                $('.profile-link').on('click', function() {
                    mainView.router.loadPage('/app/pages/profile.html');
                });

                $('.fb-login').on('click', function() {
                    FB.login(function (response) {
                        if (response.status === 'connected') {
                            app.planter.closeModal('.login-screen');
                            $('.views').removeClass('hidden');
                            require(['controllers/listCtrl'], function (controller) {
                                controller.init();
                            });
                        }
                    }, { scope: 'email' });
                });
            }, 50);
        };
    }(document, 'script', 'facebook-jssdk'));
});
