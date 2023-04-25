# Matplotlib

Matplotlib is a Python data visualization library used to create high-quality static, animated, and interactive visualizations in Python. It is one of the most widely used libraries for data visualization in Python and provides a variety of tools for creating a wide range of visualizations such as line plots, scatter plots, bar plots, histograms, and more. Matplotlib allows users to create publication-quality visualizations with a minimal amount of code, and also provides a great deal of customization options for more advanced users. The library is highly extensible and can be integrated with other Python libraries, making it a powerful tool for data visualization and analysis.

* [Documentation](https://matplotlib.org/stable/index.html)


## Basic Usage

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

## Copy & Paste Plots

### Analysis of LTI systems

#### Poles and Zeros Diagram

```python
import matplotlib.pyplot as plt
from scipy.signal import lti

# create data
sys = lti([-0.5, 1], [1, 1, 1])
poles = sys.poles
zeros = sys.zeros

# create plot
plt.plot(poles.real, poles.imag, "x", label="poles")
plt.plot(zeros.real, zeros.imag, "o", label="zeros")

# update axes (name / type) / add legend
plt.xlabel("Real Part")
plt.ylabel("Imag Part")
plt.legend()

plt.show()
```

#### Time response

```python
import matplotlib.pyplot as plt
from scipy.signal import lti

# create data
sys = lti([1], [1, 1])
t, s = sys.step()

# create plot
plt.plot(t, s)

# update axes (name / type) / add legend
plt.xlabel("time [s]")
plt.ylabel("response")

plt.show()
```

#### Bode Plot

```python
import matplotlib.pyplot as plt
import numpy as np
from scipy.signal import lti

# create data
sys = lti([1], [1, 1]) 
w,Hjw = sys.freqresp()
module = np.abs(Hjw)
phase = 180*np.angle(Hjw)/np.pi   #convert radian to degree

# create plot
plt.subplot(2,1,1)
plt.loglog(w, module)
plt.ylabel("Magnitude")
plt.grid()
plt.subplot(2,1,2)
plt.semilogx(w, phase)

# update axes (name / type), grid
plt.ylabel("Phase [deg]")
plt.xlabel("w [rad/s]")
plt.grid()

plt.show()
```