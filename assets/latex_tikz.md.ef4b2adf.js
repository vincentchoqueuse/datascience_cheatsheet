import{_ as s,o as a,c as n,a as l}from"./app.44534097.js";const C=JSON.parse('{"title":"Tikz","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import Package","slug":"import-package","link":"#import-package","children":[]},{"level":2,"title":"Basic flow chart","slug":"basic-flow-chart","link":"#basic-flow-chart","children":[]},{"level":2,"title":"Electrical Circuit","slug":"electrical-circuit","link":"#electrical-circuit","children":[]}],"relativePath":"latex/tikz.md"}'),p={name:"latex/tikz.md"},o=l(`<h1 id="tikz" tabindex="-1">Tikz <a class="header-anchor" href="#tikz" aria-hidden="true">#</a></h1><h2 id="import-package" tabindex="-1">Import Package <a class="header-anchor" href="#import-package" aria-hidden="true">#</a></h2><div class="language-tex"><button title="Copy Code" class="copy"></button><span class="lang">tex</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">usepackage</span><span style="color:#A6ACCD;">{tikz}</span></span>
<span class="line"></span></code></pre></div><h2 id="basic-flow-chart" tabindex="-1">Basic flow chart <a class="header-anchor" href="#basic-flow-chart" aria-hidden="true">#</a></h2><div class="language-tex"><button title="Copy Code" class="copy"></button><span class="lang">tex</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">begin</span><span style="color:#A6ACCD;">{tikzpicture}</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">node distance=8em</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">tikzset</span><span style="color:#A6ACCD;">{block/.style={draw,rectangle, text width=5em, align=center,minimum height=3.5em,font=</span><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">scriptsize</span><span style="color:#A6ACCD;">}};</span></span>
<span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">node</span><span style="color:#A6ACCD;"> (n0) {};</span></span>
<span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">node</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">block, right of=n0, node distance=6em</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> (n1) {Block </span><span style="color:#89DDFF;font-style:italic;">\\\\</span><span style="color:#A6ACCD;"> 1};</span></span>
<span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">node</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">block, right of=n1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> (n2) {Block </span><span style="color:#89DDFF;font-style:italic;">\\\\</span><span style="color:#A6ACCD;"> 2};</span></span>
<span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">node</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">block, right of=n2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> (n3) {Block </span><span style="color:#89DDFF;font-style:italic;">\\\\</span><span style="color:#A6ACCD;"> 3};</span></span>
<span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">node</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">right of=n3, node distance=6em</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> (n4) {};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">%make connections</span></span>
<span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">draw</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-&gt;,&gt;=latex</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> (n0)--(n1);</span></span>
<span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">draw</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-&gt;,&gt;=latex</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> (n1)--(n2);</span></span>
<span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">draw</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-&gt;,&gt;=latex</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> (n2)--(n3);</span></span>
<span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">draw</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-&gt;,&gt;=latex</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> (n3)--(n4);</span></span>
<span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">end</span><span style="color:#A6ACCD;">{tikzpicture}</span></span>
<span class="line"></span></code></pre></div><h2 id="electrical-circuit" tabindex="-1">Electrical Circuit <a class="header-anchor" href="#electrical-circuit" aria-hidden="true">#</a></h2><div class="language-tex"><button title="Copy Code" class="copy"></button><span class="lang">tex</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">usepackage</span><span style="color:#A6ACCD;">{circuitikz}</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">begin</span><span style="color:#A6ACCD;">{tikzpicture}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">draw</span><span style="color:#A6ACCD;"> (0,0)</span></span>
<span class="line"><span style="color:#A6ACCD;">    to</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">R, l=</span><span style="color:#89DDFF;">$</span><span style="color:#FFCB6B;">R</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">,-</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> (3,0)</span></span>
<span class="line"><span style="color:#A6ACCD;">    to</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">C, l=</span><span style="color:#89DDFF;">$</span><span style="color:#FFCB6B;">C</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">, *-</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> (3,-2)</span></span>
<span class="line"><span style="color:#A6ACCD;">    to</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">short</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">(3,-2)   node </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">ground</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> {};</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">%input</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">draw</span><span style="color:#A6ACCD;"> (-0.5,0)</span></span>
<span class="line"><span style="color:#A6ACCD;">    to</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">short, l_=</span><span style="color:#89DDFF;">$</span><span style="color:#FFCB6B;">V</span><span style="color:#89DDFF;">_{</span><span style="color:#FFCB6B;">in</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">(-0.5,-2)   node </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">ground</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> {};</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">draw</span><span style="color:#A6ACCD;"> (-0.5,0) coordinate</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">inputarrow,rotate=90</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">% output</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">draw</span><span style="color:#A6ACCD;"> (4,0)</span></span>
<span class="line"><span style="color:#A6ACCD;">    to</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">short, l=</span><span style="color:#89DDFF;">$</span><span style="color:#FFCB6B;">V</span><span style="color:#89DDFF;">_{</span><span style="color:#FFCB6B;">out</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">(4,-2)   node </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">ground</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> {};</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">draw</span><span style="color:#A6ACCD;"> (4,0) coordinate</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">inputarrow,rotate=90</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">end</span><span style="color:#A6ACCD;">{tikzpicture}</span></span>
<span class="line"></span></code></pre></div><ul><li>List of electrical circuits : <a href="https://github.com/vincentchoqueuse/analog_circuits_tikz" target="_blank" rel="noreferrer">github</a></li></ul>`,8),e=[o];function t(c,r,D,F,y,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};