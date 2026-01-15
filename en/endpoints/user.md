# User

## _class_ `User`

Get subclasses for operating users.

```python
api = mcsm.user
```

---

### _method_ `search(username: str = "", page: int = 1, page_size: int = 20, role: Literal[-1, 1, 10, ""] = "")`

Search for user information based on username and role.

#### Parameters

- `username`: Username, defaults to an empty string, indicating no filtering by username.
- `page`: Page number, used to indicate which page of data to return.
- `page_size`: Number of items per page, defaults to 20.
- `role`: Role to filter by, defaults to an empty string, indicating no filtering by role.

#### Returns

- `SearchUserModel`: Model containing the search results.

### _method_ `create(username: str, password: str, permission: int = 1)`

Create a new user.

#### Parameters

- `username`: Username.
- `password`: Password.
- `permission`: Permission level, defaults to 1.

#### Returns

- `UserCreateResult`: Model containing the result of the creation.

### _method_ `update(uuid: str, config: dict[str, Any])`

Update user information.

::: warning
This function is not recommended for direct use. It is suggested to call `search` first and then use the user object's `update` method to update as needed.
:::

#### Parameters

- `uuid`: User's UUID.
- `config`: New user information, provided as a dictionary. Missing values are filled with default values from the `UserModel` model.

#### Returns

- `bool`: Returns `True` if the operation is successful.

### _method_ `delete(uuids: list[str])`

Delete users.

#### Parameters

- `uuids`: List of UUIDs of users to delete.

#### Returns

- `bool`: Returns `True` if the deletion is successful.
