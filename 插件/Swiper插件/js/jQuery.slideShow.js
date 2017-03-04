//用匿名自执行函数封装
//fn jquery扩展插件的方法  fn是jquery对象的原型 this相当于$(".container")这个jquery对象
(function($){
	$.fn.container = function(){
		return this.each(function(){
			var me=$(this),
				ul=me.find(".inner"),
			  	nav =me.find(".nav span"),
			  	eachWidth=ul.find("li").eq(0).width(),
			  	timer=null;
			  	iNow = 0;



//鼠标在图片上时候停止,鼠标移出时候停止
	me.hover(function(){
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

			Autoplay();
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
	};

})(jQuery);

 

 $(document).ready(function(){

	$(".container").container();

 

});