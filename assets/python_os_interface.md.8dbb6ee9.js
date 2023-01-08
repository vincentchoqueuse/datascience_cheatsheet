import{_ as s,o as a,c as e,a as n}from"./app.6ea318e9.js";const h=JSON.parse('{"title":"OS interface","description":"","frontmatter":{},"headers":[{"level":2,"title":"Spawn a process","slug":"spawn-a-process","link":"#spawn-a-process","children":[]},{"level":2,"title":"Create a directory","slug":"create-a-directory","link":"#create-a-directory","children":[{"level":3,"title":"Create one directory","slug":"create-one-directory","link":"#create-one-directory","children":[]},{"level":3,"title":"Create multiple nested directories","slug":"create-multiple-nested-directories","link":"#create-multiple-nested-directories","children":[]}]},{"level":2,"title":"Open a webpage in a browser","slug":"open-a-webpage-in-a-browser","link":"#open-a-webpage-in-a-browser","children":[]}],"relativePath":"python/os_interface.md"}'),o={name:"python/os_interface.md"},l=n(`<h1 id="os-interface" tabindex="-1">OS interface <a class="header-anchor" href="#os-interface" aria-hidden="true">#</a></h1><h2 id="spawn-a-process" tabindex="-1">Spawn a process <a class="header-anchor" href="#spawn-a-process" aria-hidden="true">#</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> subprocess</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">process </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> subprocess</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">run</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ls</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-l</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/dev/null</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">capture_output</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">process</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">stdout</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># b&#39;crw-rw-rw- 1 root root 1, 3  8 janv. 11:18 /dev/null\\n&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">process</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">stderr</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># b&#39;&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="create-a-directory" tabindex="-1">Create a directory <a class="header-anchor" href="#create-a-directory" aria-hidden="true">#</a></h2><h3 id="create-one-directory" tabindex="-1">Create one directory <a class="header-anchor" href="#create-one-directory" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mkdir</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mydirectory</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="create-multiple-nested-directories" tabindex="-1">Create multiple nested directories <a class="header-anchor" href="#create-multiple-nested-directories" aria-hidden="true">#</a></h3><blockquote><p>This is the equivalent of <code>mkdir -p</code>.</p></blockquote><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">makedirs</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">create/all/subdirectories</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">exist_ok</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"></span></code></pre></div><h2 id="open-a-webpage-in-a-browser" tabindex="-1">Open a webpage in a browser <a class="header-anchor" href="#open-a-webpage-in-a-browser" aria-hidden="true">#</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> webbrowser</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">webbrowser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://vincentchoqueuse.github.io/datascience_cheatsheet/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div>`,11),t=[l];function p(r,c,i,y,F,d){return a(),e("div",null,t)}const u=s(o,[["render",p]]);export{h as __pageData,u as default};
