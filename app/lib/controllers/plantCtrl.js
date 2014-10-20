'use strict';

define([
    'utils/request',
    'views/plantView'
],function (request, PlantView) {

    var $ = Dom7;

    return {
        init: function (q) {
            $('.plant-header').text('');
            request.get('/plants/' + q.id, function (err, data) {
                if (err) { return console.log(err, data); }

                $('.plant-header').text(data.name);

                var plantView = new PlantView(data, [
                    {
                        name: 'greensad.com.ua',
                        link: 'http://greensad.com.ua/'
                    },
                    {
                        name: 'absolut-sad.com.ua',
                        link: 'http://absolut-sad.com.ua'
                    },
                    {
                        name: 'mariupol.zakupka.com',
                        link: 'http://mariupol.zakupka.com'
                    }
                ]);

                plantView.render();
                plantView.bindEvents({
                    'click -> .plant-action': function (id) {
                        // request.delete('/plants/' + id, function (err, data) {
                        //     if (err) { return console.log(err, data); }
                        // });

                        var $this = $(this),
                            $parent = $this.parent();

                        $this.addClass('loading');

                        setTimeout(function() {
                            $this.removeClass('loading');
                            $this.remove();

                            if (!$parent.find('li').length) {
                                $parent.parent()[0].className = 'content-block text-center';
                                $parent.parent().html('No actions required');
                            }

                            app.planter.alert('You\'ve just done some action!', 'Whoohooo!');
                        }, 1000);

                        console.log('Action has been done!');
                    }
                });
            });
        }
    };
});
