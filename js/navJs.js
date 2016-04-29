(function(){

    //导航
    var navBtB = $(".navDiv b"),
        body = $("body"),
        navPopRightNav = $(".navPopRight nav"),
        nav = $("nav"),
        navA = $("nav a"),
        pageN = $(".pageN"),
        navDiv = $(".navDiv"),
        navPop = $(".navPop"),
        navClose = $(".navClose");

    var tl = new TimelineMax(),
        th = new TimelineMax();

    var navBoxTop = 0,
        navBoxLeft = 0;


    tl.staggerTo(navBtB,0.8,{rotationY:180,ease:Power1.easeInOut},0.25)
        .add(againAni,3);

    function againAni(){
        tl.restart();
    }

    function mouseF(){


        body.unbind("mousemove").mousemove(function(e){
            navBoxTop = body.height()/2+100;
            navBoxLeft = navPopRightNav.offset().left+100;
            var mouseX = e.clientX,
                mouseY = e.clientY;


            var moveX = parseInt(45/navBoxLeft*(navBoxLeft-mouseX)),
                moveY = parseInt(45/navBoxTop*(navBoxTop-mouseY));



            nav.css({
                "transform":"rotateY("+-moveX+"deg) rotateX("+-moveY+"deg)",
                "-webkit-transform":"rotateY("+-moveX+"deg) rotateX("+-moveY+"deg)",
                "-moz-transform":"rotateY("+-moveX+"deg) rotateX("+-moveY+"deg)",
                "-o-transform":"rotateY("+-moveX+"deg) rotateX("+-moveY+"deg)"
            });
        });
    }




    navA.hover(function(){
        navA.removeClass("on");
        $(this).addClass("on");
    });

    nav.mouseleave(function(){
        navA.removeClass("on");
        pageN.addClass("on");
    });

    navDiv.click(function(){
        th.to(navPop,1,{left:"0",ease:Power3.easeInOut}).add(mouseF,1);
    });

    navClose.click(function(){
        TweenMax.to(navPop,1,{left:"-100%",ease:Power3.easeInOut});
        navBoxTop = 0;
        navBoxLeft = 0;
    });

    //导航


})();