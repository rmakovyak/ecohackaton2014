/*global define*/

define([
    'jquery',
    'backbone',
    'utils/presenter',
    'views/plant',
    'views/plants',
    'views/profile',
    'views/login',
    'collections/plants',
    'models/plant',
    'models/profile',
    'config/login-options'
], function ($, Backbone, Presenter, PlantView, PlantsView, ProfileView, LoginView, PlantsCollection, PlantModel, ProfileModel, LoginOptions) {

    'use strict';

    var MainRouter = Backbone.Router.extend({
        initialize: function(){
            
        },

        routes: {
            "": "plants",
            "plants": "plants",
            "plants/:id": "plant",
            "user/:id": 'profile'
        },

        plants: function() {
            var _this = this;

            // var checkLogin = function() {
            //     FB.getLoginStatus(function (response) {
            //         if (response.status === 'connected') {
                        _this.plantsCollection = new PlantsCollection();
                        _this.plantsView =  new PlantsView( { model: _this.plantsCollection } );

                        Presenter.show( $( ".container" ), _this.plantsView.el );

                        _this.plantsCollection.fetch();
            //         } else {
            //             _this.loginView = new LoginView({ model: LoginOptions });

            //             $( ".container" ).html( _this.loginView.render().el );
            //         }
            //     });
            // };

            // if (window['FB']) { checkLogin(); }

            // window.fbAsyncInit = function() {
            //     FB.init({
            //       appId      : '275327142665469',
            //       xfbml      : true,
            //       version    : 'v2.1'
            //     });

            //     checkLogin();
            // };
        },

        plant: function( id ) {
            this.plantModel =  new PlantModel( id );
            this.plantView =  new PlantView( { model: this.plantModel } );

            this.plantModel.set( "actionList", {} );
           
            Presenter.show( $( ".container" ), this.plantView.el );

            this.plantModel.fetch();
        },

        profile: function (id) {
            this.profileModel = new ProfileModel(id);
            this.profileView = new ProfileView({ model: this.profileModel });
    
            Presenter.show( $( ".container" ), this.profileView.el );

            // this.profileModel.fetch();
        }

    });


    return MainRouter;
});
