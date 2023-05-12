# Contextual parameters

A method can have contextual parameters, also called implicit parameters, or more concisely implicits. These parameters can be ommited when calling the method as the compiler will look for available implicit (`given`) values in the scope of the call.

Scala uses the keywords `given` and `using` to achieve contextual parameters.

```scala
def addSuffix(s: String)(using suffix: String) = s + suffix

given mySuffix: String = ".scala"

println(addSuffix("main"))          // prints "main.scala"
```

A few notes on `given` value :
* they can be anonymous
* they can extend classes and interfaces (`abstract class`, `trait`) if they implement all their members.
* if there are multiple `given` candidates, the compiler picks the closest to the call
* contextual parameters are resolved at compile time (you cannot create instances of `given` value at runtime)

A more elaborated example where contextual parameters allow for a form of method overloading by type.

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

def display[A](x: A)(using pp: PrettyPrinter[A]): Unit =
    println(pp.prettyprint(x))

import PrettyPrinters.given

display(2)              // prints: Int: 2
display("hello")        // prints: String: hello
display(true)           // prints: Boolean: true
// display(3.14)        // doesn't compile
// ^^^^^^^^^^^^ No given instance of PrettyPrinter[Double] was found
```

## Implicit conversion

You can implement you own implicit conversions using `given` instances of the `Conversion` abstract class.

*General Scala knowlegdge: signature of the `Conversion` class (great use of variance)*
```scala
abstract class Conversion[-T, +U] extends T => U
```

*NB: types can (obviously) not be inferred when using implicit conversions*

```scala
case class Person(name: String)

given Conversion[String, Person] with
    def apply(x: String): Person = Person(x)

val Alice: Person = "Alice"         // Person("Alice")
```

## Parameterizing `given` instances

Just list methods and classes, `given` instances can be parameterized by type and, to a certain extent, by value.

```scala
given [A, B](using conv: Conversion[A, B]): Conversion[List[A], List[B]] with
		def apply(x: List[A]): List[B] = x.map(e => conv.apply(e))
```

This example allows to compiler to convert a `List[A]` to a `List[B]` provided that it knows (i.d. has a `given` instance of `Conversion[A, B]` in scope) how to convert an `A` to a `B`.

Combined with the previous example:

```scala
case class Person(name: String)

given Conversion[String, Person] with
    def apply(x: String): Person = Person(x)

given [A, B](using conv: Conversion[A, B]): Conversion[List[A], List[B]] with
		def apply(x: List[A]): List[B] = x.map(e => conv.apply(e))

val names = List("Bob", "Alice", "James")       // a List of String
val persons: List[Person] = names               // a List of Person created from a List of String
```

**Q:** What happens under the hood ?

**A:** The compiler unrolls the parameterized givens instanciates all the possible combinations.

To go further read this [question](https://stackoverflow.com/questions/76138390/why-cant-the-compiler-chain-conversions?noredirect=1#comment134283709_76138390)