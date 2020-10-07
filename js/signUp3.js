$(function(){
    // 전체 동의 control
    $('input[name=allCh]').on('click', function() {
        if ($('input[name=allCh]').is(':checked')) { 
            $("input[type=radio][value='agree']").prop("checked", true);  
        } else {
            $("input[type=radio][value='agree']").prop("checked", false);  
        }
    });

    // 이용약관, 개인정보수집(필수), 개인정보수집(선택) checkbox control 
    $('input:radio').on('click', function() {
        if($('input[name=agree1]:checked').val()!='agree'||
            $('input[name=agree2]:checked').val()!='agree'||
            $('input[name=agree3]:checked').val()!='agree')
        {
            $('input[name=allCh]').prop("checked",false);
        }else if(
            $('input[name=agree1]:checked').val()=='agree'&&
            $('input[name=agree2]:checked').val()=='agree'&&
            $('input[name=agree3]:checked').val()=='agree')
        {
            $('input[name=allCh]').prop("checked",true);
        } 
    }); 
    
    $('#agreeNext').click(function() {
        var agr = document.agr;
        
        if($('input[name=agree1]:checked').val()!='agree'){
            alert("이용약관에 동의해야 합니다."); 
            return false; 
        }
        if($('input[name=agree2]:checked').val()!='agree'){
            alert("개인정보 수집 및 이용(필수)에 동의해야 합니다.");
            return false; 
        } 
        
        //개인정보 수집 및 이용(선택) 동의 시 컨트롤
        if($('input[name=agree3]:checked').val()=='Y'){
        $('input[name=infoCh]').val('agree');
        }else{
            $('input[name=infoCh]').val('disagree');
        } 
        location.href="signUp4.html"
        return false;
    });
   
})
