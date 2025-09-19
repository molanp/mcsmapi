# 文件模型

## _class_ `FileType(IntEnum)`

文件类型枚举

| 枚举项   | 枚举值 | 描述   |
| -------- | ------ | ------ |
| `FOLDER` | 0      | 文件夹 |
| `FILE`   | 1      | 文件   |

## _class_ `FileItem(BaseModel)`

文件信息

| 字段名      | 类型     | 描述                         |
| ----------- | -------- | ---------------------------- |
| `name`      | str      | 文件或文件夹名称             |
| `size`      | int      | 文件大小(单位: byte)         |
| `time`      | str      | 文件修改时间                 |
| `mode`      | int      | 文件操作权限(仅适用于 Linux) |
| `type`      | FileType | 文件类型                     |
| `daemonId`  | str      | 远程节点 uuid                |
| `uuid`      | str      | 实例的 uiid                  |
| `target`    | str      | 文件所在路径                 |
| `file_name` | str      | 当前文件列表过滤条件         |

### _method_ `rename(self, new_name: str)`

重命名该文件或文件夹

#### 参数

- `new_name`: 源文件或文件夹的新名字

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `delete(self)`

删除该文件或文件夹

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `copy2(self, target: str)`

复制该文件或文件夹到目标路径

### 参数

- `target`: 目标路径

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `move(self, target: str)`

移动该文件或文件夹到目标路径

#### 参数

- `target`: 目标路径

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `content(self)`

获取文件内容

#### 返回

- `str`: 文件内容

### _method_ `zip(self, targets: list[str])`

压缩该文件或文件夹到指定位置

#### 参数

- `targets`: 要压缩到的目标文件的路径

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `unzip(self, target: str, code: Literal["utf-8", "gbk", "big5"] = "utf-8")`

解压缩该 zip 文件到指定位置

#### 参数

- `target`: 解压到的目标路径
- `code`: 压缩文件的编码方式

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `update(self, text: str)`

更新该文件内容

#### 参数

- `text`: 文件内容

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `download(self)`

"""下载该文件"""

#### 返回

- `str`: 文件下载的 URL

## _class_ `FileList(BaseModel)`

文件列表

| 字段名         | 类型           | 描述                         |
| -------------- | -------------- | ---------------------------- |
| `items`        | list[FileItem] | 文件信息列表                 |
| `page`         | int            | 当前页数                     |
| `pageSize`     | int            | 文件列表单页大小             |
| `total`        | int            | 总页数                       |
| `absolutePath` | str            | 当前路径在远程节点的绝对路径 |
| `daemonId`     | str            | 远程节点 uuid                |
| `uuid`         | str            | 实例 uuid                    |
| `target`       | str            | 文件（名称或目录）路径       |

### _method_ `upload(self, file: bytes, upload_dir: str)`

::: tip
此函数为异步函数
:::

上传文件到实例

#### 参数

- `file`: 要上传的文件内容
- `upload_dir`: 文件上传到的目标路径

#### 返回

- `bool`: 操作成功返回 True

### _method_ `createFile(self, target: str)`

创建文件

#### 参数

- `target`: 目标文件的路径，包含文件名

#### 返回

- `bool`: 操作成功后返回 True

### _method_ `createFolder(self, target: str)`

创建文件夹

#### 参数

- `target`: 目标文件夹的路径

#### 返回

- `bool`: 操作成功后返回 True

## _class_ `FileDownloadConfig(BaseModel)`

文件下载配置

| 字段名     | 类型 | 描述         |
| ---------- | ---- | ------------ |
| `password` | str  | 文件下载密码 |
| `addr`     | str  | 文件下载地址 |
