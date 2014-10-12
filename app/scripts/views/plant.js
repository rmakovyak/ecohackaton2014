/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'utils/calendar'
], function ($, _, Backbone, JST , calendar) {
    'use strict';

    var LocationView = Backbone.View.extend({
        template: JST['app/scripts/templates/plant.ejs'],
        adTemplate: JST['app/scripts/templates/ad.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            "click .action": "actionDismiss",
            "click .ad": "showAdvertisment"
        },

        initialize: function () {
            this.listenTo(this.model, 'sync', this.render);
        },

        render: function () {
            this.$el.html(this.template( { model: this.model.toJSON() } ));

            var d = new Date();
            var n = d.getMonth();

            var $iconWater = "<i class='fa fa-tint day-action'></i>";
            var $iconCut = "<i class='fa fa-cut day-action'></i>";
            var $iconFertilize = "<i class='fa fa-eyedropper day-action'></i>";
            var $iconPrune = "<i class='fa fa-bug day-action'></i>";

            var calendarHTML = calendar.generate( n );

            this.$el.find( "#calendar" ).html( calendarHTML );

            this.$el.find( "#calendar" ).find( "#15" )
                .addClass( "water-day" )
                .append( $iconWater );

            this.$el.find( "#calendar" ).find( "#21" )
                .addClass( "cut-day" )
                .append( $iconCut );

            this.$el.find( "#calendar" ).find( "#30" )
                .addClass( "fertilize-day" )
                .append( $iconFertilize );

            this.$el.find( "#calendar" ).find( "#28" )
                .addClass( "prune-day" )
                .append( $iconPrune );

            return this;
        },

        actionDismiss: function( e ) {
            $( e.currentTarget ).addClass( "dismiss" );

            setTimeout( function(){
                $( e.currentTarget ).remove();
                $( "#fade" ).css( { "display": "block" } );
                $( "#overlay" ).css( { "display": "block" } );
                setTimeout(function() {
                    $( "#overlay" ).addClass('animate');
                }, 10);
                $( "#overlay" ).html( "<p>Achievment unlocked.</p><img src='images/badge_pour.svg'/><p>You have watered 10 times.</p><button class='button-action modal-dismiss'>Thanks</button>" );
                $( ".modal-dismiss" ).click( function() {
                    $( "#fade" ).css( { "display": "none" } );
                    $( "#overlay" ).css( { "display": "none" } );
                });
            }, 300 );
        },

        showAdvertisment: function() {
            $( "#fade" ).css( { "display": "block" } );
            $( "#overlay.recomendation" ).css( { "display": "block" } );
            setTimeout(function() {
                $( "#overlay..recomendation" ).addClass('animate');
            }, 10);
            $( "#overlay..recomendation" ).html( this.adTemplate() );
            $( ".modal-dismiss" ).click( function() {
                $( "#fade" ).css( { "display": "none" } );
                $( "#overlay..recomendation" ).css( { "display": "none" } );
            });
        }

    });

    return LocationView;
});
