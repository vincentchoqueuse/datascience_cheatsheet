# Seaborn

* [Documentation](https://seaborn.pydata.org)

Seaborn is a Python data visualization library based on Matplotlib, that provides a high-level interface for creating informative and attractive statistical graphics. Seaborn makes it easy to create complex visualizations with concise and intuitive syntax, and provides a wide variety of built-in color palettes and plotting functions for common statistical plot types, such as scatter plots, line plots, bar plots, and heatmaps.

In addition, Seaborn includes specialized visualization functions for statistical analysis such as regression plots, distribution plots, and categorical plots. These functions enable users to easily visualize relationships and patterns in data, and to perform exploratory data analysis. Seaborn is built on top of Matplotlib, and can be used in conjunction with it to create custom visualizations that are not available in Seaborn.

## Getting Started

### Import Library

```python
import matplotlib.pyplot as plt
import seaborn as sns
```

### Simple Example

```python
import matplotlib.pyplot as plt
import seaborn as sns

sns.set_theme()
data = sns.load_dataset("titanic")
sns.distplot(data["age"])
plt.title("title")
plt.show()
```

This code is using two Python libraries for data visualization: `matplotlib` and `seaborn`. 

* The third line loads the titanic dataset from the seaborn library and assigns it to the variable data.
* The fourth line creates a histogram (distribution plot) of the "age" column of the data DataFrame using sns.distplot().



## Continuous Distributions

Seaborn provides several functions to plot continuous distributions such as Histogram (`sns.histplot()`), Kernel density plot (`sns.kdeplot()`), and Rug plot (`sns.rugplot()`).

### Histogram

```python
sns.histplot(data=x)
```

### Empirical Cumulative Distribution Function (CDF)

```python
sns.histplot(data=x, cumulative=True, label="exp")
```



## Discrete Distributions

### Histogram

```python
sns.histplot(data=x, stat="density", discrete=True)
```

## Copy & Paste Plots

### Plot empirical and theoretical pdf

The following code demonstrates how to plot a histogram and a probability density function (PDF) of a normally distributed random variable using the Seaborn library.

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