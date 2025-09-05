# User Operation Related Models

## _class_ `UserPermission(IntEnum)`

User permission levels.

| Enumerated Value | Enumerated Value | Description               |
| ---------------- | ---------------- | ------------------------- |
| BANNED           | -1               | Banned user permissions   |
| USER             | 1                | Regular user permissions  |
| ADMIN            | 10               | Administrator permissions |

## _class_ `UserCreateResult(BaseModel)`

User creation result.

| Field Name | Type           | Description                   |
| ---------- | -------------- | ----------------------------- |
| uuid       | str            | User unique identifier (UUID) |
| userName   | str            | Username                      |
| permission | UserPermission | User permission level         |

## _class_ `UserModel(BaseModel)`

User information model.

| Field Name   | Type                    | Description                                    |
| ------------ | ----------------------- | ---------------------------------------------- |
| uuid         | str                     | User unique identifier (UUID)                  |
| userName     | str                     | Username                                       |
| permission   | UserPermission          | User permission level                          |
| registerTime | str                     | User registration time (YYYY/M/D hh:mm:ss)     |
| loginTime    | str                     | User last login time (YYYY/M/D hh:mm:ss)       |
| apiKey       | str                     | User API key                                   |
| open2FA      | bool                    | Enable two-factor authentication (2FA)         |
| instances    | list[UserInstancesList] | List of user-associated instances              |
| isInit       | bool                    | Whether it is an initialized user (deprecated) |
| secret       | str                     | User security key (deprecated)                 |
| passWord     | str                     | User password (deprecated)                     |
| passWordType | int                     | Password type (deprecated)                     |
| salt         | str                     | Password salt (deprecated)                     |

### _method_ `delete(self)`

Delete this user.

#### Return

- `bool`: Returns `True` upon successful deletion.

### _method_ `update(self, config: dict[str, Any])`

Update this user's information.

#### Parameters

- `config`: New user information provided as a dictionary. Missing values are filled with the original user information.

#### Return

- `bool`: Returns `True` upon successful update.

## _class_ `SearchUserModel(BaseModel)`

User search results.

| Field Name | Type            | Description                    |
| ---------- | --------------- | ------------------------------ |
| total      | int             | Total number of matching users |
| page       | int             | Current page number            |
| page_size  | int             | Number of users per page       |
| max_page   | int             | Maximum available page number  |
| data       | list[UserModel] | List of user information       |

## _class_ `UserConfig(BaseModel)`

User configuration information.

| Field Name   | Type                 | Description                                    |
| ------------ | -------------------- | ---------------------------------------------- |
| uuid         | str                  | User unique identifier (UUID)                  |
| userName     | str                  | Username                                       |
| loginTime    | str                  | Last login time                                |
| registerTime | str                  | Registration time                              |
| instances    | list[InstanceDetail] | List of user-owned instances                   |
| permission   | int                  | User permission level                          |
| passWord     | str                  | User password                                  |
| open2FA      | bool                 | Enable two-factor authentication (2FA)         |
| apiKey       | str                  | User API key                                   |
| passWordType | int                  | Password type (deprecated)                     |
| isInit       | bool                 | Whether it is an initialized user (deprecated) |
| secret       | str                  | User security key (deprecated)                 |
| salt         | str                  | Password salt (deprecated)                     |
