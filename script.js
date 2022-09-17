$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show"); 
        }
    })
});

$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0})
}); 



var typed = new Typed(".typing",{
    strings : [" Programmer"," Web Developer" , " CS Student" , " Java Developer", " Python Developer"],
    typeSpeed:60,
    backSpeed:40,
    loop: true
});

var typed = new Typed(".typing-2",{
    strings : [" Programmer"," Web Developer" , " CS Student" , " Java Developer", " Python Developer"],
    typeSpeed:60,
    backSpeed:40,
    loop: true
});