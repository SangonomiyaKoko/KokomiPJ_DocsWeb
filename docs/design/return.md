# API 接口返回值规范

## Status Code

> 只讨论常见的 code

| Code | 描述                                               |
| ---- | -------------------------------------------------- |
| 200  | 成功获取数据，常用于 GET POST 请求中               |
| 204  | 成功处理请求，未返回任何内容，常用于 DELETE 请求中 |
| 400  | 错误请求                                           |
| 401  | 用户没有有效身份验证凭据                           |
| 403  | 用户的权限不足                                     |
| 405  | 所请求资源不支持请求方法                           |
| 429  | 请求超过限速                                       |

## Return Code 1

> 获取到数据中 code 及 message 的含义

| Code | Message            | 描述                                                 |
| ---- | ------------------ | ---------------------------------------------------- |
| 1000 | Success            | 成功获取数据                                         |
| 2000 | NetworkError       | NetworkError，网络错误                               |
| 2001 | NetworkError       | ConnectTimeout，请检查网络连接或目标服务器是否可用   |
| 2002 | NetworkError       | ReadTimeout，服务器没有在规定时间内响应              |
| 2003 | NetworkError       | TimeoutException                                     |
| 2004 | NetworkError       | ConnectError，无法建立连接                           |
| 2005 | NetworkError       | ReadError，无法从网络接收数据                        |
| 3000 | DatabaseError      | DatabaseError，数据库错误                            |
| 3001 | DatabaseError      | ProgrammingError，SQL 语法错误或数据库对象不存在等   |
| 3002 | DatabaseError      | OperationalError，操作错误，如连接失败、超时等       |
| 3003 | DatabaseError      | IntegrityError，数据完整性错误，例如违反唯一性约束等 |
| 4000 | RedisError         | Redis 缓存错误                                       |
| 5000 | ProgramError       | 一般程序错误                                         |
| 6000 | VersionError       | 当前版本不可用                                       |
| 7000 | InvalidParameter   | 输入的参数有误                                       |
| 8000 | ServiceUnavailable | 服务器当前维护中，暂停服务                           |

## Return Code 2

> 获取到数据中 code 及 message 的含义

| Code | Message                   | 描述                                     |
| ---- | ------------------------- | ---------------------------------------- |
| 1001 | UserNotExist              | 查询的用户数据不存在                     |
| 1002 | ClanNotExist              | 查询的工会数据不存在                     |
| 1003 | IllegalAccoutIDorRegionID | AccountID 或者 RegionID 参数不合法       |
| 1004 | IllegalClanIDorRegionID   | ClanID 或者 RegionID 参数不合法          |
| 1005 | UserHiddenProfite         | 用户隐藏战绩                             |
| 1006 | UserDataisNone            | 用户没有数据                             |
| 1007 | ClanDataisNone            | 工会没有数据                             |
| 1008 | UserNotExistinDatabase    | 用户在数据库中没有数据                   |
| 1009 | ClanNotExistinDatabase    | 工会在数据库中没有数据                   |
| 1010 | IllegalRegion             | 输入的 Region 参数不合法                 |
| 1011 | IllegalUserName           | 输入的 username 参数长度要在 3-25 个字符 |
| 1012 | IllegalClanTag            | 输入的 clantag 参数长度要在 2-5 个字符   |
| 1013 | ACisInvalid               | 输入的 ac 参数无效                       |
| 1014 | EnableRecentFailed        | 启用 Recent 功能失败，因为账号不活跃     |
| 1015 | EnableRecentsFailed       | 启用 Recents 功能失败，因为账号不活跃    |
| 1016 | UserInBlacklist           | 用户在黑名单内                           |
| 1017 | ClanInBlacklist           | 工会在黑名单内                           |
| 1018 | RecentNotEnabled          | 用户 Recent 功能未启用                   |
| 1019 | RecentsNotEnabled         | 用户 Recents 功能未启用                  |
| 1020 | AC2isInvalid              | 输入的 ac2 参数无效                      |
| 1021 | UserUpdateLockFailed      | 用户更新锁获取失败                       |

## Return Code 3

> 获取到数据中 code 及 message 的含义

| Code | Message                  | 描述                             |
| ---- | ------------------------ | -------------------------------- |
| 1301 | InvalidEmailOrPassword   | 用户输入的邮箱或者密码格式不正确 |
| 1302 | InvalidVerificationCode  | 用户邮箱验证码有误               |
| 1303 | InvalidInvitationCode    | 用户邀请码有误                   |
| 1304 | IncorrectEmailOrPassword | 用户输入的邮箱或者密码有误       |
| 1305 | VersionNotSupported      | 当前版本不支持                   |
