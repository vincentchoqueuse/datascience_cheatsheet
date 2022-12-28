# Conda

Conda is an open-source,cross-platform, language-agnostic package manager and environment management system. It was developed to solve difficult package management challenges faced by Python data scientists.

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

