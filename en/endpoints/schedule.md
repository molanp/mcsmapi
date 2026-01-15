# Scheduled Tasks

## _class_ `Schedule`

Subclass for managing scheduled tasks

```python
api = mcsm.schedule
```

---

### _method_ `list(daemonId: str, uuid: str)`

Retrieve list of scheduled tasks for an instance

#### Parameters

- `daemonId`: Node ID
- `uuid`: Instance ID

#### Returns

- `list[ScheduleDetail]`: List of scheduled tasks

### _method_ `delete(daemonId: str, uuid: str, task_name: str)`

Delete a scheduled task

#### Parameters

- `daemonId`: Node ID
- `uuid`: Instance ID
- `task_name`: Scheduled task name

#### Returns

- `bool`: Success status

### _method_ `create(daemonId: str, uuid: str, config: SchedulePostBody)`

Create a scheduled task

#### Parameters

- `daemonId`: Node ID
- `uuid`: Instance ID
- `config`: Scheduled task configuration

#### Returns

- `bool`: Success status

### _method_ `update(daemonId: str, uuid: str, config: SchedulePostBody)`

Update scheduled task

#### Parameters

- `daemonId`: Node ID
- `uuid`: Instance ID
- `config`: Scheduled task configuration

#### Returns

- `bool`: Success status
