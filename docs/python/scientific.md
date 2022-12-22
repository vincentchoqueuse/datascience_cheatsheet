# Scientific Stack

## Numpy

* [Documentation](https://numpy.org/doc/stable/reference/index.html)

### Import

```python 
import numpy as np
```

## Scipy

* [Documentation](https://docs.scipy.org/doc/scipy/reference/index.html)


## Matplotlib

* [Documentation](https://matplotlib.org/stable/api/index.html)

### Import

```python 
import matplotlib.pyplot as plt
```

### Basic Usage 

```python
import matplotlib.pyplot as plt

x = [0, 1]
y = [0, 2]
plt.plot(x, y)
plt.xlabel('x')
plt.ylabel('y')
```

## Examples

### Figure Plotting

```python
import numpy as np
import matplotlib.pyplot as plt

fs = 100
t = np.arange(0, 1, 1/fs)
x = np.sin(2*np.pi*3*t) # 3Hz sine wave
plt.plot(t, s)
plt.xlabel('t [s]')
plt.ylabel('x(t)')
```

### Step Response of LTI Systems

```python 
from scipy.signal import lti 

sys = lti([2], [3, 1]) # first order system
t, s = sys.step()
plt.plot(t, s)
plt.xlabel('t [s]')
plt.ylabel('s(t)')
```


### Bode Diagram of LTI Systems

```python 
from scipy.signal import lti 

sys = lti([2], [3, 1]) # first order system
w,Hjw = sys.freqresp()
H_mod = np.abs(Hjw)
H_phase = 180*np.angle(Hjw)/np.pi     #convert radian to degree

# plot figure
plt.subplot(2,1,1)
plt.loglog(w,H_mod)
plt.ylabel("Magnitude")
plt.grid()
plt.subplot(2,1,2)
plt.semilogx(w,H_phase)
plt.ylabel("Phase [deg]")
plt.xlabel("w [rad/s]")
plt.grid()
```
