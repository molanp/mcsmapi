# 节点操作

## _class_ `Daemon`

获取操作节点的子类

```py
api = mcsm.daemon()
```

---

### _method_ `config()`

获取全部节点配置信息

#### 返回

- `list[DaemonStatus]`: 节点的配置信息列表

### _method_ `info()`

获取全部节点信息

#### 返回

- `list[DaemonInfo]`: 节点信息列表

### _method_ `system()`

获取全部节点的系统信息

#### 返回

- `list[DaemonSystemInfo]`: 节点的系统信息列表

### _method_ `add(config: dict[str, Any])`

新增一个节点

#### 参数

- `config`: 节点的配置信息，以字典形式提供，缺失内容由 `DaemonConfig` 模型补全

#### 返回

- `str`: 新增节点的 UUID

### _method_ `delete(daemonId: str)`

删除一个节点

#### 参数

- `daemonId`: 节点的 UUID

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `link(daemonId: str)`

连接一个节点

#### 参数

- `daemonId`: 节点的 UUID

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `update(daemonId: str, config: dict[str, Any])`

更新一个节点的配置

#### 参数

- `daemonId`: 节点的 UUID
- `config`: 节点的配置信息，以字典形式提供，缺失内容由 `DaemonUpdateConfig` 模型补全

#### 返回

- `bool`: 操作成功后返回 True
