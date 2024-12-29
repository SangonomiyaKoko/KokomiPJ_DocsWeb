# Kokomi 用户数据库设计

## APP User 数据

### Table 1: User_basic

```sql
CREATE TABLE app_user (
    -- 相关id
    id               INT          AUTO_INCREMENT,
    email            VARCHAR(255) NOT NULL UNIQUE,
    password_hashed  VARCHAR(255) NOT NULL,
    salt_value       VARCHAR(10)  NOT NULL,
    -- 用户信息
    nickname         VARCHAR(25)  DEFAULT NULL,
    lock_until       TIMESTAMP    DEFAULT NULL,
    last_login_at    TIMESTAMP    DEFAULT NULL,
    -- 记录数据创建的时间和更新时间
    created_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id), -- 主键

    INDEX idx_tag (tag), -- 索引

    UNIQUE INDEX idx_rid_cid (region_id, clan_id) -- 索引
)
```
