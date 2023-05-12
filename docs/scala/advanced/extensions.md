# Extensions and Operators

## Extensions

Scala uses the keyword `extension` to achieve method enrichment for any type.

```scala
extension (i: Int)
    def twice: Int = 2 * i
    def add(j: Int) = i + j

println(2.twice)        // prints 4

val x = 3
val y = x.add(4)
println(y)              // prints 7
```

Extensions can also be parameterized by type, and/or take contextual parameters:

```scala
trait PrettyPrinter[A]:
    def prettyprint(x: A): String

object PrettyPrinters:
    given PrettyPrinter[Int] with
        def prettyprint(x: Int): String = s"Int: $x"
    given PrettyPrinter[String] with
        def prettyprint(x: String): String = s"String: $x"
    given PrettyPrinter[Boolean] with
        def prettyprint(x: Boolean): String = s"Boolean: $x"

extension [A](x: A)(using pp: PrettyPrinter[A])
    def prettyprint = println(pp.prettyprint(x))

import PrettyPrinters.given

1.prettyprint           // Int: 1
"hello".prettyprint     // String: hello
true.prettyprint        // Boolean: true
// 'a'.prettyprint      // doesn't compile
// ^^^^^^^^^^^^^^^ No instance of PrettyPrinter was found for type Char
```

This allows the extension to be used on any instance for which there is a `given` instance of `PrettyPrinter` of the instance's type.

## Operators

Scala is very flexible when it comes to names. It is very easy to create its own operators through normal methods: just give the method the name of your operator.

```scala
class Vec(val x: Double, val y: Double):
    def norm: Double = sqrt(x*x + y*y)                          // normal method
    def +(that: Vec) = Vec(this.x + that.x, this.y + that.y)    // + operator
    def <|>(that: Vec) = this.x * that.x + this.y * that.y      // custom operator

val v1 = Vec(1, 2)
val v2 = Vec(-3, 1)

v1.norm             // calling the "norm" method
v1.+(v2)            // calling the "+" method
v1.<|>(v2)          // calling the "<|>" method
```

### Infix notation

Using the dot notation (`object.method`) makes sense for normal methods (like `norm` is the previous example) but does not look very good for operators (`+` and `<|>` in the previous example). Instead we can use **infix notation**:

```scala
v1 + v2             // equivalent to v1.+(v2)
v1 <|> v2           // equivalent to v1.<|>(v2)
```

### Unary operators

If you want a 0 parameter operator to be used as a prefix to the instances it is called on, you can use **unary operators**. Simple prefix the method name with "unary_" (work with `+`, `-`, `!`, and `~`):

```scala
class Vec(val x: Double, val y: Double):
    def unary_~ = Vec(-x, -y)

val v1 = Vec(1, 2)

~v1         // equivalent to v1.~
```

## Example with a pipe operator

By combining extensions and operators, we can make for pretty nice custom sintactic sugars. Here is an example with a pipe operator.

```scala
def addOne(x: Int) = x + 1
def mulThree(x: Int) = x * 3
def subTwo(x: Int) = x - 2

val x = 5

// Normal chaining to achieve y = ((x + 1) * 3) - 2
val y = subTwo(mulThree(addOne(x)))
```

This notation is cumbersome and boring. Here is a much nicer solution:

```scala
extension [Y](y: Y)
    def |>[Z](f: Y => Z): Z = f(y)

val y = x |> addOne
          |> mulThree
          |> subTwo
```     

The result of each function is piped as the input of the next function.