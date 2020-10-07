$(function(){
    $('#skipNavi ul li a').on('focus',function(){
    if($(this).hasClass('on')){
        $(this).removeClass('on');
    }else{
        $(this).addClass('on');
    }
    })
    $('#skipNavi ul li a').focusout(function(){
        $(this).removeClass('on');
    })
})
