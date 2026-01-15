# 计划任务

## _class_ `Schedule`

获取操作计划任务的子类

```python
api = mcsm.schedule
```

---

### _method_ `list(daemonId: str, uuid: str)`

获取实例计划任务列表

#### 参数

- `daemonId`: 节点 ID
- `uuid`: 实例 ID

#### 返回

- `list[ScheduleDetail]`: 计划任务列表

### _method_ `delete(daemonId: str, uuid: str, task_name: str)`

删除计划任务

#### 参数

- `daemonId`: 节点 ID
- `uuid`: 实例 ID
- `task_name`: 计划任务名称

#### 返回

- `bool`: 是否成功

### _method_ `create(daemonId: str, uuid: str, config: SchedulePostBody)`

创建计划任务

#### 参数

- `daemonId`: 节点 ID
- `uuid`: 实例 ID
- `config`: 计划任务配置

#### 返回

- `bool`: 是否成功

### _method_ `update(daemonId: str, uuid: str, config: SchedulePostBody)`

更新计划任务

#### 参数

- `daemonId`: 节点 ID
- `uuid`: 实例 ID
- `config`: 计划任务配置

#### 返回

- `bool`: 是否成功
