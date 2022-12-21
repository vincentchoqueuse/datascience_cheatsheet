# Tikz

## Electrical Circuit


```tex 
\usepackage{circuitikz}
...
\begin{tikzpicture}
    \draw (0,0)
    to[R, l=$R$,-] (3,0)
    to[C, l=$C$, *-] (3,-2)
    to[short](3,-2)   node [ground] {};
    %input
    \draw (-0.5,0)
    to[short, l_=$V_{in}$](-0.5,-2)   node [ground] {};
    \draw (-0.5,0) coordinate[inputarrow,rotate=90];
    % output
    \draw (4,0)
    to[short, l=$V_{out}$](4,-2)   node [ground] {};
    \draw (4,0) coordinate[inputarrow,rotate=90];
\end{tikzpicture}
```

* List of electrical circuits : [github](https://github.com/vincentchoqueuse/analog_circuits_tikz)
