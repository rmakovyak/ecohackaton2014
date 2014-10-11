/*global define*/

define([
    'underscore',
    'backbone',
    'models/locations'
], function (_, Backbone, LocationsModel) {
    'use strict';

    var LocationsCollection = Backbone.Collection.extend({
        model: LocationsModel
    });

    return LocationsCollection;
});
