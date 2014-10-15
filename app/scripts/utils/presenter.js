define([
    'jquery',
    'underscore'
], function ($, _) {
    'use strict';

    var Presenter = {
        show: function( container, $el, direction ) {
        	$( container ).animate( { right: "2000px" }, function() {
        		// $( container ).css( { "display": "none" } );
                $( container ).html( $el );
                $( container ).css( { "left": "-4000px", "right": "0px" , "display": "block" } );
                $( container ).animate( { left: "0px" }, "slow");
            });
    	}
	}

	return Presenter;

});