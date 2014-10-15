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
        template: JST['app/scripts/templates/plant.hbs'],
        adTemplate: JST['app/scripts/templates/ad.hbs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            "click .toggle-handle": "toggleNotifications",
            "click .open-modal": "openModal",
            "click .dismiss-modal": "dismissModal"
        },

        initialize: function () {
            this.listenTo(this.model, 'sync', this.render);
        },

        render: function () {
            this.$el.html(this.template( { model: this.model.toJSON() } ));

            return this;
        },

        toggleNotifications: function( e ) {
            $( e.currentTarget ).parents( ".toggle" ).toggleClass( "active" );
        },

        openModal: function( e ) {
            this.$el.find( ".modal" ).addClass( "active" );
        },

        dismissModal: function( e ) {
            console.log( "here" );
            this.$el.find( ".modal" ).removeClass( "active" );
        }

    });

    return LocationView;
});
