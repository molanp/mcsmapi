# Scheduled Task Model

## _class_ `ScheduleActionType(Enum)`

Scheduled Task Action

| Enum Item | Enum Value | Description         |
| --------- | ---------- | ------------------- |
| `COMMAND` | command    | Send command        |
| `DELAY`   | delay      | Wait x seconds      |
| `STOP`    | stop       | Stop instance       |
| `START`   | start      | Start instance      |
| `RESTART` | restart    | Restart instance    |
| `KILL`    | kill       | Force stop instance |

## _class_ `ScheduleType(IntEnum)`

Schedule Task Type

| Enum Item  | Enum Value | Description    |
| ---------- | ---------- | -------------- |
| `INTERVAL` | 1          | Interval Task  |
| `CYCLE`    | 2          | Periodic task  |
| `SPECIFY`  | 3          | Scheduled task |

## _class_ `ScheduleAction(BaseModel)`

Scheduled Action

| Field Name | Type               | Description       |
| ---------- | ------------------ | ----------------- |
| `type`     | ScheduleActionType | Action Type       |
| `payload`  | str                | Action Parameters |

## _class_ `SchedulePostBody(BaseModel)`

Scheduled Task Configuration Parameters

| Field Name | Type                 | Description                                                      |
| ---------- | -------------------- | ---------------------------------------------------------------- |
| `name`     | str                  | Scheduled task name                                              |
| `count`    | int                  | Execution count, -1 indicates infinite                           |
| `time`     | str                  | All fields are rcon strings except interval time tasks (seconds) |
| `actions`  | list[ScheduleAction] | Action chain for the scheduled task                              |
| `type`     | ScheduleType         | Type of the scheduled task                                       |

## _class_ `ScheduleDetail(SchedulePostBody)`

Scheduled Task Information

| Field Name     | Type | Description   |
| -------------- | ---- | ------------- |
| `instanceUuid` | str  | Instance UUID |
| `daemonId`     | str  | Node ID       |

### _method_ `delete(self)`

Delete Scheduled Task

#### Returns

- `bool`: Returns True if deletion succeeds

### _method_ `update(self, config: SchedulePostBody)`

Update Scheduled Task

#### Parameters

- `config`: Scheduled task configuration

#### Returns

- `bool`: Returns True if operation succeeds
