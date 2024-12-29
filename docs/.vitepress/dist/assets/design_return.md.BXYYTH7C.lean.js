import{_ as d,c as r,a0 as e,o as a}from"./chunks/framework.B_Gi1r42.js";const b=JSON.parse('{"title":"API 接口返回值规范","description":"","frontmatter":{},"headers":[],"relativePath":"design/return.md","filePath":"design/return.md","lastUpdated":null}'),o={name:"design/return.md"};function n(l,t,i,s,c,h){return a(),r("div",null,t[0]||(t[0]=[e('<h1 id="api-接口返回值规范" tabindex="-1">API 接口返回值规范 <a class="header-anchor" href="#api-接口返回值规范" aria-label="Permalink to &quot;API 接口返回值规范&quot;">​</a></h1><h2 id="status-code" tabindex="-1">Status Code <a class="header-anchor" href="#status-code" aria-label="Permalink to &quot;Status Code&quot;">​</a></h2><blockquote><p>只讨论常见的 code</p></blockquote><table tabindex="0"><thead><tr><th>Code</th><th>描述</th></tr></thead><tbody><tr><td>200</td><td>成功获取数据，常用于 GET POST 请求中</td></tr><tr><td>204</td><td>成功处理请求，未返回任何内容，常用于 DELETE 请求中</td></tr><tr><td>400</td><td>错误请求</td></tr><tr><td>401</td><td>用户没有有效身份验证凭据</td></tr><tr><td>403</td><td>用户的权限不足</td></tr><tr><td>405</td><td>所请求资源不支持请求方法</td></tr><tr><td>429</td><td>请求超过限速</td></tr></tbody></table><h2 id="return-code-1" tabindex="-1">Return Code 1 <a class="header-anchor" href="#return-code-1" aria-label="Permalink to &quot;Return Code 1&quot;">​</a></h2><blockquote><p>获取到数据中 code 及 message 的含义</p></blockquote><table tabindex="0"><thead><tr><th>Code</th><th>Message</th><th>描述</th></tr></thead><tbody><tr><td>1000</td><td>Success</td><td>成功获取数据</td></tr><tr><td>2000</td><td>NetworkError</td><td>NetworkError，网络错误</td></tr><tr><td>2001</td><td>NetworkError</td><td>ConnectTimeout，请检查网络连接或目标服务器是否可用</td></tr><tr><td>2002</td><td>NetworkError</td><td>ReadTimeout，服务器没有在规定时间内响应</td></tr><tr><td>2003</td><td>NetworkError</td><td>TimeoutException</td></tr><tr><td>2004</td><td>NetworkError</td><td>ConnectError，无法建立连接</td></tr><tr><td>2005</td><td>NetworkError</td><td>ReadError，无法从网络接收数据</td></tr><tr><td>3000</td><td>DatabaseError</td><td>DatabaseError，数据库错误</td></tr><tr><td>3001</td><td>DatabaseError</td><td>ProgrammingError，SQL 语法错误或数据库对象不存在等</td></tr><tr><td>3002</td><td>DatabaseError</td><td>OperationalError，操作错误，如连接失败、超时等</td></tr><tr><td>3003</td><td>DatabaseError</td><td>IntegrityError，数据完整性错误，例如违反唯一性约束等</td></tr><tr><td>4000</td><td>RedisError</td><td>Redis 缓存错误</td></tr><tr><td>5000</td><td>ProgramError</td><td>一般程序错误</td></tr><tr><td>6000</td><td>VersionError</td><td>当前版本不可用</td></tr><tr><td>7000</td><td>InvalidParameter</td><td>输入的参数有误</td></tr><tr><td>8000</td><td>ServiceUnavailable</td><td>服务器当前维护中，暂停服务</td></tr></tbody></table><h2 id="return-code-2" tabindex="-1">Return Code 2 <a class="header-anchor" href="#return-code-2" aria-label="Permalink to &quot;Return Code 2&quot;">​</a></h2><blockquote><p>获取到数据中 code 及 message 的含义</p></blockquote><table tabindex="0"><thead><tr><th>Code</th><th>Message</th><th>描述</th></tr></thead><tbody><tr><td>1001</td><td>UserNotExist</td><td>查询的用户数据不存在</td></tr><tr><td>1002</td><td>ClanNotExist</td><td>查询的工会数据不存在</td></tr><tr><td>1003</td><td>IllegalAccoutIDorRegionID</td><td>AccountID 或者 RegionID 参数不合法</td></tr><tr><td>1004</td><td>IllegalClanIDorRegionID</td><td>ClanID 或者 RegionID 参数不合法</td></tr><tr><td>1005</td><td>UserHiddenProfite</td><td>用户隐藏战绩</td></tr><tr><td>1006</td><td>UserDataisNone</td><td>用户没有数据</td></tr><tr><td>1007</td><td>ClanDataisNone</td><td>工会没有数据</td></tr><tr><td>1008</td><td>UserNotExistinDatabase</td><td>用户在数据库中没有数据</td></tr><tr><td>1009</td><td>ClanNotExistinDatabase</td><td>工会在数据库中没有数据</td></tr><tr><td>1010</td><td>IllegalRegion</td><td>输入的 Region 参数不合法</td></tr><tr><td>1011</td><td>IllegalUserName</td><td>输入的 username 参数长度要在 3-25 个字符</td></tr><tr><td>1012</td><td>IllegalClanTag</td><td>输入的 clantag 参数长度要在 2-5 个字符</td></tr><tr><td>1013</td><td>ACisInvalid</td><td>输入的 ac 参数无效</td></tr><tr><td>1014</td><td>EnableRecentFailed</td><td>启用 Recent 功能失败，因为账号不活跃</td></tr><tr><td>1015</td><td>EnableRecentsFailed</td><td>启用 Recents 功能失败，因为账号不活跃</td></tr><tr><td>1016</td><td>UserInBlacklist</td><td>用户在黑名单内</td></tr><tr><td>1017</td><td>ClanInBlacklist</td><td>工会在黑名单内</td></tr><tr><td>1018</td><td>RecentNotEnabled</td><td>用户 Recent 功能未启用</td></tr><tr><td>1019</td><td>RecentsNotEnabled</td><td>用户 Recents 功能未启用</td></tr><tr><td>1020</td><td>AC2isInvalid</td><td>输入的 ac2 参数无效</td></tr></tbody></table><h2 id="return-code-3" tabindex="-1">Return Code 3 <a class="header-anchor" href="#return-code-3" aria-label="Permalink to &quot;Return Code 3&quot;">​</a></h2><blockquote><p>获取到数据中 code 及 message 的含义</p></blockquote><table tabindex="0"><thead><tr><th>Code</th><th>Message</th><th>描述</th></tr></thead><tbody><tr><td>1301</td><td>InvalidEmailOrPassword</td><td>用户输入的邮箱或者密码格式不正确</td></tr><tr><td>1302</td><td>InvalidVerificationCode</td><td>用户邮箱验证码有误</td></tr><tr><td>1303</td><td>InvalidInvitationCode</td><td>用户邀请码有误</td></tr><tr><td>1304</td><td>IncorrectEmailOrPassword</td><td>用户输入的邮箱或者密码有误</td></tr><tr><td>1305</td><td>VersionNotSupported</td><td>当前版本不支持</td></tr></tbody></table>',13)]))}const E=d(o,[["render",n]]);export{b as __pageData,E as default};
