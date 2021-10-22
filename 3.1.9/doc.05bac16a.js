import{e as t,o as a,G as n}from"./vendor.bd251973.js";const l={class:"markdown-body"},e=n(`<h1>Overlay \u906E\u7F69\u5C42</h1><h3>\u4ECB\u7ECD</h3><p>\u521B\u5EFA\u4E00\u4E2A\u906E\u7F69\u5C42\uFF0C\u901A\u5E38\u7528\u4E8E\u963B\u6B62\u7528\u6237\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { OverLay } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { OverLay } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(OverLay);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-overlay</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;state.show&quot;</span> <span class="hljs-attr">:z-index</span>=<span class="hljs-string">&quot;2000&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-overlay</span>&gt;</span>
</code></pre><h3>\u5D4C\u5957\u5185\u5BB9</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-overlay</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;state.show2&quot;</span> <span class="hljs-attr">:z-index</span>=<span class="hljs-string">&quot;2000&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u6B63\u6587<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-overlay</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:visible</td><td>\u5F53\u524D\u7EC4\u4EF6\u662F\u5426\u663E\u793A</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>z-index</td><td>\u906E\u7F69\u5C42\u7EA7</td><td>String, Number</td><td><code>2000</code></td></tr><tr><td>duration</td><td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2</td><td>String, Number</td><td><code>0.3</code></td></tr><tr><td>overlay-class</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u7C7B\u540D</td><td>String</td><td>-</td></tr><tr><td>overlay-style</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr><tr><td>lock-scroll</td><td>\u80CC\u666F\u662F\u5426\u9501\u5B9A</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>close-on-click-overlay</td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5173\u95ED</td><td>Boolean</td><td><code>true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td>event: Event</td></tr></tbody></table>`,15),d=[e],i={setup(p,{expose:s}){return s({frontmatter:{}}),(o,c)=>(a(),t("div",l,d))}};export{i as default};
