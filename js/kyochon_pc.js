$(function(){
    // 메뉴 스크롤발생 시
    $(window).scroll(function(){
        var scrollTop=$(this).scrollTop();
        if(scrollTop>200){
            $('.gnb').addClass('scroll');
        }else{
            $('.gnb').removeClass('scroll');
        }
    })


    // 공지사항롤링
    function move(){
        $('.notice_area ul li').first().slideUp(function(){
            $(this).appendTo('.notice_area ul').show();
        });
    }
    var play=setInterval(move, 2000);
    $('.notice_area ul').on({
        mouseenter:function(){
            clearInterval(play);
        },
        mouseleave:function(){
            play=setInterval(move, 2000);
        }
    })

    // 메인슬라이드1
    var swiper = new Swiper('.slide1.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        },
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },        
    });

    $('.slide1').on({
        mouseenter:function(){
            swiper.autoplay.stop();
        },
        mouseleave:function(){
            swiper.autoplay.start();
        }
    })



    // 메인슬라이드2
    pagename=['교촌CF','brand소개','교촌은 이런 치킨입니다.']

    var swiper2 = new Swiper('.slide2 .swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"><span>' + pagename[index] + '</span></span>';
          },
        },
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
    });

    $('.slide2 img').on({
        mouseenter:function(){
            swiper2.autoplay.stop();
        },
        mouseleave:function(){
            swiper2.autoplay.start();
        }
    });



    // 로그인 팝업
    $('header .login').click(function(){
        $('.popup-login').show();
    })

    $('.popup-login .close').click(function(){
        $('.popup-login').hide();
    })

    // 상세메뉴 팝업
    $('.best5 a').click(function(e){
        e.preventDefault();
        $('.popup-details').show();
        var imgSource=$(this).prev('img').attr('src');
        var info=$(this).prev('img').attr('alt');
        var title=$(this).find('dt').text();
        var price=$(this).find('dd').text();
        $('.popup-details dt').text(title);
        $('.popup-details-img img').attr('src', imgSource);
        $('.popup-details .popup-details-img dd').text(info);
        $('.popup-details .price b').text(price);
        
    })

    $('.popup-details .close').click(function(e){
        e.preventDefault();
        $('.popup-details').hide();
    })

    $('.popup-details button.nutrient').click(function(){
        $(this).children('i').toggleClass('fas fa-caret-down fas fa-caret-up');
        $('.nutrient-tooltip').fadeToggle();
    })

    $('.popup-details button.allergie').click(function(){
        $('.allergie-tooltip').fadeToggle();
        $(this).children('i').toggleClass('fas fa-caret-down fas fa-caret-up');
    })

    $('.popup-details button.orderable').click(function(){
        $('.orderable b').fadeToggle();
        $(this).children('i').toggleClass('fas fa-caret-down fas fa-caret-up');
    })

})