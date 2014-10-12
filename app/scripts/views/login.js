/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ProfileView = Backbone.View.extend({
        template: JST['app/scripts/templates/login.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click .facebook': 'facebook'
        },

        initialize: function () {

        },

        render: function () {
            this.$el.html(this.template( { loginOptions: this.model } ));
            return this;
        },

        facebook: function() {
            FB.login(function (response) {
                if (response.status === 'connected') {
                    FB.api('me', function (user) {
                        var xhr = new XMLHttpRequest();
                        xhr.open('POST', '/organicgarden/api/users');
                        xhr.setRequestHeader('Content-Type', 'application/json');
                        xhr.onload = function() {
                            if (xhr.status === 200) {
                                Backbone.history.navigate('plants', { trigger: true });
                            }
                        };
                        xhr.send(JSON.stringify({ name: user.name, email: user.email }));
                    });
                }
            }, { scope: 'email' });
        }
    });

    return ProfileView;
});
