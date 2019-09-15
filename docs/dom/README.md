---

title: HTML
lang: zh-CN
---

## input表单验证

::: tip
input 是最常用的标签之一，在实际生产中，原生的input已经可以满足大部分的需求。比如验证，必填等。
:::
::: warning
input也是一个需要铭记安全验证的标签。主要是防止xss攻击。（前段时间鱼头大佬一篇input的文章发现微信和掘金的漏洞:smirk:。）
:::

### 必填项

<form >
  <label for="required">必填</label>
  <input type="text" id="required" required>
  <button type="submit">提交</button>
</form>


```html {3,15,18}
<form >
  <label for="required">必填</label>
  <input type="text" id="required" required> // 表示必填  input需要在form标签里才有作用。
  <button type="submit">提交</button>
</form>

<style lang="scss">
  form {
    padding-top: 20px;
  }
  input,button {
    border: 1px solid #ccc;
    outline: none;
  }
  input:valid ~ button{ // 通过验证
    display: inline-block;
  }
  input:invalid ~ button{ // 未通过验证
    display: none;
  }
</style>
```

<style lang="scss">
  input,button {
    border: 1px solid #ccc;
    outline: none;
  }
  input:valid ~ button{
    display: inline-block;
  }
  input:invalid ~ button{
    display: none;
  }
</style>


### 表单验证

::: tip
pattern属性是可以直接代替很多通过js验证的，他是一个正则表达式。
:::
<form >
  <label for="pattern">验证数字</label>
  <input type="text" id="pattern" pattern="[0-9]*" required>
  <button type="button">提交</button>
</form>

```html {3}
<form >
  <label for="pattern">验证数字</label>
  <input type="text" id="pattern" pattern="[0-9]*" required>
  <button type="button">提交</button>
</form>
```

### 表单选择器

| 选择器           | 作用           
| :-------------: |:-------------:
| :enabled        | 选择可使用状态的 input 元素
| :disabled       | 选择不可使用状态的 input 元素     
| :read-only      | 选择不可编辑状态的元素（不仅仅是 input ）
| :read-write     | 选择可编辑状态的元素（不仅仅是 input ）
| :placeholder-shown    | 选择 placeholder text 显示时的元素
| :default        | 选择默认状态
| :checked        | 选择处于选中状态的 radio
| :indeterminate  | 选择状态不确定的表单元素与 progress



## canvas

## shadow DOM