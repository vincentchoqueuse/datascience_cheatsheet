# Numpy

NumPy is a library that adds support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays

* [Documentation](https://numpy.org/doc/stable/reference/index.html)

## Getting Started

### Import

```python 
import numpy as np
```

Numpy introduces a type called `array`.

### Example 

To illustrate the benefit of the type `array`, let us consider the creation of a sinewave with 5 Hz fundamental frequency with both naive Python and the library Numpy.

#### Naive Python implementation

```python 
from math import sin, pi

Fs = 0.01 # sampling frequency
x = []  # create an empty list
for n in range(100):
    x_temp = sin(2*pi*5*n/Fs)
    x.append(x_temp)
```

#### Numpy implementation

```python 
import numpy as np

Fs = 0.01 # sampling frequency
n = np.arange(100)  # create and array with evenly spaced values within [0, 100) with step 1
x = np.sin(2*np.pi*5*t/Fs)
```

By using Numpy's vectorized operations, you can perform mathematical operations on entire arrays at once, without the need for explicit `for` loops. As compared to Naive Python implementation, this can result in faster and more concise code.

## Array Creation

### Custom content

A Numpy array is usually created from a list of numbers.


* 1D Array creation from a list of numbers:

```python 
my_array = np.array([2, 12, 3, 4])
```

* 1D Array creation using elements with predefined type :

```python 
my_array = np.array([2, 12, 3, 4], dtype = float)
```

* 2D array creation from a list of list :

```python 
my_array = np.array([[2, 12, 3, 4],[1, 4, 3, 2]])
```

### Specific content

For large arrays, it can be tedius to define each element of the array one by one. To solve this problem, Numpy offers a large collection of functions for the creation of arrays with particular structures.

#### Empty array

```python 
my_array = np.zeros((3,4))
```

* This syntax creates an empty 2D array with 3 rows and 4 columns filled with zeros.

#### Array filled with ones

```python 
my_array = np.ones((3,4))
```

* This syntax creates a 2D array with 3 rows and 4 columns filled with ones.


::: tip
You can use The syntax: `10*np.ones((3,4))` create a Numpy array filled with 10.
:::


#### Diagonal Array 

```python 
my_array = np.eye(5)
```

* This syntax creates a 2D arrays with ones on the diagonal and zeros elsewhere.


#### Array with evenly spaced values within a given interval

```python 
my_array = np.arange(10)
```

* This syntax creates a 1D array of values ranging from 0 to 10 (excluded) with step 1.

```python 
my_array = np.arange(1, 10, 0.5)
```
* This syntax creates a 1D array of values generated within the half-open interval `[1, 10)`, with spacing between values given by `0.5`.

#### Array with evenly spaced numbers over a specified interval

```python 
my_array = np.linspace(1.0, 10.0, num=5)
```

* This syntax creates a 1D array of 5 evenly spaced values generated within the interval `[1, 10]`. 