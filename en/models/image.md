# Image Operation Related Models

::: tip
For detailed definitions, refer to:

https://docs.docker.com/engine/api/v1.37/#tag/Image/operation/ImageList

https://docs.docker.com/engine/api/v1.37/#tag/Network/operation/NetworkList

https://docs.docker.com/engine/api/v1.37/#tag/Container/operation/ContainerList

Field meanings are based on Docker documentation
:::

## _class_ `DockerConfig(BaseModel)`

Docker container configuration

| Field              | Type      | Description                                      |
| ------------------ | --------- | ------------------------------------------------ |
| `containerName`    | str       | Container name                                   |
| `image`            | str       | Image name                                       |
| `ports`            | list[str] | Container port mappings, eg: ["25565:25565/tcp"] |
| `extraVolumes`     | list[str] | Extra mounted volume paths                       |
| `memory`           | int       | Memory allocated to container (unit: MB)         |
| `memorySwap`       | int       | Swap memory allocated to container (unit: MB)    |
| `memorySwappiness` | int       | Virtual memory usage tendency (0-100)            |
| `networkMode`      | str       | Network mode (e.g., bridge, host)                |
| `networkAliases`   | list[str] | List of network aliases                          |
| `maxSpace`         | int       | Maximum disk space container can use (unit: MB)  |
| `network`          | int       | Container network configuration (deprecated)     |
| `io`               | int       | Container I/O limit (unit: MB)                   |
| `cpusetCpus`       | str       | Bound CPU cores, eg: `0,1`                       |
| `cpuUsage`         | int       | CPU usage limit (unit: %)                        |
| `workingDir`       | str       | Container working directory                      |
| `env`              | list[str] | Environment variables                            |
| `changeWorkdir`    | bool      | Whether to change the default working directory  |

## _class_ `DockerImageItem(BaseModel)`

Docker image information

| Field         | Type           | Description                                   |
| ------------- | -------------- | --------------------------------------------- |
| `Id`          | str            | Unique image ID                               |
| `ParentId`    | str            | Parent image ID                               |
| `RepoTags`    | list[str]      | Image repository tags, eg: ["ubuntu:latest"]  |
| `RepoDigests` | list[str]      | Image digests                                 |
| `Created`     | int            | Image creation time (Unix timestamp)          |
| `Size`        | int            | Image size (unit: bytes)                      |
| `VirtualSize` | int            | Virtual size of the image                     |
| `SharedSize`  | int            | Shared storage space size                     |
| `Labels`      | dict[str, str] | Image labels                                  |
| `Containers`  | int            | Number of containers running using this image |

## _class_ `DockerContainerItemPort(BaseModel)`

Docker container port mapping

| Field         | Type                  | Description             |
| ------------- | --------------------- | ----------------------- |
| `PrivatePort` | int                   | Internal container port |
| `PublicPort`  | int \| None           | Port mapped to the host |
| `Type`        | Literal["tcp", "udp"] | Port type               |

## _class_ `DockerContainerItemNetworkSettingsNetwork(BaseModel)`

Docker container network settings information

| Field                 | Type | Description                |
| --------------------- | ---- | -------------------------- |
| `NetworkID`           | str  | Network ID                 |
| `EndpointID`          | str  | Network endpoint ID        |
| `Gateway`             | str  | Gateway address            |
| `IPAddress`           | str  | Assigned IP address        |
| `IPPrefixLen`         | int  | IP address prefix length   |
| `IPv6Gateway`         | str  | IPv6 gateway address       |
| `GlobalIPv6Address`   | str  | IPv6 address               |
| `GlobalIPv6PrefixLen` | int  | IPv6 address prefix length |
| `MacAddress`          | str  | MAC address                |

## _class_ `DockerContainerItemNetworkSettings(BaseModel)`

Docker container network settings information

| Field      | Type                                                 | Description                                |
| ---------- | ---------------------------------------------------- | ------------------------------------------ |
| `Networks` | dict[str, DockerContainerItemNetworkSettingsNetwork] | All networks the container is connected to |

## _class_ `DockerContainerItemMount(BaseModel)`

Container mount point information

| Field         | Type | Description                   |
| ------------- | ---- | ----------------------------- |
| `Name`        | str  | Mount name                    |
| `Source`      | str  | Source path                   |
| `Destination` | str  | Destination path              |
| `Driver`      | str  | Driver type                   |
| `Mode`        | str  | Mount mode                    |
| `RW`          | bool | Whether read-write is allowed |
| `Propagation` | str  | Propagation mode              |

## _class_ `DockerContainerItemHostConfig(BaseModel)`

Docker host configuration

| Field         | Type | Description  |
| ------------- | ---- | ------------ |
| `NetworkMode` | str  | Network mode |

## _class_ `DockerContainerItem(BaseModel)`

Docker container detailed information

| Field             | Type                               | Description                              |
| ----------------- | ---------------------------------- | ---------------------------------------- |
| `Id`              | str                                | Container ID                             |
| `Names`           | list[str]                          | List of container names                  |
| `Image`           | str                                | Name of the running image                |
| `ImageID`         | str                                | Image ID                                 |
| `Command`         | str                                | Container startup command                |
| `Created`         | int                                | Container creation time (Unix timestamp) |
| `State`           | str                                | Container state                          |
| `Status`          | str                                | Container running status description     |
| `Ports`           | list[DockerContainerItemPort]      | Port mapping information                 |
| `Labels`          | dict[str, str]                     | Container label information              |
| `SizeRw`          | int                                | Read-write layer size (unit: bytes)      |
| `SizeRootFs`      | int                                | Root filesystem size (unit: bytes)       |
| `HostConfig`      | DockerContainerItemHostConfig      | Host configuration                       |
| `NetworkSettings` | DockerContainerItemNetworkSettings | Container network configuration          |
| `Mounts`          | list[DockerContainerItemMount]     | Container mount information              |

## _class_ `DockerNetworkItemIPAMConfig(BaseModel)`

Docker network IPAM configuration information

| Field    | Type | Description    |
| -------- | ---- | -------------- |
| `Subnet` | str  | Subnet address |

## _class_ `DockerNetworkItemIPAM(BaseModel)`

Docker network IP address management

| Field    | Type                              | Description        |
| -------- | --------------------------------- | ------------------ |
| `Driver` | str                               | Driver type        |
| `Config` | list[DockerNetworkItemIPAMConfig] | IPAM configuration |

## _class_ `DockerNetworkItem(BaseModel)`

Docker network detailed information

| Field        | Type                  | Description                                         |
| ------------ | --------------------- | --------------------------------------------------- |
| `Name`       | str                   | Network name                                        |
| `Id`         | str                   | Network ID                                          |
| `Created`    | str                   | Network creation time                               |
| `Scope`      | str                   | Scope (local/global)                                |
| `Driver`     | str                   | Network driver type                                 |
| `EnableIPv6` | bool                  | Whether IPv6 is enabled                             |
| `Internal`   | bool                  | Whether it is an internal network                   |
| `Attachable` | bool                  | Whether it is attachable                            |
| `Ingress`    | bool                  | Whether it is an ingress network                    |
| `IPAM`       | DockerNetworkItemIPAM | IPAM configuration information                      |
| `Options`    | dict[str, str]        | Network options                                     |
| `Containers` | dict[str, dict]       | Information of containers connected to this network |
