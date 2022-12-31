# Basics

A web page is usually created using three languages:

* HTML: HyperText Markup Language 
* JS: JavaScript
* CSS:  Cascading Style Sheets

## Starter Template

::: code-group
```html [index.html]
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Starter Template</title>
    <link href="./dist/styles.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p id="message" class="info"></p>
    <script src="./dist/app.js"></script>
  </body>
</html>
```

```css [dist/styles.css]
.info{
    color: red;
}
```

```js [dist/app.js]
document.addEventListener("DOMContentLoaded", (event) => {
    const elem = document.querySelector("#message");
    const today = new Date();
    elem.innerHTML = today.getDate() + "/"+ (today.getMonth()+1) + "/" +today.getFullYear() ;
});
```

:::
