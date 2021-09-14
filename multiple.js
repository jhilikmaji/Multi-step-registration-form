const slidePage=document.querySelector(".slidepage");
const firstNextBtn=document.querySelector(".nextBtn");
const prevBtnSec=document.querySelector(".prev-1 ");
const nextBtnSec=document.querySelector(".next-1");
const prevBtnThird=document.querySelector(".prev-2 ");
const nextBtnThird=document.querySelector(".next-2");
const prevBtnFourth=document.querySelector(".prev-3 ");
const submitBtn=document.querySelector(".submit");
const progressText=document.querySelectorAll(".step p");
const progressCheck=document.querySelectorAll(".step .check");
const bullet=document.querySelectorAll(".step .bullet");
let max=4;
let current=1;

firstNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft="-25%";
    bullet[current-1].classList.add("active");
    progressText[current-1].classList.add("active");

    progressCheck[current-1].classList.add("active");
    current+=1;
});
nextBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft="-50%";
    bullet[current-1].classList.add("active");
    progressText[current-1].classList.add("active");

    progressCheck[current-1].classList.add("active");
    current+=1;
});
nextBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft="-75%";
    bullet[current-1].classList.add("active");
    progressText[current-1].classList.add("active");

    progressCheck[current-1].classList.add("active");
    current+=1;
});
submitBtn.addEventListener("click", function(){
    
    bullet[current-1].classList.add("active");
    progressText[current-1].classList.add("active");

    progressCheck[current-1].classList.add("active");
    current+=1;
    setTimeout(function(){
        alert("You're Successfully Registered");
        location.reload();
    },800);
});
prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft="0%";
    
    bullet[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");

    progressCheck[current-2].classList.remove("active");
    current-=1;
});
prevBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft="-25%";
    
    bullet[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");

    progressCheck[current-2].classList.remove("active");
    current-=1;
});
prevBtnFourth.addEventListener("click", function(){
    slidePage.style.marginLeft="-50%";
    
    bullet[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");

    progressCheck[current-2].classList.remove("active");
    current-=1;
});

$(function(){
    $("#name_error_message").hide();
    $("#date_error_message").hide();
    $("#gender_error_message").hide();
    $("#phone_error_message").hide();
    $("#email_error_message").hide();
   
    var error_name=false;
    var error_date=false;
    var error_gender=false;
    var error_phone=false;
    var error_email=false;


    //name validation
    $("#name").focusout(function(){check_name();});
    function check_name(){
        var pattern=/^[a-zA-Z]*$/;
        var name= $("#name").val();
        if(name!=='')
        {
            if(pattern.test(name)){
                $("#name_error_message").hide();
                $('#name').css("border","2px solid  #99ff99");
            }
            else{
                $("#name_error_message").html("Should contained only characters");
                $("#name_error_message").show();
                $('#name').css("border","2px solid rgb(133, 0, 0)");
                error_name=true;
            }
        }
        else
        {
            $("#name_error_message").html("This field must be filled");
            $("#name_error_message").show();
            $('#name').css("border","2px solid rgb(133, 0, 0)");
            error_name=true;
        }
        
    }
});

//date validation
$("#date").focusout(function(){check_date();});
function check_date(){
    var date=$("#date").val();
    if(date!='')
    {
        $("#date_error_message").hide();
        $('#date').css("border","2px solid  #99ff99");
    }
    else{
        $("#date_error_message").html("This field must be filled");
        $("#date_error_message").show();
        $('#date').css("border","2px solid rgb(133, 0, 0)");
        error_date=true;
    }
}

//gender validation
$("#gender").focusout(function(){check_gender();});
function check_gender(){
    var gender=$("#gender").val();
    //var option=$("#option1").val();
    var second=$("#option2").val();
    var third=$("#option3").val();
    var fourth=$("#option4").val();
    if((gender!=second)&&(gender!=third)&&(gender!=fourth))
    {
        $("#gender_error_message").html("This field must be filled");
        $("#gender_error_message").show();
        $('#gender').css("border","2px solid rgb(133, 0, 0)");
        error_gender=true;
    
    }
    else{
        $("#gender_error_message").hide();
        $('#gender').css("border","2px solid  #99ff99");
       
    }
}

//contact no validation
$("#phone").focusout(function(){check_phone();});
function check_phone(){
    var phone=$("#phone").val();
    if(phone!='')
    {
        $("#phone_error_message").hide();
        $('#phone').css("border","2px solid  #99ff99");
    }
    else{
        $("#phone_error_message").html("This field must be filled");
        $("#phone_error_message").show();
        $('#phone').css("border","2px solid rgb(133, 0, 0)");
        error_phone=true;
    
    }
}

//email validaton
$("#email").focusout(function(){check_email();});
function check_email(){
    var email=$("#email").val();
    if(email!='')
    {
        $("#email_error_message").hide();
        $('#email').css("border","2px solid  #99ff99");
    }
    else{
        $("#email_error_message").html("This field must be filled");
        $("#email_error_message").show();
        $('#email').css("border","2px solid rgb(133, 0, 0)");
        error_email=true;
    }
}


