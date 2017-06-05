关于写jquery插件 可以看看这些文章

[写jQuery插件](http://www.cnblogs.com/jonyzhu/p/3732468.html)

# 闭包


```
(function ($) {
    //插入内部代码
})(jQuery);
```
这其实是一个匿名的立即执行函数  jQuery可以用window.jQuery 或 $ 代替

# 实例及详解

```
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
```
$.extend(), 这个方法，他的作用就是扩展，以上这段代码就是将options拓展到对象,最后赋给options.这样写为了可读性。


```
所以这段代码还可以这样。

 

options = $.extend({//here is default values},options);
```
我们再写插件时，把当前对象return回去，这样返回的又是jQuery对象，这样可以链式操作

fn 是jQuery的原型  userInfo这个扩展方法实际上就是在jquery对象的原型上定义的
这里的 this 就是jquery对象
另，jQuery对象是一个伪数组对象，里面可能有多个元素,所以一般这样返回：

```
return $.each(this,function(index,ele){
      //code...这里是处理逻辑，针对每一个元素进行处理
  });
}
```

#  调用
在引入插件之后，直接调用就行。

```
<script>
2  $("#user-info").userInfo();
3 <script">
```
这样会在dom的id="user-info"里输出插件的默认值，即显示结果是
要改变里面的值，只需要加入你想要的参数就行。如下：

```
<script>
 $('#user-info').userInfo({
 name: 'Sun Zhu',
 email: '734271284@qq.com',
 size: '16px',
 align: 'right'
 });
<script">
```
这样就改变默认值了。输出结果就是：Sun Zhu 734271284@qq.com，文字右对齐。

上面的这样写会有一个弊端，就是不是很好拓展。因为一个插件，往往会有多个方法。以下是改进的结构。


```
/**
  * Created by AlexZ33 on 2014/05/07.
  * email: sha5xiang@gmail.com
  */
 
 (function ($) {
 
     $.fn.extend({
         slider:function (opt) {
             opt = $.extend({
                 
             }, opt);
             //do something here
     
          
 
             return $.each(this,function(index,ele){});
         }
     });
 
 })(jQuery);  
```
