$(function () {
    'use strict';

    var email = 'info{arroba}brasseriedesartbahamar.com'.replace('{arroba}', '@');
    
    
    var Loading = {
        total: $('img').length,
        loaded: 0,
        init: function () {
            var $this = this;
            var logo = $('#logo');
            var top = ($('.container').height() - logo.height()) / 2;
            logo.css('top', top);
            
            $('img').each(function (index) {
                var img = new Image();
                img.src = $(this).attr('src');
                img.onload = function () {
                    $this.loaded++;
                    if ($this.loaded === $this.total - 1) {

                        setTimeout(function () {

                            $('body').addClass('active');

                            var delay = 2500;
                            var duration = 200;
                            $('.fade').each(function () {
                                var $this = $(this);
                                setTimeout(function () {
                                    $this.addClass('active');
                                }, delay);
                                delay += duration;
                            });

                        }, 1000);

                    }
                };
            });
        }

    };

    Loading.init();

    $('.email').attr('href', 'mailto:' + email).html(email);


});


