# Node

## _class_ `Daemon`

Obtain the subclass for node operations

```py
api = mcsm.daemon
```

---

### _method_ `config()`

Get configuration information for all nodes

#### Returns

- `list[DaemonStatus]`: List of node configuration information

### _method_ `info()`

Get information for all nodes

#### Returns

- `list[DaemonInfo]`: List of node information

### _method_ `system()`

Get system information for all nodes

#### Returns

- `list[DaemonSystemInfo]`: List of node system information

### _method_ `add(config: DaemonConfig)`

Add a new node

#### Parameters

- `config`: Node configuration information

#### Returns

- `str`: UUID of the newly added node

### _method_ `delete(daemonId: str)`

Delete a node

#### Parameters

- `daemonId`: UUID of the node

#### Returns

- `bool`: Returns True after successful operation

### _method_ `link(daemonId: str)`

Connect to a node

#### Parameters

- `daemonId`: UUID of the node

#### Returns

- `bool`: Returns True after successful operation

### _method_ `update(daemonId: str, config: dict[str, Any])`

Update the configuration of a node

#### Parameters

- `daemonId`: UUID of the node
- `config`: Node configuration provided as a dictionary, missing fields will be supplemented by the `DaemonUpdateConfig` model

#### Returns

- `bool`: Returns True after successful operation
