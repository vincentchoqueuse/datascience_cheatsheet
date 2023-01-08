# OS interface


## Spawn a process

```python
import subprocess

process = subprocess.run(["ls", "-l", "/dev/null"], capture_output=True)

print(process.stdout)
# b'crw-rw-rw- 1 root root 1, 3  8 janv. 11:18 /dev/null\n'

print(process.stderr)
# b''
```

## Create a directory

### Create one directory

```python
import os

os.mkdir("mydirectory")
```

### Create multiple nested directories

> This is the equivalent of `mkdir -p`.

```python
import os

os.makedirs("create/all/subdirectories", exist_ok=True)
```

## Open a webpage in a browser

```python
import webbrowser

webbrowser.open("https://vincentchoqueuse.github.io/datascience_cheatsheet/")
```
