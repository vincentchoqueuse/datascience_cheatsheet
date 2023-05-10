import{_ as s,o as n,c as a,a as o}from"./app.09d11fb1.js";const A=JSON.parse('{"title":"Tkinter","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[{"level":3,"title":"Simple Windows","slug":"simple-windows","link":"#simple-windows","children":[]},{"level":3,"title":"Window with widgets","slug":"window-with-widgets","link":"#window-with-widgets","children":[]},{"level":3,"title":"Handle user events","slug":"handle-user-events","link":"#handle-user-events","children":[]}]},{"level":2,"title":"Object-oriented Approach","slug":"object-oriented-approach","link":"#object-oriented-approach","children":[]}],"relativePath":"python/ui/tkinter.md"}'),l={name:"python/ui/tkinter.md"},e=o(`<h1 id="tkinter" tabindex="-1">Tkinter <a class="header-anchor" href="#tkinter" aria-hidden="true">#</a></h1><p>Tkinter is a Python library for creating graphical user interfaces (GUIs). It is a standard part of the Python programming language and is based on the Tcl/Tk GUI toolkit. Tkinter provides a set of tools and widgets for creating windows, dialog boxes, buttons, menus, and other GUI elements.</p><p>Tkinter is a cross-platform library that can be used on Windows, macOS, and Linux systems. It is easy to learn and use, making it a popular choice for beginners who want to create simple GUI applications. However, it is also powerful enough to create complex applications with advanced features and functionality.</p><p>Some of the key features of Tkinter include support for various widget types (such as buttons, text boxes, and canvas), event handling (to handle user interactions), and layout management (to arrange the widgets in the window). Tkinter also provides support for creating custom widgets, using styles and themes to customize the appearance of the widgets, and internationalization (i18n) to support multiple languages.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>Tkinter comes pre-installed with Python on most systems. However, if it&#39;s not available, you can install it using the following command:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tk</span></span>
<span class="line"></span></code></pre></div><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2><h3 id="simple-windows" tabindex="-1">Simple Windows <a class="header-anchor" href="#simple-windows" aria-hidden="true">#</a></h3><p>To create a basic window, you need to initialize the main Tkinter class and call its <code>mainloop()</code> method:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">root </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Tk</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">title</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">My Tkinter App</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">geometry</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">400x300</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mainloop</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><p><code>root</code> is the main window, and you can customize it by setting the title and window dimensions using the <code>title()</code> and <code>geometry()</code> methods, respectively.</p><h3 id="window-with-widgets" tabindex="-1">Window with widgets <a class="header-anchor" href="#window-with-widgets" aria-hidden="true">#</a></h3><p>Tkinter provides several built-in widgets like buttons, labels, and text boxes. You can add them to your window and set their properties. Here&#39;s an example of adding a label and a button:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">on_button_click</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Button clicked!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">root </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Tk</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">title</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">My Tkinter App</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">geometry</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">400x300</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">label </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Label</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">root</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, Tkinter!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">label</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pack</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">pady</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">button </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Button</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">root</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Click me!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">command</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">on_button_click</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">button</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pack</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mainloop</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><p>In this example, we define a function called <code>on_button_click()</code> to handle button clicks. We create a Label and a Button widget, setting their properties and adding them to the root window using the <code>pack()</code> method. The pady parameter in <code>pack()</code> adds some vertical padding around the label.</p><h3 id="handle-user-events" tabindex="-1">Handle user events <a class="header-anchor" href="#handle-user-events" aria-hidden="true">#</a></h3><p>In the example above, we&#39;ve already shown how to handle a button click event by setting the command parameter. For other types of events, you can use the <code>bind()</code> method on the widget:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">on_key_press</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;Key pressed: </span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">event</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">char</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">root </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Tk</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">title</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">My Tkinter App</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">geometry</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">400x300</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">label </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Label</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">root</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Press any key</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">label</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pack</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">pady</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;KeyPress&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> on_key_press</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mainloop</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><p>Here, we define a function <code>on_key_press()</code> to handle key press events. We then bind the event to the root window using the <code>bind()</code> method and the corresponding event pattern (e.g., <code>&lt;KeyPress&gt;</code> for key press events).</p><h2 id="object-oriented-approach" tabindex="-1">Object-oriented Approach <a class="header-anchor" href="#object-oriented-approach" aria-hidden="true">#</a></h2><p>To implement an object-oriented approach, create a custom class for your application. This class should inherit from the Tkinter <code>Tk</code> class:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyApp</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">tk</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Tk</span><span style="color:#89DDFF;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">super</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">title</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">My OO Tkinter App</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">geometry</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">400x300</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">_create_widgets</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_create_widgets</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">label</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Label</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, Tkinter!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pack</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">pady</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Button</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Click me!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">command</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">on_button_click</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pack</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">on_button_click</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Button clicked!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyApp</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mainloop</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><p>In this example, we define the <code>MyApp class</code> and call the parent constructor using <code>super().__init__()</code>. We also set the title and window dimensions, and call the <code>_create_widgets()</code> method, which will be responsible for creating and adding widgets to the main window.</p><p>In the <code>_create_widgets()</code> method, we create a <code>Label</code> and a <code>Button</code> widget, set their properties, and add them to the main window using the <code>pack()</code> method. Notice how we set the button command to <code>self.on_button_click</code>.</p>`,25),p=[e];function t(c,r,F,i,y,D){return n(),a("div",null,p)}const C=s(l,[["render",t]]);export{A as __pageData,C as default};
