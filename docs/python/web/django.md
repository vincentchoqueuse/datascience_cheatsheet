# Django 

Django is a free and open-source, web framework that follows the model–template–views (MTV) architectural pattern.

* [Documentation](https://docs.djangoproject.com/)

In a model-template-views pattern as used in Django,
the [model](https://docs.djangoproject.com/en/4.1/topics/db/) is used to interact with a database,
the [templates](https://docs.djangoproject.com/en/4.1/topics/templates/) are used to define the rendered HTML,
and the [views](https://docs.djangoproject.com/en/4.1/topics/http/views/) are used as a glue between them, doing the processing.
Other useful tools are [forms](https://docs.djangoproject.com/en/4.1/topics/forms/),
that define a way to quickly validate data coming from the outside,
and the [admin site](https://docs.djangoproject.com/en/4.1/ref/contrib/admin/) that allows to easily browse the data contained in the models once configured.

Django can also be used as a backend REST server, usually with the help of [`djangorestframework`](https://www.django-rest-framework.org/)
that provides tools to easily define a REST API without much more code than the models (if the API is simple).

## Basic Usage

### Create Project

To create a `mysite` project, run : 

```bash
$ django-admin startproject mysite
```

This command will create the following directory structure :

```
mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

### Create App

To create a `polls` app, run in the `mysite` folder :

```bash
$ python manage.py startapp polls
```

This command will create the following directory structure  :

```
polls/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    urls.py
    views.py
```


### Run development Server 

```bash 
$ python manage.py runserver
```

This launches a development server at <a href="http://localhost:8000/" target="_blank" rel="noreferrer">http://localhost:8000/</a> by default.

A useful tool for development is the [Django debug toolbar](https://django-debug-toolbar.readthedocs.io/en/latest/)
that allows to easily see what route, view and SQL was used for requests.
It adds a sidebar to every HTML page that includes a `</body>` tag.

To get debug information about pages without a closing `</body>` tag, you can use the history tab in the toolbar of another page running on the same development server.
