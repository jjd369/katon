$(function(){
    var index=0;
    var controller=$('.controls a');
    var right=$('.main_slider a.right');
    var left=$('.main_slider a.left')
    /*컨트롤러*/
    controller.click(function(){
        index= $(this).index();
        $('#visual .main_slider ul li').hide();
        $('#visual .main_slider ul li').eq(index).stop().css({display:'block',opacity:0}).animate({opacity:1},'fast');
        controller.removeClass('active');
        $(this).addClass('active');
    })

    /*left*/
    left.click(function(){
        index--;
        if(index<0){
            index = controller.length-1;
        }
        controller.eq(index).click();
        return false;
    })
    /*right*/
    right.click(function(){
         index++;
         if(index>controller.length-1){
             index=0
         }
         controller.eq(index).click();
         return false;
     })
     /*자동 슬라이드 설정*/
     var timer = setInterval(function(){
         right.click()
     },4000)
})