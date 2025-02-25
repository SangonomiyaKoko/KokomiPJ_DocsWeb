# Redis 设计

## Func1: 请求限流

通过固定窗口的方式，实现 ip 请求限流

**Key**: `rate_limit:{host}:{current_time}`

**Ex**: 15s(默认)

```txt
0
```

## Func2: 每日请求统计

统计每天的总体请求量和请求返回 ok 和 error 的数量

**Key**: `api_calls:daily:{current_date}`

**Ex**: 31d

```txt
0
```

## Func3: 过去 24h 请求量统计

通过过去 24h 每个小时的请求量

**Key**: `api_calls:hourly:{current_hour}`

**Ex**: 25h

```txt
0
```

## Func4: 用户绑定数据缓存

Bot 用户绑定数据的缓存

**Key**: `app_bot:bind_cache:{platform}:{user_id}`

**Ex**: 24h

```txt
{
    'region_id': 1,
    'account_id': 123456789
}
```

## Func5: 用户Token数据缓存

游戏账号用户名称数据的缓存

**Key**: `token_cache:{token_type}:{region_id}:{account_id}`

**Ex**: 24h
