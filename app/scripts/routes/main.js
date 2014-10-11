/*global define*/

define([
    'jquery',
    'backbone',
    'views/locations',
    'collections/locations',
    'models/location',
    'views/location'
], function ($, Backbone, LocationsView, LocationsCollection, LocationModel, LocationView) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            "": "locations",
            "location/:id": "location"
        },

        locations: function() {
            this.locationsCollection = new LocationsCollection();
            this.locationsView =  new LocationsView( { model: this.locationsCollection } );

            $( ".container" ).html( this.locationsView.el );

            this.locationsCollection.fetch();
        },

        location: function (id) {
            this.locationModel = new LocationModel(id);
            this.locationView = new LocationView({ model: this.locationModel });

            $('.container').html( this.locationView.el );

            this.locationModel.fetch();
        }

    });

    return MainRouter;
});
