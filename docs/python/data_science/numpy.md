# Numpy

* [Documentation](https://numpy.org/doc/stable/reference/index.html)


NumPy (Numerical Python) is a Python library used for working with arrays and numerical operations. It provides a powerful N-dimensional array object, and a variety of functions and tools for working with these arrays, including mathematical, logical, shape manipulation, sorting, selecting, I/O, discrete Fourier transforms, basic linear algebra, basic statistical operations, and more.

NumPy arrays are efficient and fast, and allow for vectorized operations which can speed up calculations significantly. This makes NumPy a popular library for scientific computing and data analysis in Python. In addition, NumPy can be used in conjunction with other Python libraries for data manipulation and analysis, such as Pandas and Matplotlib.


## Getting Started

### Import

```python 
import numpy as np
```

Numpy introduces a type called `array`.

### Simple Example 

To demonstrate the advantages of using the `array` type, let's compare generating a sine wave with a 5 Hz fundamental frequency using regular Python and the Numpy library.

#### Naive Python implementation

Using naive Python, a simple way to create a sine wave is to use a `for` loop.

```python 
from math import sin, pi

Fs = 0.01 # sampling frequency
x = []  # create an empty list
for n in range(100):
    x_temp = sin(2*pi*5*n/Fs)
    x.append(x_temp)
```

#### Numpy implementation

By using Numpy's vectorized operations, you can perform mathematical operations on entire arrays at once, without the need for explicit `for` loops. As compared to Naive Python implementation, this can result in faster and more concise code.


```python 
import numpy as np

Fs = 0.01 # sampling frequency
n = np.arange(100)  # create and array with evenly spaced values within [0, 100) with step 1
x = np.sin(2*np.pi*5*n/Fs)
```

## Array Creation

### Custom elements

A Numpy array is usually created from a list of numbers.

#### 1D array

```python 
my_array = np.array([2, 12, 3, 4])
```

This syntax creates a 1D Array from a list of numbers. It is possible to impose the type of the array element using 

```python 
my_array = np.array([2, 12, 3, 4], dtype = np.complex)
```

#### 2D array

You can also convert a list of lists into a 2D array

```python 
my_array = np.array([[2, 12, 3, 4], [1, 4, 3, 2]])
```


### Automatic elements

For large arrays, it can be tedius to define each element of the array one by one. To solve this problem, Numpy offers a large collection of functions for the creation of arrays with particular structures.

#### Empty array

```python 
my_array = np.zeros((3,4))
#[[0. 0. 0. 0.]
# [0. 0. 0. 0.]
# [0. 0. 0. 0.]]
```

This syntax creates an empty 2D array with 3 rows and 4 columns filled with zeros.

#### Array filled with ones

```python 
my_array = np.ones((3, 4))
#[[1. 1. 1. 1.]
# [1. 1. 1. 1.]
# [1. 1. 1. 1.]]
```

This syntax creates a 2D array with 3 rows and 4 columns filled with ones.

::: tip
The syntax: `10*np.ones((3,4))` creates a Numpy array filled with 10.
:::


#### Identity Array 

```python 
my_array = np.eye(3)
#[[1. 0. 0.]
# [0. 1. 0.]
# [0. 0. 1.]]
```

This syntax creates a 2D arrays with ones on the diagonal and zeros elsewhere.

#### Diagonal Array

```python 
my_array = np.diag((1, 2, 3))
#[[1 0 0]
# [0 2 0]
# [0 0 3]]
```

This syntax creates a 2D diagonal arrays from a list containing the diagonal elements.


#### Array with evenly spaced values within a given interval

```python 
my_array = np.arange(10)
# [0 1 2 3 4 5 6 7 8 9]
```

This syntax creates a 1D array of values ranging from 0 to 10 (excluded) with step 1.

```python 
my_array = np.arange(4, 10, 0.5)
# [4.  4.5 5.  5.5 6.  6.5 7.  7.5 8.  8.5 9.  9.5]
```

This syntax creates a 1D array of values generated within the half-open interval `[4, 10)`, with spacing between values given by `0.5`.

#### Array with evenly spaced numbers over a specified interval

```python 
my_array = np.linspace(1.0, 10.0, num=5)
# [ 1.    3.25  5.5   7.75 10.  ]
```

This syntax creates a 1D array of 5 evenly spaced values generated within the interval `[1, 10]`. 

## Array Properties and Manipulation

Let us consider the following array 

```python 
my_array = np.ones((3, 4))
```

### Shape, dimensions and size

It is possible to inspect the shape of an array using the following attributes

```python
my_array.shape  # (3, 4)
my_array.ndim   # 2
my_array.size   # 12
my_array.dtype  # dtype('float64')
```

## Array Operations

Let us consider the following arrays 

```python 
my_array1 = np.array([[1, 2], [3, 4]])
my_array2 = np.array([[0, -1], [1, 0]])
```

It is possible to perform some operations on array using the following mathematical operators

### Addition / Subtraction 

```python 
res1 = my_array1 + my_array2  
#[[1 1]
# [4 4]]

res2 = my_array1 - my_array2 
#[[1, 3] 
# [2, 4]]
```

### Element wise multiplication

```python 
res1 = my_array1 * my_array2  
#[[ 0, -2]]
# [ 3,  0]]
```

### Matrix multiplication

```python 
res1 = my_array1 @ my_array2  
#[[ 2 -1]
# [ 4 -3]]
```