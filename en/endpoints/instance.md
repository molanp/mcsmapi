# Example Operations

## _class_ `Instance`

Get subclasses of the operation instance.

```py
api = mcsm.instance()
```

---

### _method_ `search(daemonId: str, page: int = 1, page_size: int = 20, instance_name: str = "", status: Literal[-1, 0, 1, 2, 3, ""] = "", tag: list[str] | None = None)`

Search for instance information based on specified parameters.

#### Parameters

- `daemonId`: UUID of the node
- `page`: Page number, indicating which page of data to return
- `page_size`: Number of items per page, default is 20
- `instance_name`: Instance name for filtering
- `status`: Instance status for filtering
- `tag`: List of tags for filtering

#### Returns

- `InstanceSearchList`: Search result model

### _method_ `detail(daemonId: str, uuid: str)`

Get detailed information of a specified instance.

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance

#### Returns

- `InstanceDetail`: Model containing detailed instance information

### _method_ `create(daemonId: str, config: dict[str, Any])`

Create a new instance.

#### Parameters

- `daemonId`: UUID of the node
- `config`: Configuration of the new instance, provided as a dictionary. Missing values are filled with default values from the `InstanceConfig` model.

#### Returns

- `InstanceCreateResult`: Object containing information about the newly created instance

### _method_ `updateConfig(daemonId: str, uuid: str, config: dict[str, Any])`

Update the configuration of an instance.

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `config`: New configuration, provided as a dictionary. Missing values are filled with default values from the `InstanceConfig` model.

#### Returns

- `str`: UUID of the instance whose configuration was updated

### _method_ `delete(daemonId: str, uuids: list[str])`

Delete instances.

#### Parameters

- `daemonId`: UUID of the node
- `uuids`: List of UUIDs of instances to delete
- `deleteFile`: Whether to delete instance files

#### Returns

- `str`: List of UUIDs of deleted instances

### _method_ `start(daemonId: str, uuid: str)`

Start an instance.

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance to start

#### Returns

- `str`: UUID of the started instance

### _method_ `stop(daemonId: str, uuid: str)`

Stop an instance.

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance to stop

#### Returns

- `str`: UUID of the stopped instance

### _method_ `restart(daemonId: str, uuid: str)`

Restart an instance.

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance to restart

#### Returns

- `str`: UUID of the restarted instance

### _method_ `kill(daemonId: str, uuid: str)`

Forcefully stop an instance.

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance to stop

#### Returns

- `str`: UUID of the stopped instance

### _method_ `batchOperation(instances: list[batchOperationDetail], operation: Literal["start", "stop", "restart", "kill"])`

Perform batch operations on instances.

#### Parameters

- `instances`: List of instances to operate on
- `operation`: Type of operation

#### Returns

- `bool`: Returns `True` if the operation is successful

### _method_ `update(daemonId: str, uuid: str)`

Update an instance.

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance

#### Returns

- `bool`: Returns `True` if the operation is successful

### _method_ `command(daemonId: str, uuid: str, command: str)`

Send a command to an instance.

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `command`: Command to send

#### Returns

- `str`: UUID of the operated instance

### _method_ `get_output(daemonId: str, uuid: str, size: int | None = None)`

Get instance output.

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `size`: Size of output to retrieve, in KB (1KB ~ 2048KB). If not set, all logs are returned.

#### Returns

- `str`: Log content

### _method_ `reinstall(daemonId: str, uuid: str, targetUrl: str, title: str = "", description: str = "")`

Reinstall an instance.

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `targetUrl`: Target URL of the file for reinstallation
- `title`: Title of the reinstallation file
- `description`: Description of the reinstallation file

#### Returns

- `bool`: Returns `True` if the operation is successful
