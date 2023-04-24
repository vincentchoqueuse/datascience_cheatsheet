# Flask

Flask is a lightweight Python web framework used for building web applications quickly and easily. It provides a minimalistic and flexible approach to web development, and is often used for small to medium-sized web applications and prototypes.

Flask follows a microframework approach, meaning that it provides only the basic functionality needed for web development, such as request handling and routing, while leaving more advanced features to extensions and external libraries. This makes Flask highly customizable and extensible, and allows developers to choose the tools and libraries they want to use for a specific project.

Flask includes a built-in development server, as well as a variety of tools and libraries for handling common web development tasks, such as handling request and response data, working with cookies and sessions, and managing databases. It also includes a powerful templating engine that allows for easy creation of dynamic and responsive web pages.

Flask is a popular choice for web development in Python due to its simplicity, flexibility, and extensibility. It is often used for small to medium-sized web applications and prototypes, and can be easily scaled up as needed using extensions and external libraries.



* [Documentation](https://flask.palletsprojects.com/)


## Simple Application

### Installation

Use the following command to install Flask:
```bash
pip install Flask
```

Create a `my_flask_project` directory : 
```bash
mkdir my_flask_project
cd my_flask_project
```

### Basic Usage

This `app.py` file will serve as a minimal example of how to handle HTTP requests. Inside it, you need to import the [Flask object](https://flask.palletsprojects.com/en/1.1.x/api/#flask.Flask), and create a function that returns an HTTP response.

::: code-group
```python [app.py]
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == '__main__':
    app.run(debug=True, host="127.0.0.1", port=5000)
```
:::

Lastly, run the application using the flask `run` command in your terminal:

```bash
flask run
```

Open a browser and type in the URL `http://127.0.0.1:5000/`, you will see the string `Hello, World!` as a response, this confirms that your application is successfully running.

### Using static HTML

First create a `templates` directory that will contain all your `.html` files.

```bash
mkdir templates
```

Write an empty `index.html` file in this folder. Your project tree should looks like this :

```
my_flask_project/
├── ...
├── templates/
│   └── index.html
└── app.py
```

Modify the `app.py` and `index.html` to take into account our changes.

::: code-group
```python [app.py]
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

...
```

```html [templates/index.html]
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flask App</title>
</head>

<body>
    <p>Hello World from index.html</p>
</body>

</html>
```
:::

The `index()` view function in the file `app.py` returns the result of calling `render_template()` with index.html as input argument, this tells `render_template()` to look for a file called `index.html` in the templates folder. The file will have a single view function that will be responsible for handling requests to the main `/` route.

By running your app with 

```bash
flask run # 127.0.0.1:5000
```
you should see the message `Hello World from index.html`.

### Using static files

After following the [previous section](#using-html-templates), create a `static` directory that will contain all your static files.
```bash
mkdir static
```
For example, add a `.ico` as [this one](https://www.enib.fr/images/favicon.ico) in the `static` directory. 
Your project tree should looks like this :

```
my_flask_project/
├── ...
├── static/
│   └── favicon.ico
└── app.py
```
Now let's modify the `index.html` file by adding :

::: code-group
```html [index.html]
...
<head>
    ...
    <link rel="shortcut icon" href="{{ url_for('static', filename='favicon.ico') }}">
</head>
...
```
:::

By running your app with 
```bash
flask run # 127.0.0.1:5000
```

you should see the icon next to your tab title.

## Jinja Template Engine

In practice, the content of an HTML page usually depends on some python variables. Instead of manually creating the HTML page from scratch using Python, it is common to use a template engine such as `Jinja2` (see [Cheatsheet](/python/web/jinja) ).

### Basis Usage


::: code-group
```python [app.py]
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    message = "index.html"
    return render_template('index.html', message=message)

@app.route('/user/<int:id>')
def index_user(id):
    message = "user {}".format(id)
    return render_template('index.html', message=message)

```

```html [templates/index.html]
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flask App</title>
</head>

<body>
    <p>Hello World from {{message}}</p>
</body>

</html>
```
:::

Run your app with `flask run`, open a browser and type the URL `http://127.0.0.1:5000/user/1998`. You will see the message `Hello World from user 1998`.


## Form Management

Web pages can contain forms that are processed at the server side. The classical scenario includes 5 steps : 

1. The user requests an HTML page using the GET method,
2. The server transmits the requested HTML page that contains an empty form,
3. The user completes the form and then clicks on a submit button,
4. The content of the form is then transmitted at the server side using the POST method,
5. The server replies by transmitting a new HTML page.

In Flask, this process can be simplified using the `Flask-WTF` library.

### Flask-WTF

Flask-WTF is a Python library that provides integration between the Flask web framework and the WTForms library for form validation and rendering. WTForms is a flexible forms validation and rendering library for Python web development that allows you to define and validate HTML forms in Python code.

Flask-WTF extends the WTForms library by providing additional functionality specifically for Flask, such as support for CSRF protection, file uploads, and server-side validation of forms. It also simplifies the integration of WTForms with Flask by providing a wrapper class FlaskForm that allows you to define forms as Python classes, and then use them in your Flask routes.

With Flask-WTF, you can easily create forms in Flask, define fields, and validate user inputs on the server-side before processing the data. It also includes support for rendering forms in templates using Jinja2, Flask's default template engine.


* [Documentation](https://flask-wtf.readthedocs.io/en/1.0.x/)

#### Installation

```bash
pip install flask-wtf
```

#### Basis Usage


::: code-group
```python [app.py]
from flask import Flask, render_template
from forms import UserForm
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(32)

@app.route('/', methods=('GET', 'POST'))
def index():
    form = UserForm()
    if form.validate_on_submit():
        username = "{} {}".format(form.firstname.data, form.lastname.data)
    else:
        username = "anonymous"

    return render_template('index.html', form=form, username=username)
```
```python [forms.py]
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class UserForm(FlaskForm):
    """Contact form."""
    firstname = StringField('Name', [DataRequired()])
    lastname = StringField('Email', [DataRequired()])
    submit = SubmitField('Submit')
```
```html [templates/index.html]
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flask App</title>
</head>

<body>
    <p>Hello {{username}}</p>

    <form method="POST" action="/">
    {{ form.csrf_token }}
    {{ form.firstname.label }} {{ form.firstname(size=20) }}
    {{ form.lastname.label }} {{ form.lastname(size=20) }}
    <input type="submit" value="Go">
    </form>
</body>

</html>
```
:::


## SQL Alchemy ORM

SQLAlchemy ORM (Object-Relational Mapping) is a Python library that provides a high-level interface for interacting with SQL databases. It allows developers to define database schema and relationships using Python classes and objects, which are then translated into SQL commands that can be executed against the database.

The ORM provides a set of tools for working with relational databases in a more object-oriented way, making it easier to manipulate data and work with complex relationships between tables. The key features of SQLAlchemy ORM include:

Declarative syntax for defining database schema and relationships using Python classes and objects.
Ability to work with multiple database engines, including SQLite, PostgreSQL, MySQL, and Oracle.
Automatic generation of SQL commands for common database operations such as inserts, updates, and deletes.
Support for lazy loading and caching of related data to improve performance.
Integration with popular Python web frameworks such as Flask and Django.

### Installation

Use the following command to install Flask-SQLAlchemy:

```bash
pip install -U Flask-SQLAlchemy
```



