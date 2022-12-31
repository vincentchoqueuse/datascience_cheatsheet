# HTML

The HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.

* [Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)

## Basic Usage

### HTML for structuring content

To structure the page content, `HTML` provides dedicated tags :

* header: `<header>`
* navigation bar: `<nav>`
* main content: `<main>`, with various content subsections represented by `<article>`, `<section>`, `<div>` and `<span>` elements
* sidebar: `<aside>`; often placed inside `<main>`
* footer: `<footer>`


### Starter Template

::: code-group
```html [index.html]
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```
:::

### Images

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

* `src` is your relative path to the image,
* `alt` is a text description of your image.

### Marking up text

#### Headings

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

#### Paragraphs

```html
<p>This is a paragraph</p>
```

#### Lists

`<ul>` determine the beginning and the end of the list and `<li>` are list elements.
```html
<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>
```

You can also create ordered lists using the `<ol>` tag

```html
<ol>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ol>
```


### Links

```html
<a href="http://y2u.be/dQw4w9WgXcQ" target="_blank">My favorite video</a>
```

* `src` is your link path.
* `target` is an html attribute that specifies where to open the linked document:
  * `target="_self"` [default]: Opens the linked document in the same frame as it was clicked
  * `target="_blank"`: Opens the linked document in a new window or tab

### Emphasis

```html
<p>Only this <em>word<em> is amphasized</p>
<p>This <i>one<i> is in italic</p>
<p>The <u>second<u> is in underlined</p>
<p>The <b>last</b> is bold</p>
```
::: warning
If you just want to put style on your text, it is preferable to do it with [`css`](/web/css)
:::

## Advanced Usage

### Applying CSS and JavaScript to HTML
::: code-group
```html [index.html]
<!DOCTYPE html>
<html lang="en-US">
  <head>
    ...
    <link rel="stylesheet" href="rel/path/to/stylesheet.css"/> // [!code ++]
    <script type="text/javascript" src="rel/path/to/script.js"></script> // [!code ++]
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```
:::

### Adding SVG

For a simple website maintenance and to change your `.svg` easily it is preferable to use `<img>` tag. 
``` html
<img src="rel/path/to/image.svg"/>
```