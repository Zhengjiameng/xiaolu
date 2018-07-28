$(function(){
    //星星
    $('.code').each(function () {
        var score=parseInt($(this).text())/5*100
        $(this).siblings('.star').css({'width':score+'%'})
    })
    //点击切换updown
    var i=true;
    var select=true;
    $('.z-classHead li').click(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        var idx=$(this).index();
        console.log(idx);
        if(idx===1&&select){
            $(this).removeClass('up').siblings().addClass('up');
            select=!select;
        }else if(idx===1&&!select){

            $(this).addClass('up').siblings().removeClass('up');
            select=!select;
        }
        if(idx===2&&i){
            $(this).removeClass('up').siblings().addClass('up');
            i=!i;
        }else if(idx===2&&!i){

            $(this).addClass('up').siblings().removeClass('up');
            i=!i;
        }
    })

    //下拉加载
    var timeoutId
    $(window).scroll(function(){
        if(timeoutId){
            clearTimeout(timeoutId)
        }
        timeoutId=setTimeout(callback(''),50)
    })
    //倒计时

    var intDiff = parseInt(900);//倒计时总秒数量
    timer(intDiff);
    //旅游专业的tab切换
    $('.travelUl li').click(function () {
        var idx=$(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        $(this).parent().siblings('.z-classContent').eq(idx).show().siblings('.z-classContent').hide();
    })
    //旅游达人的menu
    $('.menuIcon').click(function () {
        if(!$(this).hasClass('cur')){
            $(this).addClass('cur');
            $(this).siblings('.z-menu').show()
        }else{
            $(this).removeClass('cur');
            $(this).siblings('.z-menu').hide()
        }
    })
    //驻足展示-1 点赞
    $('.zanIcon').click(function () {
        if($(this).hasClass('cur')){
            $(this).removeClass('cur')
        }else{
            $(this).addClass('cur')
        }
    })
})
function callback(html){
    if($('.z-loading').length!==0){
        var loadingTop=$('.z-loading').offset().top-$(document).scrollTop();
    }else{
        var loadingTop=0;
    }

    var windowHeight=$(window).height();
    if(loadingTop&&loadingTop<windowHeight){
        if(!html) {
            var html = '<li>\n' +
                '                    <img src="images/exzample04.png" alt="" class="classImg">\n' +
                '                    <div class="contentRight relative">\n' +
                '                        <p class="f28 lh40">香港威马（宝安店）</p>\n' +
                '                        <p class="starBg mt10">\n' +
                '                            <em class="code" hidden>3</em>\n' +
                '                            <i class="star"></i>\n' +
                '                        </p>\n' +
                '                        <p class="c6 ">\n' +
                '                            <span class="f26">\n' +
                '                                宝安区航城大道\n' +
                '                            </span>\n' +
                '                            <span class="f24">\n' +
                '                                25km\n' +
                '                            </span>\n' +
                '                        </p>\n' +
                '                    </div>\n' +
                '                </li>';
        }
      $('.z-content').each(function(){
          if(!$(this).is(":hidden")){
              $(this).find('ul').eq(0).append(html);
          }

      })

    }
}
function timer(intDiff){
    window.setInterval(function(){
        var day=0,
            hour=0,
            minute=0,
            second=0;//时间默认值
        if(intDiff > 0){
            day = Math.floor(intDiff / (60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
            minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (hour <= 9) hour = '0' + hour;
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        $('.hour_show').html('<s id="h"></s>'+hour);
        $('.minute_show').html('<s></s>'+minute);
        $('.second_show').html('<s></s>'+second);
        intDiff--;
    }, 1000);
}
function pop(obj){
    $(obj).dialog();
}
