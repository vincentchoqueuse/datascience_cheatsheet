# Jinja

Jinja is a template engine for the Python programming language. Jinja is Flask's default template engine.

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


##  Variable Filters

```html
{{ message | upper  }}
```
  
## if Statements

```html
{% if message == 'hello' %}
Demat
{% else %}
Kenavo
{% endif %}
```

## for Loops

```html
{% for my_item in my_list %}
<li>my_item</li>
{% endfor %}
```

## Template Inheritance


::: code-group
```html [base.html]
<html>
  <body>
    {% block content %}{% endblock %}
  </body>
</html>
```

```html [index.html]
{% extends base.html %}

{% block content %}
    <h1>My Webpage</h1>
    {{ message }}
{% endblock %}
```

:::
