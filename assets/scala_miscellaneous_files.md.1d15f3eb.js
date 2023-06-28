import{_ as s,o as a,c as n,a as l}from"./app.f1a68c47.js";const A=JSON.parse('{"title":"Read/Write files","description":"","frontmatter":{},"headers":[{"level":2,"title":"Using Java","slug":"using-java","link":"#using-java","children":[{"level":3,"title":"Reading","slug":"reading","link":"#reading","children":[]},{"level":3,"title":"Writing","slug":"writing","link":"#writing","children":[]}]},{"level":2,"title":"Using Scala","slug":"using-scala","link":"#using-scala","children":[{"level":3,"title":"Reading","slug":"reading-1","link":"#reading-1","children":[]}]}],"relativePath":"scala/miscellaneous/files.md"}'),p={name:"scala/miscellaneous/files.md"},o=l(`<h1 id="read-write-files" tabindex="-1">Read/Write files <a class="header-anchor" href="#read-write-files" aria-hidden="true">#</a></h1><h2 id="using-java" tabindex="-1">Using Java <a class="header-anchor" href="#using-java" aria-hidden="true">#</a></h2><h3 id="reading" tabindex="-1">Reading <a class="header-anchor" href="#reading" aria-hidden="true">#</a></h3><div class="language-scala"><button title="Copy Code" class="copy"></button><span class="lang">scala</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">java</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">io</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">File</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">java</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">util</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Scanner</span><span style="color:#A6ACCD;">	</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">val</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dir/subdir/file.txt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">val</span><span style="color:#A6ACCD;"> sc </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Scanner</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">File</span><span style="color:#A6ACCD;">(path))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> line </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> sc.hasNextLine()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">do</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        line </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> sc.nextLine()</span></span>
<span class="line"><span style="color:#A6ACCD;">        println(line)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">Exception</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> println(e)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">finally</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    sc.close()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="writing" tabindex="-1">Writing <a class="header-anchor" href="#writing" aria-hidden="true">#</a></h3><div class="language-scala"><button title="Copy Code" class="copy"></button><span class="lang">scala</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">java</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">io</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">{</span><span style="color:#FFCB6B;">PrintWriter</span><span style="color:#A6ACCD;">, </span><span style="color:#FFCB6B;">File</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">val</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dir/subdir/file.txt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">val</span><span style="color:#A6ACCD;"> pw </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PrintWriter</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">File</span><span style="color:#A6ACCD;">(path))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">val</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    pw.write(str)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">Exception</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> println(e)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">finally</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    pw.close()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="using-scala" tabindex="-1">Using Scala <a class="header-anchor" href="#using-scala" aria-hidden="true">#</a></h2><h3 id="reading-1" tabindex="-1">Reading <a class="header-anchor" href="#reading-1" aria-hidden="true">#</a></h3><div class="language-scala"><button title="Copy Code" class="copy"></button><span class="lang">scala</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">io</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Source</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">fromFile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">val</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dir/subdir/file.txt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">val</span><span style="color:#A6ACCD;"> source </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fromFile(path)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">val</span><span style="color:#A6ACCD;"> lines </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> source.getLines()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">Exception</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> println(e)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">finally</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    source.close()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function t(c,r,i,D,y,F){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};