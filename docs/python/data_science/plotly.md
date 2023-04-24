---
outline: 2
---

# Plotly

Plotly is a web-based data visualization library that allows users to create interactive and dynamic graphs, charts, and dashboards. It provides a user-friendly interface for creating a variety of data visualizations including line charts, scatter plots, bar charts, pie charts, heatmaps, and more.

With Plotly, users can easily manipulate and customize their visualizations with a drag-and-drop interface, and the ability to zoom, pan, and hover over data points to display more information. Plotly supports a variety of programming languages including Python, R, JavaScript, and MATLAB, making it a versatile tool for data scientists and developers. 

In this page, we present the Python warper for the Plotly library.

* [Documentation](https://plotly.com/python-api-reference/)


## Installation

You can install Plotly using pip by running the following command in your terminal:

```bash
pip install plotly
```

## Basic Usage

Once Plotly is installed, you can import it into your Python script and create a simple chart. Plotly has two main approaches for creating visualizations: Plotly Express and Plotly Graph Objects. If you need to create simple visualizations quickly and easily, Plotly Express is the way to go. If you need to create more complex visualizations that require a high degree of customization, then Plotly Graph Objects is the better choice.

### Using Plotly express

 Plotly Express is designed to be very easy to use, with a simple API that allows you to create visualizations quickly and easily. Plotly Express is best suited for creating simple visualizations such as scatter plots, line charts, and bar charts. 

```python
import plotly.express as px
import numpy as np

# Create a line plot
fs = 1000  # sampling frequency
f0 = 5  # fundamental frequency
t = np.arange(0, 1, 1/fs)
y = np.sin(2*np.pi*f0*t)

# create plot using plotly express
fig = px.line(x=t, y=y)

# Show the plot
fig.show()
```

### Using Graphic Objects

Plotly Graph Objects is a lower-level API that requires more code to create visualizations. It offers greater customization options than Plotly Express. With Plotly Graph Objects, you can fine-tune every aspect of your chart, including colors, fonts, annotations, and more. With Plotly Graph Objects, you have complete control over the layout of your chart, and you can easily add multiple subplots and custom shapes.


```python
import plotly.graph_objects as go
import numpy as np

# Create a line plot
fs = 1000  # sampling frequency
f0 = 5  # fundamental frequency
t = np.arange(0, 1, 1/fs)
y = np.sin(2*np.pi*f0*t)

# create plot using graphic objects
fig = go.Figure()
fig.add_trace(go.Scatter(x=t, y=y, mode='lines'))

# Show the plot
fig.show()
```


## Layout Customization

You can customize the plot by calling the `update_layout` method of the Figure object.

```python
# Create a plot
...

# update layout
fig.update_layout(xaxis_title='time [s]', yaxis_title='sinewave')

# Show the plot
...
```

## Classical Plots

### Time response of LTI systems

```python
import plotly.graph_objects as go
from scipy.signal import lti

# create data
sys = lti([1], [1, 1])
t, s = sys.step()

# create plot
fig = go.Figure()
fig.add_trace(go.Scatter(x=t, y=s, mode='lines'))

# update axes (name / type)
fig.update_yaxes(title_text="response")
fig.update_xaxes(title_text="time [s]")

fig.show()
```


### Bode Plot


```python
import plotly.graph_objects as go
import numpy as np
from plotly.subplots import make_subplots
from scipy.signal import lti

# create data
sys = lti([1], [1, 1])
w, Hjw = sys.freqresp()
modulus = np.abs(Hjw)
phase = 180*np.angle(Hjw)/np.pi

# create plot
fig = make_subplots(rows=2, cols=1, shared_xaxes=True)
fig.add_trace(go.Scatter(x=w, y=modulus, mode='lines', name="modulus"), row=1, col=1)
fig.add_trace(go.Scatter(x=w, y=phase, mode='lines', name="phase"), row=2, col=1)

# update axes (name / type)
fig.update_xaxes(title_text="Angular Frequency [rad/s]", type="log")
fig.update_yaxes(title_text="Modulus", type="log", row=1, col=1)
fig.update_yaxes(title_text="Phase (deg)", row=2, col=1)
fig.update_layout(title_text="Bode Plot")

fig.show()
```