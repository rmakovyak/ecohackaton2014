'use strict';

define([
    'hbs!templates/profile'
],function (profileTmpl) {

    var $ = Dom7;

    var ProfileView = function (user) {
        this.user = user;
    };

    ProfileView.prototype.render = function() {
        this.template = profileTmpl(this.user);
        $('.profile-page .page-content').html(this.template);
    };

    ProfileView.prototype.bindEvents = function (events) {
        var separator = ' -> ';
        for (var ent in events) {
            var type = ent.split(separator)[0],
                selector = ent.split(separator)[1],
                handler = events[ent];

            $(selector).on(type, handler);
        }
    };

    return ProfileView;
});
