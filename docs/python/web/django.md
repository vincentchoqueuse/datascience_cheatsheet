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

This launches a development server at `http://localhost:8000/` by default.

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

### Foreign keys

When referencing a model in another model, one might use a foreign key field. In the following example, Authors write Articles, Articles are created in different Categories, and Comments are made to Articles.

```python
class Author(models.Model):
    name = models.CharField(max_length=255)

class Category(models.Model):
    title = models.CharField(max_length=255)

class Article(models.Model):
    title = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    author = models.ForeignKey(Category, null=True on_delete=models.SET_NULL)

class Comment(models.Model):
    content = models.CharField(max_length=255)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
```

We expect different behaviors when the referenced object is deleted.

- `SET_NULL` : When an `Author` is deleted, we want to keep any article referencing that author as an authorless article. The `Article` author field is set to `null`, indicating an unknown author.
- `CASCADE` : When an `Article` is deleted, the associated comments are meaningless : any `Comment` referencing this article therefore self-destructs.
- `PROTECT` : When a category is deleted, any `Article` referencing this `Category` will **prevent** the deletion of the said category.

[More actions](https://docs.djangoproject.com/en/4.1/ref/models/fields/#django.db.models.ForeignKey.on_delete) are possible for more specific situations.

### Simple Lookups

Django `filter` method take one or more [Field lookup](https://docs.djangoproject.com/en/3.0/ref/models/querysets/#field-lookups) as an argument.

> *From django docs* : Multiple parameters are joined via AND in the underlying SQL statement.

```python
Book.objects.filter(price=12.56)  # price == 12.56
Book.objects.filter(price__range=(10, 15))  # 10 <= price <= 15
Book.objects.filter(price__gte=15)  # price <= 15

# price > 15, and no title ending with a question mark
Book.objects.filter(price__lt=15).exclude(title__endswith="?")

# price > 10 AND price < 15
Book.objects.filter(price__gt=10, price__lt=15)

# Title contains "nuit", case insensitive.
Book.objects.filter(title__icontains="nuit") 
```

### More complex lookups

Using [Q objects](https://docs.djangoproject.com/en/3.0/topics/db/queries/#complex-lookups-with-q) is the recommended way of doing more complex lookups.

```python

# A cheap book (price<3) OR a small book (page_count<50)
# That starts with "The tales of..."

Book.objects.filter(
    Q(page_count__lt=50) | Q(price__lt=2),
    title__startswith="The tales of"
)
```

> *From django docs* : Lookup functions can mix the use of Q objects and keyword arguments. All arguments provided to a lookup function (be they keyword arguments or Q objects) are “AND”ed together. However, if a Q object is provided, it must precede the definition of any keyword arguments.

### The Django template engine

Django has its own template engine that is very similar to Jinja.
See the Jinja cheatsheet for more info about the template syntax.

Some features from Jinja are not available, notably the ability to remove whitespace before and after jinja tags with the `-` prefix/suffix.
It is possible to use the Jinja engine instead of the Django engine by changing [the template configuration](https://docs.djangoproject.com/en/4.1/ref/settings/#templates) in the settings.

