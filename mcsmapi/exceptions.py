import requests
from functools import wraps

class MCSMError(Exception):
    def __init__(self, status_code, data=None):
        self.status_code = status_code
        self.data = data
        super().__init__(status_code, data)

def crash_handler(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        try:
            response = func(*args, **kwargs)
            response.raise_for_status()
            return response.json()["data"]
        except requests.exceptions.HTTPError as e:
            raise MCSMError(response.status_code, response.json().get("data", response.text)) from e
    return wrapper
