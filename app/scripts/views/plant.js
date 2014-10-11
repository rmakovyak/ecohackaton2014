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

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'sync', this.render);
        },

        render: function () {
            this.$el.html(this.template( { model: this.model.toJSON() } ));
            return this;
        }
    });

    return LocationView;
});
