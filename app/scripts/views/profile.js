/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ProfileView = Backbone.View.extend({
        template: JST['app/scripts/templates/profile.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'sync', this.render);
        },

        render: function () {

            var mock = {
                name: 'John Doe',
                avatar: '',
                email: 'john.doe@gmail.com',
                achievements: ['plant', 'pour', 'grow']
            };

            // this.$el.html(this.template( { user: this.model.toJSON() } ));
            this.$el.html(this.template( { user: mock } ));
            return this;
        }
    });

    return ProfileView;
});
