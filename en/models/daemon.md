# Node Model

## _class_ `SystemInfo(BaseModel)`

Node system information

| Field      | Type                       | Description                                                                                              |
| ---------- | -------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`     | str                        | System type                                                                                              |
| `hostname` | str                        | Hostname                                                                                                 |
| `platform` | str                        | Platform architecture                                                                                    |
| `release`  | str                        | System version                                                                                           |
| `uptime`   | float                      | System uptime (unit: seconds)                                                                            |
| `cwd`      | str                        | Remote node runtime path                                                                                 |
| `loadavg`  | tuple[float, float, float] | System load average (Linux and macOS only), representing CPU load over the past **1, 5, and 15 minutes** |
| `freemem`  | int                        | Available memory (unit: bytes)                                                                           |
| `cpuUsage` | float                      | CPU usage                                                                                                |
| `memUsage` | float                      | Memory usage                                                                                             |
| `totalmem` | int                        | Total memory (unit: bytes)                                                                               |

## _class_ `DaemonSetting(BaseModel)`

Node System Configuration Information

| Field Name                    | Type | Description                                                  |
| ----------------------------- | ---- | ------------------------------------------------------------ |
| `language`                    | str  | Node language                                                |
| `uploadSpeedRate`             | int  | Upload speed limit (0 = no limit, limit is (n \* 64)KB/s)    |
| `downloadSpeedRate`           | int  | Download speed limit (0 = no limit, limit is (n \* 64) KB/s) |
| `portRangeStart`              | int  | Port range start value                                       |
| `portRangeEnd`                | int  | Port range end value                                         |
| `portAssignInterval`          | int  | Unknown                                                      |
| `port`                        | int  | Node listening port                                          |
| `maxDownloadFromUrlFileCount` | int  | Maximum number of concurrent remote download tasks allowed   |

## _class_ `DaemonSystemInfo(DaemonStatus)`

Node Information

| Field Name    | Type                             | Description                    |
| ------------- | -------------------------------- | ------------------------------ |
| `version`     | str \| None = None               | Node version                   |
| `process`     | ProcessInfo \| None = None       | Node process info              |
| `instance`    | InstanceStat \| None = None      | Node instance stats            |
| `system`      | SystemInfo \| None = None        | Node system information        |
| `cpuMemChart` | list[CpuMemChart] \| None = None | CPU and memory usage trends    |
| `config`      | DaemonSetting \| None = None     | Node configuration information |

## _class_ `DaemonOperation(BaseModel)`

Node operation

| Field  | Type | Description |
| ------ | ---- | ----------- |
| `uuid` | str  | Node UUID   |

### _method_ `delete()`

Delete this node

#### Returns

- `bool`: Returns True after successful operation

### _method_ `link()`

Attempt to connect to this node

#### Returns

- `bool`: Returns True after successful operation

### _method_ `updateConfig(self, config: dict[str, Any])`

Update the configuration of this node

#### Parameters

- `config`: Node configuration provided as a dictionary, missing fields will be filled with the original node config

#### Returns

- `bool`: Returns True after successful operation

### _method_ `createInstance(self, config: dict[str, Any])`

Create an instance on the current node

#### Parameters

- `config`: Instance configuration provided as a dictionary, missing fields will be supplemented by the InstanceConfig model

#### Returns

- `InstanceCreateResult`: An object containing the result of the newly created instance information

### _method_ `deleteInstance(self, uuids: list[str], deleteFile=False)`

Delete one or more instances on the current node

#### Parameters

- `uuids`: List of instance UUIDs to delete
- `deleteFile`: Whether to delete associated files

#### Returns

- `list[str]`: List of UUIDs returned after the deletion operation

## _class_ `DaemonConfig(BaseModel)`

Node configuration information

| Field     | Type | Description             |
| --------- | ---- | ----------------------- |
| `ip`      | str  | Remote node IP          |
| `port`    | int  | Remote node port        |
| `prefix`  | str  | Remote node path prefix |
| `remarks` | str  | Remote node remarks     |
| `apiKey`  | str  | Remote node API key     |

## _class_ `DaemonStatus(DaemonOperation)`

Node status information

| Field       | Type | Description              |
| ----------- | ---- | ------------------------ |
| `ip`        | str  | Remote node IP           |
| `port`      | int  | Remote node port         |
| `prefix`    | str  | Remote node path prefix  |
| `remarks`   | str  | Remote node remarks      |
| `available` | bool | Node availability status |

## _class_ `DaemonInfo(DaemonStatus)`

Node information

| Field       | Type                 | Description            |
| ----------- | -------------------- | ---------------------- |
| `instances` | list[InstanceDetail] | List of node instances |

## _class_ `DaemonUpdateConfig(DaemonConfig)`

Node update configuration information

| Field     | Type          | Description          |
| --------- | ------------- | -------------------- |
| `setting` | DaemonSetting | Node system settings |
