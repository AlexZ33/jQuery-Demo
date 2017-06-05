# jQuery插件的机制

jQuery提供了两个用于扩展jQuery更能的方法
- jQuery.fn.extend()
- jQuery.extend()

前者用于扩展[封装对象方法的插件]()

后者用于扩展[封装全局函数的插件]()和[选择器插件]()
这两个方法都接受一个参数，类型为Object。Object对象的“名/值对”分别代表“函数或方法名/函数主体”

jQuery.extend()方法除了可以用于扩展jQuery对象之外，还有很强大的功能，就是用于扩展已有的Object对象
如  [01-插入个人信息](https://github.com/AlexZ33/jQuery-Demo/tree/master/插件/01-插入个人信息)中的实例

