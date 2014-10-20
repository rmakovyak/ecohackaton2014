'use strict';

define([
    'utils/request',
    'views/plantsList'
],function (request, PlantsListView) {

    var $ = Dom7;

    return {
        init: function (q) {
            $('.preloader.main').show();
            request.get('/plants/available', function (err, data) {
                if (err) { return console.log(err, data); }

                $('.preloader.main').hide();

                var plantsListView = new PlantsListView(data);
                plantsListView.render();
                plantsListView.bindEvents({
                    'click -> .remove-plant': function (id) {
                        // request.delete('/plants/' + id, function (err, data) {
                        //     if (err) { return console.log(err, data); }
                        // });

                        console.log('Plant has been removed!');
                    }
                });
            });
        }
    };
});
