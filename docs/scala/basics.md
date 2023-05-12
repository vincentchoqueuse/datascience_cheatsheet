# Basics

## Printing

You can output the result of an expression using `println`

```scala
println(1)
println(1 + 2)
println("Hello World")
```

## Built-In Types

Scala has a lot of the same built in type as other languages: `Double`, `Float`, `Long`, `Int`, `Short`, `Byte`, `Char`, `Boolean` and `Unit` (equivalent to `void`)

Conversions between these types are available using the build-ins methods `.to<Type>` such as: `.toInt`, `.toString`, `.toFloat`...

## Values

Scala uses the keyword `val` to define an **immutable** value and `var`  to define an **mutable** variable

*NB: types can be inferred*

```scala
val x: Int = 1                  //immutable
var s = "My type is inferred"   //mutable
```

## Blocks

Scala uses `{}` to define a block. Expressions can be chained/combined into a block. The result of the last expression is the result (hence the type) of the entire block.

```scala
val num1: String = "13"
val twice = {
    val x = number.toInt
    x * 2
} //: Int = 26
```

## Functions

In Scala **functions are first class citizens**, which means that they behave like every other objects. Functions can then be anonymous, named, composed and can take parameters:

```scala
(x: Int) => x + 1                       // anonymous
val meaningOfLife = () => 42            // 0 parameter
val addOne = (x: Int) => x + 1          // 1 parameter 
val add = (x: Int, y: Int) => x + y     // 2 parameters
val subOne = (x: Int) => add(x, -1)     // composition
```

### Function types

**Q:** If functions are defined like any other value using the keyword `val`, what is their type ?

**A:** Functions have their own type looking like `? => ?`

```scala
val i = 1                       // has type Int
val addOne = (x: Int) => x + 1  // has type Int => Int
```

## Methods

Scala uses the keyword `def` to define a method. Methods have a name, zero or more parameters, a return type and a body:

```scala
def meaningOfLife: Int = 42                     // 0 parameter
def addOne(x: Int) = x + 1                      // 1 parameter, type is inferred
def add(x: Int, y: Int) = x + y                 // 2 parameters

def addPrint(x: Int, y: Int)(units: String) =   // 3 parameters in 2 param. lists
    val res = x + y                             // body is evaluated as a block
    println(res.toString + units)               // using indentation instead of {}
    res
```

## Control flow

### Conditions

Scala uses the keywords `if`, `then`, `else` to do branching on condition:

*NB: just like for method bodies, `{}` are optionnal*

```scala
if age < 18 then
    println("You are underage")
else
    println("You are not underage")
```

### Loops

#### `for` loops

Scala uses the keywords `for` and `do` to iterate over the elements in a collection:

```scala
for i <- 0 until 3 do println(i)

// 0
// 1
// 2
```

#### `while` loops

Scala uses the keywords `while` and `do` as follows:

```scala
var i = 0
var sum = 0
while i < 3 do
    sum += i
    i += 1
```

### Pattern matching

Scala uses the keyword `match` and `case` to do pattern matching:

```scala
name match
    case "Bob" => println("Hi, Bob")
    case "Alice" => println("Hi, Alice")
```