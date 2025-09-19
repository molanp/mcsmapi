# 镜像模型

::: tip
详细定义参考:

https://docs.docker.com/engine/api/v1.37/#tag/Image/operation/ImageList

https://docs.docker.com/engine/api/v1.37/#tag/Network/operation/NetworkList

https://docs.docker.com/engine/api/v1.37/#tag/Container/operation/ContainerList

字段含义以 Docker 文档为准
:::

## _class_ `DockerConfig(BaseModel)`

Docker 容器配置

| 字段名             | 类型      | 描述                                 |
| ------------------ | --------- | ------------------------------------ |
| `containerName`    | str       | 容器名称                             |
| `image`            | str       | 镜像名称                             |
| `ports`            | list[str] | 容器端口映射, eg:["25565:25565/tcp"] |
| `extraVolumes`     | list[str] | 额外挂载卷路径                       |
| `memory`           | int       | 容器分配内存(单位: MB)               |
| `memorySwap`       | int       | 容器分配 swap 内存(单位: MB)         |
| `memorySwappiness` | int       | 虚拟内存使用倾向(0-100)              |
| `networkMode`      | str       | 网络模式(例如: bridge, host)         |
| `networkAliases`   | list[str] | 网络别名列表                         |
| `maxSpace`         | int       | 容器可使用的最大磁盘空间(单位: MB)   |
| `network`          | int       | 容器网络配置(已弃用)                 |
| `io`               | int       | 容器 IO 限制(单位: MB)               |
| `cpusetCpus`       | str       | 绑定的 CPU 核心, eg: `0,1`           |
| `cpuUsage`         | int       | 限制 CPU 使用率(单位: %)             |
| `workingDir`       | str       | 容器工作目录                         |
| `env`              | list[str] | 环境变量设置                         |
| `changeWorkdir`    | bool      | 是否更变容器默认工作目录             |

## _class_ `DockerImageItem(BaseModel)`

Docker 镜像信息

| 字段名        | 类型           | 描述                                |
| ------------- | -------------- | ----------------------------------- |
| `Id`          | str            | 镜像唯一 ID                         |
| `ParentId`    | str            | 父镜像 ID                           |
| `RepoTags`    | list[str]      | 镜像仓库标签, eg: ["ubuntu:latest"] |
| `RepoDigests` | list[str]      | 镜像摘要                            |
| `Created`     | int            | 镜像创建时间(Unix 时间戳)           |
| `Size`        | int            | 镜像大小(单位: 字节)                |
| `VirtualSize` | int            | 镜像的虚拟大小                      |
| `SharedSize`  | int            | 共享存储空间大小                    |
| `Labels`      | dict[str, str] | 镜像标签                            |
| `Containers`  | int            | 依赖该镜像运行的容器数量            |

## _class_ `DockerContainerItemPort(BaseModel)`

Docker 容器端口映射

| 字段名        | 类型                  | 描述               |
| ------------- | --------------------- | ------------------ |
| `PrivatePort` | int                   | 容器内部端口       |
| `PublicPort`  | int \| None           | 映射到宿主机的端口 |
| `Type`        | Literal["tcp", "udp"] | 端口类型           |

## _class_ `DockerContainerItemNetworkSettingsNetwork(BaseModel)`

Docker 容器网络设置信息

| 字段名                | 类型 | 描述              |
| --------------------- | ---- | ----------------- |
| `NetworkID`           | str  | 网络 ID           |
| `EndpointID`          | str  | 网络端点 ID       |
| `Gateway`             | str  | 网关地址          |
| `IPAddress`           | str  | 分配的 IP 地址    |
| `IPPrefixLen`         | int  | IP 地址前缀长度   |
| `IPv6Gateway`         | str  | IPv6 网关地址     |
| `GlobalIPv6Address`   | str  | IPv6 地址         |
| `GlobalIPv6PrefixLen` | int  | IPv6 地址前缀长度 |
| `MacAddress`          | str  | MAC 地址          |

## _class_ `DockerContainerItemNetworkSettings(BaseModel)`

Docker 容器网络设置信息

| 字段名     | 类型                                                 | 描述               |
| ---------- | ---------------------------------------------------- | ------------------ |
| `Networks` | dict[str, DockerContainerItemNetworkSettingsNetwork] | 容器连接的所有网络 |

## _class_ `DockerContainerItemMount(BaseModel)`

容器挂载点信息

| 字段名        | 类型 | 描述         |
| ------------- | ---- | ------------ |
| `Name`        | str  | 挂载名称     |
| `Source`      | str  | 源路径       |
| `Destination` | str  | 目标路径     |
| `Driver`      | str  | 驱动类型     |
| `Mode`        | str  | 挂载模式     |
| `RW`          | bool | 是否允许读写 |
| `Propagation` | str  | 传播模式     |

## _class_ `DockerContainerItemHostConfig(BaseModel)`

Docker 宿主机配置

| 字段名        | 类型 | 描述     |
| ------------- | ---- | -------- |
| `NetworkMode` | str  | 网络模式 |

## _class_ `DockerContainerItem(BaseModel)`

Docker 容器详细信息

| 字段名            | 类型                               | 描述                       |
| ----------------- | ---------------------------------- | -------------------------- |
| `Id`              | str                                | 容器 ID                    |
| `Names`           | list[str]                          | 容器名称列表               |
| `Image`           | str                                | 运行的镜像名称             |
| `ImageID`         | str                                | 镜像 ID                    |
| `Command`         | str                                | 容器启动命令               |
| `Created`         | int                                | 容器创建时间(Unix 时间戳)  |
| `State`           | str                                | 容器状态                   |
| `Status`          | str                                | 容器运行状态描述           |
| `Ports`           | list[DockerContainerItemPort]      | 端口映射信息               |
| `Labels`          | dict[str, str]                     | 容器标签信息               |
| `SizeRw`          | int                                | 读写层大小(单位: 字节)     |
| `SizeRootFs`      | int                                | 根文件系统大小(单位: 字节) |
| `HostConfig`      | DockerContainerItemHostConfig      | 宿主机配置                 |
| `NetworkSettings` | DockerContainerItemNetworkSettings | 容器网络配置               |
| `Mounts`          | list[DockerContainerItemMount]     | 容器挂载信息               |

## _class_ `DockerNetworkItemIPAMConfig(BaseModel)`

Docker 网络 IPAM 配置信息

| 字段名   | 类型 | 描述     |
| -------- | ---- | -------- |
| `Subnet` | str  | 子网地址 |

## _class_ `DockerNetworkItemIPAM(BaseModel)`

Docker 网络的 IP 地址管理

| 字段名   | 类型                              | 描述      |
| -------- | --------------------------------- | --------- |
| `Driver` | str                               | 驱动类型  |
| `Config` | list[DockerNetworkItemIPAMConfig] | IPAM 配置 |

## _class_ `DockerNetworkItem(BaseModel)`

Docker 网络详细信息

| 字段名       | 类型                  | 描述                   |
| ------------ | --------------------- | ---------------------- |
| `Name`       | str                   | 网络名称               |
| `Id`         | str                   | 网络 ID                |
| `Created`    | str                   | 网络创建时间           |
| `Scope`      | str                   | 作用范围(local/global) |
| `Driver`     | str                   | 网络驱动类型           |
| `EnableIPv6` | bool                  | 是否启用 IPv6          |
| `Internal`   | bool                  | 是否为内部网络         |
| `Attachable` | bool                  | 是否可附加             |
| `Ingress`    | bool                  | 是否为入口网络         |
| `IPAM`       | DockerNetworkItemIPAM | IPAM 配置信息          |
| `Options`    | dict[str, str]        | 网络选项               |
| `Containers` | dict[str, dict]       | 连接到此网络的容器信息 |
