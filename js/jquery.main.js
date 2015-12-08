$(function(){

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

    $(window).on({
        'load':function(){
            if($(window).width() >= 900){
                $('.menu-to-aside').clone().appendTo(".site__aside");
                $('.menu-to-aside').addClass('aside__layout');
                $('.menu-to-aside').removeClass('menu-to-aside');
                contentHeight()
            }
        },
        'resize':function(){
            if($(window).width() >= 900){
                $('.menu-to-aside').clone().appendTo(".site__aside");
                $('.menu-to-aside').addClass('aside__layout');
                $('.menu-to-aside').removeClass('menu-to-aside');
                contentHeight()
            }
        }
    });

    function contentHeight() {
        if ($('.aside__layout').length) {
            if ($('.site__content').outerHeight() <  $('.aside__layout').outerHeight()) {
                var elemHeight = $('.aside__layout').outerHeight() + 160;
                $('.site__content').css({
                    height: elemHeight
                });
            }
        }
    }

} );

var subMenu = function (obj) {
    //private properties
    var _obj = obj,
        _site = $('.site'),
        _btn = _obj.children('a'),
        _sub = _obj.children('ul'),
        _window = $(window),
        _windowWidth = $(window).width();

    //private methods
    var _addEvents = function () {

            _windowWidth = $(window).width();

            _window.on({
                resize: function () {
                    if(_windowWidth<=749){
                        //$('.header__menu li').removeClass('active');
                        //$('.header__menu li ul').css('display','none');
                        _sub.css('display','block');
                    }
                }
            });

            _btn.on({
                click: function () {
                    if(_windowWidth<=749) {
                        if (_obj.hasClass('mobile-active')) {
                            _sub.slideUp(500);
                            _obj.removeClass('mobile-active');
                        } else {
                            $('.menu li').removeClass('mobile-active');
                            $('.menu li ul').slideUp(500);
                            $(this).parent('li').addClass('mobile-active');
                            _sub.slideDown(500);
                        }
                        return false
                    }
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