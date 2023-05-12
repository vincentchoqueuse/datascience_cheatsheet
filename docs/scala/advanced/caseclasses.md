# Case classes

Scala uses `case class` for classes mainly made to hold data (structures). Case classes are defined like normal classes except that all their parameters are, by default, class members.

```scala
case class Person(name: String, age: Int)

val user = Person("Bob", 21)
```

## Comparison

Instances of case classes are compared by structure and not by reference:

```scala
val person1 = Person("Bob", 21)
val person2 = Person("Bob", 21)
val person2 = Person("Alice", 21)

println(person1 == person2)     // true
println(person1 == person3)     // false
```

## Copy

Case classes instances can be copied using the method `.copy()` where you can optionnaly change the members:

```scala
val bob = Person("Bob", 21)
val alice = bob.copy(name = "Alice")        // Person("Alice", 21)
```