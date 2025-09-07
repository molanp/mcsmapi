# Instance Operation Related Models

## _class_ `CRLFType(IntEnum)`

Line break types.

| Enumerated Value | Enumerated Value |
| ---------------- | ---------------- |
| `LF`             | 0                |
| `CR`             | 1                |
| `CRLF`           | 2                |

## _class_ `Status(IntEnum)`

Instance status.

| Enumerated Value | Enumerated Value | Description       |
| ---------------- | ---------------- | ----------------- |
| `BUSY`           | -1               | Under maintenance |
| `STOP`           | 0                | Not running       |
| `STOPPING`       | 1                | Stopping          |
| `STARTING`       | 2                | Starting          |
| `RUNNING`        | 3                | Running           |

## _class_ `batchOperationDetail(TypedDict)`

Batch operation instance information.

| Field Name | Type | Description   |
| ---------- | ---- | ------------- |
| `uuid`     | str  | Instance UUID |
| `daemonId` | str  | Node UUID     |

## _class_ `TerminalOption(BaseModel)`

Terminal options.

| Field Name     | Type | Description                     |
| -------------- | ---- | ------------------------------- |
| `haveColor`    | bool | Enable frontend color rendering |
| `pty`          | bool | Use pseudo-terminal (PTY)       |
| `ptyWindowCol` | int  | PTY window column count         |
| `ptyWindowRow` | int  | PTY window row count            |

## _class_ `EventTask(BaseModel)`

Event tasks.

| Field Name    | Type | Description           |
| ------------- | ---- | --------------------- |
| `autoStart`   | bool | Automatically start   |
| `autoRestart` | bool | Automatically restart |
| `ignore`      | bool | Ignore this task      |

## _class_ `PingConfig(BaseModel)`

Server ping configuration (deprecated).

| Field Name | Type | Description                |
| ---------- | ---- | -------------------------- |
| `ip`       | str  | Server IP address          |
| `port`     | int  | Server port                |
| `type`     | int  | Ping type (0: UDP, 1: TCP) |

## _class_ `InstanceConfig(BaseModel)`

Instance configuration information.

| Field Name          | Type           | Description                                                           |
| ------------------- | -------------- | --------------------------------------------------------------------- |
| `nickname`          | str            | Instance name                                                         |
| `startCommand`      | str            | Start command                                                         |
| `stopCommand`       | str            | Stop command                                                          |
| `cwd`               | str            | Working directory                                                     |
| `ie`                | str            | Input encoding                                                        |
| `oe`                | str            | Output encoding                                                       |
| `createDatetime`    | int            | Creation time (Unix timestamp)                                        |
| `lastDatetime`      | int            | Last modification time (Unix timestamp)                               |
| `type`              | str            | Instance type (e.g., universal, minecraft)                            |
| `tag`               | list[str]      | Instance tags                                                         |
| `endTime`           | int \| None    | Instance expiration time                                              |
| `fileCode`          | str            | File encoding                                                         |
| `processType`       | str            | Process type (e.g., docker, general)                                  |
| `updateCommand`     | str            | Update command                                                        |
| `actionCommandList` | list[str]      | List of executable commands for the instance                          |
| `crlf`              | CRLFType       | Line break type                                                       |
| `docker`            | DockerConfig   | Docker-related configuration                                          |
| `enableRcon`        | bool           | Enable RCON remote control                                            |
| `rconPassword`      | str            | RCON connection password                                              |
| `rconPort`          | int            | RCON port                                                             |
| `rconIp`            | str            | RCON IP address                                                       |
| `terminalOption`    | TerminalOption | Terminal option configuration                                         |
| `eventTask`         | EventTask      | Event task configuration                                              |
| `pingConfig`        | PingConfig     | Server ping monitoring configuration (deprecated)                     |
| `runAs`             | str            | System user to run the instance, empty to use the panel's system user |

## _class_ `InstanceDetail(BaseModel)`

Instance detailed information.

| Field Name     | Type           | Description                                   |
| -------------- | -------------- | --------------------------------------------- |
| `config`       | InstanceConfig | Instance configuration information            |
| `daemonId`     | str            | Node UUID                                     |
| `instanceUuid` | str            | Instance UUID                                 |
| `started`      | int            | Number of times the instance has been started |
| `status`       | Status         | Instance status                               |

### _method_ `start(self)`

Start the instance.

#### Return

UUID of the started instance.

### _method_ `stop(self)`

Stop the instance.

#### Return

UUID of the stopped instance.

### _method_ `restart(self)`

Restart the instance.

#### Return

UUID of the restarted instance.

### _method_ `kill(self)`

Forcefully shut down the instance.

#### Return

UUID of the instance that was force-closed.

### _method_ `delete(self, deleteFile: bool = False)`

Delete the instance.

#### Parameters

- `deleteFile`: Whether to delete associated files.

#### Return

UUID of the deleted instance.

### _method_ `update(self)`

Upgrade the instance.

#### Return

Returns `True` if the operation is successful.

### _method_ `updateConfig(self, config: dict[str, Any])`

Update the instance configuration.

#### Parameters

- `config`: New instance configuration provided as a dictionary. Missing values are filled with the original instance configuration.

#### Return

Returns the UUID of the updated instance upon success.

### _method_ `reinstall(self, targetUrl: str, title: str = "", description: str = "")`

Reinstall the instance.

#### Parameters

- `targetUrl`: Target URL of the reinstall file.
- `title`: Title of the reinstall file.
- `description`: Description of the reinstall file, defaults to an empty string.

#### Return

Returns `True` if the operation is successful.

### _method_ `command(self, command: str)`

Send a command to the instance.

#### Parameters

- `command`: Command to be sent.

#### Return

UUID of the instance that was operated on.

### _method_ `get_output(self, size: int | None = None)`

Get the instance output.

#### Parameters

- `size`: Size of the output to retrieve.

#### Return

- `str`: Output result.

### _method_ `files(self, target: str = "", page: int = 0, page_size: int = 100, file_name: str = "")`

Get the list of instance files.

#### Parameters

- `target`: Target path for file filtering, defaults to an empty string, indicating no filtering by path.
- `page`: Page number for pagination.
- `page_size`: Number of files per page.
- `file_name`: String to filter files or folders whose names contain the specified string.

#### Return

- `FileList`: List of files.

## _class_ `InstanceCreateResult(BaseModel)`

Instance creation result.

| Field Name     | Type           | Description            |
| -------------- | -------------- | ---------------------- |
| `instanceUuid` | str            | Instance UUID          |
| `config`       | InstanceConfig | Instance configuration |

## _class_ `InstanceSearchList(BaseModel)`

Instance search list.

| Field Name | Type                 | Description                  |
| ---------- | -------------------- | ---------------------------- |
| `pageSize` | int                  | Number of instances per page |
| `maxPage`  | int                  | Maximum number of pages      |
| `data`     | list[InstanceDetail] | List of instance details     |
| `daemonId` | str                  | Node UUID                    |
