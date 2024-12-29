import{_ as i,c as a,a0 as n,o as h}from"./chunks/framework.B_Gi1r42.js";const g=JSON.parse('{"title":"Kokomi 用户数据库设计","description":"","frontmatter":{},"headers":[],"relativePath":"design/mysql/robot_user.md","filePath":"design/mysql/robot_user.md","lastUpdated":null}'),k={name:"design/mysql/robot_user.md"};function l(t,s,p,e,E,r){return h(),a("div",null,s[0]||(s[0]=[n(`<h1 id="kokomi-用户数据库设计" tabindex="-1">Kokomi 用户数据库设计 <a class="header-anchor" href="#kokomi-用户数据库设计" aria-label="Permalink to &quot;Kokomi 用户数据库设计&quot;">​</a></h1><h2 id="bot-user绑定数据" tabindex="-1">Bot User绑定数据 <a class="header-anchor" href="#bot-user绑定数据" aria-label="Permalink to &quot;Bot User绑定数据&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bot_user_basic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    -- 相关id</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id               </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          AUTO_INCREMENT,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    platform         </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 平台</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user_id          </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 用户id</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    -- 绑定信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    region_id        </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TINYINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 服务器id</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    account_id       </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 用户ID</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    -- 记录数据创建的时间和更新时间</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    created_at       </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TIMESTAMP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> DEFAULT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CURRENT_TIMESTAMP,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    updated_at       </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TIMESTAMP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> DEFAULT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CURRENT_TIMESTAMP </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CURRENT_TIMESTAMP,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (id), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 主键</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    UNIQUE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> INDEX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> idx_pid (platform, user_id) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 索引</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,3)]))}const y=i(k,[["render",l]]);export{g as __pageData,y as default};