# Tikz

## Import Package 

```tex 
\usepackage{tikz}
```

## Basic flow chart

```tex
\begin{tikzpicture}[node distance=8em]
\tikzset{block/.style={draw,rectangle, text width=5em, align=center,minimum height=3.5em,font=\scriptsize}};
\node (n0) {};
\node[block, right of=n0, node distance=6em] (n1) {Block \\ 1};
\node[block, right of=n1] (n2) {Block \\ 2};
\node[block, right of=n2] (n3) {Block \\ 3};
\node[right of=n3, node distance=6em] (n4) {};
%make connections
\draw[->,>=latex] (n0)--(n1);
\draw[->,>=latex] (n1)--(n2);
\draw[->,>=latex] (n2)--(n3);
\draw[->,>=latex] (n3)--(n4);
\end{tikzpicture}
```

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
