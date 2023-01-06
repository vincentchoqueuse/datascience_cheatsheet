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

Django can also be used as a backend REST server, usually with the help of [Django REST framework](https://www.django-rest-framework.org/)
that provides tools to easily define a REST API without much more code than the models (if the API is simple).

## Basic Usage

### Create Project

To create a `mysite` project, run : 

```bash
django-admin startproject mysite
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
./manage.py startapp polls
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
./manage.py runserver
```

This launches a development server at <a href="http://localhost:8000/" target="_blank" rel="noreferrer">http://localhost:8000/</a> by default.

A useful tool for development is the [Django debug toolbar](https://django-debug-toolbar.readthedocs.io/en/latest/)
that allows to easily see what route, view and SQL was used for requests.
It adds a sidebar to every HTML page that includes a `</body>` tag.

To get debug information about pages without a closing `</body>` tag, you can use the history tab in the toolbar of another page running on the same development server.


### Create a model

Every model class corresponds to a table in your database.
A primary key is created automatically, named `id` and of type `BigIntegerField`.
It is used for relations created with `ForeignKey`, `OneToOneField` and `ManyToManyField`.

A simple model looks like this:

```python
from django.db import models

class Book(models.Model):
    # define the fields here
    title = models.CharField(max_length=255)
    page_count = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    personal_comment = models.TextField(blank=True)
```

`DecimalField` are nice to get exact fractional values that cannot be represented by floating point numbers.
They are fixed point numbers and require the decimal place to be fixed in place.

The `null` parameter is `False` by default.
To allow the value to be a SQL `NULL`, aka python's `None`, you need to add `null=True` to the field definition.

For textual fields, the `blank` parameter allows the value to be the empty string, it is `False` by default.
It is not recommended to use both `null=True` and `blank=True` on a field as there are then two representation of "empty" for that field, which makes it harder to query for empty values.

**After editing any model** you need to create the migration files by running:
```bash
./manage.py makemigrations
```

You then need to apply all created migrations to the database by running the following command:

```bash
./manage.py migrate
```


### The Django template engine

Django has its own template engine that is very similar to Jinja.
See the Jinja cheatsheet for more info about the template syntax.

Some features from Jinja are not available, notably the ability to remove whitespace before and after jinja tags with the `-` prefix/suffix.
It is possible to use the Jinja engine instead of the Django engine by changing [the template configuration](https://docs.djangoproject.com/en/4.1/ref/settings/#templates) in the settings.

