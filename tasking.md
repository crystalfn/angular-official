# 总任务
- 参照 Angular 官网，完成相应的页面显示及跳转，主要实现点击文档后显示的内容；
- 页面分块儿：header、aside、main、footer，其中 main 又可以分为 main、aside(可选)；
- header （导航栏）：显示及页面跳转；
- aside（侧边栏）：显示及页面跳转；
- main（内容）：每块儿的主体内容显示；
- footer：显示 footer 的一些信息，主要需要实现多语言切换功能；

# 具体实现
## header （导航栏）
- html 和 css 样式编写，显示如官网所示的 header；
- 使用路由实现页面跳转；

## aside（侧边栏）
- 使用 NzMenuModule 实现侧边栏导航菜单显示；
- 使用路由实现页面跳转；

## main（内容）
- 编写页面内容，可以会用到 NzCardModule 等 Module 来实现页面显示内容；
- 使用 NzStepsModule 实现 main 中侧边栏的实时显示;

## footer
- html 和 css 样式编写，显示如官网所示的 footer；
- 关于多语言切换问题：暂定使用 i18n。
