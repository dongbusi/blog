---

title: HTML
lang: en-US
---

## Input form validation

::: tip
Input is one of the most commonly used tags. In actual production, the native input can already satisfy most of the requirements. For example, verification, required, etc.
:::
::: warning
nput is also a tag that needs to be remembered for security verification. Mainly to prevent xss attacks. (After a time, the 鱼头 smashed an input article to find the WeChat and Nuggets vulnerabilities:smirk:。）
:::

### Required field

<form >
  <label for="required">required</label>
  <input type="text" id="required" required>
  <button type="submit">submit</button>
</form>


```html {3,15,18}
<form >
  <label for="required">required</label>
  <input type="text" id="required" required> // Indicates required  The input needs to be in the form tag.
  <button type="submit">submit</button>
</form>

<style lang="scss">
  form {
    padding-top: 20px;
  }
  input,button {
    border: 1px solid #ccc;
    outline: none;
  }
  input:valid ~ button{ // approved
    display: inline-block;
  }
  input:invalid ~ button{ // Failed verification
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


### input verification

::: tip
The pattern attribute can be directly replaced by many verified by js, which is a regular expression.
:::
<form >
  <label for="pattern">Verification number</label>
  <input type="text" id="pattern" pattern="[0-9]*" required>
  <button type="button">submit</button>
</form>

```html {3}
<form >
  <label for="pattern">Verification number</label>
  <input type="text" id="pattern" pattern="[0-9]*" required>
  <button type="button">submit</button>
</form>
```

### input selector

| 选择器           | 作用           
| :-------------: |:-------------:
| :enabled        | Select the input element of the available state
| :disabled       | Select the input element of the unusable state    
| :read-only      | Select elements that are not editable (not just input )
| :read-write     | Select an element that can be edited (not just input )
| :placeholder-shown    | Select the element when placeholder text is displayed
| :default        | Select default state
| :checked        | Select the radio that is selected
| :indeterminate  | Select form elements with indeterminate status and progress



## canvas

## shadow DOM