
window.onload= function(){
    var bannerLeft=0;
    var first=1;
    var last;
    var imgCnt=0
    var $img =$('.banner_slider ul li');
    var $first;
    var $last;

    $img.each(function(){
        $(this).css('left',bannerLeft);
        bannerLeft +=$(this).width()+15;//포지션지정된 이미지들을 15px간격으로 배치
        $(this).attr('id','banner'+(++imgCnt));//이미지에 id 속성 추가
        });
    //이미지가 6개 이상히면 이동시킴
    if(imgCnt > 4){
        last =imgCnt;//이미지 마지막 넘버
        
        setInterval(function(){
            $img.each(function(){
                $(this).css('left',$(this).position().left-1);//왼쪽으로 -1px 이동
            });
            $first = $('#banner'+first);//첫번째 이미지
            $last = $('#banner'+last);//마지막 이미지
            if($first.position().left < -250){
                $first.css('left',$last.position().left + $last.width()+15);// 첫번째 이미지가 왼쪽으로 -150이상 이동하면 마지막 이미지의 뒤에 포지션으로 이동
                first++;//다음이미지 첫번째로 지정
                last++;//뒤로 보내진 이미지 마지막 넘버로 지정
                if(last > imgCnt){last=1}
                if(first > imgCnt){first=1}
            }
        },30)
    }
}
