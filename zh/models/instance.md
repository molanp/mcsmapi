# 实例操作相关模型

## _class_ `CRLFType(IntEnum)`

换行符

| 枚举项 | 枚举值 |
| ------ | ------ |
| `LF`   | 0      |
| `CR`   | 1      |
| `CRLF` | 2      |

## _class_ `Status(IntEnum)`

实例状态

| 枚举项     | 枚举值 | 描述     |
| ---------- | ------ | -------- |
| `BUSY`     | -1     | 维护中   |
| `STOP`     | 0      | 未运行   |
| `STOPPING` | 1      | 停止中   |
| `STARTING` | 2      | 启动中   |
| `RUNNING`  | 3      | 正在运行 |

## _class_ `batchOperationDetail(TypedDict)`

批量操作的实例信息

| 字段名     | 类型 | 描述      |
| ---------- | ---- | --------- |
| `uuid`     | str  | 实例 UUID |
| `daemonId` | str  | 节点 UUID |

## _class_ `TerminalOption(BaseModel)`

终端选项

| 字段名         | 类型 | 描述                 |
| -------------- | ---- | -------------------- |
| `haveColor`    | bool | 是否启用前端颜色渲染 |
| `pty`          | bool | 是否使用伪终端(PTY)  |
| `ptyWindowCol` | int  | PTY 窗口列数         |
| `ptyWindowRow` | int  | PTY 窗口行数         |

## _class_ `EventTask(BaseModel)`

事件任务

| 字段名        | 类型 | 描述           |
| ------------- | ---- | -------------- |
| `autoStart`   | bool | 是否自动启动   |
| `autoRestart` | bool | 是否自动重启   |
| `ignore`      | bool | 是否忽略该任务 |

## _class_ `PingConfig(BaseModel)`

服务器 Ping 配置(已弃用)

| 字段名 | 类型 | 描述                       |
| ------ | ---- | -------------------------- |
| `ip`   | str  | 服务器 IP 地址             |
| `port` | int  | 服务器端口                 |
| `type` | int  | Ping 类型 (0: UDP, 1: TCP) |

## _class_ `InstanceConfig(BaseModel)`

实例配置信息

| 字段名              | 类型           | 描述                                               |
| ------------------- | -------------- | -------------------------------------------------- |
| `nickname`          | str            | 实例名称                                           |
| `startCommand`      | str            | 启动命令                                           |
| `stopCommand`       | str            | 停止命令                                           |
| `cwd`               | str            | 工作目录                                           |
| `ie`                | str            | 输入编码                                           |
| `oe`                | str            | 输出编码                                           |
| `createDatetime`    | int            | 创建时间 (Unix 时间戳)                             |
| `lastDatetime`      | int            | 最后修改时间 (Unix 时间戳)                         |
| `type`              | str            | 实例类型 (universal, minecraft 等)                 |
| `tag`               | list[str]      | 实例标签                                           |
| `endTime`           | int \| None    | 实例到期时间                                       |
| `fileCode`          | str            | 文件编码                                           |
| `processType`       | str            | 进程类型 (如 docker, general)                      |
| `updateCommand`     | str            | 更新命令                                           |
| `actionCommandList` | list[str]      | 实例可执行的操作命令列表                           |
| `crlf`              | CRLFType       | 换行符                                             |
| `docker`            | DockerConfig   | Docker 相关配置                                    |
| `enableRcon`        | bool           | 是否启用 RCON 远程控制                             |
| `rconPassword`      | str            | RCON 连接密码                                      |
| `rconPort`          | int            | RCON 端口                                          |
| `rconIp`            | str            | RCON IP 地址                                       |
| `terminalOption`    | TerminalOption | 终端选项配置                                       |
| `eventTask`         | EventTask      | 事件任务配置                                       |
| `pingConfig`        | PingConfig     | 服务器 Ping 监测配置(已弃用)                       |
| `runAs`             | str            | 运行该实例的系统用户，为空则使用启动面板的系统用户 |

## _class_ `InstanceDetail(BaseModel)`

实例详细信息

| 字段名         | 类型           | 描述            |
| -------------- | -------------- | --------------- |
| `config`       | InstanceConfig | 实例的配置信息  |
| `daemonId`     | str            | 所属的节点 UUID |
| `instanceUuid` | str            | 实例 UUID       |
| `started`      | int            | 实例的启动次数  |
| `status`       | Status         | 实例状态        |

### _method_ `start(self)`

启动该实例

#### 返回

被启动的实例的 UUID

### _method_ `stop(self)`

停止该实例

#### 返回

被停止的实例的 UUID

### _method_ `restart(self)`

重启该实例

#### 返回

被重启的实例的 UUID

### _method_ `kill(self)`

强制关闭该实例

#### 返回

被强制关闭的实例的 UUID

### _method_ `delete(self, deleteFile: bool = False)`

删除该实例

#### 参数

- `deleteFile`: 是否删除关联的文件

#### 返回

被删除的实例的 uuid

### _method_ `update(self)`

升级实例

#### 返回

操作成功返回 True

### _method_ `updateConfig(self, config: dict[str, Any])`

更新该实例配置

#### 参数

- `config`: 新的实例配置，以字典形式提供，缺失内容由使用原实例配置填充

#### 返回

更新成功后返回更新的实例 UUID

### _method_ `reinstall(self, targetUrl: str, title: str = "", description: str = "")`

重装实例

#### 参数

- `targetUrl`: 重装文件的目标 URL
- `title`: 重装文件的标题
- `description`: 重装文件的描述，默认为空字符串

#### 返回

操作成功返回 True

### _method_ `command(self, command: str)`

发送命令给实例

#### 参数

- `command` 要发送的命令

#### 返回

被操作的实例的 UUID

### _method_ `get_output(self, size: int | None = None)`

获取实例的输出

#### 参数

- `size`: 要获取的输出大小

#### 返回

- `str`: 输出结果

### _method_ `files(self, target: str = "", page: int = 0, page_size: int = 100, file_name: str = "")`

获取实例的文件列表

#### 参数

- `target`: 用于文件过滤的目标路径默认为空字符串，表示不按路径过滤
- `page`: 指定分页的页码
- `page_size`: 指定每页的文件数量
- `file_name`: 用于在文件列表中过滤出名称包含指定字符串的文件或文件夹

#### 返回

- `FileList`: 文件列表

## _class_ `InstanceCreateResult(BaseModel)`

实例创建结果

| 字段名         | 类型           | 描述           |
| -------------- | -------------- | -------------- |
| `instanceUuid` | str            | 实例 UUID      |
| `config`       | InstanceConfig | 实例的配置信息 |

## _class_ `InstanceSearchList(BaseModel)`

实例搜索列表

| 字段名     | 类型                 | 描述             |
| ---------- | -------------------- | ---------------- |
| `pageSize` | int                  | 每页的实例数量   |
| `maxPage`  | int                  | 最大页数         |
| `data`     | list[InstanceDetail] | 实例详细信息列表 |
| `daemonId` | str                  | 所属的节点 UUID  |
