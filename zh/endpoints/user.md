# 用户

## _class_ `User`

获取操作用户的子类

```py
api = mcsm.user
```

---

### _method_ `search(username: str = "", page: int = 1, page_size: int = 20, role: Literal[-1, 1, 10, ""] = "")`

根据用户名和角色搜索用户信息

#### 参数

- `username`: 用户名，默认为空字符串，表示不进行用户名过滤
- `page`: 页码，用于指示返回数据的第几页
- `page_size`: 每页数据条数，默认为 20
- `role`: 过滤的用户权限，默认为空字符串，表示不进行权限过滤

#### 返回

- `SearchUserModel`: 搜索结果模型

### _method_ `create(username: str, password: str, permission: int = 1)`

创建新用户

#### 参数

- `username`: 用户名
- `password`: 密码
- `permission`: 权限等级，默认为 1

#### 返回

- `UserCreateResult`: 包含创建结果的模型

### _method_ `update(uuid: str, config: dict[str, Any])`

更新用户信息

::: warning
此函数不建议直接使用，建议调用 `search` 后使用用户对象的 `update` 方法按需更新
:::

#### 参数

- `uuid`: 用户的 UUID
- `config`: 新的用户信息，以字典形式提供，缺失内容由 `UserModel` 模型提供默认值

#### 返回

- `bool`: 成功时返回 True

### _method_ `delete(uuids: list[str])`

删除用户

#### 参数

- `uuids`: 要删除的用户 UUID 列表

#### 返回

- `bool`: 删除成功时返回 True
