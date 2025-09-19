# File Models

## _class_ `FileType(IntEnum)`

File type enumeration

| Enum Item | Enum Value | Description |
| --------- | ---------- | ----------- |
| `FOLDER`  | 0          | Folder      |
| `FILE`    | 1          | File        |

## _class_ `FileItem(BaseModel)`

File information

| Field       | Type     | Description                             |
| ----------- | -------- | --------------------------------------- |
| `name`      | str      | File or folder name                     |
| `size`      | int      | File size (unit: bytes)                 |
| `time`      | str      | File modification time                  |
| `mode`      | int      | File operation permissions (Linux only) |
| `type`      | FileType | File type                               |
| `daemonId`  | str      | Remote node UUID                        |
| `uuid`      | str      | Instance UUID                           |
| `target`    | str      | Path where the file is located          |
| `file_name` | str      | Filter condition for current file list  |

### _method_ `rename(self, new_name: str)`

Rename this file or folder

#### Parameters

- `new_name`: New name for the source file or folder

#### Returns

- `bool`: Returns True after successful operation

### _method_ `delete(self)`

Delete this file or folder

#### Returns

- `bool`: Returns True after successful operation

### _method_ `copy2(self, target: str)`

Copy this file or folder to the target path

#### Parameters

- `target`: Target path

#### Returns

- `bool`: Returns True after successful operation

### _method_ `move(self, target: str)`

Move this file or folder to the target path

#### Parameters

- `target`: Target path

#### Returns

- `bool`: Returns True after successful operation

### _method_ `content(self)`

Get the file content

#### Returns

- `str`: File content

### _method_ `zip(self, targets: list[str])`

Compress this file or folder to the specified location

#### Parameters

- `targets`: Target file path to compress to

#### Returns

- `bool`: Returns True after successful operation

### _method_ `unzip(self, target: str, code: Literal["utf-8", "gbk", "big5"] = "utf-8")`

Unzip this zip file to the specified location

#### Parameters

- `target`: Target path to unzip to
- `code`: Encoding of the compressed file

#### Returns

- `bool`: Returns True after successful operation

### _method_ `update(self, text: str)`

Update the file content

#### Parameters

- `text`: File content

#### Returns

- `bool`: Returns True after successful operation

### _method_ `download(self)`

Download this file

#### Returns

- `str`: File download URL

## _class_ `FileList(BaseModel)`

File list

| Field          | Type           | Description                                               |
| -------------- | -------------- | --------------------------------------------------------- |
| `items`        | list[FileItem] | List of file information                                  |
| `page`         | int            | Current page number                                       |
| `pageSize`     | int            | Number of items per page in the file list                 |
| `total`        | int            | Total number of pages                                     |
| `absolutePath` | str            | Absolute path of the current directory on the remote node |
| `daemonId`     | str            | Remote node UUID                                          |
| `uuid`         | str            | Instance UUID                                             |
| `target`       | str            | Path of the file (name or directory)                      |

### _method_ `upload(self, file: bytes, upload_dir: str)`

::: tip
This function is asynchronous
:::

Upload a file to the instance

#### Parameters

- `file`: Content of the file to upload
- `upload_dir`: Target path to upload the file to

#### Returns

- `bool`: Returns True if the operation is successful

### _method_ `createFile(self, target: str)`

Create a file

#### Parameters

- `target`: Path of the target file, including the filename

#### Returns

- `bool`: Returns True after successful operation

### _method_ `createFolder(self, target: str)`

Create a folder

#### Parameters

- `target`: Path of the target folder

#### Returns

- `bool`: Returns True after successful operation

## _class_ `FileDownloadConfig(BaseModel)`

File download configuration

| Field      | Type | Description                |
| ---------- | ---- | -------------------------- |
| `password` | str  | Password for file download |
| `addr`     | str  | File download address      |
