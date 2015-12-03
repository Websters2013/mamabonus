$(function(){

} );

var Shablon = function (obj) {
    this.obj = obj;


    this.init();
};
Shablon.prototype = {
    init: function () {
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function () {
        var self = this;

        return {
            addEvents: function () {

            },
            build: function () {
                self.core.addEvents();
            }
        };
    }
};

$(window).on({
    load: function () {
        
    }
});