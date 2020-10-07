$(function(){
    $('.searchBox > a').on('click focus',function(){
        if($('.search_layer_open').hasClass('on')){
            $('.search_layer_open').removeClass('on');
            $('.search_layer_close').addClass('on');
            $('.searchBox .search_layer').slideToggle();
        }else{
            $('.search_layer_open').addClass('on');
            $('.search_layer_close').removeClass('on');
            $('.searchBox .search_layer').slideToggle();
        }
    })
})