# Kokomi 用户数据库设计

## Ships 数据

### Table 1: User_Basic

用于存储用户的基础信息

```sql
CREATE TABLE existing_ships (
    -- 相关id
    id               INT          AUTO_INCREMENT,
    ship_id          BIGINT       NOT NULL UNIQUE,
    -- 记录数据创建的时间和更新时间
    created_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id) -- 主键
);
```

### Table 2：User_Ship_Cache

用于记录用户中所有的 ship_id 的数据

如果需要计算服务器数据就只用遍历数据库将所有数据相加

如果需要计算船只排行榜只用筛选出有效数据计算排行榜

```sql
CREATE TABLE ship_{ship_id} (
    id               INT          AUTO_INCREMENT,
    -- 用户基本信息
    account_id       BIGINT       NOT NULL,
    region_id        TINYINT      NOT NULL,
    -- 场次，其中根据组队占比增加 `组队效率` 算法
    battles_count    INT          NOT NULL,    -- 总场次
    battle_type_1    INT          NOT NULL,      -- 单野场次
    battle_type_2    INT          NOT NULL,      -- 双排场次
    battle_type_3    INT          NOT NULL,      -- 三排场次
    -- 具体数据，用于计算数据
    wins             INT          NOT NULL,    -- 胜场
    damage_dealt     BIGINT       NOT NULL,    -- 总伤害
    frags            INT          NOT NULL,    -- 总击杀数
    exp              BIGINT       NOT NULL,    -- 总裸经验
    survived         INT          NOT NULL,    -- 总存活场次
    scouting_damage  BIGINT       NOT NULL,    -- 总侦查伤害
    art_agro         BIGINT       NOT NULL,    -- 总潜在伤害
    planes_killed    INT          NOT NULL,    -- 总飞机击杀数
    -- 最高记录
    max_exp          INT          NOT NULL,    -- 最高裸经验
    max_damage_dealt INT          NOT NULL,    -- 最高伤害
    max_frags        INT          NOT NULL,    -- 最多击杀
    -- 记录数据创建的时间和更新时间
    created_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id), -- 主键

    UNIQUE INDEX idx_sid_rid_aid (region_id, account_id) -- 主键
);
```
