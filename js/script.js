AOS.init();

$('.counter').counterUp({
    delay: 10,
    time: 2000
});


// back to top

let scrollOffset=$('.work').offset().top

$(window).scroll(function(){
    let scrollTop=$(window).scrollTop()
    if(scrollTop>=scrollOffset){
        $('.btn-up').css('display','block')
    }else{
        $('.btn-up').css('display','none')
    }
})

$('.btn-up').click(function(){
    $('html,body').animate({scrollTop:0},1000)
})