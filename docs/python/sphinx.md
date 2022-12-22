# Sphinx

Sphinx is a documentation generator written and used by the Python community.

* [Documentation](https://www.sphinx-doc.org/en/master/)


## Folder structure

In the following, we assume that your python module lives in a folder `src`. To clearly separate the source code from the documentation, create a `docs` folder at the same level of your `src` folder.

```
.
├── docs
├── src
│   │   __init__.py
│   └── core.py
...
```


## Getting Started

In the `docs` folder, run the following command

```bash 
sphinx-quickstart
```

In the same folder, create a subfolder called `/api` and add a file called `api/index.rst`. 

### `docs` Structure

Your `docs` directory should have the following structure.

```
.
├── Makefile
├── _build
├── _static
├── _templates
├── api
│   └── index.rst
├── conf.py
├── index.rst
└── make.bat
```

Change the content of the `index.rst` and `api/index.rst` as follows.

::: code-group
```rst [index.rst]
Welcome to your documentation!
====================================

.. toctree::
   :maxdepth: 2
   :caption: Contents:

   api/index

```

```rst [api/index.rst]
API
===

```
:::


### Build the documentation

The following command build an HTML version of the documentation.

```bash 
make html
```

The documentation is then located in your `_build/` directory. Simply open the file `_build/html/index.html` with your browser.

### Pydata theme

It if possible to change the theme of the documentation.

* Install the pydata theme

``` bash
pip install pydata-sphinx-theme
```

* Change the html_theme variable in the `config.py` file as follows

```python
...
html_theme = "pydata_sphinx_theme"
...
```

## Auto Documentation 

The `sphinx.ext.autodoc` can import the modules you are documenting, and pull in documentation from docstrings in a semi-automatic way.

### Configuration file 

To activate the `sphinx.ext.autodoc` extension, change the following files as


::: code-group
```python [docs/conf.py]
import os # uncomment this line
import sys # uncomment this line
sys.path.insert(0, os.path.abspath('../src')) # where the source code lives

...
extensions = ['sphinx.ext.autodoc']
...
```

```python [docs/api/index.rst]
API
===

.. automodule:: src.core
   :members:

```

```python [src/core.py]
def show_message(name):
    """show_message
    
    print a message
    """
    print("Hello {}".format(name))

```
:::
