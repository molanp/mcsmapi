# 文件

## _class_ `File`

获取操作文件的子类

```py
api = mcsm.file()
```

---

### _method_ `show(daemonId: str, uuid: str, target: str = "", page: int = 0, page_size: int = 100, file_name: str = "")`

获取文件列表

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `target`: 用于文件过滤的目标路径
- `page`: 指定分页的页码
- `page_size`: 获取文件列表的分页大小
- `file_name`: 用于在文件列表中过滤出名称包含指定字符串的文件或文件夹

#### 返回

- `FileList`: 文件列表详情的模型

### _method_ `content(daemonId: str, uuid: str, target: str)`

获取文件内容

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `target`: 文件的目标路径

#### 返回

- `str`: 文件的内容

### _method_ `update(daemonId: str, uuid: str, target: str, text: str)`

更新文件内容

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `target`: 目标文件的路径
- `text`: 新的文件内容

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `download(daemonId: str, uuid: str, file_name: str)`

下载文件

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `file_name`: 要下载的文件实例内完整路径, eg: /backup/world.zip

#### 返回

- `str`: 文件下载 URL

### _method_ `upload(daemonId: str, uuid: str, file: bytes, upload_dir: str)`

::: tip
此函数为异步函数
:::

上传文件

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `file`: 要上传的文件内容
- `upload_dir`: 文件上传到的目标路径

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `copy(daemonId: str, uuid: str, copy_map: dict[str, str])`

移动多个文件或文件夹到指定位置

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `copy_map`: 复制映射，格式为 {源路径: 目标路径}

#### 返回

- `bool`: 操作成功后返回 True

### _mothod_ `copyOne(daemonId: str, uuid: str, source: str, target: str)`

复制单个文件或文件夹到指定位置

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `source`: 源文件或文件夹的路径
- `target`: 目标文件或文件夹的路径

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `move(daemonId: str, uuid: str, copy_map: dict[str, str])`

移动多个文件或文件夹到指定位置

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `copy_map`: 移动映射，格式为 {源路径: 目标路径}

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `moveOne(daemonId: str, uuid: str, source: str, target: str)`

移动单个文件或文件夹到指定位置

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `source`: 源文件或文件夹的路径
- `target`: 目标文件或文件夹的路径

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `rename(daemonId: str, uuid: str, source: str, new_name: str)`

重命名单个文件或文件夹

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `source`: 源文件或文件夹的路径
- `new_name`: 源文件或文件夹的新名字

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `zip(daemonId: str, uuid: str, source: str, targets: list[str])`

压缩多个文件或文件夹到指定位置

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `source`: 要压缩到的目标文件路径
- `targets`: 需要压缩的文件路径

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `unzip(daemonId: str, uuid: str, source: str, targets: str, code: Literal["utf-8", "gbk", "big5"] = "utf-8")`

解压缩指定的 zip 文件到目标位置

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `source`: 需要解压的 zip 文件路径
- `targets`: 解压到的目标路径
- `code`: 压缩文件的编码方式

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `delete(daemonId: str, uuid: str, targets: list[str])`

删除多个文件或文件夹

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `targets`: 要删除的文件或文件夹的路径

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `createFile(daemonId: str, uuid: str, target: str)`

创建文件

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `target`: 目标文件的路径，包含文件名

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `createFolder(daemonId: str, uuid: str, target: str)`

创建文件夹

#### 参数

- `daemonId`: 节点的 UUID
- `uuid`: 实例的 UUID
- `target`: 目标文件夹的路径

#### 返回

- `bool`: 操作成功后返回 True
