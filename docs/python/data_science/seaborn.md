# Seaborn

* [Documentation](https://seaborn.pydata.org)

Seaborn is a visualization library based on Matplotlib that provides a high-level interface for drawing attractive statistical graphics.

## Import Library

```python
import matplotlib.pyplot as plt
import seaborn as sns
```

## Continuous Distributions


### Histogram

```python
sns.histplot(data=x)
```

### Empirical Cumulative Distribution Function (CDF)

```python
sns.histplot(data=x, cumulative=True, label="exp")
```

#### Plot empirical and theoretical pdf

```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy.stats import norm

sns.set_theme()
rv = norm(loc=1, scale=3)
x = rv.rvs(size=10000)  # rv realisation

vect = np.arange(-10,10,0.1)
ax = sns.histplot(data=x, stat="density")   # histogram
ax.plot(vect, rv.pdf(vect), "r", label="pdf") # theoretical pdf
ax.set(xlabel="x");
ax.legend()
```

## Discrete Distributions

### Histogram

```python
sns.histplot(data=x, stat="density", discrete=True)
```