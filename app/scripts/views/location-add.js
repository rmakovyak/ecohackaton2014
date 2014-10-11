/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var LocationAddView = Backbone.View.extend({
        template: JST['app/scripts/templates/location-add.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            "click .scan": "scan"
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        scan: function() {
           this.scanData = {}

           this.scanData.humidity = ( Math.random() * (100 - 0) + 0 ).toPrecision(4);
           this.scanData.acidity = ( Math.random() * (6 - 1) + 1 ).toPrecision(2);
           this.scanData.temperature = ( Math.random() * (60 + 20) - 20 ).toPrecision(4);
           this.scanData.illumination = ( Math.random() * (100 + 0) - 0 ).toPrecision(4);

           console.log( this.scanData );
        }
    });

    return LocationAddView;
});
