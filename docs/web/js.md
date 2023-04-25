# JavaScript

JavaScript is a high-level programming language that is commonly used to add interactivity and dynamic behavior to web pages.

JavaScript is a client-side language, meaning it is executed by the user's web browser, rather than on a web server. This allows JavaScript to be used to create interactive user interfaces and dynamic web pages, without requiring a round-trip to the server for every user action.

JavaScript is used to add functionality to web pages, such as validating form data, animating page elements, and updating content dynamically without reloading the entire page. It can also be used to create more complex web applications, such as online games, chat applications, and collaborative editing tools.

In addition to its use in web development, JavaScript can also be used in other environments, such as server-side with Node.js, or in desktop and mobile applications using frameworks like Electron and React Native.

* [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Getting Started

### Starter Template

```html
<!DOCTYPE html>
<html lang="en-us">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>My test page</title>
    </head>
    <body>
        <h1>Hello, world!</h1>
        <input type="number" value="0" id="my_number">
        <script>
            const my_number = document.querySelector("#my_number");
            my_number.addEventListener('input', updateValue);

            function updateValue(e) {
                alert(e.target.value);
            }
        </script>
    </body>
</html>
```