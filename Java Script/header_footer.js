const menu_slider = document.querySelector('.button1');
let menu = document.querySelector('.hamburger1');
let check_box = document.querySelector('#menu1_check');

menu.addEventListener('click',() =>{
    if (check_box.checked){
        menu_slider.setAttribute('src','../Images/Slider/Forward.png');
    }
    else{
        menu_slider.setAttribute('src','../Images/Slider/Backward.png');
    }
})

window.addEventListener('scroll',function(){
    var menu2 = document.querySelector('.menu2');
    menu2.classList.toggle("sticky",window.scrollY>75);
})
window.addEventListener('scroll',function(){
    var home = document.querySelector('.menu2_item');
    home.classList.toggle("active",window.scrollY>75);
})


function button2(){
    document.getElementById("hamburger2").classList.toggle("han");
}



