# APP 接口文档

## 用户登录注册相关功能接口

### 1. 用户注册接口

#### 基本信息

- path: `/a/auth/register/`
- methon: `POST`

---

#### 请求头

- Accept-Version: APP 版本

#### 查询参数

- 无

#### 请求体

- `email` (String): 用户邮箱
- `password` (String): 用户密码
- `verification_code` (String): 邮箱验证码
- `invitation_code` (String): 邀请码

---

#### 请求示例

```http
GET /a/auth/register/ HTTP/1.1
Accept-Version: 1.0
```
