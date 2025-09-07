# Common Models

## _class_ `CpuMemChart(BaseModel)`

Resource usage information

| Field | Type  | Description  |
| ----- | ----- | ------------ |
| `cpu` | float | CPU usage    |
| `mem` | float | Memory usage |

## _class_ `ProcessInfo(BaseModel)`

Process detailed information

| Field    | Type | Description            |
| -------- | ---- | ---------------------- |
| `cpu`    | int  | CPU usage (percentage) |
| `memory` | int  | Memory usage (MB)      |
| `cwd`    | str  | Working directory      |

## _class_ `InstanceStat(BaseModel)`

Instance statistics information

| Field     | Type | Description                 |
| --------- | ---- | --------------------------- |
| `running` | int  | Number of running instances |
| `total`   | int  | Total number of instances   |
