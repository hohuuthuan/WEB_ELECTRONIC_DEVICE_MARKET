$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text')
        }else{
            $(this).prev().attr('type', 'password')
        }
    });
});
$(document).ready(function(){
    $('#eye_mk').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text')
        }else{
            $(this).prev().attr('type', 'password')
        }
    });
});
$(document).ready(function(){
    $('#eye_nhaplaimk').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text')
        }else{
            $(this).prev().attr('type', 'password')
        }
    });
});

$(document).ready(function(){
    $('#bam').click(function(){
        alert('Hello bà dà nghèo khổ giữa trời đông cô đơn :))');
    })
});


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
        } else {
            $('#backtop').fadeOut();
        }
    });
    $('#backtop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 200);
    });
});