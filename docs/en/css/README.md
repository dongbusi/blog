---
title: css
lang: en-US
---


## margin and padding

### Marigin and padding benchmark

::: tip
Both maigin and padding have a percentage value, and his percentage is based on the width of his parent element.
:::

<div class="father">
  <div class="child"></div>
</div> 

<img src="/img/css-margin.jpeg" alt="Margin">
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
  margin-top: 10%; // padding Similarly, no longer repeat
  margin-left: 10%;
}
</style>
```


## Centered

::: tip

Centering is the most common requirement in the css layout, and there are many ways to center. Here are some simple ones that I use often.

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

 ### Text centered

<div class="content">Text</div>

```html
<div class="content">Text</div>
  
<style lang="scss">
  .content {
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px; // Parent element height (percentage will be reported)
  }
</style>
  
```
### Picture centered

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

### Flex centered

::: tip

Flex centering is a property of flex, which is compatible with the mobile end. This is not detailed and will be introduced in the flex layout below.
[Flex layout](./#flex-layout)

:::


### Positioning centered


### translate centered

## Flex layout



## gird layout