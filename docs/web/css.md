# CSS

Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.

* [Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)


## Basic Usage

### Adding CSS to your document

CSS can be directly added in an html page using the `<style>...</style>` tag or an external file. 
To link an external file called `styles.css` to the page `index.html`, add the following line somewhere inside the `<head>` of the HTML document:

::: code-group
```html [index.html]
<link rel="stylesheet" href="styles.css" />
```
:::

### Adding a class

To apply a css style to a particular HTML element, specify one or several class names in the `class` attribute of the HTML element. In the file `styles.css`, define the style of the class name `special` by
creating a selector that starts with `.` and by adding some css attributes. 

::: code-group
```html [.html]
<ul>
  <li>Item one</li>
  <li class="special">Item two</li> // 'Item two' will be stylized
  <li>Item <em>three</em></li>
</ul>
```
```css [.css]
.special {
  color: orange;
  font-weight: bold;
}
```
:::
### Styling things based on their location in a document

::: code-group
```html [.html]
<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item <em>three</em></li>  // 'three' will be stylized
</ul>
```
```css [.css]
li em {
  color: rebeccapurple;
}
```
:::
### Styling things based on state
```css
a:link {
  color: purple;
}
a:visited {
  color: green;
}
a:hover {
  color: orange;
}
```

### Selectors & combinators
```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span {
}

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p {
}
```

## SASS
* [Documentation](https://sass-lang.com/documentation/)

### Variables
Sass uses the `$` symbol to define a variable.

::: code-group
```sass [sass]
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```
```css [equiv.css]
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```
:::

### Nesting
Sass let you nest your CSS selectors in a way that follows the same visual hierarchy of your `.html`. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.
::: code-group
```sass [sass]
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block
```
```css [equiv.css]
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
```
:::

### Partials/Modules
You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files.
You might name it something like `_partial.scss`. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the `@use` rule.


::: code-group
```sass [base.sass]
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```
```sass [styles.sass]
@use 'base'

.inverse
  background-color: base.$primary-color
  color: white
```
``` css [equiv.css]
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}

.inverse {
  background-color: #333;
  color: white;
}
```
:::

### Mixins
::: code-group
``` sass [sass]
@mixin theme($theme: DarkGray)
  background: $theme
  box-shadow: 0 0 1px rgba($theme, .25)
  color: #fff

.info
  @include theme

.alert
  @include theme($theme: DarkRed)

.success
  @include theme($theme: DarkGreen)
```
``` css [equiv.css]
.info {
  background: DarkGray;
  box-shadow: 0 0 1px rgba(169, 169, 169, 0.25);
  color: #fff;
}

.alert {
  background: DarkRed;
  box-shadow: 0 0 1px rgba(139, 0, 0, 0.25);
  color: #fff;
}

.success {
  background: DarkGreen;
  box-shadow: 0 0 1px rgba(0, 100, 0, 0.25);
  color: #fff;
}
```
:::

### Extend/Inheritance
Using `@extend` lets you share a set of CSS properties from one selector to another.

::: code-group
``` sass [sass]
/* This CSS will print because %message-shared is extended. */
%message-shared
  border: 1px solid #ccc
  padding: 10px
  color: #333

// This CSS won't print because %equal-heights is never extended.
%equal-heights
  display: flex
  flex-wrap: wrap

.message
  @extend %message-shared

.success
  @extend %message-shared
  border-color: green
```
```css [equiv.css]
/* This CSS will print because %message-shared is extended. */
.message, .success, .error, .warning {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```
:::