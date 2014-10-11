/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var PlantModel = Backbone.Model.extend({
        url: '/organicgarden/api/plants/',

        initialize: function (id) {
            this.url = this.url + id;
        },

        defaults: {

        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return PlantModel;
});
