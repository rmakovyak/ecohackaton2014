/*global define*/

define([
    'jquery',
    'backbone',
    'views/location',
    'views/locations',
    'views/location-add',
    'collections/locations',
    'models/location'
], function ($, Backbone, LocationView, LocationsView, AddLocationView, LocationsCollection, LocationModel) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            "": "locations",
            "locations": "locations",
            "location/add": "addLocation",
            "location/:id": "location"
        },

        locations: function() {
            this.locationsCollection = new LocationsCollection();
            this.locationsView =  new LocationsView( { model: this.locationsCollection } );

            $( ".container" ).html( this.locationsView.el );

            this.locationsCollection.fetch();
        },

        addLocation: function() {
            this.locationModel = new LocationModel();
            this.addLocationView = new AddLocationView( { model: this.locationModel } );
            $( ".container" ).html( this.addLocationView.render().el );
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
