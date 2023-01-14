import{_ as s,o as a,c as n,a as l}from"./app.18d259cd.js";const h=JSON.parse('{"title":"Numpy","description":"","frontmatter":{"outline":2},"headers":[{"level":2,"title":"Getting Started","slug":"getting-started","link":"#getting-started","children":[{"level":3,"title":"Import","slug":"import","link":"#import","children":[]},{"level":3,"title":"Simple Example","slug":"simple-example","link":"#simple-example","children":[]}]},{"level":2,"title":"Array Creation","slug":"array-creation","link":"#array-creation","children":[{"level":3,"title":"Custom elements","slug":"custom-elements","link":"#custom-elements","children":[]},{"level":3,"title":"Automatic elements","slug":"automatic-elements","link":"#automatic-elements","children":[]}]},{"level":2,"title":"Array Properties and Manipulation","slug":"array-properties-and-manipulation","link":"#array-properties-and-manipulation","children":[{"level":3,"title":"Shape, dimensions and size","slug":"shape-dimensions-and-size","link":"#shape-dimensions-and-size","children":[]}]},{"level":2,"title":"Array Operations","slug":"array-operations","link":"#array-operations","children":[{"level":3,"title":"Addition / Subtraction","slug":"addition-subtraction","link":"#addition-subtraction","children":[]},{"level":3,"title":"Element wise multiplication","slug":"element-wise-multiplication","link":"#element-wise-multiplication","children":[]},{"level":3,"title":"Matrix multiplication","slug":"matrix-multiplication","link":"#matrix-multiplication","children":[]}]}],"relativePath":"python/data_science/numpy.md"}'),e={name:"python/data_science/numpy.md"},p=l(`<h1 id="numpy" tabindex="-1">Numpy <a class="header-anchor" href="#numpy" aria-hidden="true">#</a></h1><p>NumPy is a library that adds support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays</p><ul><li><a href="https://numpy.org/doc/stable/reference/index.html" target="_blank" rel="noreferrer">Documentation</a></li></ul><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h2><h3 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> numpy </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> np</span></span>
<span class="line"></span></code></pre></div><p>Numpy introduces a type called <code>array</code>.</p><h3 id="simple-example" tabindex="-1">Simple Example <a class="header-anchor" href="#simple-example" aria-hidden="true">#</a></h3><p>To demonstrate the advantages of using the <code>array</code> type, let&#39;s compare generating a sine wave with a 5 Hz fundamental frequency using regular Python and the Numpy library.</p><h4 id="naive-python-implementation" tabindex="-1">Naive Python implementation <a class="header-anchor" href="#naive-python-implementation" aria-hidden="true">#</a></h4><p>Using naive Python, a simple way to create a sine wave is to use a <code>for</code> loop.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> math </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> sin</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.01</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># sampling frequency</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># create an empty list</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    x_temp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sin</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">pi</span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">n</span><span style="color:#89DDFF;">/</span><span style="color:#82AAFF;">Fs</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    x</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">x_temp</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h4 id="numpy-implementation" tabindex="-1">Numpy implementation <a class="header-anchor" href="#numpy-implementation" aria-hidden="true">#</a></h4><p>By using Numpy&#39;s vectorized operations, you can perform mathematical operations on entire arrays at once, without the need for explicit <code>for</code> loops. As compared to Naive Python implementation, this can result in faster and more concise code.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> numpy </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> np</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.01</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># sampling frequency</span></span>
<span class="line"><span style="color:#A6ACCD;">n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">arange</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># create and array with evenly spaced values within [0, 100) with step 1</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sin</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">np</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">pi</span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">n</span><span style="color:#89DDFF;">/</span><span style="color:#82AAFF;">Fs</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="array-creation" tabindex="-1">Array Creation <a class="header-anchor" href="#array-creation" aria-hidden="true">#</a></h2><h3 id="custom-elements" tabindex="-1">Custom elements <a class="header-anchor" href="#custom-elements" aria-hidden="true">#</a></h3><p>A Numpy array is usually created from a list of numbers.</p><h4 id="_1d-array" tabindex="-1">1D array <a class="header-anchor" href="#_1d-array" aria-hidden="true">#</a></h4><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my_array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">array</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])</span></span>
<span class="line"></span></code></pre></div><p>This syntax creates a 1D Array from a list of numbers. It is possible to impose the type of the array element using</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my_array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">array</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">],</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">dtype</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">complex</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h4 id="_2d-array" tabindex="-1">2D array <a class="header-anchor" href="#_2d-array" aria-hidden="true">#</a></h4><p>You can also convert a list of lists into a 2D array</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my_array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">array</span><span style="color:#89DDFF;">([[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">],[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]])</span></span>
<span class="line"></span></code></pre></div><h3 id="automatic-elements" tabindex="-1">Automatic elements <a class="header-anchor" href="#automatic-elements" aria-hidden="true">#</a></h3><p>For large arrays, it can be tedius to define each element of the array one by one. To solve this problem, Numpy offers a large collection of functions for the creation of arrays with particular structures.</p><h4 id="empty-array" tabindex="-1">Empty array <a class="header-anchor" href="#empty-array" aria-hidden="true">#</a></h4><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my_array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">zeros</span><span style="color:#89DDFF;">((</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#[[0. 0. 0. 0.]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [0. 0. 0. 0.]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [0. 0. 0. 0.]]</span></span>
<span class="line"></span></code></pre></div><p>This syntax creates an empty 2D array with 3 rows and 4 columns filled with zeros.</p><h4 id="array-filled-with-ones" tabindex="-1">Array filled with ones <a class="header-anchor" href="#array-filled-with-ones" aria-hidden="true">#</a></h4><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my_array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ones</span><span style="color:#89DDFF;">((</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#[[1. 1. 1. 1.]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [1. 1. 1. 1.]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [1. 1. 1. 1.]]</span></span>
<span class="line"></span></code></pre></div><p>This syntax creates a 2D array with 3 rows and 4 columns filled with ones.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The syntax: <code>10*np.ones((3,4))</code> creates a Numpy array filled with 10.</p></div><h4 id="identity-array" tabindex="-1">Identity Array <a class="header-anchor" href="#identity-array" aria-hidden="true">#</a></h4><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my_array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">eye</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#[[1. 0. 0.]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [0. 1. 0.]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [0. 0. 1.]]</span></span>
<span class="line"></span></code></pre></div><p>This syntax creates a 2D arrays with ones on the diagonal and zeros elsewhere.</p><h4 id="diagonal-array" tabindex="-1">Diagonal Array <a class="header-anchor" href="#diagonal-array" aria-hidden="true">#</a></h4><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my_array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">diag</span><span style="color:#89DDFF;">((</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#[[1 0 0]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [0 2 0]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [0 0 3]]</span></span>
<span class="line"></span></code></pre></div><p>This syntax creates a 2D diagonal arrays from a list containing the diagonal elements.</p><h4 id="array-with-evenly-spaced-values-within-a-given-interval" tabindex="-1">Array with evenly spaced values within a given interval <a class="header-anchor" href="#array-with-evenly-spaced-values-within-a-given-interval" aria-hidden="true">#</a></h4><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my_array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">arange</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [0 1 2 3 4 5 6 7 8 9]</span></span>
<span class="line"></span></code></pre></div><p>This syntax creates a 1D array of values ranging from 0 to 10 (excluded) with step 1.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my_array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">arange</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [4.  4.5 5.  5.5 6.  6.5 7.  7.5 8.  8.5 9.  9.5]</span></span>
<span class="line"></span></code></pre></div><p>This syntax creates a 1D array of values generated within the half-open interval <code>[4, 10)</code>, with spacing between values given by <code>0.5</code>.</p><h4 id="array-with-evenly-spaced-numbers-over-a-specified-interval" tabindex="-1">Array with evenly spaced numbers over a specified interval <a class="header-anchor" href="#array-with-evenly-spaced-numbers-over-a-specified-interval" aria-hidden="true">#</a></h4><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my_array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">linspace</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1.0</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">10.0</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">num</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [ 1.    3.25  5.5   7.75 10.  ]</span></span>
<span class="line"></span></code></pre></div><p>This syntax creates a 1D array of 5 evenly spaced values generated within the interval <code>[1, 10]</code>.</p><h2 id="array-properties-and-manipulation" tabindex="-1">Array Properties and Manipulation <a class="header-anchor" href="#array-properties-and-manipulation" aria-hidden="true">#</a></h2><p>Let us consider the following array</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my_array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ones</span><span style="color:#89DDFF;">((</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span></code></pre></div><h3 id="shape-dimensions-and-size" tabindex="-1">Shape, dimensions and size <a class="header-anchor" href="#shape-dimensions-and-size" aria-hidden="true">#</a></h3><p>It is possible to inspect the shape of an array using the following attributes</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my_array</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">shape</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># (3, 4)</span></span>
<span class="line"><span style="color:#A6ACCD;">my_array</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">ndim</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 2</span></span>
<span class="line"><span style="color:#A6ACCD;">my_array</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 12</span></span>
<span class="line"><span style="color:#A6ACCD;">my_array</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">dtype</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># dtype(&#39;float64&#39;)</span></span>
<span class="line"></span></code></pre></div><h2 id="array-operations" tabindex="-1">Array Operations <a class="header-anchor" href="#array-operations" aria-hidden="true">#</a></h2><p>Let us consider the following arrays</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my_array1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">array</span><span style="color:#89DDFF;">([[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">],</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">]])</span></span>
<span class="line"><span style="color:#A6ACCD;">my_array2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">array</span><span style="color:#89DDFF;">([[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">],</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]])</span></span>
<span class="line"></span></code></pre></div><p>It is possible to perform some operations on array using the following mathematical operators</p><h3 id="addition-subtraction" tabindex="-1">Addition / Subtraction <a class="header-anchor" href="#addition-subtraction" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">res1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> my_array1 </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> my_array2  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#[[1 1]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [4 4]]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">res2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> my_array1 </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> my_array2 </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#[[1, 3] </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [2, 4]]</span></span>
<span class="line"></span></code></pre></div><h3 id="element-wise-multiplication" tabindex="-1">Element wise multiplication <a class="header-anchor" href="#element-wise-multiplication" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">res1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> my_array1 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> my_array2  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#[[ 0, -2]]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [ 3,  0]]</span></span>
<span class="line"></span></code></pre></div><h3 id="matrix-multiplication" tabindex="-1">Matrix multiplication <a class="header-anchor" href="#matrix-multiplication" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">res1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> my_array1 </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;"> my_array2  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#[[ 2 -1]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [ 4 -3]]</span></span>
<span class="line"></span></code></pre></div>`,64),o=[p];function t(r,c,i,y,F,D){return a(),n("div",null,o)}const C=s(e,[["render",t]]);export{h as __pageData,C as default};
