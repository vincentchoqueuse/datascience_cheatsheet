import{_ as a,o as e,c as n,a as s}from"./app.fdb347c4.js";const u=JSON.parse('{"title":"Conda","description":"","frontmatter":{},"headers":[{"level":2,"title":"Difference between conda and pip","slug":"difference-between-conda-and-pip","link":"#difference-between-conda-and-pip","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Managing Environment","slug":"managing-environment","link":"#managing-environment","children":[{"level":3,"title":"Get list of environments","slug":"get-list-of-environments","link":"#get-list-of-environments","children":[]},{"level":3,"title":"Install an environment","slug":"install-an-environment","link":"#install-an-environment","children":[]},{"level":3,"title":"Activate an environment","slug":"activate-an-environment","link":"#activate-an-environment","children":[]},{"level":3,"title":"Desactivate an environment","slug":"desactivate-an-environment","link":"#desactivate-an-environment","children":[]}]},{"level":2,"title":"Package Management","slug":"package-management","link":"#package-management","children":[{"level":3,"title":"Get list of packages","slug":"get-list-of-packages","link":"#get-list-of-packages","children":[]},{"level":3,"title":"Install a new package","slug":"install-a-new-package","link":"#install-a-new-package","children":[]}]}],"relativePath":"getting-started/conda.md"}'),t={name:"getting-started/conda.md"},i=s(`<h1 id="conda" tabindex="-1">Conda <a class="header-anchor" href="#conda" aria-hidden="true">#</a></h1><p>Conda is an open-source package management system and environment management system for installing and managing software packages and dependencies. It is used primarily in the Python programming language ecosystem, but can also be used for other programming languages and frameworks.</p><p>Conda allows users to create and manage isolated environments with specific versions of Python and other packages, allowing for more flexible and reproducible software development workflows. It also includes a powerful package manager that allows users to easily install, update, and remove software packages, including complex dependencies.</p><p>Conda is commonly used in data science, scientific computing, and machine learning, where it is often used to manage complex software stacks and dependencies. It is available as a standalone application, as well as part of the Anaconda distribution, which includes a number of pre-installed packages commonly used in data science and scientific computing.</p><h2 id="difference-between-conda-and-pip" tabindex="-1">Difference between conda and pip <a class="header-anchor" href="#difference-between-conda-and-pip" aria-hidden="true">#</a></h2><p>Conda and pip are both package management systems for Python, but they have some key differences in their functionality and intended use cases.</p><ul><li><p>Pip is a simple package manager that is used primarily for installing and managing Python packages from the Python Package Index (PyPI). It installs packages in the user&#39;s default Python environment, and does not provide any built-in functionality for managing dependencies or creating isolated environments.</p></li><li><p>Conda, on the other hand, is a more powerful package management system that is designed for managing complex software stacks and dependencies. It allows users to create and manage isolated environments with specific versions of Python and other packages, and includes a powerful package manager that can install, update, and remove packages, including complex dependencies. Another key difference between Conda and pip is that Conda can manage packages written in multiple programming languages, not just Python. It can also manage non-Python dependencies, such as system libraries and binaries.</p></li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><ul><li>Miniconda: <a href="https://docs.conda.io/en/latest/miniconda.html" target="_blank" rel="noreferrer">https://docs.conda.io/en/latest/miniconda.html</a></li></ul><h2 id="managing-environment" tabindex="-1">Managing Environment <a class="header-anchor" href="#managing-environment" aria-hidden="true">#</a></h2><h3 id="get-list-of-environments" tabindex="-1">Get list of environments <a class="header-anchor" href="#get-list-of-environments" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">conda env list</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>This command returns the list of installed environment. The active environment is specified by the symbol <code>*</code>.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">base                  *  /opt/anaconda3</span></span>
<span class="line"><span style="color:#A6ACCD;">py_37                    /opt/anaconda3/envs/py3_7</span></span>
<span class="line"><span style="color:#A6ACCD;">my_env                   /opt/anaconda3/envs/my_env</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="install-an-environment" tabindex="-1">Install an environment <a class="header-anchor" href="#install-an-environment" aria-hidden="true">#</a></h3><p>To create an environment called <code>my_env</code> with python 3.9, run</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">conda create --name my_env python=3.9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="activate-an-environment" tabindex="-1">Activate an environment <a class="header-anchor" href="#activate-an-environment" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">conda activate my_env</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="desactivate-an-environment" tabindex="-1">Desactivate an environment <a class="header-anchor" href="#desactivate-an-environment" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">conda deactivate</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="package-management" tabindex="-1">Package Management <a class="header-anchor" href="#package-management" aria-hidden="true">#</a></h2><h3 id="get-list-of-packages" tabindex="-1">Get list of packages <a class="header-anchor" href="#get-list-of-packages" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">pip list</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="install-a-new-package" tabindex="-1">Install a new package <a class="header-anchor" href="#install-a-new-package" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">conda install numpy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>or</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">pip install numpy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,28),l=[i];function o(c,p,r,d,g,h){return e(),n("div",null,l)}const v=a(t,[["render",o]]);export{u as __pageData,v as default};