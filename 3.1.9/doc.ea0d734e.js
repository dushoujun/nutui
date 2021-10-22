import{e as a,o as t,G as n}from"./vendor.bd251973.js";const p={class:"markdown-body"},l=n(`<h1>Divider \u5206\u5272\u7EBF</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5C06\u5185\u5BB9\u5206\u9694\u4E3A\u591A\u4E2A\u533A\u57DF\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Divider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Divider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Divider);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><p>\u9ED8\u8BA4\u6E32\u67D3\u4E00\u6761\u6C34\u5E73\u5206\u5272\u7EBF\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-divider</span> /&gt;</span>
</code></pre><h3>\u5C55\u793A\u6587\u672C</h3><p>\u901A\u8FC7\u63D2\u69FD\u5728\u53EF\u4EE5\u5206\u5272\u7EBF\u4E2D\u95F4\u63D2\u5165\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-divider</span>&gt;</span>\u6587\u672C<span class="hljs-tag">&lt;/<span class="hljs-name">nut-divider</span>&gt;</span>
</code></pre><h3>\u5185\u5BB9\u4F4D\u7F6E</h3><p>\u901A\u8FC7 content-position \u6307\u5B9A\u5185\u5BB9\u6240\u5728\u4F4D\u7F6E\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-divider</span> <span class="hljs-attr">content-position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>\u6587\u672C<span class="hljs-tag">&lt;/<span class="hljs-name">nut-divider</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-divider</span> <span class="hljs-attr">content-position</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>\u6587\u672C<span class="hljs-tag">&lt;/<span class="hljs-name">nut-divider</span>&gt;</span>
</code></pre><h3>\u865A\u7EBF</h3><p>\u6DFB\u52A0 dashed \u5C5E\u6027\u4F7F\u5206\u5272\u7EBF\u6E32\u67D3\u4E3A\u865A\u7EBF\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-divider</span> <span class="hljs-attr">dashed</span> /&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><p>\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 style \u5C5E\u6027\u8BBE\u7F6E\u5206\u5272\u7EBF\u7684\u6837\u5F0F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-divider</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ color: &#39;#1989fa&#39;, borderColor: &#39;#1989fa&#39;, padding: &#39;0 16px&#39; }&quot;</span>&gt;</span>\u6587\u672C<span class="hljs-tag">&lt;/<span class="hljs-name">nut-divider</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>dashed</td><td>\u662F\u5426\u4F7F\u7528\u865A\u7EBF</td><td>Boolean</td><td>false</td></tr><tr><td>hairline</td><td>\u662F\u5426\u4F7F\u7528 0.5px \u7EBF</td><td>Boolean</td><td>true</td></tr><tr><td>content-position</td><td>\u5185\u5BB9\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3Aleft right</td><td>String</td><td>center</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u5185\u5BB9</td></tr></tbody></table>`,26),e=[l],i={setup(d,{expose:s}){return s({frontmatter:{}}),(r,o)=>(t(),a("div",p,e))}};export{i as default};
