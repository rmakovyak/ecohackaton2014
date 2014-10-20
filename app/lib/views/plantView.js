'use strict';

define([
    'hbs!templates/plant',
    'hbs!templates/plantRecommendations'
],function (plantsListTmpl, plantRecommendationsTmpl) {

    var $ = Dom7;

    var PlantView = function (plant, recommendations) {
        this.plant = plant;
        this.recommendations = recommendations;

        var actions = {
            water: 'Water your plant',
            fertilize: 'Fertilize your plant',
            clean: 'Cut your plant',
            prune: 'Prune your plant'
        };

        var actionList = this.plant.actionList;

        for (var i = 0, ln = actionList.length; i < ln; i++) {
            actionList[i].message = actions[actionList[i].name];
        }
    };

    PlantView.prototype.render = function() {
        this.template = plantsListTmpl({ plant: this.plant });
        this.recommendations = plantRecommendationsTmpl({ recommendations: this.recommendations });
        $('.plant-page .page-content').html(this.template);
        $('.popup-recommendations .recs-list').html(this.recommendations)
            [0].className = 'list-block text-center recs-list';
    };

    PlantView.prototype.bindEvents = function (events) {
        var separator = ' -> ';
        for (var ent in events) {
            var type = ent.split(separator)[0],
                selector = ent.split(separator)[1],
                handler = events[ent];

            $(selector).on(type, handler);
        }
    };

    return PlantView;
});
