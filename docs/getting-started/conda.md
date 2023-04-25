# Conda

Conda is an open-source package management system and environment management system for installing and managing software packages and dependencies. It is used primarily in the Python programming language ecosystem, but can also be used for other programming languages and frameworks.

Conda allows users to create and manage isolated environments with specific versions of Python and other packages, allowing for more flexible and reproducible software development workflows. It also includes a powerful package manager that allows users to easily install, update, and remove software packages, including complex dependencies.

Conda is commonly used in data science, scientific computing, and machine learning, where it is often used to manage complex software stacks and dependencies. It is available as a standalone application, as well as part of the Anaconda distribution, which includes a number of pre-installed packages commonly used in data science and scientific computing.

## Difference between conda and pip

Conda and pip are both package management systems for Python, but they have some key differences in their functionality and intended use cases.

* Pip is a simple package manager that is used primarily for installing and managing Python packages from the Python Package Index (PyPI). It installs packages in the user's default Python environment, and does not provide any built-in functionality for managing dependencies or creating isolated environments.

* Conda, on the other hand, is a more powerful package management system that is designed for managing complex software stacks and dependencies. It allows users to create and manage isolated environments with specific versions of Python and other packages, and includes a powerful package manager that can install, update, and remove packages, including complex dependencies. Another key difference between Conda and pip is that Conda can manage packages written in multiple programming languages, not just Python. It can also manage non-Python dependencies, such as system libraries and binaries.

## Installation

* Miniconda: https://docs.conda.io/en/latest/miniconda.html

## Managing Environment

### Get list of environments

```
conda env list
```

This command returns the list of installed environment. The active environment is specified by the symbol `*`.

```
base                  *  /opt/anaconda3
py_37                    /opt/anaconda3/envs/py3_7
my_env                   /opt/anaconda3/envs/my_env
```


### Install an environment

To create an environment called `my_env` with python 3.9, run 

```
conda create --name my_env python=3.9
```

### Activate an environment

```
conda activate my_env
```

### Desactivate an environment

```
conda deactivate
```

## Package Management

### Get list of packages

```
pip list
```

### Install a new package

```
conda install numpy
```

or

```
pip install numpy
```

