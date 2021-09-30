var slidePage=document.querySelector(".slidepage");
var firstNextBtn=document.querySelector(".nextBtn");
var prevBtnSec=document.querySelector(".prev-1 ");
var nextBtnSec=document.querySelector(".next-1");
var prevBtnThird=document.querySelector(".prev-2 ");
var nextBtnThird=document.querySelector(".next-2");
var prevBtnFourth=document.querySelector(".prev-3 ");
var submitBtn=document.querySelector(".submit");
var progressText=document.querySelectorAll(".step p");
var progressCheck=document.querySelectorAll(".step .check");
var bullet=document.querySelectorAll(".step .bullet");
var current=0;

firstNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft="-25%";
    bullet[current].classList.add("active");
    progressText[current].classList.add("active");
    progressCheck[current].classList.add("active");
    current+=1;
});
nextBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft="-50%";
    bullet[current].classList.add("active");
    progressText[current].classList.add("active");

    progressCheck[current].classList.add("active");
    current+=1;
});
nextBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft="-75%";
    bullet[current].classList.add("active");
    progressText[current].classList.add("active");

    progressCheck[current].classList.add("active");
    current+=1;
});
submitBtn.addEventListener("click", function(){
    
    bullet[current].classList.add("active");
    progressText[current].classList.add("active");

    progressCheck[current].classList.add("active");
    current+=1;
    setTimeout(function(){
        alert("You're Successfully Registered");
        location.reload();
    },1000);
});
prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft="0%";
    
    bullet[current-1].classList.remove("active");
    progressText[current-1].classList.remove("active");

    progressCheck[current-1].classList.remove("active");
    current-=1;
});
prevBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft="-25%";
    
    bullet[current-1].classList.remove("active");
    progressText[current-1].classList.remove("active");

    progressCheck[current-1].classList.remove("active");
    current-=1;
});
prevBtnFourth.addEventListener("click", function(){
    slidePage.style.marginLeft="-50%";
    
    bullet[current-1].classList.remove("active");
    progressText[current-1].classList.remove("active");

    progressCheck[current-1].classList.remove("active");
    current-=1;
});






