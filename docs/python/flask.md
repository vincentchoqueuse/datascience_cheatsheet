# Flask
* [Documentation](https://flask.palletsprojects.com/)

## Create an environment
Create a project folder and a `venv` folder within:
```
$ mkdir myproject
$ cd myproject
$ python3 -m venv venv
```

Before you work on your project, activate the corresponding environment:
```
. venv/bin/activate
```

## Installation
Within the activated environment, use the following command to install Flask:
```
pip install Flask
```

This `app.py` file will serve as a minimal example of how to handle HTTP requests. Inside it, you’ll import the [Flask object](https://flask.palletsprojects.com/en/1.1.x/api/#flask.Flask), and create a function that returns an HTTP response.


## Basic application
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
```
flask run
```

Open a browser and type in the URL `http://127.0.0.1:5000/`, you will receive the string `Hello, World!` as a response, this confirms that your application is successfully running.