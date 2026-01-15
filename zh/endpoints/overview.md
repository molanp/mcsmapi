# 仪表盘数据

## _class_ `Overview`

获取操作仪表盘数据的子类

```py
api = mcsm.overview
```

---

### _method_ `overview()`

用于获取面板基本信息

#### Returns

- `OverviewModel` 对象

#### 例子

```python
overview = api.overview()
print("当前服务端版本:", overview.version)
```

### _method_ `logs()`

获取面板操作日志

#### Returns

- `list[LogDetail]` 对象

---

## 基本使用示例

### 获取系统概览信息

```python
overview = api.overview()

print("服务端版本:", overview.version)
print("系统内存剩余:", overview.system.freemem)
print("系统负载平均值:", overview.system.loadavg)
print("MCSM 运行 CPU 占用率:", overview.process.cpu)
```

### 遍历所有远程守护进程

```python
for remote in overview.remote:
    print("备注名称:", remote.remarks)
    print("IP 地址:", remote.ip)
    print("端口号:", remote.port)
    print("路径前缀:", remote.prefix)
    print("是否可用:", remote.available)
    print("守护进程版本:", remote.version)
    print("守护进程 CPU 占用率:", remote.process.cpu)
    print("系统主机名:", remote.system.hostname)
    print("系统剩余内存:", remote.system.freemem)
```

### 操作远程守护进程

```python
remote = overview.remote[0]

# 删除远程实例
remote.deleteInstance(["uuid1", "uuid2"], True)

# 更新守护进程配置
remote.updateConfig({"remarks": "新的备注名"})

# 删除该守护进程
remote.delete()
```

## 注意事项

- `remote` 列表中的每个对象都支持 `.link()`、`.deleteInstance()`、`.updateConfig()` 和 `.delete()` 等操作
- `updateConfig()` 操作中传入的参数为 dict 类型，仅需提供需要修改的字段即可。
