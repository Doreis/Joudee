/**
 * Created by lianglong on 16/4/21.
 */
(function(){
    var manDivImg = $(".manDiv img"),
        body = $("body"),
        footer = $("footer"),
        allContentCo = $(".allContentCo"),
        checkPoint = $(".checkPoint"),
        contentChild = $(".contentChilds");



    var clientW = document.body.clientWidth;



    //站立
    var standNumber = 1,
        standT = null;

    standT = setInterval(standF,75);

    function standF(){
        standNumber++;
        manDivImg.attr("src","standImg/stand"+standNumber+".png");
        if(standNumber==15){
            standNumber = 0;
        }
    }


    //run
    var runNumber = 1,
        hasRun = false,
        tunT = null,
        footLeftNumber = 1,
        allContentScroll = 0,
        checkPointNumber = 1,
        checkPointT = null;

    var run = function(){
        tunT = setInterval(runF,65);
    };

    function runF(){
        runNumber++;
        footLeftNumber -= 15;
        allContentScroll += 15;
        manDivImg.attr("src","runImg/run"+runNumber+".png");
        footer.css("left",footLeftNumber);
        allContentCo.css("left",footLeftNumber);
        if(runNumber==29){
            runNumber = 2;
        }

        contentChild.each(function(){
            contentF($(this).offset().left,$(this));
        });
    }

    function checkPointF(that){
        checkPointT = setInterval(function(){
            checkPointNumber++;
            that.find(".checkPoint").css("background","url(checkPImg/check"+checkPointNumber+".png) no-repeat center");
            if(checkPointNumber==8){
                that.find(".checkPoint").find("span").css("opacity","1");
                clearInterval(checkPointT);
                checkPointNumber = 1;
            }
        },70);
    }

    body.keydown(function(e){
        //37左键,39右键
        if(e.keyCode==39&&!hasRun){
            clearInterval(standT);//清除站立的动画
            run();
            hasRun = true;
        }
    });

    body.keyup(function(){
        console.log("!23");
        standNumber = 0;//初始化站立的图片
        hasRun = false;
        clearInterval(tunT);//清除run的动画
        standT = setInterval(standF,75);
    });




    //各板块动画
    function contentF(data,that){
        switch (true){
            case (data<(clientW*0.8)):
                if(checkPointNumber<8&&!that.hasClass("hasCheckP")){
                    checkPointF(that);
                    that.addClass("hasCheckP");
                }
                break;
        }
    }
})();