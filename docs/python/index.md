# General


## Text File Reading/Writing

To read/write to a file in Python, you will want to use the `with` statement, which will close the file for you after you are done, managing the available resources for you.

### Reading file


```python
with open('filename.txt') as file:
    content = file.read()
```

```python
with open('filename.txt') as file:
...     file.readlines()
```

You can also iterate through the file line by line:

```python
with open('filename.txt') as file:
    for line in file:
        print(line, end='')
```

### Writing file

```python
with open('filename.txt', 'w') as file:
    file.write('Hello world!\n')
```

## JSON Reading/Writing

### Reading file

```python
import json

with open("filename.json", "r") as file:
    content = json.load(file)
```

### Writing file

```python
import json

content = {"name": "Joe", "age": 20}
with open("filename.json", "w") as file:
    json.dump(content, file, indent=4)
```

## YAML Reading


### Reading file

```python
from ruamel.yaml import YAML

with open("filename.yaml") as file:
    yaml=YAML()
    yaml.load(file)
```
