/*global define*/

define([
    'jquery',
    'backbone',
    'views/locations',
    'collections/locations'
], function ($, Backbone, LocationsView, LocationsCollection) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            "": "locations"
        },

        locations: function() {
            var locationsCollection = new LocationsCollection();
            var locationsView =  new LocationsView( { model: locationsCollection } );

            $( ".container" ).html( locationsView.render().el );
        }

    });

    return MainRouter;
});
