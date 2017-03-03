;(function($){
	

	var LightBox = function() {

		var self = this;
		//创建遮罩和弹出框
		this.popupMask = $('<div id="G-lightbox-mask">');
		this.popupWin = $('	<div id="G-lightbox-popup">');
		//保存body
		this.bodyNode=$(document.body);
		//渲染剩余的DOM并插入body
		//this.renderDOM();

		//准备开发事件委托，获取组数据
		this.groupName = null;
		this.groupData =[];
		this.bodyNode.delegate(".js-lightbox,*[data-role=lightbox]", "click", function(e) {
			//阻止事件冒泡
			e.stopPropagation();
			
			var currentGroupName = $(this).attr("data-group");
			if(currentGroupName != self.groupName){
				self.groupName=currentGroupName;//属于同一组就不再弹出
				//根据当前组名获取同一组数据
				self.getGroup();

			

			};



			
		});
		

		
	};
	LightBox.prototype={
		getGroup:function(){
			var self =this;
			//根据当前组别名称获取页面中所有相同组别对象
			var groupList =this.bodyNode.find("*[data-group = "+this.groupName+"]");
			alert(groupList.size());	

		};
		renderDOM:function(){
		var strDOM=	'<div class="lightbox-pic-view">'+
			'<span class="lightbox-btn lightbox-prevbtn ">  </span>'+
			'<img class="lightbox-image" src="pic/4f76cb4190661fb4777fa7a9748dd93.jpg" style="width=:100px height:300px" >'+
			'<span class="lightbox-btn lightbox-nextbtn  "> </span>'+
			
				'</div>'+
				'<div class="lightbox-pic-caption">'+
				'	<div class="lightbox-caption-area">'+
						'<p class="lightbox-pic-desc"></p>'+
						'<span class="lightbox-of-index">当前索引：0 of 0</span>'+
					'</div>'+
					'<span class="lightbox-close-btn"></span>'+
				'</div>';
		//插入到this.popupWin
		this.popupWin.html(strDOM);
		//把遮罩和弹出框插入到body
		this.bodyNode.append(this.popupMask,this.popupWin);

		}

	}
	window["LightBox"]= LightBox;
})(jQuery);
