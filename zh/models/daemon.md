# 节点模型

## _class_ `SystemInfo(BaseModel)`

节点系统信息

| 字段名     | 类型                       | 描述                                                                                                   |
| ---------- | -------------------------- | ------------------------------------------------------------------------------------------------------ |
| `type`     | str                        | 系统类型                                                                                               |
| `hostname` | str                        | 主机名                                                                                                 |
| `platform` | str                        | 平台架构                                                                                               |
| `release`  | str                        | 系统版本                                                                                               |
| `uptime`   | float                      | 系统运行时间(单位: sec)                                                                                |
| `cwd`      | str                        | 远程节点运行路径                                                                                       |
| `loadavg`  | tuple[float, float, float] | 系统负载平均值（仅适用于 Linux 和 macOS），表示过去 ​**​1 分钟、5 分钟、15 分钟 ​**​ 内的 CPU 负载情况 |
| `freemem`  | int                        | 可用内存(单位: byte)                                                                                   |
| `cpuUsage` | float                      | cpu 使用率                                                                                             |
| `memUsage` | float                      | 内存使用率                                                                                             |
| `totalmem` | int                        | 内存总量(单位: byte)                                                                                   |

## _class_ `DaemonSetting(BaseModel)`

节点系统配置信息

| 字段名                        | 类型 | 描述                                          |
| ----------------------------- | ---- | --------------------------------------------- |
| `language`                    | str  | 节点语言                                      |
| `uploadSpeedRate`             | int  | 上传速度限制(0 为不限制, 限制为(n \* 64)KB/s) |
| `downloadSpeedRate`           | int  | 下载速度限制(0 为不限制, 限制为(n \* 64)KB/s) |
| `portRangeStart`              | int  | 端口范围起始值                                |
| `portRangeEnd`                | int  | 端口范围结束值                                |
| `portAssignInterval`          | int  | 未知                                          |
| `port`                        | int  | 节点监听端口                                  |
| `maxDownloadFromUrlFileCount` | int  | 允许同时下载的远程下载任务数量                |

## _class_ `DaemonSystemInfo(DaemonStatus)`

节点信息

| 字段名        | 类型                             | 描述               |
| ------------- | -------------------------------- | ------------------ |
| `version`     | str \| None = None               | 节点版本           |
| `process`     | ProcessInfo \| None = None       | 节点进程信息       |
| `instance`    | InstanceStat \| None = None      | 节点实例统计信息   |
| `system`      | SystemInfo \| None = None        | 节点系统信息       |
| `cpuMemChart` | list[CpuMemChart] \| None = None | cpu 和内存使用趋势 |
| `config`      | DaemonSetting \| None = None     | 节点配置信息       |

## _class_ `DaemonOperation(BaseModel)`

节点操作
| 字段名 | 类型 | 描述 |
| -------- | ---- | ---- |
| `uuid` | str | 节点 UUID |

### _method_ `delete()`

删除该节点

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `link()`

尝试连接该节点

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `updateConfig(self, config: dict[str, Any])`

更新该节点的配置

#### 参数

- `config`: 节点的配置信息，以字典形式提供，缺失内容使用原节点配置填充

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `createInstance(self, config: dict[str, Any])`

在当前节点创建一个实例

#### 参数

- `config`: 实例的配置信息，以字典形式提供，缺失内容由 InstanceConfig 模型补全

#### 返回

- `InstanceCreateResult`: 一个包含新创建实例信息结果的对象

### _method_ `deleteInstance(self, uuids: list[str], deleteFile=False)`

删除当前节点的一个或多个实例

### 参数

- `uuids`: 要删除的实例 UUID 列表
- `deleteFile`: 是否删除关联的文件

#### 返回

- `list[str]`: 删除操作后返回的 UUID 列表

## _class_ `DaemonConfig(BaseModel)`

节点配置信息

| 字段名    | 类型 | 描述               |
| --------- | ---- | ------------------ |
| `ip`      | str  | 远程节点的 ip      |
| `port`    | int  | 远程节点的端口     |
| `prefix`  | str  | 远程节点的路径前缀 |
| `remarks` | str  | 远程节点的备注     |
| `apiKey`  | str  | 远程节点的 apiKey  |

## _class_ `DaemonStatus(DaemonOperation)`

节点状态信息

| 字段名      | 类型 | 描述               |
| ----------- | ---- | ------------------ |
| `ip`        | str  | 节点的 ip      |
| `port`      | int  | 节点的端口     |
| `prefix`    | str  | 节点的路径前缀 |
| `remarks`   | str  | 节点的备注     |
| `available` | bool | 节点可用状态       |

## _class_ `DaemonInfo(DaemonStatus)`

节点信息

| 字段名      | 类型                 | 描述         |
| ----------- | -------------------- | ------------ |
| `instances` | list[InstanceDetail] | 节点实例列表 |

## _class_ `DaemonUpdateConfig(DaemonConfig)`

节点更新配置信息

| 字段名    | 类型          | 描述         |
| --------- | ------------- | ------------ |
| `setting` | DaemonSetting | 节点系统配置 |
