import{_ as s,o as a,c as n,a as l}from"./app.f1a68c47.js";const F=JSON.parse('{"title":"Case classes","description":"","frontmatter":{},"headers":[{"level":2,"title":"Comparison","slug":"comparison","link":"#comparison","children":[]},{"level":2,"title":"Copy","slug":"copy","link":"#copy","children":[]}],"relativePath":"scala/advanced/caseclasses.md"}'),o={name:"scala/advanced/caseclasses.md"},e=l(`<h1 id="case-classes" tabindex="-1">Case classes <a class="header-anchor" href="#case-classes" aria-hidden="true">#</a></h1><p>Scala uses <code>case class</code> for classes mainly made to hold data (structures). Case classes are defined like normal classes except that all their parameters are, by default, class members.</p><div class="language-scala"><button title="Copy Code" class="copy"></button><span class="lang">scala</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;">, </span><span style="color:#A6ACCD;font-style:italic;">age</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">Int</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">val</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bob</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">21</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="comparison" tabindex="-1">Comparison <a class="header-anchor" href="#comparison" aria-hidden="true">#</a></h2><p>Instances of case classes are compared by structure and not by reference:</p><div class="language-scala"><button title="Copy Code" class="copy"></button><span class="lang">scala</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">val</span><span style="color:#A6ACCD;"> person1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bob</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">21</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">val</span><span style="color:#A6ACCD;"> person2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bob</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">21</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">val</span><span style="color:#A6ACCD;"> person2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Alice</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">21</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">println(person1 </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> person2)     </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">println(person1 </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> person3)     </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span></code></pre></div><h2 id="copy" tabindex="-1">Copy <a class="header-anchor" href="#copy" aria-hidden="true">#</a></h2><p>Case classes instances can be copied using the method <code>.copy()</code> where you can optionnaly change the members:</p><div class="language-scala"><button title="Copy Code" class="copy"></button><span class="lang">scala</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">val</span><span style="color:#A6ACCD;"> bob </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bob</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">21</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">val</span><span style="color:#A6ACCD;"> alice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> bob.copy(name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Alice</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)        </span><span style="color:#676E95;font-style:italic;">// Person(&quot;Alice&quot;, 21)</span></span>
<span class="line"></span></code></pre></div>`,9),p=[e];function c(t,r,C,y,D,i){return a(),n("div",null,p)}const d=s(o,[["render",c]]);export{F as __pageData,d as default};