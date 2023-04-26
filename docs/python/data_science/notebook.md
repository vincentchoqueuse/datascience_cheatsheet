# Jupyter Notebook

Jupyter Notebook is an open-source web-based interactive computing environment for creating, editing, and sharing documents that contain live code, equations, visualizations, and narrative text. It is used for data analysis, scientific research, and teaching. The name "Jupyter" is a combination of the three core programming languages it supports: Julia, Python, and R.

Jupyter Notebook allows users to write and run code in cells, which are interactive code blocks that can be executed individually or as a group. Users can also write markdown cells to add text, headings, and other formatted content to the notebook. Notebooks can be saved and shared as .ipynb files or exported to various formats, including HTML, PDF, and LaTeX.Additionally, it offers various extensions and widgets that enhance the functionality of the notebook, such as interactive data visualizations, code snippets, and data exploration tools.

## Getting Started

### Start Jupyter

To start using Jupyter Notebook, open the terminal (or command prompt on Windows), navigate to the desired directory, and type the following command 

```bash
jupyter notebook
```
This will open the Jupyter Notebook in your default web browser.

### Cell Types

Jupyter Notebook has two main cell types: Code and Markdown. 

#### Code Cells

Code cells are used for writing and executing code. To create a new code cell, click the + button on the toolbar, or use the shortcut key b on your keyboard. To execute the code in a cell, click the Run button on the toolbar or press Shift+Enter on your keyboard. The output of the code will appear below the cell.

#### Markdown Cells 

Markdown cells are used for creating formatted text, including headings, lists, and images. To create a new Markdown cell, click the + button on the toolbar, or use the shortcut key b on your keyboard and then change the cell type to Markdown from the dropdown list. You can then enter your Markdown content, including text, headings, lists, Latex equations and images. To render the Markdown, click the Run button on the toolbar or press Shift+Enter.

* [Cheatsheet Markdown](/web/markdown) 

## Play Audio

### From wav File

To play a sound that is saved in a wavfile, you can use the `IPython.display.Audio` class from the IPython.display module.

```python
from IPython.display import Audio

Audio('file.wav')
```

### From Numpy array

To create a sine wave in Python and play the audio sound, you can use the `numpy` and `IPython.display` modules.

```python
import numpy as np
from IPython.display import Audio

sr = 44100 # sample rate
t = np.arange(0, 1, 1/fs)
x = np.sin(2*np.pi*440*t) 

Audio(x, sr=sr)
```