$(document).ready(function() {

    $(document).click(function(e){
var e = e || window.event, 
x = e.srcElement || e.target;
if (x != $('.popup') && !$(x).parents(' .popup').size() ) {
$('.popup').fadeOut();
$('#overlay').remove('#overlay');
}
});

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplayTimeout: 12000,
    autoplay: true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$(function () {
    //script for popups
    $('a.show_popup').click(function () {
        $('div.'+$(this).attr("rel")).fadeIn(500);
        $("body").append("<div id='overlay'></div>");
        $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
        return false;               
    }); 
    $('a.close').click(function () {
        $(this).parent().fadeOut(100);
        $('#overlay').remove('#overlay');
        return false;
    });
    
    //script for tabs
    $("div.selectTabs").each(function () {
        var tmp = $(this);
        $(tmp).find(".lineTabs li").each(function (i) {
            $(tmp).find(".lineTabs li:eq("+i+") a").click(function(){
                var tab_id=i+1;
                $(tmp).find(".lineTabs li").removeClass("active");
                $(this).parent().addClass("active");
                $(tmp).find(".tab_content div").stop(false,false).hide();
                $(tmp).find(".tab"+tab_id).stop(false,false).fadeIn(300);
                return false;
            });
        });
    });
}); 


$(".navitor a").mPageScroll2id({
    offset : 50,
    speed : 200
});

$(".form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $(".form").trigger("reset");
           window.location.href = 'http://hd-led.by';
        });
        return false;
    });

}); 

jQuery(function($){
   $("#phone").mask("8-(999)-999-9999");
});