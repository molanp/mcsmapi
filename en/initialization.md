## Initializing the MCSMAPI Object

::: tip
All subsequent operations assume you have completed this configuration.
:::

### _class_ `MCSMAPI(url, timeout: int = 5)`

Initialize the MCSMAPI object.

#### Parameters

- `url`: The URL of the MCSM frontend (including the protocol).
- `timeout`: Request timeout in seconds, defaults to 5.

#### Example

```py
from mcsmapi import MCSMAPI
mcsm = MCSMAPI("http://127.0.0.1:8080")
```

## Authentication

Most APIs require authentication to be used.

### Password Login

#### _method_ `login(username: str, password: str)`

##### Parameters

- `username`: Your username.
- `password`: Your password.

##### Example

```py
mcsm.login("username", "password")
```

### API Key Login

#### _method_ `login_with_apikey(apikey: str)`

##### Parameters

- `apikey`: Your API key.

##### Example

```py
mcsm.login_with_apikey("apikey")
```

## Quick Operations Guide

Every interface within the `MCSMAPI` object can be called directly from its corresponding model.

For example, you can use most methods from `MCSMAPI.user()` within the `User` model.
