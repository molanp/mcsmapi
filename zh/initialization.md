# 初始化 MCSMAPI 对象

::: tip
后续的所有操作都默认你已经完成了此项配置
:::

## _class_ `MCSMAPI(url, timeout: int = 5)`

初始化 MCSMAPI 对象

### 参数

- `url`: MCSM 前端地址的 URL(包含协议头)
- `timeout`: 请求超时时间，默认为 5 秒

### 例子

```py
from mcsmapi import MCSMAPI
mcsm = MCSMAPI("http://127.0.0.1:8080")
```

# 登录鉴权

大部分接口需要身份验证才能使用

## 密码登录

### _method_ `login(username: str, password: str)`

### 参数

- `username`: 用户名
- `password`: 密码

### 例子

```py
mcsm.login("username", "password")
```

## 密钥登录

### _method_ `login_with_apikey(apikey: str)`

### 参数

- `apikey`: 密钥

### 例子

```py
mcsm.login_with_apikey("apikey")
```

# 快捷操作说明

`MCSMAPI`对象中的每一个接口，都可在对应的模型中直接调用

例如，你可以在 `User` 模型中，使用 `MCSMAPI.user()` 中的大部分方法