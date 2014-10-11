/*global define*/

define([
    'underscore',
    'backbone',
    'models/plant'
], function (_, Backbone, PlantModel) {
    'use strict';

    var PlantsCollection = Backbone.Collection.extend({
        url: 'organicgarden/api/locations',
        model: PlantModel
    });

    return PlantsCollection;
});
