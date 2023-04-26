# Python

* [Documentation](https://docs.python.org/3/)

Python is a high-level, interpreted programming language. It is designed to be easy to read and write, with a syntax that emphasizes code readability and simplicity. Python is used for a wide range of applications, including web development, scientific computing, data analysis, and artificial intelligence.

Python is an object-oriented language, which means that it uses objects to represent data and functions. It includes a large standard library with many modules for common tasks, as well as many third-party libraries for specialized applications.

Python is known for its ease of use and its focus on code readability, which makes it a popular choice for beginners and experienced programmers alike. It is also highly portable, running on many different platforms and operating systems.



## Print 

The `print()` function in Python is used to output text to the console or to a file. It is used for debugging, logging, and generating output for users.

The `print()` function takes one or more arguments, which can be text strings, numbers, or other types of data. When the `print()` function is called, it outputs the arguments to the console or file, with a newline character \n added at the end by default.


### Simple Example

To print the contents of a variable in Python, you can use the print() function. Simply pass the variable as an argument to the `print()` function, like this:

```python
my_variable = "Hello, world!"
print(my_variable)
```

### Format Message

It is common to use the `format()` method with the `print()` function in Python. The `format()` method allows you to insert values into a string dynamically, which is useful for generating output that includes variable data.

To use the `format()` method to print values in Python, you can include placeholders in a string using curly braces `{}`. Then, you can call the `format()` method on the string and pass in the values you want to insert into the placeholders. 

```python
name = "Alice"
age = 25

print("My name is {} and I am {} years old.".format(name, age))
```



## Control Flow

### `if` statements

* Form 1: `if`

```python
if name == 'Homer':
    print('Hi, Homer.')
```

* Form 2: `if/else`

```python
if name == 'Homer':
    print('Hi, Homer.')
else:
    print('You are not Homer')
```

* Form 3: `if/elif/else`

```python
if name == 'Homer':
    print('Hi, Homer.')
elif name == 'Marge':
    print('Hi Marge!')
else:
    print('You are not Homer or Marge')
```

### `for` Loops

The `for` loop iterates over a list, tuple, dictionary, set or string.

```python
for indice in range(5):
    print('Hi, Homer.')
```

### `while` Loops

```python
spam = 0
while spam < 5:
    print('Hi, Homer.')
    spam = spam + 1
```

## Functions / Procedures

Functions and Procedures are specified using the `def` keyword. 

```python
def say_hello(name):
    message = "Hi, {} !".format(name)
    print(message)

say_hello("Homer")
```

### Optional Argument

```python
def say_hello(name="Homer"):
    message = "Hi, {} !".format(name)
    print(message)

say_hello()  # no argument: default value if used for name
say_hello("Marge")
```

### Return Values

```python
def write_message(name):
    message = "Hi, {} !".format(name)
    return message

message = write_message("Homer")
print(message)
```

## Class

In Python, a class is a blueprint or template for creating objects that have specific properties and behaviors. It defines a set of attributes (variables) and methods (functions) that are shared by all instances (objects) of the class.

### Creation

To create a class in Python, you can use the class keyword followed by the name of the class. 

```python
class MyClass:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def my_method(self):
        return self.x + self.y
```

In this example, we define a class called `MyClass`. The `__init__` method is a special method that is called when an instance of the class is created. It takes the `self` parameter (which refers to the instance of the class) as well as any other parameters that are passed in when the instance is created. In this example, we define x and y as instance variables and set them equal to the values passed in.

We also define a method called `my_method`, which returns the sum of x and y. This method takes the `self` parameter, which allows it to access the instance variables.

### Class instantiation

To create an instance of the class, you can simply call the class name as if it were a function, passing in any parameters required by the `__init__` method. 

```python 
my_object = MyClass(3, 5)
```

In this example, we create an instance of `MyClass` called `my_object`, passing in the values 3 and 5 for x and y, respectively. You can now access the instance variables and methods of my_object using dot notation, like this:

```python
print(my_object.x)           # outputs 3
print(my_object.y)           # outputs 5
print(my_object.my_method()) # outputs 8
``` 

## Import a library 

You can import a whole library or only part of it, by specifying which components to import.

``` python 
import math # or
import math as ma # or
from math import pi
```

Overall, the choice of import method depends on the specific needs of your program.

* `import math`: This imports the entire math library into your program. You can then use any function or variable in the math module by prefixing it with math. For example, you could use the `math.sin()` function to compute the sine of an angle. This method is useful when you need to use many functions from the same library.
* `import math as ma`: This imports the entire math library, but renames it to ma. This can be useful if you want to avoid naming conflicts with other libraries or if you find the original name of the library too long or unwieldy.
* `from math import pi`: This imports only the pi constant from the math library into your program. You can then use `pi` directly in your code without having to prefix it with `math.`. This method is useful when you only need a few specific functions or constants from a library and don't want to clutter your code with unnecessary prefixes.