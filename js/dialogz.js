$(function(){
    $.fn.dialog=function(){
        var dialog=$(this);
        var body=$('body');
        dialog.show();
        var count=dialog.find('.dialog-count');
        var dialogWidth=count.width();
        var dialogHeight=count.height();
        var outerWidth=$(window).width();
        var outerHeight=$(window).height();
        var close=$('.dialog-close');
        var _scrollHeight = $(document).scrollTop();//获取当前窗口距离页面顶部高度
        if(body.outerHeight()>$(window).outerHeight()){
            console.log(body.outerHeight());
            console.log($(window).outerHeight());
            body.css({
                "overflow":"hidden"
            });
        }
        count.css({
            'top':outerHeight/2+_scrollHeight,
            'left':outerWidth/2,
            'margin-left':-dialogWidth/2
        }).stop().animate({
            "opacity": 1,
            'margin-top':-dialogHeight/2,
        },300);;
        close.click(function(){
            count.stop().animate({
                "margin-top": 30
            },300,function(){
                count.css("margin-top", -30);
            });
            dialog.fadeOut(300);
            body.css({
                "overflow": "auto",
                "padding-right": 0
            });
        });
    }
})