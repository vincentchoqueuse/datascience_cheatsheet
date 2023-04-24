# Matplotlib

Matplotlib is a Python data visualization library used to create high-quality static, animated, and interactive visualizations in Python. It is one of the most widely used libraries for data visualization in Python and provides a variety of tools for creating a wide range of visualizations such as line plots, scatter plots, bar plots, histograms, and more. Matplotlib allows users to create publication-quality visualizations with a minimal amount of code, and also provides a great deal of customization options for more advanced users. The library is highly extensible and can be integrated with other Python libraries, making it a powerful tool for data visualization and analysis.

* [Documentation](https://matplotlib.org/stable/index.html)


### Import

```python 
import matplotlib.pyplot as plt
```


### Simple Example 

The following example shows how to plot a simple sine wave using `numpy` and `matplotlib`.

```python 
import numpy as np
import matplotlib.pyplot as plt

fs = 0.01 # sampling frequency
n = np.arange(100)  # create and array with evenly spaced values within [0, 100) with step 1
t = n/fs
x = np.sin(2*np.pi*5*t)

plt.plot(t, x)
plt.xlabel('time [s]')
plt.show()
```