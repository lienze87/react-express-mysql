# react-express-mysql

本项目为基于react技术栈，express框架，mysql数据库的个人博客项目

**项目仍在开发中,诸多功能需要完善**

若想运行此项目，需要进行如下操作
1. 安装node环境和MySQL数据库
2. 在 MySQL中导入[SQL文件](./devlog/ezdb.sql),并在./config/app.js文件中修改数据库配置
2. 在cmd中跳转到项目根目录下，运行命令npm install
3. 以正式环境运行需要运行命令yarn build，然后执行命令yarn server
4. 以开发环境运行，执行命令yarn server-dev
5. 打开Chrome浏览器(本项目尚未完成兼容)，输入http://loaclhost:8000 即可查看项目