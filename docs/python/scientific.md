# Scientific Stack

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