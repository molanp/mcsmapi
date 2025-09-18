# Dashboard Operation Related Models

## _class_ `SystemUser(BaseModel)`

System user information.

| Field Name | Type        | Description               |
| ---------- | ----------- | ------------------------- |
| `uid`      | int         | User ID (UID)             |
| `gid`      | int         | User group ID (GID)       |
| `username` | str         | Username                  |
| `homedir`  | str         | User home directory       |
| `shell`    | str \| None | Default shell interpreter |

## _class_ `SystemInfo(BaseModel)`

System basic information.

| Field Name | Type                       | Description                                 |
| ---------- | -------------------------- | ------------------------------------------- |
| `user`     | SystemUser                 | Information of the currently logged-in user |
| `time`     | int                        | Current system time (Unix timestamp)        |
| `totalmem` | int                        | Total system memory size (unit: bytes)      |
| `freemem`  | int                        | Free system memory size (unit: bytes)       |
| `type`     | str                        | Operating system type, e.g., `Windows_NT`   |
| `version`  | str                        | Operating system version                    |
| `node`     | str                        | Node.js version on the system               |
| `hostname` | str                        | Hostname                                    |
| `loadavg`  | tuple[float, float, float] | System load average (past 1, 5, 15 minutes) |
| `platform` | str                        | Operating system platform, e.g., `win32`    |
| `release`  | str                        | System release version                      |
| `uptime`   | float                      | System uptime (unit: seconds)               |
| `cpu`      | float                      | Current CPU usage rate (unit: %)            |

## _class_ `RecordInfo(BaseModel)`

Security record information.

| Field Name      | Type | Description                       |
| --------------- | ---- | --------------------------------- |
| `logined`       | int  | Number of successful logins       |
| `illegalAccess` | int  | Number of illegal access attempts |
| `banips`        | int  | Number of banned IP addresses     |
| `loginFailed`   | int  | Number of failed login attempts   |

## _class_ `RequestChart(BaseModel)`

Application instance operation and API request volume trends.

| Field Name        | Type | Description                 |
| ----------------- | ---- | --------------------------- |
| `value`           | int  | Number of API requests      |
| `totalInstance`   | int  | Total number of instances   |
| `runningInstance` | int  | Number of running instances |

## _class_ `ChartInfo(BaseModel)`

Chart data information.

| Field Name | Type               | Description                                                     |
| ---------- | ------------------ | --------------------------------------------------------------- |
| `system`   | list[CpuMemChart]  | Trends of system resource usage                                 |
| `request`  | list[RequestChart] | Trends of application instance operation and API request volume |

## _class_ `RemoteCountInfo(BaseModel)`

Remote node count statistics information.

| Field Name  | Type | Description                      |
| ----------- | ---- | -------------------------------- |
| `total`     | int  | Total number of remote nodes     |
| `available` | int  | Number of available remote nodes |

## Dashboard Operation Related Models

### _class_ `OverviewModel(BaseModel)`

System overview information.

| Field Name               | Type              | Description                               |
| ------------------------ | ----------------- | ----------------------------------------- |
| `version`                | str               | Current panel version                     |
| `specifiedDaemonVersion` | str               | Specified remote node version             |
| `system`                 | SystemInfo        | System information                        |
| `record`                 | RecordInfo        | Security access records                   |
| `process`                | ProcessInfo       | Process status information                |
| `chart`                  | ChartInfo         | System and request statistics charts data |
| `remoteCount`            | RemoteCountInfo   | Remote node count statistics information  |
| `remote`                 | list[DaemonModel] | Remote node detailed information          |

## Log Operation Related

### _class_ `LogType(Enum)`

Log operation types.

| Enumerated Value         | Enumerated Value       | Description                         |
| ------------------------ | ---------------------- | ----------------------------------- |
| `SYSTEM_CONFIG_CHANGE`   | system_config_change   | System configuration modification   |
| `USER_LOGIN`             | user_login             | User login                          |
| `USER_CONFIG_CHANGE`     | user_config_change     | User configuration modification     |
| `USER_DELETE`            | user_delete            | User deletion                       |
| `USER_CREATE`            | user_create            | User creation                       |
| `DAEMON_CONFIG_CHANGE`   | daemon_config_change   | Node configuration modification     |
| `DAEMON_REMOVE`          | daemon_remove          | Node removal                        |
| `DAEMON_CREATE`          | daemon_create          | Node creation                       |
| `INSTANCE_TASK_DELETE`   | instance_task_delete   | Instance task deletion              |
| `INSTANCE_TASK_CREATE`   | instance_task_create   | Instance task creation              |
| `INSTANCE_FILE_DELETE`   | instance_file_delete   | Instance file deletion              |
| `INSTANCE_FILE_DOWNLOAD` | instance_file_download | Instance file download              |
| `INSTANCE_FILE_UPDATE`   | instance_file_update   | Instance file update                |
| `INSTANCE_FILE_UPLOAD`   | instance_file_upload   | Instance file upload                |
| `INSTANCE_DELETE`        | instance_delete        | Instance deletion                   |
| `INSTANCE_CREATE`        | instance_create        | Instance creation                   |
| `INSTANCE_CONFIG_CHANGE` | instance_config_change | Instance configuration modification |
| `INSTANCE_KILL`          | instance_kill          | Instance forced termination         |
| `INSTANCE_UPDATE`        | instance_update        | Instance update                     |
| `INSTANCE_RESTART`       | instance_restart       | Instance restart                    |
| `INSTANCE_STOP`          | instance_stop          | Instance stop                       |
| `INSTANCE_START`         | instance_start         | Instance start                      |

### _class_ `LogDetail(BaseModel)`

Operation log details.

| Field Name        | Type                                           | Description                                          |
| ----------------- | ---------------------------------------------- | ---------------------------------------------------- |
| `operation_id`    | str                                            | Operator's UUID                                      |
| `operator_name`   | str \| None                                    | Operator's username                                  |
| `operation_time`  | str                                            | Operation time (Unix timestamp)                      |
| `operator_ip`     | str                                            | Operator's IP address (format: `ipv6:ipv4`)          |
| `operation_level` | Literal["info", "warning", "error", "unknown"] | Log level                                            |
| `type`            | LogType                                        | Operation type                                       |
| `instance_name`   | str                                            | Instance name (only exists in instance events)       |
| `instance_id`     | str                                            | Instance ID (only exists in instance events)         |
| `daemon_id`       | str                                            | Daemon ID (only exists in instance and node events)  |
| `login_result`    | bool                                           | Login result (only exists in login events)           |
| `file`            | list[str] \| str                               | Operated file (only exists in file operation events) |
| `task_name`       | str                                            | Task name (only exists in task operation events)     |
