����дjquery��� ���Կ�����Щ����

[дjQuery���](http://www.cnblogs.com/jonyzhu/p/3732468.html)

[ʲô���㻹����дJQuery ���](http://www.cnblogs.com/joey0210/p/3408349.html)
# �հ�

���ñհ������ԣ��ȿ��Ա����ڲ���ʱ����Ӱ��ȫ�ֿռ䣬�ֿ����ڲ���ڲ�����ʹ��$��ΪjQuery�ı�����
```
(function ($) {
    //�����ڲ�����
})(jQuery);
```
����ʵ��һ������������ִ�к���  jQuery������window.jQuery �� $ ����

```

// ע��Ϊ�˸��õļ����ԣ���ʼǰ�и��ֺ�
;(function ($) {
    //�����ڲ�����
	//����ʹ��$��ΪjQuery����д����
})(jQuery);//���ｫjQuery��Ϊʵ�δ��ݸ���������

```

```
;(function($) {
   //�����д����Ĵ��룬���Լ���ʹ��$��ΪjQuery�ı�����
   //����һ���ֲ�����foo,�������ڲ����Է��ʣ��ⲿ�޷�����
   var foo;
   var bar = function() {
   /* �����������ڲ��ĺ��������Է���foo��
   *�������������������ⲿ����bar()��ʱ��
   *Ҳ������bar()���ڲ�����foo,
   *���������������ⲿֱ�ӷ���foo����������*/
   
   }
   
   /* �������������������ڲ��ĺ���bar()���ݵ�ȫ�ֿɷ��ʵķ�Χ�ڣ�
   *�����Ϳ����������������ⲿͨ������jQuery.BAR()�������ڲ�����ĺ���bar(),
   *�����ڲ�����bar()Ҳ�ܷ������������ı���foo
   */
   $.BAR = bar;
   
})(jQuery);

```

# ʵ�������

```
(function ($) {
        $.fn.userInfo = function (options) { //������������
            options = $.extend({
                //����һ����������Ĭ��ֵ
                name: 'AlexZ33', //�� 
                email: 'sha5xiang@gmail.com', //����
                size: '14px', //���ִ�С
                align: 'center '//����λ�ã�left || center || right
            },options);
            
                        var style = 'style="font-size:' + opt.size + ';text-align:' + opt.align + ';"'; //����Ĭ�ϵ���ʽ
           var name = '<p' + ' ' + style + '>name:<a target="_blank" >' + opt.name + '</a></p>';
            var email = '<p' + ' ' + style + '>name:<a target="_blank">' + opt.email + '</a></p>';
            this.append(name);
            this.append(name);
            
            return this;
        }
    })(window.jQuery);
```
$.extend(), ����������������þ�����չ��������δ�����ǽ�options��չ������,��󸳸�options.����дΪ�˿ɶ��ԡ�


```
������δ��뻹����������

 

options = $.extend({//here is default values},options);
```
������д���ʱ���ѵ�ǰ����return��ȥ���������ص�����jQuery��������������ʽ����

fn ��jQuery��ԭ��  userInfo�����չ����ʵ���Ͼ�����jquery�����ԭ���϶����
����� this ����jquery����
��jQuery������һ��α���������������ж��Ԫ��,����һ���������أ�

```
return $.each(this,function(index,ele){
      //code...�����Ǵ����߼������ÿһ��Ԫ�ؽ��д���
  });
}
```

#  ����
��������֮��ֱ�ӵ��þ��С�

```
<script>
2  $("#user-info").userInfo();
3 <script">
```
��������dom��id="user-info"����������Ĭ��ֵ������ʾ�����
Ҫ�ı������ֵ��ֻ��Ҫ��������Ҫ�Ĳ������С����£�

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
�����͸ı�Ĭ��ֵ�ˡ����������ǣ�Sun Zhu 734271284@qq.com�������Ҷ��롣

���������д����һ���׶ˣ����ǲ��Ǻܺ���չ����Ϊһ��������������ж�������������ǸĽ��Ľṹ��


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
