# Kokomi-API 接口返回值规范说明

## 一、可能的返回状态值

| Code | 描述                           |
| ---- | ------------------------------ |
| 200  | 成功获取数据，或者返回错误信息 |
| 401  | 用户没有有效身份验证凭据       |
| 403  | 用户的权限不足                 |
| 429  | 请求超过限速                   |
| 500  | 服务器出现意外错误，不常见     |

> 目前只有这些返回状态值，部分常见的返回值例如 422 会被捕获并返回为标准格式

```txt
由于所有的接口参数都是已经约定好的，且目前大部分的框架都有前端效验的功能

所以在app的exception_handler层将RequestValidationError捕获，并返回为API_7000_InvalidParameter格式，用于减少bot端效验response的代码

对于后续其他接口，如果需要，会在data中携带相关信息
```

## 二、返回值标准格式

```json
{
  "status": "ok", // 只有两种状态 ok / error
  "code": 1000, // 不同code对应不同含义，具体可查表获取
  "message": "Success", // 对于code的简单解释
  "data": {
    //   承载具体的数据或者错误信息
    //   如果status为error，则此处数据中一定有error_id的key，value为uuid格式
  }
}
```

## 三、异常返回值 Code 含义

> 除了 6000，7000，8000，任何接口返回不是位于 1000-1999 的 code 都可以被视程序运行时捕获到了异常，无法正常返回结果

| Code | Message            | 描述                                                 |
| ---- | ------------------ | ---------------------------------------------------- |
| 2000 | NetworkError       | NetworkError，网络错误                               |
| 2001 | NetworkError       | ConnectTimeout，请检查网络连接或目标服务器是否可用   |
| 2002 | NetworkError       | ReadTimeout，服务器没有在规定时间内响应              |
| 2003 | NetworkError       | TimeoutException，其他超时错误                       |
| 2004 | NetworkError       | ConnectError，无法建立连接                           |
| 2005 | NetworkError       | ReadError，无法从网络接收数据                        |
| 3000 | DatabaseError      | DatabaseError，数据库错误                            |
| 3001 | DatabaseError      | ProgrammingError，SQL 语法错误或数据库对象不存在等   |
| 3002 | DatabaseError      | OperationalError，操作错误，如连接失败、超时等       |
| 3003 | DatabaseError      | IntegrityError，数据完整性错误，例如违反唯一性约束等 |
| 4000 | RedisError         | Redis 缓存错误                                       |
| 5000 | ProgramError       | 一般程序错误，绝大多数错误都包括在这里               |
| 6000 | VersionError       | 当前版本不可用                                       |
| 7000 | InvalidParameter   | 输入的参数有误                                       |
| 8000 | ServiceUnavailable | 服务器当前维护中，暂停服务                           |

一般来说，2001-2005 这类错误都是统一按 2000 处理，对异常进行进一步细划只是为了错误处理时更加方便。

## 四、正常返回值 Code 含义

> 除了 code 1000 外，其他所有的 code 默认 data 是不携带信息的。但对于 delete 接口返回的也是 code 1000 但是不携带数据

注意：此处的返回值主要是用于核心服务器的基础功能，在子服务器上的对于不同的应用会提供 1000-9999 以外的字段来返回特定的信息。例如 code 10000-11000 字段处理 Bot 相关，12000-13000 处理 APP 相关

| Code | Message                   | 描述                                     |
| ---- | ------------------------- | ---------------------------------------- |
| 1000 | Success                   | 成功获取数据                             |
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
