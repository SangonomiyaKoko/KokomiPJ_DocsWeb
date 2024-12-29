# Kokomi 用户数据库设计

## User 数据

### Table 1: User_Basic

用于存储用户的基础信息

```sql
CREATE TABLE user_basic (
    -- 相关id
    id               INT          AUTO_INCREMENT,
    account_id       BIGINT       NOT NULL UNIQUE,    -- 1-11位的非连续数字
    region_id        TINYINT      NOT NULL,
    -- 用户基础信息数据: name
    username         VARCHAR(25)  NOT NULL,    -- 最大25个字符，编码：utf-8
    -- 记录数据创建的时间和更新时间
    created_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       TIMESTAMP    DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id), -- 主键

    INDEX idx_username (username), -- 索引

    UNIQUE INDEX idx_rid_aid (region_id, account_id), -- 索引

    FOREIGN KEY (region_id) REFERENCES region(region_id) ON DELETE CASCADE -- 外键
);
```

### Table 2: User_History

记录用户曾经使用过昵称和时间段

```sql
CREATE TABLE user_history (
    -- 相关id
    id               INT          AUTO_INCREMENT,
    account_id       BIGINT       NOT NULL,    -- 1-11位的非连续数字
    -- 用户历史名称的记录
    username         VARCHAR(25)  NOT NULL,     -- 最大25个字符，编码：utf-8
    start_time       TIMESTAMP    NOT NULL,     -- 使用该名称的开始时间
    end_time         TIMESTAMP    NOT NULL,     -- 使用该名称的结束时间
    -- 记录数据创建的时间
    created_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id), -- 主键

    INDEX idx_aid (account_id), -- 索引

    INDEX idx_username (username), -- 索引

    FOREIGN KEY (account_id) REFERENCES user_basic(account_id) ON DELETE CASCADE -- 外键
);
```

### Table 3: User_Info

用于存储用户的基本信息

```sql
CREATE TABLE user_info (
    -- 相关id
    id               INT          AUTO_INCREMENT,
    account_id       BIGINT       NOT NULL,     -- 1-11位的非连续数字
    -- 关于用户活跃的信息，用于recent/recents/用户排行榜功能
    is_active        TINYINT      DEFAULT 0,    -- 用于标记用户的有效性，0表示无效，1表示有效
    active_level     TINYINT      DEFAULT 0,    -- 人为设置的用户活跃的等级
    is_public        TINYINT      DEFAULT 0,    -- 用户是否隐藏战绩，0表示隐藏，1表示公开
    total_battles    INT          DEFAULT 0,    -- 用户总场次
    last_battle_at   TIMESTAMP    DEFAULT NULL, -- 用户最后战斗时间
    -- 记录数据创建的时间和更新时间
    created_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       TIMESTAMP    DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id), -- 主键

    UNIQUE INDEX idx_aid (account_id), -- 索引

    FOREIGN KEY (account_id) REFERENCES user_basic(account_id) ON DELETE CASCADE -- 外键
);
```

#### 活跃数据对应的 Active_Level

| is_plblic | total_battles | last_battle_time | active_level | decs     |
| --------- | ------------- | ---------------- | ------------ | -------- |
| 0         | -             | -                | 0            | 隐藏战绩 |
| 1         | 0             | 0                | 1            | 无数据   |
| 1         | -             | [0, 1d]          | 2            | 活跃     |
| 1         | -             | [1d, 3d]         | 3            | -        |
| 1         | -             | [3d, 7d]         | 4            | -        |
| 1         | -             | [7d, 1m]         | 5            | -        |
| 1         | -             | [1m, 3m]         | 6            | -        |
| 1         | -             | [3m, 6m]         | 7            | -        |
| 1         | -             | [6m, 1y]         | 8            | -        |
| 1         | -             | [1y, + ]         | 9            | 不活跃   |

### Table 4: User_Clan

用于存储用户和工会的对应关系

```sql
CREATE TABLE user_clan (
    id               INT          AUTO_INCREMENT,
    account_id       BIGINT       NOT NULL,       -- 1-10位的非连续数字
    clan_id          BIGINT       DEFAULT NULL,   -- 10位的非连续数字 none表示无工会
    -- 记录数据创建的时间和更新时间
    created_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       TIMESTAMP    DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id), -- 主键

    UNIQUE INDEX idx_aid (account_id), -- 唯一索引

    INDEX idx_cid (clan_id), -- 非唯一索引

    FOREIGN KEY (account_id) REFERENCES user_basic(account_id) ON DELETE CASCADE, -- 外键
    FOREIGN KEY (clan_id) REFERENCES clan_basic(clan_id) ON DELETE CASCADE -- 外键
);
```

### Table 5: User_Ships_Cache

用于用户缓存相关的数据

```sql
CREATE TABLE user_ships (
    -- 相关id
    id               INT          AUTO_INCREMENT,
    account_id       BIGINT       NOT NULL,     -- 1-11位的非连续数字
    -- 记录用户缓存的数据和更新时间
    battles_count    INT          DEFAULT NULL, -- 总战斗场次
    hash_value       CHAR(64)     DEFAULT NULL, -- 缓存数据的哈希值
    ships_data       BLOB         DEFAULT NULL, -- 压缩处理后的缓存数据
    -- 记录数据创建的时间和更新时间略
    created_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       TIMESTAMP    DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id), -- 主键

    UNIQUE INDEX idx_aid (account_id), -- 索引

    FOREIGN KEY (account_id) REFERENCES user_basic(account_id) ON DELETE CASCADE -- 外键
);
```

#### Active_Level 对应的 Cache 更新频率

| active_level | cache_update_time |
| ------------ | ----------------- |
| 0            | 10d               |
| 1            | 20d               |
| 2            | 1d                |
| 3            | 3d                |
| 4            | 5d                |
| 5            | 7d                |
| 6            | 10d               |
| 7            | 14d               |
| 8            | 20d               |
| 9            | 25d               |

#### 用户 cache_data 格式

##### 存储字典格式的数据（用户船只数据缓存）

```python
user_ship_data = {
    # Key: Value
    # 船只id: 总场次
    4285445840: 75,
    4077828048: 20,
    3760075984: 191,
    ... # 更多数据，最多不超过1000行数据
}
```

因为上述数据为纯数字，所以直接存储二进制更为节省空间

每行数据提供 7 字节的存储空间，前 34 比特存储船只 ID，后 22 比特存储船只总场次

读取的时候，每次读取 7 个字节，解析出 key 和 value，返回字典

```txt
单个数据格式示例

... | ---------------- 7 Byte ------------------- | ...
... | ------- 34 Bit ------- | ----- 22 Bit ----- | ...
... | --------- Key -------- | ------ Value ----- | ...

Key：  船只ID，34位Bit存储
Value：总场次，22位Bit存储
```

##### 两种存储方式效率的分析

> 测试数据行数: 229 行, 9312 字节

1. Str <-> Dict 转换

   - 存储空间：3539 字节
   - 解析耗时：0.001 ± 0.0005 s

2. Byte <-> Dict 转换
   - 存储空间：1603 字节
   - 解析耗时：0.001 ± 0.001 s

结论: 在花费时间基本不变的情况下，减少了数据库 55% 的存储空间
