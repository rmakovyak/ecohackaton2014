/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
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
            console.log(this.model.toJSON());
            this.$el.html(this.template( { model: this.model.toJSON() } ));
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
