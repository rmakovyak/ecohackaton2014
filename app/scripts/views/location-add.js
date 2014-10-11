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
           var scanData = {}

           $( ".scan-data" ).hide();
           $( ".loader" ).show();

           setTimeout( function () {
               scanData.humidity = ( Math.random() * (100 - 0) + 0 ).toPrecision(4);
               scanData.acidity = ( Math.random() * (6 - 1) + 1 ).toPrecision(2);
               scanData.temperature = ( Math.random() * (60 + 20) - 20 ).toPrecision(4);
               scanData.illumination = ( Math.random() * (100 + 0) - 0 ).toPrecision(4);

               $( ".t" ).html( scanData.temperature );
               $( ".a" ).html( scanData.acidity );
               $( ".i" ).html(  scanData.illumination );
               $( ".h" ).html(  scanData.humidity );

               $( ".scan-data" ).show();
               $( ".loader" ).hide();
           }, 3000);

        }
    });

    return LocationAddView;
});
