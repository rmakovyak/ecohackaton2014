'use strict';

define([
    'hbs!templates/plantsList'
],function (plantsListTmpl) {

    var $ = Dom7;

    var PlantsListView = function (plants) {
        this.plants = plants;
    };

    PlantsListView.prototype.render = function() {
        this.template = plantsListTmpl({ plants: this.plants });
        $('.plants-list ul').html(this.template);
    };

    PlantsListView.prototype.bindEvents = function (events) {
        var separator = ' -> ';
        for (var ent in events) {
            var type = ent.split(separator)[0],
                selector = ent.split(separator)[1],
                handler = events[ent];

            $(selector).on(type, handler);
        }
    };

    return PlantsListView;
});
