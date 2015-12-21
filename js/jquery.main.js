$(function(){

    $(window).on({
        'load':function(){
            if($(window).width() >= 900){
                contentHeight()
            }
        },
        'resize':function(){
            if($(window).width() >= 900){
                contentHeight()
            }
        }
    });

    $('.tabs').each(function () {
        Slider($(this));
    });

    $('.sub-menu').each(function () {
        subMenu($(this));
    });

    $('.menu__btn').on({
        'click':function(){
            var curElem = $(this).parent();

            if (curElem.hasClass('active')) {
                curElem.removeClass('active');
            } else {
                curElem.addClass('active');
            }

        }
    });

    $.each( $('.casino-review__rating-wrap'), function(){
        new Rating( $(this) );
    } );

    $('.mama-metr__value').each(function(){
        var element_parent = $(this),
            element_child = element_parent.children('div'),
            element_parent_width = element_parent.width(),
            element_child_width = element_child.width();

        var element_width = (element_child_width / element_parent_width) * 100;

        if (element_width <= 20) {
            element_child.addClass('grey');
        }
        else if (element_width > 20 && element_width <= 60) {
            element_child.addClass('blue');
        }
        else if (element_width > 40 && element_width <= 100) {
            element_child.addClass('red');
        }
    });

    function contentHeight() {
        if ($('.menu__aside').length) {
            if ($('.site__content').outerHeight() <  $('.menu__aside').outerHeight()) {
                var elemHeight = $('.menu__aside').outerHeight() + 160;
                $('.site__content').css({
                    'min-height': elemHeight
                });
            }
        }
    }

} );

var Slider = function (obj) {

    //private properties
    var _self = this,
        _next = obj.find($('.swiper-button-next')),
        _prev = obj.find($('.swiper-button-prev')),
        _window = $(window),
        _windowWidth = $(window).width(),
        _swiper = null,
        _obj = obj;


    //private methods
    var _addEvents = function () {

        },
        _init = function () {
            _addEvents();
        };
    if (_obj.hasClass('tabs')){
        _window.on({
            load: function () {
                if (_windowWidth <= 750) {
                    _swiper = new Swiper(_obj, {
                        slidesPerView: 'auto',
                        loopedSlides: 40,
                        loop: true,
                        paginationClickable: true,
                        nextButton: _next,
                        prevButton: _prev
                    });
                }
            },
            resize: function () {
                _windowWidth = $(window).width();
                console.log(_windowWidth);
                if (_windowWidth <= 750) {
                    if(_swiper===null)
                        _swiper = new Swiper(_obj, {
                            slidesPerView: 'auto',
                            loopedSlides: 40,
                            loop: true,
                            paginationClickable: true,
                            nextButton: _next,
                            prevButton: _prev
                        });
                } else {
                    if(_swiper!==null){
                        _swiper.destroy(false,true);
                        _swiper = null;
                    }
                }
            }

        })
    }
    //public properties

    //public methods

    _init();
};

var subMenu = function (obj) {
    //private properties
    var _obj = obj,
        _btn = _obj.children('a'),
        _sub = _obj.children('ul');

    //private methods
    var _addEvents = function () {
            _btn.on({
                click: function () {
                    if (_obj.hasClass('active')) {
                        _sub.slideUp(500);
                        _obj.removeClass('active');
                    } else {
                        $('.menu__aside dd').removeClass('active');
                        $('.menu__aside ul').slideUp(500);
                        $(this).parent('dd').addClass('active');
                        _sub.slideDown(500);
                    }
                    return false
                }
            });
        },
        _init = function () {
            _addEvents();
        };
    //public properties

    //public methods

    _init();
};

var Rating = function (obj) {

    var _obj = obj,
        _itemRate = _obj.find('.casino-review__rating div'),
        _hiddenInput = _obj.find('input[type="hidden"]');

    var _addEvents = function () {

            _itemRate.on({
                'click': function(){
                    var curItem = $(this),
                        dataRate = curItem.attr('data-rate'),
                        prevElems = curItem.prevAll('div');

                    _itemRate.removeClass('active');
                    prevElems.addClass('active');
                    curItem.addClass('active');
                    _hiddenInput.val(dataRate);
                    _addClassObj();
                }
            });

        },
        _addClassObj = function(){
            if(_hiddenInput.val()<=2){
                _obj.addClass('grey_rating');
                _obj.removeClass('blue_rating');
                _obj.removeClass('red_rating');
            }else if (_hiddenInput.val()>2&& _hiddenInput.val()<=6){
                _obj.addClass('blue_rating');
                _obj.removeClass('grey_rating');
                _obj.removeClass('red_rating');
            }
            else if (_hiddenInput.val()>6&& _hiddenInput.val()<=10){
                _obj.addClass('red_rating');
                _obj.removeClass('grey_rating');
                _obj.removeClass('blue_rating');
            }
        },
        _init = function () {
            _addEvents();
        };

    _init();
};
