/*global define*/

define([
    'underscore',
    'backbone',
    'models/location'
], function (_, Backbone, LocationsModel) {
    'use strict';

    var LocationsCollection = Backbone.Collection.extend({
        model: LocationsModel
    });

    return LocationsCollection;
});
