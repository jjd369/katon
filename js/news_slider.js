$(function(){
    var index=0;
    var playOn=false;
    var roll;
    var right = $('.con2 .list3 .news_controls1 .news_right');
    var left = $('.con2 .list3 .news_controls1 .news_left');
    var stop1 = $('.con2 .list3 .news_controls1 .news_stop');
    var pager = $('.con2 .list3 .news_controls2 a');
    function play(){
        if(!playOn){
            playOn=true;
            stop1.find('img').attr('src',stop1.find('img').attr('src').replace('play','stop'));
            roll=setInterval(function(){
                right.click();    
            },2000)
        }
    }
    function stop(){
        if(playOn){
            playOn=false;
            stop1.find('img').attr('src',stop1.find('img').attr('src').replace('stop','play'));
            clearInterval(roll);
        }
    }
    /*pager*/
    pager.click(function(){
        stop();
        index=$(this).index();
        $('.con2 .list3 .news_slider > div').hide();
        $('.con2 .list3 .news_slider > div').eq(index).show();
        pager.removeClass('on');
        $(this).addClass('on');
        play();
        
        return false;
    })
    /*left*/
    left.click(function(){
        index--;
        if(index<0){
            index= pager.length-1;
        }
        pager.eq(index).click();
        return false;
    })

    /*right*/
    right.click(function(){
        index++;
        if(index>pager.length-1){
            index=0;
        }
        pager.eq(index).click(); 
        return false;
       
    })

    stop1.click(function(){
        if(!playOn){
            play();
            playOn=true;
            return false;
        }else if(playOn){
            stop();
            playOn=false;    
            return false;
        }
    })
    right.eq(index).click()
})