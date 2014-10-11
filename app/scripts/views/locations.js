/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var LocationsView = Backbone.View.extend({
        template: JST['app/scripts/templates/locations.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'sync', this.render);
        },

        render: function () {
            console.log(this.model.toJSON());
            this.$el.html(this.template( { models: this.model.toJSON() }));
            return this;
        }
    });

    return LocationsView;
});
