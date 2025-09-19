# 实例

## _class_ `Instance`

获取操作实例的子类

```py
api = mcsm.instance()
```

---

### _method_ `search(daemonId: str, page: int = 1, page_size: int = 20, instance_name: str = "", status: Literal[-1, 0, 1, 2, 3, ""] = "", tag: list[str] | None = None)`

根据指定的参数搜索实例信息

#### 参数

- `daemonId`: 节点的 UUID
- `page`: 页码，用于指示返回数据的第几页
- `page_size`: 每页数据条数，默认为 20
- `instance_name`: 用于过滤的实例名称
- `status`: 用于过滤的实例状态
- `tag`: 用于过滤的实例标签列表

#### 返回

- `InstanceSearchList`: 搜索结果模型

### _method_ `detail(daemonId: str, uuid: str)`

获取指定实例的详细信息

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID

#### 返回

- `InstanceDetail`: 实例详细信息模型

### _method_ `create(daemonId: str, config: dict[str, Any])`

创建新实例

#### 参数

- `daemonId`: 节点的 UUID
- `config`: 新实例的配置，以字典形式提供，缺失内容由 `InstanceConfig` 模型提供默认值

#### 返回

- `InstanceCreateResult`: 一个包含新创建实例信息的结果对象

### _method_ `updateConfig(daemonId: str, uuid: str, config: dict[str, Any])`

更新实例配置

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `config`: 新的配置，以字典形式提供，缺失内容由 `InstanceConfig` 模型提供默认值

#### 返回

- `str`: 被更新配置的实例 UUID

### _method_ `delete(daemonId: str, uuids: list[str])`

删除实例

#### 参数

- `daemonId`: 节点的 UUID
- `uuids`: 要删除的实例 UUID 列表
- `deleteFile`: 是否删除实例文件

#### 返回

- `str`: 被删除的实例 UUID 列表

### _method_ `start(daemonId: str, uuid: str)`

启动实例

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 要启动的实例 UUID

#### 返回

- `str`: 被启动的实例的 UUID

### _method_ `stop(daemonId: str, uuid: str)`

关闭实例

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 要关闭的实例 UUID

#### 返回

- `str`: 被关闭的实例的 UUID

### _method_ `restart(daemonId: str, uuid: str)`

重启实例

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 要重启的实例 UUID

#### 返回

- `str`: 被重启的实例的 UUID

### _method_ `kill(daemonId: str, uuid: str)`

强制关闭实例

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 要停止的实例 UUID

#### 返回

- `str`: 被停止的实例的 UUID

### _method_ `batchOperation(instances: list[batchOperationDetail], operation: Literal["start", "stop", "restart", "kill"])`

批量操作实例

#### 参数

- `instances`: 批量操作的实例列表
- `operation`: 操作类型

#### 返回

- `bool`: 操作成功返回 True

### _method_ `update(daemonId: str, uuid: str)`

更新实例

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID

#### 返回

- `bool`: 操作成功返回 True

### _method_ `command(daemonId: str, uuid: str, command: str)`

向实例发送命令

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `command`: 命令

#### 返回

- `str`: 被操作的实例的 UUID

### _method_ `get_output(daemonId: str, uuid: str, size: int | None = None)`

获取实例输出

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `size`: 获取的输出大小: 1KB ~ 2048KB，如果未设置，则返回所有日志

#### 返回

- `str`: 日志内容

### _method_ `reinstall(daemonId: str, uuid: str, targetUrl: str, title: str = "", description: str = "")`

重装实例

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `targetUrl`: 重装文件的目标 URL
- `title`: 重装文件的标题
- `description`: 重装文件的描述

#### 返回

- `bool`: 操作成功返回 True
