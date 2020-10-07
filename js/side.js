$(function () {
    $('.snb_btn').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('on')) {
            slideUp();//on이 되어있으면 슬라이드업
        } else {
            slideUp();//슬라이드 초기화
            $(this).addClass('on').next('ul').slideDown("fast");//현재클릭한 슬라이드 다운
        }
        function slideUp() {
            $('.snb > ul > li > a').removeClass('on').next('ul').slideUp();//슬라이드업 함수에 클래스on 값 초기화 설정
        };

    })
    $('.sub_snb > li').mouseenter(function () {
        $('.sub_snb > li').removeClass('on');
        $(this).addClass('on');
    })
    $('.sub_snb > li').mouseleave(function () {
        $(this).removeClass('on');
    })
})