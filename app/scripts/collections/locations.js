/*global define*/

define([
    'underscore',
    'backbone',
    'models/location'
], function (_, Backbone, LocationsModel) {
    'use strict';

    var LocationsCollection = Backbone.Collection.extend({
        url: 'http://localhost:9000/organicgarden/api/locations',
        model: LocationsModel
    });

    return LocationsCollection;
});
