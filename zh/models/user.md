# 用户操作相关模型

## _class_ `UserPermission(IntEnum)`

用户权限级别

| 枚举项   | 枚举值 | 描述         |
| -------- | ------ | ------------ |
| `BANNED` | -1     | 封禁用户权限 |
| `USER`   | 1      | 普通用户权限 |
| `ADMIN`  | 10     | 管理员权限   |

## _class_ `UserInstances(BaseModel)`

用户实例信息

| 字段名         | 类型 | 描述          |
| -------------- | ---- | ------------- |
| `instanceUuid` | str  | 实例 UUID     |
| `daemonId`     | str  | 所属的节点 ID |

## _class_ `UserCreateResult(BaseModel)`

用户创建结果

| 字段名       | 类型           | 描述                  |
| ------------ | -------------- | --------------------- |
| `uuid`       | str            | 用户唯一标识符 (UUID) |
| `userName`   | str            | 用户名                |
| `permission` | UserPermission | 用户权限级别          |

## _class_ `UserModel(BaseModel)`

用户信息模型

| 字段名         | 类型                | 描述                                 |
| -------------- | ------------------- | ------------------------------------ |
| `uuid`         | str                 | 用户唯一标识符 (UUID)                |
| `userName`     | str                 | 用户名                               |
| `permission`   | UserPermission      | 用户权限级别                         |
| `registerTime` | str                 | 用户注册时间 (YYYY/M/D hh:mm:ss)     |
| `loginTime`    | str                 | 用户最后登录时间 (YYYY/M/D hh:mm:ss) |
| `apiKey`       | str                 | 用户 API 密钥                        |
| `passWord`     | str                 | 用户密码                             |
| `open2FA`      | bool                | 是否启用双因素认证 (2FA)             |
| `instances`    | list[UserInstances] | 用户关联的实例列表                   |
| `isInit`       | bool                | 是否为初始化用户 (已弃用)            |
| `secret`       | str                 | 用户安全密钥 (已弃用)                |
| `passWordType` | int                 | 密码类型 (已弃用)                    |
| `salt`         | str                 | 密码盐值 (已弃用)                    |

### _method_ `delete(self)`

删除该用户

#### 返回

- `bool`: 删除成功时返回 True

### _method_ `update(self, config: dict[str, Any])`

更新该用户的信息

#### 参数

- `config`: 用户的新信息，以字典形式提供，缺失内容使用原用户信息填充

#### 返回

- `bool`: 更新成功时返回 True

## _class_ `SearchUserModel(BaseModel)`

用户搜索结果

| 字段名      | 类型            | 描述               |
| ----------- | --------------- | ------------------ |
| `total`     | int             | 匹配的用户总数     |
| `page`      | int             | 当前页码           |
| `page_size` | int             | 每页返回的用户数量 |
| `max_page`  | int             | 最大可用页数       |
| `data`      | list[UserModel] | 用户信息列表       |
