# Kokomi 用户数据库设计

## Region 数据

### Table 1: Region

用于储存 id 对应的地区（主要是为了减少数据库大小）， 内连后续表

```sql
CREATE TABLE region (
    region_id      TINYINT        NOT NULL,
    region_str     VARCHAR(5)     NOT NULL,

    PRIMARY KEY (region_id)
);

INSERT INTO region
    (region_id, region_str)
VALUES
    (1, "asia"), (2, "eu"), (3, "na"), (4, "ru"), (5, "cn");
```

#### region_id 对应列表

| region_id | region_str |
| --------- | ---------- |
| 1         | asia       |
| 2         | eu         |
| 3         | na         |
| 4         | ru         |
| 5         | cn         |

### Table 2: RegionSeason

用于储存 id 对应的地区（主要是为了减少数据库大小）， 内连后续表

```sql
CREATE TABLE region_season (
    region_id      TINYINT        NOT NULL,
    season_number  TINYINT        NOT NULL,

    PRIMARY KEY (region_id),

    FOREIGN KEY (region_id) REFERENCES region(region_id) ON DELETE CASCADE -- 外键
);

INSERT INTO region_season
    (region_id, season_number)
VALUES
    (1, 0), (2, 0), (3, 0), (4, 0), (5, 0);
```

### Table 3: RegionVersion

用于储存 id 对应的地区的游戏版本

```sql
CREATE TABLE region_version (
    id               INT          AUTO_INCREMENT,
    region_id        TINYINT      NOT NULL,
    game_version     VARCHAR(10)  DEFAULT NULL,
    version_start    TIMESTAMP    DEFAULT NULL,
    full_version     VARCHAR(100) DEFAULT NULL,
    -- 记录数据创建的时间和更新时间略
    created_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       TIMESTAMP    DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id), -- 主键

    UNIQUE INDEX idx_rid (region_id), -- 索引

    FOREIGN KEY (region_id) REFERENCES region(region_id) ON DELETE CASCADE -- 外键
);

INSERT INTO region_version
    (region_id)
VALUES
    (1), (2), (3), (4), (5);
```
