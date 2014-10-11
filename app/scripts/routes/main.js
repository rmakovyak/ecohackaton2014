/*global define*/

define([
    'jquery',
    'backbone',
    'views/plant',
    'views/plants',
    'collections/plants',
    'models/plant'
], function ($, Backbone, PlantView, PlantsView, PlantsCollection, PlantModel) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            "": "plants",
            "plants": "plants",
            "plants/:id": "plant"
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
        }

    });

    return MainRouter;
});
