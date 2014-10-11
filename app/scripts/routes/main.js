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
            this.locationsCollection = new LocationsCollection();
            this.locationsView =  new LocationsView( { model: this.locationsCollection } );

            $( ".container" ).html( this.locationsView.el );

            this.locationsCollection.fetch();
        }

    });

    return MainRouter;
});
