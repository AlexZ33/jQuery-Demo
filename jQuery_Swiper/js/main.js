
//因为scipte写在文档底部  其实$(document).ready可以不写的
$(document).ready(function(){
  var container= $(".container"),
  	  ul=container.find(".inner"),
  	  nav =container.find(".nav span"),
  	  eachWidth=ul.find("li").eq(0).width(),
  	  timer=null;
  	  iNow = 0;


//鼠标在图片上时候停止,鼠标移出时候自动播放
	container.hover(function(){
		clearInterval(timer);
	},Autoplay);


	//点击切换
	  	  nav.on('click',function(){
	  	  	
	  	  	var me=$(this),
	  	  		index =me.index();
	  	  		iNow=index;
	  	  	
	  	  	ul.animate({
	  	  		"left":-eachWidth*iNow
	  	  	})

	  	  	nav.removeClass("active");
	  	  	me.addClass('active');  	 	
	  	  });


	//自动切换

	autoplay();
	function Autoplay(){
			
		timer =setInterval(function(){
			iNow++;
			if (iNow>nav.length-1) {
				iNow = 0;
			}
			nav.eq(iNow).trigger("click");

		},2000);
	}

});


