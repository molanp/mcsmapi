# 镜像

## _class_ `Image`

获取操作镜像的子类

```py
api = mcsm.image()
```

---

### _method_ `images(daemonId: str)`

获取镜像列表

#### 参数

- `daemonId`: 节点的 UUID

#### 返回

- `list[DockerImageItem]`: 镜像列表详情的模型列表

::: tip
详细定义参考 https://docs.docker.com/engine/api/v1.37/#tag/Image/operation/ImageList

字段含义以 Docker 文档为准
:::

### _method_ `containers(daemonId: str)`

获取容器列表

#### 参数

- `daemonId`: 节点的 UUID

#### 返回

- `list[DockerContainerItem]`: 容器列表详情的模型列表

::: tip
详细定义参考 https://docs.docker.com/engine/api/v1.37/#tag/Container/operation/ContainerList

字段含义以 Docker 文档为准
:::

### _method_ `network(daemonId: str)`

获取网络接口列表

#### 参数

- `daemonId`: 节点的 UUID

#### 返回

- `list[DockerNetworkItem]`: 网络接口列表详情的模型列表

::: tip
详细定义参考 https://docs.docker.com/engine/api/v1.37/#tag/Network/operation/NetworkList

字段含义以 Docker 文档为准
:::

### _method_ `add(daemonId: str, dockerFile: str, name: str, tag: str)`

新增一个镜像

#### 参数

- `daemonId`: 节点的 UUID
- `dockerFile`: DockerFile Config 内容
- `name`: 镜像名称
- `tag`: 镜像版本

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `progress(daemonId: str)`

获取镜像构建进度

#### 参数

- `daemonId`: 节点的 UUID

#### 返回

- `dict[str, int]`: {容器名称: 当前状态}

| 状态码 | 含义         |
| ------ | ------------ |
| -1     | 镜像构建失败 |
| 1      | 镜像构建中   |
| 2      | 镜像构建完成 |
