$(function(){
  // tabs

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {//el은 단지 식별자일 뿐이고 그것은 요소, 즉 DOM 요소를 가리키는데, 그것은 그 라이브러리의 규약이다.
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;//버튼의 data- "contry"의 속성값을 가져온다

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
      el.classList.add("none");
   });

   document.querySelector("." + country).classList.add("active");
   
   btnTarget.classList.add("active");
   btnTarget.classList.remove("none");
}
})

$(function(){
   $('.tabcontent .buttonBox .loginBtn').click(function(){
      if(login.ids.value==0){
         alert('아이디를 입력해주세요');
         login.ids.focus();
         return false
      }
      if(login.pws.value==0){
         alert('비밀번호를 입력해주세요');
         login.ids.focus();
         return false
      }
      if(!login.ids.value==0 || !login.pws.value==0){
         location.href="index.html"
      }
   })                  
})