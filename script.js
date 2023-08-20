var menu = document.querySelector(".menu")
var menu_data = document.querySelector("#page1-left")
var menu_btn =  document.querySelector("#menu-btn")
var flag = 0
var page1_right = document.querySelector("#page1-right")
menu.addEventListener("click",function(){
    if(flag == 0 ){
        menu_data.style.display="none";
        menu_btn.style.display="block";
        flag = 1;
    }
    else{
        menu_data.style.display="block";
        menu_btn.style.display="none";
        flag = 0;
    }
})
page1_right.addEventListener("onmousemove",function(){
    menu_btn.style.width="-15vw";
})