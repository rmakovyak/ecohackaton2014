/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var LocationModel = Backbone.Model.extend({
        url: '/organicgarden/api/locations/',

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

    return LocationModel;
});
