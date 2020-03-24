### 定义bfc
文档block完全独立，不被其他元素影响(浮动元素重叠问题),也不影响其他元素(主要为父元素高度塌陷会影响其他元素)
### 如何产生bfc
1. float不为none
2. position不为relative和static
3. overflow为auto scrolll和hidden
4. display的值为table-cell或inline-block  
### 实际场景  
1. 解决浮动元素令父元素高度坍塌 
给父元素设置
```
overflow: hidden;
display: table-cell;
display: inline-block;
position: fixed;
position: absolute;
``` 
给父元素也添加float 

给父元素添加固定高度 

给父元素设置一个空元素，clear:both

给浮动的最后一个元素设置尾类::after  

2. 解决浮动自适应的问题(右边box会被左边浮动box覆盖)  
给右边box设置bfc  

3. 外边界margin重叠

