# Pgfplot

PGFPlots is a LaTeX package used for creating high-quality plots and graphs in LaTeX documents. It is built on top of the TikZ graphics package.

PGFPlots provides a variety of options for creating different types of plots, such as line plots, scatter plots, bar plots, and histograms. It also offers features such as axis customization, legends, annotations, and multiple plots in one figure.

PGFPlots allows users to import data from external files or create data directly in LaTeX code. It also provides options for customizing the appearance of the plots, including colors, styles, and axis labels.

PGFPlots is widely used in academic and scientific communities for creating high-quality figures in research papers, presentations, and other documents. 


## Copy & Paste Plots

### Sine wave plotting

```tex
\usepackage{tikz}
\usepackage{pgfplots}
...
\begin{figure}
    \centering
    \begin{tikzpicture}
        \begin{axis}[xlabel=time (s), ylabel=$x(t)$,xmin=0, xmax=1,ymin=-1.5, ymax=1.5, grid=both]
        \addplot[samples=200, thick]{sin(360*3*x)};
        \end{axis}
    \end{tikzpicture}
    \caption{Sine Wave}
\end{figure}
```