import{_ as s,o as a,c as n,a as l}from"./app.3b93bcdd.js";const h=JSON.parse('{"title":"Python","description":"","frontmatter":{},"headers":[{"level":2,"title":"Print","slug":"print","link":"#print","children":[{"level":3,"title":"Simple Example","slug":"simple-example","link":"#simple-example","children":[]},{"level":3,"title":"Format Message","slug":"format-message","link":"#format-message","children":[]}]},{"level":2,"title":"Control Flow","slug":"control-flow","link":"#control-flow","children":[{"level":3,"title":"if statements","slug":"if-statements","link":"#if-statements","children":[]},{"level":3,"title":"for Loops","slug":"for-loops","link":"#for-loops","children":[]},{"level":3,"title":"while Loops","slug":"while-loops","link":"#while-loops","children":[]}]},{"level":2,"title":"Functions / Procedures","slug":"functions-procedures","link":"#functions-procedures","children":[{"level":3,"title":"Optional Argument","slug":"optional-argument","link":"#optional-argument","children":[]},{"level":3,"title":"Return Values","slug":"return-values","link":"#return-values","children":[]}]},{"level":2,"title":"Class","slug":"class","link":"#class","children":[{"level":3,"title":"Creation","slug":"creation","link":"#creation","children":[]},{"level":3,"title":"Class instantiation","slug":"class-instantiation","link":"#class-instantiation","children":[]}]},{"level":2,"title":"Import a library","slug":"import-a-library","link":"#import-a-library","children":[]}],"relativePath":"python/index.md"}'),o={name:"python/index.md"},e=l(`<h1 id="python" tabindex="-1">Python <a class="header-anchor" href="#python" aria-hidden="true">#</a></h1><p>Python is a high-level, interpreted programming language. It is designed to be easy to read and write, with a syntax that emphasizes code readability and simplicity. Python is used for a wide range of applications, including web development, scientific computing, data analysis, and artificial intelligence.</p><p>Python is an object-oriented language, which means that it uses objects to represent data and functions. It includes a large standard library with many modules for common tasks, as well as many third-party libraries for specialized applications.</p><p>Python is known for its ease of use and its focus on code readability, which makes it a popular choice for beginners and experienced programmers alike. It is also highly portable, running on many different platforms and operating systems.</p><ul><li><a href="https://docs.python.org/3/" target="_blank" rel="noreferrer">Documentation</a></li></ul><h2 id="print" tabindex="-1">Print <a class="header-anchor" href="#print" aria-hidden="true">#</a></h2><p>The <code>print()</code> function in Python is used to output text to the console or to a file. It is used for debugging, logging, and generating output for users.</p><p>The <code>print()</code> function takes one or more arguments, which can be text strings, numbers, or other types of data. When the <code>print()</code> function is called, it outputs the arguments to the console or file, with a newline character \\n added at the end by default.</p><h3 id="simple-example" tabindex="-1">Simple Example <a class="header-anchor" href="#simple-example" aria-hidden="true">#</a></h3><p>To print the contents of a variable in Python, you can use the print() function. Simply pass the variable as an argument to the <code>print()</code> function, like this:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my_variable </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, world!</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">my_variable</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="format-message" tabindex="-1">Format Message <a class="header-anchor" href="#format-message" aria-hidden="true">#</a></h3><p>It is common to use the <code>format()</code> method with the <code>print()</code> function in Python. The <code>format()</code> method allows you to insert values into a string dynamically, which is useful for generating output that includes variable data.</p><p>To use the <code>format()</code> method to print values in Python, you can include placeholders in a string using curly braces <code>{}</code>. Then, you can call the <code>format()</code> method on the string and pass in the values you want to insert into the placeholders.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Alice</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">My name is </span><span style="color:#F78C6C;">{}</span><span style="color:#C3E88D;"> and I am </span><span style="color:#F78C6C;">{}</span><span style="color:#C3E88D;"> years old.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">name</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> age</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span></code></pre></div><h2 id="control-flow" tabindex="-1">Control Flow <a class="header-anchor" href="#control-flow" aria-hidden="true">#</a></h2><h3 id="if-statements" tabindex="-1"><code>if</code> statements <a class="header-anchor" href="#if-statements" aria-hidden="true">#</a></h3><ul><li>Form 1: <code>if</code></li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Homer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hi, Homer.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><ul><li>Form 2: <code>if/else</code></li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Homer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hi, Homer.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">You are not Homer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><ul><li>Form 3: <code>if/elif/else</code></li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Homer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hi, Homer.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">elif</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Marge</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hi Marge!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">You are not Homer or Marge</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="for-loops" tabindex="-1"><code>for</code> Loops <a class="header-anchor" href="#for-loops" aria-hidden="true">#</a></h3><p>The <code>for</code> loop iterates over a list, tuple, dictionary, set or string.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> indice </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hi, Homer.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="while-loops" tabindex="-1"><code>while</code> Loops <a class="header-anchor" href="#while-loops" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">spam </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> spam </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hi, Homer.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    spam </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> spam </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span></code></pre></div><h2 id="functions-procedures" tabindex="-1">Functions / Procedures <a class="header-anchor" href="#functions-procedures" aria-hidden="true">#</a></h2><p>Functions and Procedures are specified using the <code>def</code> keyword.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">say_hello</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    message </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hi, </span><span style="color:#F78C6C;">{}</span><span style="color:#C3E88D;"> !</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">message</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">say_hello</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Homer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="optional-argument" tabindex="-1">Optional Argument <a class="header-anchor" href="#optional-argument" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">say_hello</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Homer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    message </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hi, </span><span style="color:#F78C6C;">{}</span><span style="color:#C3E88D;"> !</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">message</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">say_hello</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># no argument: default value if used for name</span></span>
<span class="line"><span style="color:#82AAFF;">say_hello</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Marge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="return-values" tabindex="-1">Return Values <a class="header-anchor" href="#return-values" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">write_message</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    message </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hi, </span><span style="color:#F78C6C;">{}</span><span style="color:#C3E88D;"> !</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> message</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">message </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">write_message</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Homer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">message</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="class" tabindex="-1">Class <a class="header-anchor" href="#class" aria-hidden="true">#</a></h2><p>In Python, a class is a blueprint or template for creating objects that have specific properties and behaviors. It defines a set of attributes (variables) and methods (functions) that are shared by all instances (objects) of the class.</p><h3 id="creation" tabindex="-1">Creation <a class="header-anchor" href="#creation" aria-hidden="true">#</a></h3><p>To create a class in Python, you can use the class keyword followed by the name of the class.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyClass</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">y</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">my_method</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">y</span></span>
<span class="line"></span></code></pre></div><p>In this example, we define a class called <code>MyClass</code>. The <code>__init__</code> method is a special method that is called when an instance of the class is created. It takes the <code>self</code> parameter (which refers to the instance of the class) as well as any other parameters that are passed in when the instance is created. In this example, we define x and y as instance variables and set them equal to the values passed in.</p><p>We also define a method called <code>my_method</code>, which returns the sum of x and y. This method takes the <code>self</code> parameter, which allows it to access the instance variables.</p><h3 id="class-instantiation" tabindex="-1">Class instantiation <a class="header-anchor" href="#class-instantiation" aria-hidden="true">#</a></h3><p>To create an instance of the class, you can simply call the class name as if it were a function, passing in any parameters required by the <code>__init__</code> method.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my_object </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyClass</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>In this example, we create an instance of <code>MyClass</code> called <code>my_object</code>, passing in the values 3 and 5 for x and y, respectively. You can now access the instance variables and methods of my_object using dot notation, like this:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">my_object</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;font-style:italic;"># outputs 3</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">my_object</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;font-style:italic;"># outputs 5</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">my_object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">my_method</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># outputs 8</span></span>
<span class="line"></span></code></pre></div><h2 id="import-a-library" tabindex="-1">Import a library <a class="header-anchor" href="#import-a-library" aria-hidden="true">#</a></h2><p>You can import a whole library or only part of it, by specifying which components to import.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> math </span><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> math </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> ma </span><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> math </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> pi</span></span>
<span class="line"></span></code></pre></div><p>Overall, the choice of import method depends on the specific needs of your program.</p><ul><li><code>import math</code>: This imports the entire math library into your program. You can then use any function or variable in the math module by prefixing it with math. For example, you could use the <code>math.sin()</code> function to compute the sine of an angle. This method is useful when you need to use many functions from the same library.</li><li><code>import math as ma</code>: This imports the entire math library, but renames it to ma. This can be useful if you want to avoid naming conflicts with other libraries or if you find the original name of the library too long or unwieldy.</li><li><code>from math import pi</code>: This imports only the pi constant from the math library into your program. You can then use <code>pi</code> directly in your code without having to prefix it with <code>math.</code>. This method is useful when you only need a few specific functions or constants from a library and don&#39;t want to clutter your code with unnecessary prefixes.</li></ul>`,52),p=[e];function t(c,r,i,y,F,D){return a(),n("div",null,p)}const A=s(o,[["render",t]]);export{h as __pageData,A as default};
