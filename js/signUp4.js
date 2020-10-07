function signUp4(){
    var re = /^[a-zA-Z0-9]{4,12}$/ // 아이디와 패스워드가 적합한지 검사할 정규식
    var re2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    var re3 = /^@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // 이메일이 적합한지 검사할 정규식

    var id = document.getElementById("ids");
    var pw = document.getElementById("pws");
    var email = document.getElementById("email");
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");

      // ------------ 아이디확인 -----------
    if(join.ids.value==""){
        alert("아이디를 입력해주세요.");
        join.ids.value= "";
        join.ids.focus();
        return false;
    }
    if(!check(re,id,"아이디는 4~12자의 영문 대소문자와 숫자로만 입력")) {
        return false;
    }
    // ------------ 비밀번호 확인 -----------
    if(join.pws.value==""){
        alert("비밀번호를 입력해주세요.");
        join.pws.value= "";
        join.pws.focus();
        return false;
    }
    if(!check(re,pw,"패스워드는 4~12자의 영문 대소문자와 숫자로만 입력")) {
        return false;
    }
    if(join.pwsCh.value==""){
        alert("비밀번호 확인에 입력해주세요.");
        join.pwsCh.value= "";
        join.pwsCh.focus();
        return false;
    }
    if(join.pws.value != join.pwsCh.value) {
        alert("비밀번호가 다릅니다. 다시 확인해 주세요.");
        join.pwsCh.value = "";
        join.pwsCh.focus();
        return false;
    }
    // ------------ 이메일확인 -----------
    if(join.email.value=="") {
        alert("이메일을 입력해 주세요");
        email.focus();
        return false;
    }
    location.href="signUp5.html"
    }
    function check(re, what, message) {
        if(re.test(what.value)) {
            return true;
        }
        alert(message);
        what.value = "";
        what.focus();
        return false;
    }
// ------------ 이메일선택 -----------
function emailSelect(){
    var sel = document.getElementById("emailCh");
    var val; 
        for (var i=0;i<sel.options.length;i++){
            if(sel.options[i].selected==true){
                val=sel.options[i].value;
                join.email2.value=val;
            }
        }    
}