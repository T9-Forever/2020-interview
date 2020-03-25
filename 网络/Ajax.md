### 创建Ajax核心对象XMLHttpRequest
```
var xhr = null;
if(window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
}else {
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
```  
### 向服务器发送请求  
```
1. xhr.open(method, url, async);
2. send(string);
```

### 服务器响应处理  
1. 同步处理   
```
1. xhr.open("GET", "info.txt", false);
2. xhr.send();
3. document.getElementById("myDiv").innerHTML = xhr.responseText;
```

2. 异步处理
```
1. xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById('myDiv').innerHTML = xhr.request;
  }
}
```