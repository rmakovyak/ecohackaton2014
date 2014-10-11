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
        initialize: function(){
            this.on( "route", function(){
            });
        },

        routes: {
            "": "plants",
            "plants": "plants",
            "plants/:id": "plant",
            "user/:id": 'profile'
        },

        plants: function() {
            this.plantsCollection = new PlantsCollection();
            this.plantsView =  new PlantsView( { model: this.plantsCollection } );

            var that = this;

            $( ".container" ).animate( { left: "-2000px" }, function() {
                $( ".container" ).html( that.plantsView.el ).animate( { left: "0px" }, "slow" );
            });

            this.plantsCollection.fetch();
        },

        plant: function( id ) {
            this.plantModel =  new PlantModel( id );
            this.plantView =  new PlantView( { model: this.plantModel } );

            var that = this;

            $( ".container" ).animate( { left: "-2000px" }, function() {
                $( ".container" ).html( that.plantView.el ).animate( { left: "0px" }, "slow" );
            });

            this.plantModel.fetch();
        },

        profile: function (id) {
            this.profileModel = new ProfileModel(id);
            this.profileView = new ProfileView({ model: this.profileModel });

            var that = this;

            $( ".container" ).animate( { left: "-2000px" }, function() {
                $( ".container" ).html( that.profileView.render().el ).animate( { left: "0px" }, "slow" );
            });

            // this.profileModel.fetch();
        }

    });


    return MainRouter;
});
