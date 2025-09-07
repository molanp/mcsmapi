# Image Operations

## _class_ `Image`

Obtain the subclass for image operations

```py
api = mcsm.image()
```

---

### _method_ `images(daemonId: str)`

Get the image list

#### Parameters

- `daemonId`: UUID of the node

#### Returns

- `list[DockerImageItem]`: A list of models with detailed image list information

::: tip
For detailed definitions, refer to https://docs.docker.com/engine/api/v1.37/#tag/Image/operation/ImageList

Field meanings are based on Docker documentation
:::

### _method_ `containers(daemonId: str)`

Get the container list

#### Parameters

- `daemonId`: UUID of the node

#### Returns

- `list[DockerContainerItem]`: A list of models with detailed container list information

::: tip
For detailed definitions, refer to https://docs.docker.com/engine/api/v1.37/#tag/Container/operation/ContainerList

Field meanings are based on Docker documentation
:::

### _method_ `network(daemonId: str)`

Get the network interface list

#### Parameters

- `daemonId`: UUID of the node

#### Returns

- `list[DockerNetworkItem]`: A list of models with detailed network interface list information

::: tip
For detailed definitions, refer to https://docs.docker.com/engine/api/v1.37/#tag/Network/operation/NetworkList

Field meanings are based on Docker documentation
:::

### _method_ `add(daemonId: str, dockerFile: str, name: str, tag: str)`

Add a new image

#### Parameters

- `daemonId`: UUID of the node
- `dockerFile`: DockerFile Config content
- `name`: Image name
- `tag`: Image version

#### Returns

- `bool`: Returns True after successful operation

### _method_ `progress(daemonId: str)`

Get the image build progress

#### Parameters

- `daemonId`: UUID of the node

#### Returns

- `dict[str, int]`: {container name: current status}

| Status Code | Meaning              |
| ----------- | -------------------- |
| -1          | Image build failed   |
| 1           | Image building       |
| 2           | Image build complete |
