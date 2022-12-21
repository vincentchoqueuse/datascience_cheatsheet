# Pgfplot

## Sine wave plotting


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