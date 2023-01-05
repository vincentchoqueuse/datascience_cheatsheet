# Flask

Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.

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

In practice, the content of an HTML page usually depends on some python variables. Instead of manually creating the HTML page from scratch using Python, it is quite common to use a template engine such as `Jinja`

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

### Documentation

* [Cheatsheet](/python/web/jinja)


## SQL ALchemy ORM

### Installation

Use the following command to install Flask-SQLAlchemy:

```bash
pip install -U Flask-SQLAlchemy
```



