(function ($) {
        $.fn.userInfo = function (options) { //定义插件方法名
            options = $.extend({
                //定义一个对象，设置默认值
                name: 'AlexZ33', //名 
                email: 'sha5xiang@gmail.com', //链接
                size: '14px', //文字大小
                align: 'center '//文字位置，left || center || right
            },options);
            
                        var style = 'style="font-size:' + opt.size + ';text-align:' + opt.align + ';"'; //调用默认的样式
           var name = '<p' + ' ' + style + '>name:<a target="_blank" >' + opt.name + '</a></p>';
            var email = '<p' + ' ' + style + '>name:<a target="_blank">' + opt.email + '</a></p>';
            this.append(name);
            this.append(name);
            
            return this;
        }
    })(window.jQuery);