# Latex

LaTeX is a document preparation system used for creating professional-looking documents, particularly in the fields of science, mathematics, and engineering. It was created by Leslie Lamport in the 1980s and is based on the TeX typesetting system developed by Donald Knuth.

LaTeX uses a markup language to define the structure and content of a document, with commands that control the formatting and layout of the text, equations, figures, and tables. This allows for precise and consistent typesetting, even for complex mathematical expressions and technical diagrams.

LaTeX also provides features such as automatic numbering, cross-referencing, bibliography management, and table of contents generation, which help to streamline the writing and editing process. It can produce high-quality output in various formats, including PDF, HTML, and PostScript.

Due to its power and flexibility, LaTeX is widely used in academic and scientific communities for writing research papers, theses, dissertations, and other publications.

## Getting Started

### Starter Template

```latex
\documentclass{article}
\usepackage[utf8]{inputenc}

\title{block}
\author{My Name}
\date{}

\begin{document}

\maketitle

\section{Introduction}

\end{document}

```

### Advanced Templates

* [internship report](https://github.com/vincentchoqueuse/ENIB_latex_template)
* [MathSTIC PhD manuscript](https://github.com/vincentchoqueuse/MathSTIC_Latex_template)

## Figure Management

### Starter Template

You can create figures using the figure environment.

```latex

\documentclass{article}
\usepackage{graphicx}

\begin{document}

\begin{figure}[h!]
  \centering
  \includegraphics[width=0.5\linewidth]{figure.png}
  \caption{Caption for the figure}
  \label{fig:fig1}
\end{figure}

\end{document}
```

### Side by Side Figures

You can create side-by-side figures using the subfigure environment provided by the subcaption package. 

```latex

\usepackage{graphicx}
\usepackage{subcaption}

...

\begin{figure}[h!]
  \centering
  \begin{subfigure}[b]{0.4\linewidth}
    \includegraphics[width=\linewidth]{figure1.png}
    \caption{Caption for figure 1}
    \label{fig:fig1}
  \end{subfigure}
  \quad
  \begin{subfigure}[b]{0.4\linewidth}
    \includegraphics[width=\linewidth]{figure2.png}
    \caption{Caption for figure 2}
    \label{fig:fig2}
  \end{subfigure}
  \caption{Caption for the entire figure}
  \label{fig:figs}
\end{figure}
```