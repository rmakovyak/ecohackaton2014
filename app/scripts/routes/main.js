/*global define*/

define([
    'jquery',
    'backbone',
    'views/plant',
    'views/plants',
    'views/profile',
    'collections/plants',
    'models/plant',
    'models/profile'
], function ($, Backbone, PlantView, PlantsView, ProfileView, PlantsCollection, PlantModel, ProfileModel) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            "": "plants",
            "plants": "plants",
            "plants/:id": "plant",
            "user/:id": 'profile'
        },

        plants: function() {
            this.plantsCollection = new PlantsCollection();
            this.plantsView =  new PlantsView( { model: this.plantsCollection } );

            $( ".container" ).html( this.plantsView.el );

            this.plantsCollection.fetch();
        },

        plant: function( id ) {
            this.plantModel =  new PlantModel();
            this.plantView =  new PlantView( { model: this.plantModel } );

            $( ".container" ).html( this.plantView.render().el );

            // this.plantModel.fetch();
        },

        profile: function (id) {
            this.profileModel = new ProfileModel(id);
            this.profileView = new ProfileView({ model: this.profileModel });

            $('.container').html( this.profileView.render().el );

            // this.profileModel.fetch();
        }

    });

    return MainRouter;
});
