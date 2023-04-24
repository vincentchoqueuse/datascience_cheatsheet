---
outline: 2
---

# Plotly

Plotly is a web-based data visualization library that allows users to create interactive and dynamic graphs, charts, and dashboards. It provides a user-friendly interface for creating a variety of data visualizations including line charts, scatter plots, bar charts, pie charts, heatmaps, and more.

With Plotly, users can easily manipulate and customize their visualizations with a drag-and-drop interface, and the ability to zoom, pan, and hover over data points to display more information. Plotly supports a variety of programming languages including Python, R, JavaScript, and MATLAB, making it a versatile tool for data scientists and developers. 

In this page, we present the Python warper for the Plotly library.

* [Documentation](https://plotly.com/python-api-reference/)


## Install 

You can install Plotly using pip by running the following command in your terminal:

```bash
pip install plotly
```

## Basic Usage

Once Plotly is installed, you can import it into your Python script and create a simple chart. Here's an example of creating a scatter plot with Plotly express.

```python
import plotly.express as px
import numpy as np

# Create a line plot
fs = 1000  # sampling frequency
f0 = 5  # fundamental frequency
t = np.arange(0, 1, 1/fs)
y = np.sin(2*np.pi*f0*t)
fig = px.line(x=t, y=y)

# Show the plot
fig.show()
```

## Layout Customization

It is possible to customize the plot by calling the `update_traces` and `update_layout` methods.

```python
import plotly.express as px
import numpy as np

# Create a plot
...

# update layout
fig.update_layout(xaxis_title='time [s]', yaxis_title='sinewave')

# Show the plot
fig.show()
```
