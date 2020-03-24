### 单列布局
```
<div class='header'></div>
<div class='content'></div>
<div class='footer'></div>
.header {
  margin: 0 auto;
  max-width: 960px;
  height: 100px;
}
.content {
  margin; 0 auto;
  max-width: 960px;
  height: 300px;
}
.footer {
  margin: 0 auto;
  max-width: 960px;
  height: 100px;
}
```

### 两栏自适应布局
```
<div class='parent'>
  <div class='left'></div>
  <div class='right'></div>
</div>
.parent {
  zoom: 1;
  overflow: hidden;
}
.left {
  float: left;
  width: 20px; // 定宽
}
.right {
  overflow: hidden;
}
```  

### flex布局
```
.parent {
  display: flex;
}
.right {
  margin-left: 20px;
  flex: 1;
}
```

### 三列布局  
`thridColumn.html`



