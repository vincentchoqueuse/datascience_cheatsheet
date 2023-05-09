# Jinja

* [Documentation](https://jinja.palletsprojects.com/)

Jinja2 is a popular template engine for Python web applications that allows developers to generate dynamic HTML, XML, or other markup documents using templates. It is widely used in popular Python web frameworks such as Flask, Django, and Pyramid. Jinja2 uses a template language that is designed to be easy to read and write, with syntax that is similar to other programming languages like Python. It allows developers to define templates that contain placeholders for dynamic data, which can be filled in at runtime with values from Python code.

Some of the key features of Jinja2 include:

* Template inheritance, which allows developers to create base templates that can be extended and customized by other templates.
* Conditional statements and loops, which allow for the creation of dynamic content in templates.
* Support for filters, which are functions that can be used to modify data before it is displayed in a template.
* Autoescaping of output, which helps protect against cross-site scripting (XSS) attacks.

Jinja2 is a powerful and flexible template engine that makes it easy to create dynamic web pages in Python web applications. It is widely used and well-documented, making it a popular choice for many web developers.


## Starter Template

### Project structure

```
.
├── app.py
└── templates
    └── index.html
```

::: code-group

```python [app.py]
from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader('templates')) # loading the jinja2 environment
template = env.get_template("index.html")
content = template.render(message = "Hello World !")
print(content)
```

```html [templates/index.html]
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
:::

It is also possible to dump the complete stream into a file or file-like object. Per default strings are written, if you want to encode before writing specify an encoding.

```python
template.stream(message = "Hello World !").dump('hello.html')
```


##  Variable Filters

In Jinja2, variable filters are a feature that allows you to modify the value of a variable before it is displayed in a template. Variable filters are applied to a variable by appending a pipe symbol | to the variable, followed by the name of the filter and any arguments.

```html
{{ message | upper  }}
```
  
Jinja2 comes with many built-in filters, such as capitalize, lower, upper, truncate, and safe. You can also define your own custom filters by creating a Python function and registering it with Jinja2.

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

You can access the index of a loop iteration using the `loop.index` variable.

```html
{% for my_item in my_list %}
<li>my_item {{loop.index}}</li>
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
