/**
 * Created by lianglong on 15/12/31.
 */
(function(){
    var menuBt = $(".menuBt"),
        menuBtSpan = $(".menuBt span"),
        menuBt1 = $(".menuBt1"),
        menuBt2 = $(".menuBt2"),
        menuBt3 = $(".menuBt3"),
        navLast = $(".navLast"),
        navLi = $(".nav li"),
        nav = $(".nav"),
        downArrow = $(".downArrow"),
        all = $(".all"),
        body = $("body"),
        themeBox = $(".themeBox"),
        recommendBox = $(".recommendBox"),
        recommendCover = $(".recommendCover"),
        recommendDescribeP = $(".recommendDescribe p"),
        recommendRight = $(".recommendRight"),
        recommendRightLi = $(".recommendRight ul li"),
        essayListLi = $(".essayList li"),
        blogListLi = $(".blogList li"),
        navUlLi = $(".nav ul li");


    var menuBtHasClick = false,
        hasScroll = false,
        tl = new TimelineLite(),
        th = new TimelineLite();

    var setTime = null;



    all.height($(window).height());
    recommendBox.height(recommendBox.width()*0.35);
    recommendRight.height(recommendBox.width()*0.35);

    recommendRightLi.each(function(index){
        if(index%2!=0){
            $(this).css("margin","0");
        }
    });

    essayListLi.height(essayListLi.width()*0.8);
    blogListLi.height(blogListLi.width()*1.4);

    menuBt.hover(function(){
        menuBtSpan.addClass("menuBtSpan");
    },function(){
        if(!menuBtHasClick){
            menuBtSpan.removeClass("menuBtSpan");
        }
    });

    tl.staggerTo(navLi,0.2,{opacity:"1",top:0,ease:Back.easeIn},0.1);
    th.staggerTo(recommendDescribeP,0.3,{opacity:"1",top:0},0.07);
    th.reverse();

    menuBt.click(function(){
        if(!menuBtHasClick){
            menuBt1.css({
                "transform":"rotate(45deg)"
            });
            menuBt2.css("opacity","0");
            menuBt3.css({
                "transform":"rotate(-45deg)"
            });
            if(hasScroll){
                menuBt.css("background-color","transparent");
            }
            nav.fadeIn();
            tl.restart();
            themeBox.addClass("blur");
            menuBtHasClick = true;
        }else{
            tl.reverse();
            themeBox.removeClass("blur");
            menuBt1.css({
                "transform":"rotate(0)"
            });
            menuBt2.css("opacity","1");
            menuBt3.css({
                "transform":"rotate(0)"
            });
            if(hasScroll){
                menuBt.css("background-color","#3e4756");
            }
            menuBtHasClick = false;
            setTimeout(function(){
                nav.fadeOut();
            },600);
        }
    });

    navLast.hover(function(){
        menuBtSpan.css("background-color","#3e4756");
    },function(){
        menuBtSpan.css("background-color","#fff");
    });

//        navLi.hover(function(){
//            $(this).css("color","#2f3540");
//        },function(){
//            $(this).css("color","#fff");
//        });

    var screenHeight = document.body.clientHeight;
    $(window).scroll(function(){
        if($(window).scrollTop()>(screenHeight-60)){
            menuBt.css("background-color","#3e4756");
            hasScroll = true;
        }else{
            menuBt.css("background-color","transparent");
            hasScroll = false;
        }
    });

    downArrow.click(function(){
        TweenMax.to(body,0.7,{scrollTop:screenHeight+25,ease:Power4.easeInOut});
    });

    var firstScroll = false;
    $(window).scroll(function(){
        if(!firstScroll){
            TweenMax.to(body,0.7,{scrollTop:screenHeight+25,ease:Power4.easeInOut});
            firstScroll = true;
        }
        if(body.scrollTop()==0){
            firstScroll = false;
        }
    });





    $(window).resize(function(){
        recommendBox.height(recommendBox.width()*0.35);
        recommendRight.height(recommendBox.width()*0.35);
        essayListLi.height(essayListLi.width()*0.8);
    });

    recommendCover.mouseenter(function(){
        clearTimeout(setTime);
        var that = $(this);
        $(this).css("opacity","1");
        setTime = setTimeout(function(){
            that.find(".one").css("left","18px");
            that.find(".two").css("top","18px");
            th.restart();
            clearTimeout(setTime);
        },200);
    }).mouseleave(function(){
        clearTimeout(setTime);
        var that = $(this);
        $(this).find(".one").css("left","-100%");
        $(this).find(".two").css("top","-100%");
        th.reverse();
        setTime = setTimeout(function(){
            that.css("opacity","0");
            clearTimeout(setTime);
        },200);
    });

    recommendRightLi.mouseenter(function(){
        $(this).find("img").css({
            "transform":"scale(1.2)"
        });
        $(this).find(".essayLabel").fadeIn();
    }).mouseleave(function(){
        $(this).find("img").css({
            "transform":"scale(1)"
        })
    });

    navUlLi.hover(function(){
        $(this).css({
            "background-color": "rgba(255,255,255,0.7)",
            "color": "#2f3540"
        });
        $(this).find("p").css({
            "border-top": "2px solid #2f3540",
            "border-bottom": "2px solid #2f3540",
            "padding":"18px 12px 14px 12px"
        });
    },function(){
        $(this).find("p").css({
            "border-top": "2px solid transparent",
            "border-bottom": "2px solid transparent",
            "padding":"28px 12px 24px 12px"
        });
    });

    window.onbeforeunload = function(){
        $(document).scrollTop(0);
    }

})();