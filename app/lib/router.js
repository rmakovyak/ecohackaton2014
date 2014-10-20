'use strict';

define(function() {

    var $ = Dom7;

    /* FB login code */
    function onCheckLoginStatus (response) {
        if (response.status === 'not_authorized' ||
            response.status === 'unknown') {
            app.planter.loginScreen();
        } else {
            $('.views').removeClass('hidden');
            require(['controllers/listCtrl'], function (controller) {
                controller.init();
            });
        }
    }

    return {
        init: function() {
            $(document).on('pageBeforeInit', function (event) {
                var page = event.detail.page;

                if (page.name === 'list') {
                    FB.getLoginStatus(onCheckLoginStatus);
                } else {
                    require(['controllers/'+page.name+'Ctrl'], function (controller) {
                        controller.init(page.query);
                    });
                }
            });
        }
    };
});
