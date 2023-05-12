# Object Oriented Programming

Ojected oriented programming (OOP) in Scala is achieved using four main keywords `class`, `object`, `abstract` and `trait`.

## Classes

Scala uses the keyword `class` to define the blueprint for creating an object:

*NB: keyword `new` is optionnal*

```scala
class Dog
val max = new Dog
```

A constructor for the class can be created by adding parameters to the class definition. You can turn any parameter into a class member by prepending it with one of the keywords `val` or `var` (immutable/mutable)

```scala
class Dog(val name: String, age: Int)
val max = Dog("Max the dog", 3)

println(max.name)       // "Max the dog"
// println(max.age)     // does not compile
//         ^^^^^^^ age is not a class member of Dog
```

Methods and other class members can be defined inside the class definition. The `protected` and `private` access modifiers can be used to change visibility (public by default).

```scala
class Dog(val name: String, age: Int):
    private val noise = "woof"
    def barkAt(s: String) = println(s"$name says $noise to $s")   

val max = Dog("Max the dog", 3)  
max.barkAt("Bob")       // Max the dog says woof to Bob
```

## Objects

Scala used the keyword `object` to define singleton object (i.d. a value of a unique class)

```scala
object DogHouse
```

Just like classes, objects can have members and methods but they have no contructor (by definition)

```scala
object DogHouse:
    val dog = Dog("Max", 3)  
    def knock(visitor: String) = 
        println(s"$visitor knocks on the door of ${dog.name}'s house")

DogHouse.knock("Alice")     //Alice knocks on the door of Max's house
```

## Abstract classes

Scala uses the keyword `abstract` to define interfaces.

```scala
abstract class Animal
```

A `trait` can have members and methods declarations:

```scala
abstract class Animal:
    val food: String
    def eat: Unit
```

### Implementing abstract classes

Scala uses the keyword `extends` to extend (inherit/implement) an `abstract class` and the keyword `override` to implement members and methods.

*NB: a class can only extend one abtract class.*

```scala
class Lion extends Animal:
    override val food: String = "meat"
    override def eat: Unit = println(s"The lion is eating $food")
```

## Traits

Scala can also uses the keyword `trait` to define interfaces.

```scala
trait Terrestrial:
    def walk: Unit
```

### Implementing traits

Scala uses the keyword `extends` or `with` to extend (inherit/implement) a `trait` and the keyword `override` to implement members and methods.

*NB: a class can extend multiple traits.*

```scala
class Lion extends Animal with Terrestrial:
    override val food: String = "meat"
    override def eat: Unit = println(s"The lion is eating $food")
    override def walk: Unit = println("The lion is walking")
```