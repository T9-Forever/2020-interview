### XSS（跨站脚本攻击）  
1. 非持久性xss（反射性xss）  
前端数据以前的写法可能从`url`获取数据，直接通过`document.write`或`innerHTML`或`eval`注入html  
攻击者可以通过往url注入一段脚本，获取关键信息那 
攻击者需要诱骗用户点击  

2. 持久性xss 
* post请求提交表单给后端没做转义直接入库  
* 后端从数据库取出数据没做转义直接输出给前端  
* 前端拿到后端数据没做转义直接渲染成DOM  

### CSRF  
* 用户登录站点A，并在本地记录cookie  
* cookie生效的情况下，引诱用户登录危险站点B (B站点访问站点A)
* 站点A没有做人任何csrf防御  

**防御**
1. SameSite 
cookie设置samesite，跨域情况下不会发送  
2. Referer Check  
检查http包头referer的值是不是这个页面，来判断是不是csrf攻击 
3. anti csrf token  
4. 关键步骤加入验证码  


防止csrf攻击  
https://tech.meituan.com/2018/10/11/fe-security-csrf.html