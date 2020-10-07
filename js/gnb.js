$(function(){
    var offHeight= $('.gnb').height();
    var onHeight = offHeight+300;
    var main = $('.gnb > ul > li > a'); 
    var sub =$('.gnb .sub');
    main.on('mouseenter',function(){
        $('.gnb').stop().animate({height:onHeight},'fast',function(){
            $(this).addClass('line');
            main.addClass('on');
            sub.stop().fadeIn('fast');
        })
    })
    $('.gnb').mouseleave(function(){
        $(this).removeClass('line');
        main.removeClass('on');
        sub.stop().fadeOut('fast',function(){
            $('.gnb').stop().animate({height:offHeight},'fast');
        });
        
    })
})