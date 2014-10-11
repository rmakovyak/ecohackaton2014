/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            "": "locations"
        },

        locations: function() {
            console.log( "locationss" );
        }

    });

    return MainRouter;
});
