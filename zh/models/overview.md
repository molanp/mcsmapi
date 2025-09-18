# 仪表盘操作相关模型

## _class_ `SystemUser(BaseModel)`

系统用户信息

| 字段名     | 类型        | 描述              |
| ---------- | ----------- | ----------------- |
| `uid`      | int         | 用户 ID (UID)     |
| `gid`      | int         | 用户组 ID (GID)   |
| `username` | str         | 用户名            |
| `homedir`  | str         | 用户主目录        |
| `shell`    | str \| None | 默认 Shell 解释器 |

## _class_ `SystemInfo(BaseModel)`

系统基本信息

| 字段名     | 类型                       | 描述                                |
| ---------- | -------------------------- | ----------------------------------- |
| `user`     | SystemUser                 | 当前登录用户信息                    |
| `time`     | int                        | 系统当前时间 (Unix 时间戳)          |
| `totalmem` | int                        | 系统总内存大小 (单位: 字节)         |
| `freemem`  | int                        | 系统空闲内存大小 (单位: 字节)       |
| `type`     | str                        | 操作系统类型, 例如 `Windows_NT`     |
| `version`  | str                        | 操作系统版本                        |
| `node`     | str                        | 系统 NodeJS 版本                    |
| `hostname` | str                        | 主机名                              |
| `loadavg`  | tuple[float, float, float] | 系统负载平均值 (过去 1、5、15 分钟) |
| `platform` | str                        | 操作系统平台, 例如 `win32`          |
| `release`  | str                        | 系统发行版本信息                    |
| `uptime`   | float                      | 系统运行时间 (单位: 秒)             |
| `cpu`      | float                      | CPU 当前使用率 (单位: %)            |

## _class_ `RecordInfo(BaseModel)`

安全记录信息

| 字段名          | 类型 | 描述             |
| --------------- | ---- | ---------------- |
| `logined`       | int  | 登录成功次数     |
| `illegalAccess` | int  | 非法访问次数     |
| `banips`        | int  | 被封禁的 IP 数量 |
| `loginFailed`   | int  | 登录失败次数     |

## _class_ `RequestChart(BaseModel)`

应用实例运行和接口请求量趋势

| 字段名            | 类型 | 描述           |
| ----------------- | ---- | -------------- |
| `value`           | int  | 接口请求量     |
| `totalInstance`   | int  | 总实例数量     |
| `runningInstance` | int  | 运行中实例数量 |

## _class_ `ChartInfo(BaseModel)`

图表数据信息

| 字段名    | 类型               | 描述                         |
| --------- | ------------------ | ---------------------------- |
| `system`  | list[CpuMemChart]  | 系统资源使用趋势             |
| `request` | list[RequestChart] | 应用实例运行和接口请求量趋势 |

## _class_ `RemoteCountInfo(BaseModel)`

远程节点数量统计信息

| 字段名      | 类型 | 描述               |
| ----------- | ---- | ------------------ |
| `total`     | int  | 远程节点总数       |
| `available` | int  | 可用的远程节点数量 |

## _class_ `OverviewModel(BaseModel)`

系统概览信息

| 字段名                   | 类型              | 描述                   |
| ------------------------ | ----------------- | ---------------------- |
| `version`                | str               | 当前面板版本           |
| `specifiedDaemonVersion` | str               | 指定的远程节点版本     |
| `system`                 | SystemInfo        | 系统信息               |
| `record`                 | RecordInfo        | 安全访问记录           |
| `process`                | ProcessInfo       | 进程状态信息           |
| `chart`                  | ChartInfo         | 系统与请求统计图表数据 |
| `remoteCount`            | RemoteCountInfo   | 远程节点数量统计信息   |
| `remote`                 | list[DaemonModel] | 远程节点详细信息       |

## 日志操作相关

### _class_ `LogType(Enum)`

日志操作类型

| 枚举项                   | 枚举值                 | 描述             |
| ------------------------ | ---------------------- | ---------------- |
| `SYSTEM_CONFIG_CHANGE`   | system_config_change   | 系统配置修改     |
| `USER_LOGIN`             | user_login             | 用户登录         |
| `USER_CONFIG_CHANGE`     | user_config_change     | 修改用户配置     |
| `USER_DELETE`            | user_delete            | 删除用户         |
| `USER_CREATE`            | user_create            | 创建用户         |
| `DAEMON_CONFIG_CHANGE`   | daemon_config_change   | 修改节点配置     |
| `DAEMON_REMOVE`          | daemon_remove          | 删除节点         |
| `DAEMON_CREATE`          | daemon_create          | 创建节点         |
| `INSTANCE_TASK_DELETE`   | instance_task_delete   | 删除实例计划任务 |
| `INSTANCE_TASK_CREATE`   | instance_task_create   | 创建实例计划任务 |
| `INSTANCE_FILE_DELETE`   | instance_file_delete   | 删除实例文件     |
| `INSTANCE_FILE_DOWNLOAD` | instance_file_download | 下载实例文件     |
| `INSTANCE_FILE_UPDATE`   | instance_file_update   | 更新实例文件     |
| `INSTANCE_FILE_UPLOAD`   | instance_file_upload   | 上传实例文件     |
| `INSTANCE_DELETE`        | instance_delete        | 删除实例         |
| `INSTANCE_CREATE`        | instance_create        | 创建实例         |
| `INSTANCE_CONFIG_CHANGE` | instance_config_change | 修改实例配置     |
| `INSTANCE_KILL`          | instance_kill          | 强制停止实例     |
| `INSTANCE_UPDATE`        | instance_update        | 更新实例         |
| `INSTANCE_RESTART`       | instance_restart       | 重启实例         |
| `INSTANCE_STOP`          | instance_stop          | 停止实例         |
| `INSTANCE_START`         | instance_start         | 启动实例         |

### _class_ `LogDetail(BaseModel)`

操作日志详情

| 字段名            | 类型                                           | 描述                                  |
| ----------------- | ---------------------------------------------- | ------------------------------------- |
| `operation_id`    | str                                            | 操作者 uuid                           |
| `operator_name`   | str \| None                                    | 操作者用户名                          |
| `operation_time`  | str                                            | 操作时间(Unix 时间戳)                 |
| `operator_ip`     | str                                            | 操作者 ip(格式为`ipv6:ipv4`)          |
| `operation_level` | Literal["info", "warning", "error", "unknown"] | 日志等级                              |
| `type`            | LogType                                        | 操作类型                              |
| `instance_name`   | str                                            | 实例名称(仅实例事件存在)              |
| `instance_id`     | str                                            | 实例 ID(仅实例事件存在)               |
| `daemon_id`       | str                                            | 守护进程 ID(仅实例事件和节点事件存在) |
| `login_result`    | bool                                           | 登录结果(仅登录事件存在)              |
| `file`            | list[str] \| str                               | 被操作的文件(仅文件操作事件存在)      |
| `task_name`       | str                                            | 任务名称(仅任务操作事件存在)          |
