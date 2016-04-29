/**
 * Created by lianglong on 16/3/18.
 */
(function(){
   var homeShowLi = $(".homeShow li"),
       loadingB = $(".loading b"),
       loading = $(".loading"),
       loadTop = $(".loadTop"),
       loadBottom = $(".loadBottom");

    var imgArray = [],
        Img = new Image(),
        loadNumber = 0;

    var tl = new TimelineMax();

    homeShowLi.each(function(){
        imgArray.push($(this));
    });

    for(var i=0;i<imgArray.length;i++){
        imgArray[i].css("background","url("+imgArray[i].attr("data-src")+") no-repeat center");
        Img.src = imgArray[i].attr("data-src");
        imgLoad();

    }

    function imgLoad(){
        Img.addEventListener("load",function(){
            loadNumber++;
            loadingB.width(loadNumber*$("body").width()/imgArray.length);
            if(loadNumber==imgArray.length){
                setTimeout(function(){
                    loadingB.hide();
                    tl.to(loadTop,0.5,{top:"-50%",ease:Power1.easeInOut})
                        .to(loadBottom,0.5,{bottom:"-50%",ease:Power1.easeInOut},0)
                        .to(loading,0.1,{display:"none"});
                },1000);
            }
        });
    }

})();