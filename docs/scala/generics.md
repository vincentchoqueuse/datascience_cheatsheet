# Generics

Scala's type system allows methods and classes to be very flexible with types.

## Polymorphic methods

Scala uses the syntax `[]` to parameterize methods by type.

```scala
def doNothing[A](x: A): A = x
```

This methods can be read like: "a function `doNothing` that takes a type parameter `A`, a value parameter `x` of type `A` and returns a value of type `A`". This method can then be used with any object that fits the type parameter (here any type would fit):

```scala
doNothing[Int](1)               // works with Int
doNothing[String]("hello")      // works with String
doNothing(true)                 // works with Boolean, type parameter is deduced automatically
```

## Generic classes

Scala uses the syntax `[]` to parameterize classes by type.

```scala
class Box[A](private var content: A):
	def peek: A = content
	def place(x: A): Unit = content = x
```

The class `Box` is now parameterized by type (`A`) as well as by value (`content`). The methods `peek` and `place` can then use `A` for their parameter or return type.

```scala
val stringBox = Box[String]("Bob")      // a Box of String
println(stringBox.peek)                 // prints "Bob"
stringBox.place("Alice")                // stringBox now contains "Alice"

val intBox = Box[Int](1)                // a Box of Int
val boolBox = Box(false)                // a Box of Boolean, type is deduced
```

## Variances

Variance lets you control how type parameters behave with regards to subtyping. Scala supports variance annotations of type parameters of generic classes, to allow them to be covariant, contravariant, or invariant if no annotations are used. The use of variance in the type system allows us to make intuitive connections between complex types.

Scala uses notation `+` and `-` to achieve variance in generic classes.

```scala
class Foo[A]        // Invariant class
class Bar[+A]       // Covariant class
class Baz[-A]       // Contravariant class
```

If you don't know what invariance, covariance and contravariance are, you can refer to [Scala's book](https://docs.scala-lang.org/tour/variances.html).