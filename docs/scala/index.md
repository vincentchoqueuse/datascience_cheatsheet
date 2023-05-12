# Scala

* [Site](https://www.scala-lang.org/)
* [A tour of Scala](https://docs.scala-lang.org/tour/tour-of-scala.html)
* [Book](https://docs.scala-lang.org/scala3/book/introduction.html)

Scala is a modern multi-paradigm programming language designed to express common programming patterns in a concise, elegant, and type-safe way. It seamlessly integrates features of object-oriented and functional languages.

*NB: This short introduction uses Scala 3 and assumes that you are already familiar with the main principles of programming (i.d. variables, statements, conditions, loops, functions, methods, classes...)*

## Syntax

Here is quick taste of the language. We'll go over the main syntax feature of the language.

```scala
@main def hello: Unit =
  println("Hello world!")
  println(msg)

val msg: String = "I was compiled by Scala 3. :)"
```

**In a few lines:**

* No semicolons (`;`)
* Curly braces (`{}`) are optional
* Use `val` to define values and `def` to define methods/functions
* Types can be inferred or explicitly defined using colon (`:`) notation

## Good to know

* Scala compiles to JVM binary.
* Scala is strongly typed.
* The Scala compiler is extremly powerful.
* Scala is probably the language that best combines imperative programming, functionnal programming and object-oriented programming.