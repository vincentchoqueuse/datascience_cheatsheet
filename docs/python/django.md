# Django 

Django is a free and open-source, web framework that follows the model–template–views (MTV) architectural pattern.

* [Documentation](https://docs.djangoproject.com/)

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


