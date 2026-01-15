# File

## _class_ `File`

Obtain the subclass for file operations

```py
api = mcsm.file
```

---

### _method_ `show(daemonId: str, uuid: str, target: str = "", page: int = 0, page_size: int = 100, file_name: str = "")`

Get the file list

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `target`: Target path used for file filtering
- `page`: Page number for pagination
- `page_size`: Page size for fetching the file list
- `file_name`: Used to filter files or folders whose names contain the specified string in the file list

#### Returns

- `FileList`: Model with detailed file list information

### _method_ `content(daemonId: str, uuid: str, target: str)`

Get file content

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `target`: Target path of the file

#### Returns

- `str`: Content of the file

### _method_ `update(daemonId: str, uuid: str, target: str, text: str)`

Update file content

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `target`: Path of the target file
- `text`: New file content

#### Returns

- `bool`: Returns True after successful operation

### _method_ `download(daemonId: str, uuid: str, file_name: str)`

Download file

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `file_name`: Full path within the instance of the file to download, eg: /backup/world.zip

#### Returns

- `str`: File download URL

### _method_ `upload(daemonId: str, uuid: str, file: bytes, upload_dir: str)`

::: tip
This function is asynchronous
:::

Upload file

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `file`: Content of the file to upload
- `upload_dir`: Target path to upload the file to

#### Returns

- `bool`: Returns True after successful operation

### _method_ `copy_to(daemonId: str, uuid: str, copy_map: dict[str, str])`

Copy multiple files or folders to the specified location

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `copy_map`: Copy mapping, format: {source path: target path}

#### Returns

- `bool`: Returns True after successful operation

### _method_ `copyOne(daemonId: str, uuid: str, source: str, target: str)`

Copy a single file or folder to the specified location

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `source`: Path of the source file or folder
- `target`: Path of the target file or folder

#### Returns

- `bool`: Returns True after successful operation

### _method_ `move(daemonId: str, uuid: str, copy_map: dict[str, str])`

Move multiple files or folders to the specified location

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `copy_map`: Move mapping, format: {source path: target path}

#### Returns

- `bool`: Returns True after successful operation

### _method_ `moveOne(daemonId: str, uuid: str, source: str, target: str)`

Move a single file or folder to the specified location

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `source`: Path of the source file or folder
- `target`: Path of the target file or folder

#### Returns

- `bool`: Returns True after successful operation

### _method_ `rename(daemonId: str, uuid: str, source: str, new_name: str)`

Rename a single file or folder

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `source`: Path of the source file or folder
- `new_name`: New name of the source file or folder

#### Returns

- `bool`: Returns True after successful operation

### _method_ `zip(daemonId: str, uuid: str, source: str, targets: list[str])`

Compress multiple files or folders to the specified location

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `source`: Target file path to compress to
- `targets`: Paths of the files to compress

#### Returns

- `bool`: Returns True after successful operation

### _method_ `unzip(daemonId: str, uuid: str, source: str, targets: str, code: Literal["utf-8", "gbk", "big5"] = "utf-8")`

Unzip the specified zip file to the target location

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `source`: Path of the zip file to unzip
- `targets`: Target path to unzip to
- `code`: Encoding of the compressed file

#### Returns

- `bool`: Returns True after successful operation

### _method_ `delete(daemonId: str, uuid: str, targets: list[str])`

Delete multiple files or folders

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `targets`: Paths of the files or folders to delete

#### Returns

- `bool`: Returns True after successful operation

### _method_ `createFile(daemonId: str, uuid: str, target: str)`

Create a file

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `target`: Path of the target file, including filename

#### Returns

- `bool`: Returns True after successful operation

### _method_ `createFolder(daemonId: str, uuid: str, target: str)`

Create a folder

#### Parameters

- `daemonId`: UUID of the node
- `uuid`: UUID of the instance
- `target`: Path of the target folder

#### Returns

- `bool`: Returns True after successful operation
