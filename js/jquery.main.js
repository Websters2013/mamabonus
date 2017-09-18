( function(){

    "use strict";

    $( function(){

        new SearchPanel ( $( '#search' ) );

        if ( $( '.filter' ).length == 1 ){
            new Filter( $( '.filter' ) );
        };

        $.each( $('.search-result__wrap'), function () {
            new PageSearchResult( $(this) );
        } );

    } );

    var SearchPanel = function( obj ) {

        //private properties
        var _obj = obj,
            _btnShowMobile = _obj.find( '#search__btn-open' ),
            _searchForm = _obj.find( '#search__form' ),
            _searchInput = _obj.find( 'input' ),
            _btnCancel = _obj.find( '#search__btn-cancel' ),
            _html = $( 'html' ),
            _body = $( 'body' ),
            _site = $( '.site' ),
            _window = $( window ),
            _loadNewContent = true,
            _request = new XMLHttpRequest();

        //private methods
        var _onEvent = function() {

                _window.on (
                    'resize', function () {

                        if ( _body.width() < 1200 ){

                            var searchPopup = _obj.find( '#search__popup' );

                            searchPopup.css( {
                                'left': _btnShowMobile.offset().left * -1 + 10,
                                'width': _body.outerWidth() - 20
                            } );

                        }

                    }
                );

                _site.on(
                    'click', function ( e ) {

                        if ( _searchForm.hasClass( 'show' ) && $( e.target ).closest( _obj ).length == 0 && _body.width() < 1200 ){
                            _hidePanelOnMobile();
                            _searchForm[0].reset();
                        } else if ( $( '#search__popup' ).hasClass( 'show' ) && $( e.target ).closest( _obj ).length == 0 && _body.width() >= 1200 ){
                            _reduceSearch();
                            _searchForm[0].reset();
                        }

                    }
                );

                _btnShowMobile.on (
                    'click', function () {
                        _showPanelOnMobile();
                        return false;
                    }
                );

                _btnCancel.on (
                    'click', function () {

                        if ( _body.width() < 1200 ) {
                            _hidePanelOnMobile();
                        } else if ( _body.width() >= 1200 ) {
                            _reduceSearch();
                        }

                        _searchForm[0].reset();

                        return false;
                    }
                );

                _searchInput.on ( {
                    'focus': function () {

                        _ajaxRequest();

                    },
                    'keyup': function( e ) {
                        if( e.keyCode == 27 ){

                        } else if( e.keyCode == 40 ){

                        } else if( e.keyCode == 38 ){

                        } else if ( e.keyCode == 13 ) {

                        } else {

                            var searchPopup = _obj.find( '#search__popup' );
                            searchPopup.addClass( 'load' );
                            _ajaxRequest();
                        }
                    }
                } );

            },
            _ajaxRequest = function(){

                _request = $.ajax( {
                    url: 'http://demo.websters.com.ua/mama/php/header-search.php',
                    data: {
                        value: _searchInput.val(),
                        loadedCount: _searchInput.val().length
                    },
                    dataType: 'html',
                    type: 'GET',
                    success: function ( data ) {

                        _loadData( data );

                    },
                    error: function ( XMLHttpRequest ) {
                        if ( XMLHttpRequest.statusText != "abort" ) {
                            console.log( 'err' );
                        }
                    }
                } );

            },
            _increaseSearch = function () {

                var searchPopup = _obj.find( '#search__popup' );

                _searchForm.addClass( 'increase' );

                searchPopup.addClass( 'show' );
                searchPopup.removeClass( 'load' );

            },
            _reduceSearch = function () {

                var searchPopup = _obj.find( '#search__popup' );

                searchPopup.removeClass( 'show' );

                setTimeout( function () {
                    _searchForm.removeClass( 'increase' );
                }, 300 );

            },
            _showPopup = function () {

                var searchPopup = _obj.find( '#search__popup' );

                _html.css( 'overflow-y', 'hidden' );

                searchPopup.addClass( 'show' );

                searchPopup.css( {
                    'left': _btnShowMobile.offset().left * -1,
                    'width': _body.outerWidth()
                } );

                searchPopup.removeClass( 'load' );

            },
            _hidePopup = function () {

                var searchPopup = _obj.find( '#search__popup' );

                _html.removeAttr( 'style' );

                searchPopup.remove( );

                _loadNewContent = true;

            },
            _searchMoreLink = function () {

                var searchPopup = _obj.find( '#search__popup' ),
                    searchLinksResults =  searchPopup.find( '#search__popup-links' );

                if ( _searchInput.val().length > 0 ) {
                    searchLinksResults.find( 'span' ).html( _searchInput.val() );
                };

            },
            _showPanelOnMobile = function () {

                _searchForm.addClass( 'show' );
                _searchForm.css( {
                    'width': _body.outerWidth()
                } );

            },
            _hidePanelOnMobile = function () {

                _searchForm.css( {
                    'width': 0
                } );
                _searchForm.removeClass( 'show' );

                _hidePopup();

            },
            _showPanel = function ( onEvent ) {

                _searchForm.addClass( 'show' );

                if ( _body.width() < 1200 ) {
                    _searchForm.css( {
                        'width': _body.outerWidth()
                    } );
                } else if ( _body.width() >= 1200 ) {
                    _searchForm.addClass( 'increase' );
                }

                if ( onEvent != 0 ){

                    setTimeout( function () {
                        _searchInput.focus();
                    }, 300 )

                }

            },
            _loadData = function ( data ) {

                var arr = data;

                if ( _loadNewContent ){

                    _obj.append( '<div id="search__popup" class="load"><div id="search__preload"><div id="search__preload-element"></div></div></div>' )

                    var searchPopup = _obj.find( '#search__popup' );

                    searchPopup.prepend( arr );
                    _loadNewContent = false;

                } else {

                    var searchPopup = _obj.find( '#search__popup' );

                    searchPopup.empty();
                    searchPopup.addClass( 'more' );
                    searchPopup.append( '<div id="search__preload"><div id="search__preload-element"></div></div>' );
                    searchPopup.prepend( arr );

                }

                _illumination();
                _searchMoreLink();

                if (_body.width() < 1200) {
                    _showPopup();
                } else if (_body.width() >= 1200) {
                    _increaseSearch();
                }

            },
            _illumination = function () {

                var searchItems = _obj.find( '.search__popup-item i' );

                searchItems.each( function () {

                    $( this ).html(function( _, html ) {
                        return html.replace( new RegExp( _searchInput.val().toLowerCase(), 'i\g' ), '<b>$&</b>' )
                    } );

                } );

            },
            _checkShow = function () {

                if ( _searchForm.hasClass( 'show' ) ){
                    _showPanel( 0 );

                    var popup = _obj.find( '#search__popup' );

                    if ( popup.hasClass( 'show' ) ){
                        _showPopup();
                    }

                }

            },
            _init = function() {
                _checkShow();
                _onEvent();
            };

        //public properties

        //public methods

        _init();
    };

    var PageSearchResult = function( obj ) {

        //private properties
        var _obj = obj,
            _btnForShow = _obj.find( '.search-result__more' ),
            _frame = _obj.find( '.search-result__frame' ),
            _viewNum = 5;

        //private methods
        var _onEvent = function() {

                _btnForShow.on( 'click', function () {

                    var curBtn = $( this );

                    if ( curBtn.hasClass( 'hide-links' ) ){
                        _showLessLinks( curBtn );
                    } else{
                        _showMoreLinks( curBtn );
                    }

                    return false;

                } );

            },
            _showMoreLinks = function ( object ) {

                var curBtn = object,
                    curBtnText = curBtn.find( 'span' ),
                    curLinksWrap = curBtn.prev( '.search-result__frame' ),
                    curWrapLinks = curLinksWrap.find( '.search-result__item' ),
                    curLinksWrapHeight = curLinksWrap.find( 'div' ).outerHeight();

                curBtn.addClass( 'hide-links' );
                curBtnText.html( 'Show Less' );

                curLinksWrap.css( 'height', curLinksWrapHeight );

            },
            _showLessLinks = function ( object ) {

                if ( object.length > 0 ){

                    var curBtn = object;

                    _frame = curBtn.prev( '.search-result__frame' );

                    curBtn.removeClass( 'hide-links' );

                }

                _frame.each( function () {
                    var curFrame = $( this ),
                        curWrapLinks = curFrame.find( '.search-result__item' ),
                        curHeight = 0,
                        curBtn = curFrame.next( '.search-result__more' ),
                        curBtnText = curBtn.find( 'span' );

                    for ( var i = 0; i < _viewNum; i++ ){

                        curHeight = curHeight + curWrapLinks.eq( i ).outerHeight();

                    }

                    for ( i = _viewNum; i < curWrapLinks.length; i++ ){

                        curWrapLinks.eq( i ).addClass( 'hide' );

                    }

                    curBtnText.html( 'Show '+ ( curWrapLinks.length - _viewNum ) +' More' );
                    curFrame.css( 'height', curHeight );

                } );

            },
            _construct = function() {
                _showLessLinks( 0 );
                _onEvent();
            };

        //public properties

        //public methods

        _construct();
    };

    var Filter = function( obj ) {

        //private properties
        var _obj = obj,
            _input = _obj.find( 'input' ),
            _siteCasinoWrap = $( '.site__content-wrap' ),
            _request = new XMLHttpRequest(),
            _collectionArr = {};

        //private methods
        var _onEvent = function() {

                _input.on( 'change', function () {
                    _emptyBox();
                } )

            },
            _emptyBox = function () {

                _siteCasinoWrap.addClass( 'load' );
                _siteCasinoWrap.html( '<div id="preload"><div id="preload-element"></div></div>' )
                _ajaxRequest();

            },
            _dataCollection = function () {

                var arr = [];

                _collectionArr = {};

                var filterCheckbox = _obj.find( 'input[type=checkbox]' ),
                    sortBy = _obj.find( 'input[type=radio]:checked' );

                _collectionArr['sort'] = sortBy.val();

                if ( filterCheckbox.is( ':checked' ) ){
                    _collectionArr['filter'] = filterCheckbox.val();
                }

                return JSON.stringify( _collectionArr );

            },
            _ajaxRequest = function(){

                _request = $.ajax( {
                    url: 'http://demo.websters.com.ua/mama/php/bonus-content.php',
                    data: {
                        filter: _dataCollection()
                    },
                    dataType: 'html',
                    type: 'GET',
                    success: function ( data ) {

                        _loadData( data );

                    },
                    error: function ( XMLHttpRequest ) {
                        if ( XMLHttpRequest.statusText != "abort" ) {
                            console.log( 'err' );
                        }
                    }
                } );

            },
            _addNewItems = function ( data ) {

                var content = data;

                _siteCasinoWrap.html( content );

                var newItem = _siteCasinoWrap.find( '.new' );

                newItem.each( function ( i ) {

                    var curItem = $( this );

                    _showNewItems( curItem, i );

                } );

            },
            _showNewItems = function ( item, index ) {

                var curItem = item;

                setTimeout( function() {

                    curItem.removeClass( 'new' );
                }, 50 * index );

            },
            _loadData = function ( data ) {

                _siteCasinoWrap.removeClass( 'load' );

                var data = JSON.parse( data ),
                    content = data.html;

                _addNewItems( content );

                var reset = _siteCasinoWrap.find( '#site-result__reset' );

                reset.on( 'click', function () {
                    _obj[0].reset();
                    _emptyBox();
                } )

            },
            _init = function() {
                _onEvent();
                _emptyBox();
            };

        //public properties

        //public methods

        _init();
    };

} )();