$(function(){

    $(window).on({
        'load':function(){
            var element_parent=$('.casino-bonus__game-metr'),
                element_child=element_parent.children('div'),
                element_parent_width=element_parent.width(),
                element_child_width=element_child.width();


            var element_width=(element_child_width/element_parent_width)*100;

        if (element_width<=20){
            element_child.addClass('grey');
        }

        else if (element_width>20&& element_width<=60){
            element_child.addClass('blue');
        }

        else if (element_width>40&& element_width<=100){
            element_child.addClass('red');
        }
    }

        });

} );
