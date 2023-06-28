# Pandas

* [Documentation](https://pandas.pydata.org/docs/getting_started/index.html)


Pandas is a popular data manipulation library for Python. It provides data structures and functions necessary to handle and analyze data efficiently and with ease. Pandas primarily uses two types of data structures: Series (1-dimensional) and DataFrame (2-dimensional), which can handle diverse types of data such as integers, floating-point numbers, strings, and date/time formats. The library offers a vast array of operations such as slicing, indexing, joining, merging, reshaping, handling missing data, and applying mathematical operations. It is also equipped with robust I/O tools that can read and write data from a wide variety of sources such as CSV, Excel, SQL databases, and even the clipboard. Pandas' integration with other Python libraries like Matplotlib and Seaborn for data visualization and NumPy for mathematical operations make it an essential tool for data analysis and manipulation. Whether you're working in data science, finance, social sciences, or engineering, understanding how to use Pandas can be a critical asset.


## Getting Started

### Installation

You can install Plotly using pip or conda by running the following command in your terminal:

```bash
pip install pandas
```

or

```bash
conda install pandas
```

### Import

The pandas module can be imported using the following command

```python
import pandas as pd
```

### Read an Excel File

You can use the `pd.read_excel()` function to load an Excel file.

```python
data = pd.read_excel('file.xlsx')
```

#### Additional modules

The `read_excel()` function requires the `openpyxl` package for .xlsx files and `xlrd` package for .xls files. If you haven't installed it yet, you can use pip to install it:

* For .xlsx:

```bash
pip install openpyxl
```

* For .xls:

```bash
pip install xlrd
```

## Visualisation functions

Pandas, in conjunction with Matplotlib, provides a number of easy-to-use methods for visualizing your data. 

* [Examples](https://pandas.pydata.org/docs/user_guide/visualization.html)

### Line plots

```python
import pandas as pd
import matplotlib.pyplot as plt

# assuming data is a pandas DataFrame
data['column_name'].plot()
plt.show()
```

### Scatter plots

```python
data['column_name'].value_counts().plot(kind='bar')
plt.show()
```

### Histograms

```python
data['column_name'].plot(kind='hist')
plt.show()
```

### Box plots

```python
data.plot(kind='box')
plt.show()
```

### Scatter plots

```python
data.plot(kind='scatter', x='column_name1', y='column_name2')
plt.show()
``` 

### Pie Chart

```python
data['column_name'].value_counts().plot(kind='pie')
plt.show()
``` 

These are just some basic plots. You can also make more complex plots like hexagonal bin plots, area plots, etc. Note also that you can customize these plots in many ways (like changing colors, labels, axes, etc.) by using additional arguments and/or by utilizing matplotlib functionality.