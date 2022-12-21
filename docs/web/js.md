# Javascript

* [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Vanilla UX

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