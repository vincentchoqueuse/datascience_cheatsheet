# Jinja

* [Documentation](https://jinja.palletsprojects.com/)


## Starter Template


```html
# index.html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>My Webpage</title>
    </head>
    <body>
        <h1>My Webpage</h1>
        {{ message }}
    </body>
</html>
```

#### Template Rendering

```python
from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader('templates')) # loading the jinja2 environment
template = env.get_template("index.html")
content = template.render(message = "Hello World !")
print(content)
```