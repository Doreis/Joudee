(function(){
    var navBtA = $(".navBt a"),
        navBt = $(".navBt"),
        navPop = $(".navPop"),
        navContent = $(".navContent"),
        popClose = $(".popClose"),
        navContentUlA = $(".navContent ul li a"),
        navContentLiOn = $(".navContent ul li .on"),
        navContentUl = $(".navContent ul"),
        pAnimate = $(".pAnimate");

    var tl = new TimelineMax(),
        tb = new TimelineMax();

    var hasTl = false;



    tl.staggerTo(navBtA,1,{rotationY:180,ease:Power1.easeInOut},0.25)
        .add(againAni,3);


    function againAni(){
        tl.restart();
    }


    navBt.hover(function(){
        TweenMax.to(navBtA,0.5,{backgroundColor:"#a2a2a2"});
    },function(){
        TweenMax.to(navBtA,0.5,{backgroundColor:"#313131"});
    });

    navBt.click(function(){
        navPop.fadeIn(400);

        setTimeout(function(){
            if(!hasTl) {
                tb.to(navContent, 0.3, {opacity: "1", ease: Power1.easeInOut})
                    .to(navContent, 0.6, {left: "0", ease: Power1.easeInOut}, 0)
                    .to(navContent, 0.5, {rotationY: "0", ease: Power1.easeInOut}, 0);
                hasTl = true;
            }else {
                tb.restart();
            }
        },200);
    });

    popClose.click(function(){
        tb.reverse();
        setTimeout(function(){
            navPop.fadeOut(400);
        },200);
    });


    navContentUlA.hover(function(){
        navContentUlA.find("b").css("width","0");
        $(this).find("b").css("width","80%");
    });

    navContentUl.mouseleave(function(){
        navContentUlA.find("b").css("width","0");
        navContentLiOn.find("b").css("width","80%");
    });
})();