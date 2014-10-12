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

        tagName: 'div',

        id: '',

        className: '',

        events: {
            "click .action": "actionDismiss"
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
                $( "#overlay" ).html( "<p>Achievment unlocked.</p><img src='images/badge_pour.svg'/><p>You have watered 10 times.</p><button class='button-action modal-dismiss'>Thanks</button>" );
                $( ".modal-dismiss" ).click( function() {
                    $( "#fade" ).css( { "display": "none" } );
                    $( "#overlay" ).css( { "display": "none" } );
                });
            }, 300 );
        }
    });

    return LocationView;
});
