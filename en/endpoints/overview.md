# Dashboard Data

## _class_ `Overview`

Get subclasses for operating dashboard data.

```python
api = mcsm.overview()
```

---

### _method_ `overview()`

Used to get basic panel information.

#### Returns

- `OverviewModel` object

#### Example

```python
overview = api.overview()
print("Current server version:", overview.version)
```

### _method_ `logs()`

Get panel operation logs.

#### Returns

- `list[LogDetail]` object

---

## Basic Usage Examples

### Get system overview information

```python
overview = api.overview()

print("Server version:", overview.version)
print("System memory remaining:", overview.system.freemem)
print("System load average:", overview.system.loadavg)
print("MCSM CPU usage:", overview.process.cpu)
```

### Iterate through all remote daemons

```python
for remote in overview.remote:
    print("Nickname:", remote.remarks)
    print("IP address:", remote.ip)
    print("Port:", remote.port)
    print("Path prefix:", remote.prefix)
    print("Is available:", remote.available)
    print("Daemon version:", remote.version)
    print("Daemon CPU usage:", remote.process.cpu)
    print("System hostname:", remote.system.hostname)
    print("System remaining memory:", remote.system.freemem)
```

### Operate remote daemons

```python
remote = overview.remote[0]

# Delete remote instances
remote.deleteInstance(["uuid1", "uuid2"], True)

# Update daemon configuration
remote.updateConfig({"remarks": "New nickname"})

# Delete this daemon
remote.delete()
```

## Notes

- Each object in the `remote` list supports operations such as `.link()`, `.deleteInstance()`, `.updateConfig()`, and `.delete()`.
- In the `.updateConfig()` operation, the parameters are of type `dict`, and only the fields that need to be modified need to be provided.
