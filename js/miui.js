 //购物车
 $(".nav-right").children('li').eq(3).children('a').hover(function  () {
 	 $(this).children('img').attr('src','img/08.png');
 	 $(this).css({'color':'#FF6700','background':'white'});
 	 $('.cart').slideDown();
 },function  () {
 	$(this).children('img').attr('src','img/11.png');
   	$(this).css('background','#424242');
   	$(this).css('color','#b0b0b0');
   	$('.cart').slideUp();
 })
 //nav-con导航栏的
/* $('.nav-con>li').hover(function  () {
 	$(this).children('a').css('color','#FF6700');
 	$(this).children('div').slideDown();
 },function  () {
 	$(this).children('a').css('color','#333');
 	if ($(this).index()<12) {
 		$(this).children('div').slideUp();
 	}
 })*/
$('.nav-con>li').on('mouseenter', function () {
//  $(this).addClass('color-red');
	$(this).children('a').css('color','#FF6700');
        //console.log($(this).index());
        if (!$('.nav2>div').hasClass('xia')&&$(this).index()>1&&$(this).index()<10) {
                 $('.nav2>div').addClass('xia');
            }
        else if($('.nav2>div').hasClass('xia')&&$(this).index()<2&&$(this).index()>9){
                $('.nav2>div').removeClass('xia');
            }  
                $('.nav2>div').html(`
                	
                    <h2>${$(this).index()}</h2>
                `);
      
});

$('.nav-con>li').on('mouseleave', function () {
    //$(this).removeClass('color-red');
    $(this).children('a').css('color','#333');
    if (!$('.nav2>div').hasClass('xia')&&$(this).index()>1&&$(this).index()<10) {
        $('.nav2>div').addClass('xia');
    }
    else if($('.nav2>div').hasClass('xia')&&$(this).index()<2&&$(this).index()>9){
                $('.nav2>div').removeClass('xia');
            } 
});
$('.nav2').on('mouseleave',function() {
        if ($('.nav2>div').hasClass('xia')) {
            $('.nav2>div').removeClass('xia');
        }
})

  //nav-con的搜索框
$('.nav-con>li>div').hover(function  () {
   	$(this).css('border-color','#b5b5b5');
   	$(this).children('input').css('border-color','#b5b5b5');
   },function  () {
   $(this).css('border-color','#E0E0E0');
$(this).children('input').css('border-color','#E0E0E0');
})
$('.nav-con>li>div>input').focus(function  (e) {
	$(this).parent('div').css('border-color','#FF6700');
	$(this).css('border-color','#FF6700');
	$('.pvalue').css('display','none');
})
$('.nav-con>li>div>input').blur(function  () {
	$('.pvalue').css('display','block');
})
$('.nav-con>li>div>button').hover(function  () {
	$(this).css('background','#FF6700');
},function(){
	$(this).css('background','#FFFDEF');
})
$('.nav-con>li>div>p').children().hover(function  () {
	$(this).css('background','#FF6700');
},function(){
	$(this).css('background','#FFFDEF');
})
//轮番图
var num=0;
var timer;
function go(){
	timer=setInterval(function(){
		num++;
		if(num>4){
			num=0;
			$('#box').children('li').eq(num).fadeIn().siblings().fadeOut();
			$('#oll').children("li").eq(num).addClass('current');
			$('#oll li').eq(num).siblings().removeClass('current');
		}
		$('#box').children('li').eq(num).fadeIn().siblings().fadeOut();
		$('#oll li').eq(num).addClass('current');
		$('#oll li').eq(num).siblings().removeClass('current');
	},2000)
}
go()
$('#wrap').hover(function() {
	clearInterval(timer)
}, function() {
	go()
});
$('#oll li').click(function  () {
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	$('#box').children('li').eq($(this).index()).fadeIn().siblings().fadeOut();
	num=$(this).index();
})
$('.right-left .right').click(function(event) {
	num++;
	if(num>4){
		num=0;
		$('#box').children('li').eq(num).fadeIn().siblings().fadeOut();
		$('#oll li').eq(num).addClass('current');
		$('#oll li').eq(num).siblings().removeClass('current');
	}
	$('#box').children('li').eq(num).fadeIn().siblings().fadeOut();
	$('#oll li').eq(num).addClass('current');
	$('#oll li').eq(num).siblings().removeClass('current');
});
$('.right-left .left').click(function(event) {
	num--;
	if(num<0){
		num=4;
		$('#box').children('li').eq(num).fadeIn().siblings().fadeOut();
		$('#oll li').eq(num).addClass('current');
		$('#oll li').eq(num).siblings().removeClass('current');
	}
	$('#box').children('li').eq(num).fadeIn().siblings().fadeOut();
	$('#oll li').eq(num).addClass('current');
	$('#oll li').eq(num).siblings().removeClass('current');
});
//竖直导航显隐
$('.menu').mouseenter(function(e) {
	e.stopPropagation()
})
$('.menu>li').hover(function  () {
	$(this).children('div').css('display','block');
	$(this).siblings().children('div').css('display','none');
},function(){
	$(this).children('div').css('display','none');
})
//小米闪购
$('.around>a').eq(0).click(function  () {
	$('.content-one-right>ul').css('margin-left','-0px')
})
$('.around>a').eq(1).click(function  () {
	$('.content-one-right>ul').css('margin-left','-744px')
})
/*向上移动并且出现投影*/
//手机
$('.neck-mobile-left').hover(function  () {
	$(this).children('a').addClass('an-a');
	$(this).siblings().children('a').removeClass('an-a');
},function  () {
	$(this).children('a').removeClass('an-a');
})
$('.neck-mobile li').hover(function  () {
	$(this).children('a').addClass('an-a');
	$(this).siblings().children('a').removeClass('an-a');
},function  () {
	$(this).children('a').removeClass('an-a');
})
//家庭、智能、搭配、配件、周边
$('.neck-home li').hover(function  () {
	$(this).children('a').addClass('an-a');
	$(this).siblings().children('a').removeClass('an-a');
	$(this).children('div').addClass('subscript');
	$(this).siblings().children('div').removeClass('subscript');
},function  () {
	$(this).children('a').removeClass('an-a');
	$(this).children('div').removeClass('subscript');
})
//为你推荐、热评产品、内容、视频
$('.rise li').hover(function  () {
	$(this).addClass('an-a');
	$(this).siblings().removeClass('an-a');
},function  () {
	$(this).removeClass('an-a');
})
//商品的下标

