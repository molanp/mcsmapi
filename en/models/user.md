# User Model

## _class_ `UserPermission(IntEnum)`

User permission level

| Enum Item | Enum Value | Description              |
| --------- | ---------- | ------------------------ |
| `BANNED`  | -1         | Banned user permission   |
| `USER`    | 1          | Regular user permission  |
| `ADMIN`   | 10         | Administrator permission |

## _class_ `UserInstances(BaseModel)`

User instance information

| Field Name     | Type | Description           |
| -------------- | ---- | --------------------- |
| `instanceUuid` | str  | Instance UUID         |
| `daemonId`     | str  | ID of the owning node |

## _class_ `UserCreateResult(BaseModel)`

User creation result

| Field Name   | Type           | Description                   |
| ------------ | -------------- | ----------------------------- |
| `uuid`       | str            | User unique identifier (UUID) |
| `userName`   | str            | Username                      |
| `permission` | UserPermission | User permission level         |

## _class_ `UserModel(BaseModel)`

User information model

| Field Name     | Type                | Description                                        |
| -------------- | ------------------- | -------------------------------------------------- |
| `uuid`         | str                 | User unique identifier (UUID)                      |
| `userName`     | str                 | Username                                           |
| `permission`   | UserPermission      | User permission level                              |
| `registerTime` | str                 | User registration time (YYYY/M/D hh:mm:ss)         |
| `loginTime`    | str                 | User last login time (YYYY/M/D hh:mm:ss)           |
| `apiKey`       | str                 | User API key                                       |
| `passWord`     | str                 | User password                                      |
| `open2FA`      | bool                | Whether Two-Factor Authentication (2FA) is enabled |
| `instances`    | list[UserInstances] | List of instances associated with the user         |
| `isInit`       | bool                | Whether it is an initialized user (Deprecated)     |
| `secret`       | str                 | User security secret (Deprecated)                  |
| `passWordType` | int                 | Password type (Deprecated)                         |
| `salt`         | str                 | Password salt (Deprecated)                         |

### _method_ `delete(self)`

Deletes this user.

#### Returns

- `bool`: Returns True if the deletion is successful.

### _method_ `update(self, config: dict[str, Any])`

Updates this user's information.

#### Parameters

- `config`: The new user information, provided as a dictionary. Missing information will be filled with the original user's information.

#### Returns

- `bool`: Returns True if the update is successful.

## _class_ `SearchUserModel(BaseModel)`

User search results

| Field Name  | Type            | Description                       |
| ----------- | --------------- | --------------------------------- |
| `total`     | int             | Total number of matching users    |
| `page`      | int             | Current page number               |
| `page_size` | int             | Number of users returned per page |
| `max_page`  | int             | Maximum available page number     |
| `data`      | list[UserModel] | List of user information          |
