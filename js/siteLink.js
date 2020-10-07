$(function(){
    var lth=$('.custom-select dd').length;
    var cSelect=$('.custom-select dt');
    var cOption=$('.custom-select dd');
    cSelect.on('click',function(){
            console.log(lth)
            if(cSelect.hasClass('open')){
                cSelect.removeClass('open');
                cOption.css({display:'none'}).animate({top:'-37px'},'fast')     
            }else{
                cSelect.addClass('open');
                for(var i=0;i<lth;i++){
                    cOption.eq(i).css({display:'block',opacity:'0'}).animate({opacity:1,top:'-='+i*37+'px'},'fast')
                }   
            }  

        return false
    })
})