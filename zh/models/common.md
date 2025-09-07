# 通用模型

## _class_ `CpuMemChart(BaseModel)`

资源使用率信息

| 字段名 | 类型  | 描述       |
| ------ | ----- | ---------- |
| `cpu`    | float | cpu 使用率 |
| `mem`    | float | 内存使用率 |

## _class_ `ProcessInfo(BaseModel)`

进程详细信息

| 字段名 | 类型 | 描述                 |
| ------ | ---- | -------------------- |
| `cpu`    | int  | CPU 使用率（百分比） |
| `memory` | int  | 内存使用量（MB）     |
| `cwd`    | str  | 工作路径             |

## _class_ `InstanceStat(BaseModel)`

实例统计信息

| 字段名  | 类型 | 描述           |
| ------- | ---- | -------------- |
| `running` | int  | 运行中实例数量 |
| `total`   | int  | 全部实例数量   |
