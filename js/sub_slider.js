$(function () {
    var index = 0;
    var slide_nbr = 3;
    var playOn = false;
    var subSlide = $('.sub_slider ul');
    var right = $('.controlBox .sub_right');
    var left = $('.controlBox .sub_left');
    var stop = $('.controlBox .sub_stop');

    subSlide.append('<li><a href="#"><img src="images/m_visual2.png" alt="sub_visual1"></a></li>');
    /*슬라이더의 넓이 지정*/
    /*right*/
    right.click(function () {
        off();
        index++;
        if (index >= slide_nbr) {
            subSlide.animate({ left: '-' + (index * 100) + '%' }, 'fast', function () {
                $(this).css('left', '0%');
            })
            index = 0;
        } else {
            subSlide.animate({ left: '-' + (index * 100) + '%' }, 'fast');
        }
        on();
        return false;
    })
    /*left*/
    left.click(function () {
        off();
        index--;
        if (index < 0) {
            subSlide.css('left', '-' + (slide_nbr * 100) + '%');
            index = slide_nbr - 1;
            subSlide.animate({ left: '-' + (index * 100) + '%' }, 'fast');
        } else {
            subSlide.animate({ left: '-' + (index * 100) + '%' }, 'fast');
        }
        on();
        return false;
    })
    // 자동 플레이 on
    function on() {
        if (!playOn) {
            playOn = true;
            stop.find('img').attr('src', stop.find('img').attr('src').replace('play', 'stop'));
            roll = setInterval(function () {
                right.click();
            }, 4000)
        }
    }
    //자동플레이 off
    function off() {
        if (playOn) {
            playOn = false;
            stop.find('img').attr('src', stop.find('img').attr('src').replace('stop', 'play'));
            clearInterval(roll);
        }
    }
    //자동플레이 토글 버튼
    stop.click(function () {
        if (!playOn) {
            on();
            return false;
        } else if (playOn) {
            off();
            return false;
        }
    })
})