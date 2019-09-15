---
title: css
lang: zh-CN
---


## margin和padding

### marigin和padding的基准

::: tip
maigin和padding都是有百分比取值的，他的百分比的基准是他的父元素的宽。
:::

<div class="father">
  <div class="child"></div>
</div> 

<img src="/img/css-margin.jpeg" alt="margin边距">
<style lang="scss">
.father {
  width: 300px;
  height: 200px;
  border: 1px dashed red;
}
.child {
  width: 150px;
  height: 100px;
  border: 1px solid #cccccc;
  margin-top: 10%;
  margin-left: 10%;
}
</style>

```html {2,15,16}
<div class="father">
  <div class="child"></div>
</div> 
<style>

.father {
  width: 300px;
  height: 200px;
  border: 1px dashed red;
}
.child {
  width: 150px;
  height: 100px;
  border: 1px solid #cccccc;
  margin-top: 10%; // padding 同理，不再赘述
  margin-left: 10%;
}
</style>
```


## 居中

::: tip

居中是css布局中最为常见的需求，居中的方式也多种多样。这里列举一些简单且本人经常使用的。

:::
<style lang="scss">
  .content {
    margin-top: 20px;
    border: 1px solid #ccc;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
  }
  .container {
    margin-top: 20px;
    border: 1px solid #ccc;
    width: 150px;
    height: 150px;
    text-align: center;
    
  }
  .container img {
    vertical-align: middle;
  }
  .iblock {
    display: inline-block;
    vertical-align: middle;
    height:100%;
	  width:0;
  }
  
</style>

 ### 文字居中

<div class="content">文字</div>

```html
<div class="content">文字</div>
  
<style lang="scss">
  .content {
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px; // 父元素高度 （百分比会报错）
  }
</style>
  
```
### 图片居中

<div class="container">
  <img width="100" height="100" src="/img/css-margin.jpeg" >
  <div class="iblock"></div>
</div>
  


```html
<div class="container">
  <img width="100" height="100" src="/img/css-margin.jpeg" >
  <div class="iblock"></div>
</div>
  
<style lang="scss">
  .container {
    margin-top: 20px;
    border: 1px solid #ccc;
    width: 150px;
    height: 150px;
    text-align: center;
    
  }
  .container img {
    vertical-align: middle;
  }
  .iblock {
    display: inline-block;
    vertical-align: middle;
    height:100%;
	  width:0;
  }
</style>
  
```

### flex居中

::: tip

flex居中是flex的一个属性，在移动端的兼容较好，这块不细述，会在下面的flex布局里面介绍。
[flex布局](./#flex布局)

:::


### 定位居中


### translate居中

## flex布局



## gird布局