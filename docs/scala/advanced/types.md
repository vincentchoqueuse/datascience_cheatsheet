# Types

Scala's type system is very powerful and allow for zero cost abstraction.

## Type alias

Scala uses the keyword `type` to work with types. In particular you can use this to create custom types and type alias:

```scala
type Cow                    // creates a type "Cow"
type CowHerd = List[Cow]    // creates a type "CowHerd" which is an alias for a List of Cow
```

### Function type aliases

Scala uses the type `=>[A, B]` (can be written `A => B`) for a function that take an `A` and returns a `B`. You can also create type aliases for function types.

```scala
type IntToString = Int => String
```

## Upper type bounds

Scala uses the syntax `<:` to specify upper bound relation between types.

*NB: type `Herd[_]` is known as a **higher-kinded type**.*

```scala
type Animal                         // simple type
type Cow <: Animal                  // type Cow is a subtype of type Animal

type Herd[A <: Animal] = List[A]    // type Herd[A] takes a type A that must be a subtype of Animal and is an alias for a List of A
type CowHerd = Herd[Cow]            // type CowHerd is a Herd of Cow
```

## Lower type bounds

Scala uses the syntax `>:` to specify lower bound relation between types.

```scala
trait List[+A]:
  def prepend[B >: A](elem: B): NonEmptyList[B] = NonEmptyList(elem, this)

case class NonEmptyList[+A](head: A, tail: List[A]) extends List[A]

object Nil extends List[Nothing]
```

Check the full example [here](https://docs.scala-lang.org/tour/lower-type-bounds.html).

## Abstract type members

A type member can be declared in an object, class, or trait to be used within the scope.

```scala
type Food
type Meat <: Food
type Grass <: Food

trait Animal:
    type SuitableFood <: Food
    def eat(some: SuitableFood) = ???

class Lion extends Animal:
    type SuitableFood = Meat

class Cow extends Animal:
    type SuitableFood = Grass

val lion = Lion()
val cow = Cow()

val meat: Meat = ???
val grass: Grass = ???

lion.eat(meat)          // OK
cow.eat(grass)          // OK

// lion.eat(grass)      // doesn't compile
//          ^^^^^ required lion.SuitableFood
```

### Abstract type members vs Generics

Pretty much everything achievable through abstract type members is achievable through generics (and vice-versa) so why bother with both ?

Here are good ressources:
* [Ressource 1](https://stackoverflow.com/questions/1154571/scala-abstract-types-vs-generics)
* [Ressource 2](https://www.artima.com/articles/the-purpose-of-scalas-type-system)
* [Ressource 3](https://www.artima.com/weblogs/viewpost.jsp?thread=270195)

## Opaque types

Consider the following situation.

```scala
type UserID    = Long
type VehicleID = Long

def findVehicle(vehicleID: VehicleID) = ???

val userID: UserID = ???

findVehicle(userID)         // OK but WRONG (using a UserID instead of VehicleID)
```

This example compiles fine because the types `UserID` and `VehicleID` are just aliases for `Long` which means we can uses one in place of the other (correct but unwanted behavious).

Scala uses the keyword `opaque` as a type qualifier.

```scala
object Users:
    opaque type UserID = Long
object Vehicles:
    opaque type VehicleID = Long

import Users.UserID
import Vehicles.VehicleID

def findUser(userID: UserID) = ???
def findVehicle(vehicleID: VehicleID) = ???

val userID: UserID = ???

// findVehicle(userID)          // doesn't compile
//             ^^^^^^ required VehicleID
```

## Union types

Scala has a built-in union type `|[A, B]` (can be written `A | B`) that expresses that a value can be either of type `A` or `B`.

```scala
val IntOrString: Int | String = if true then 1 else "one"
```

## Intersection types

Scala has a built-in intersection type `&[A, B]` (can be written `A & B`) that expresses that a value is both of type `A` and `B`.

```scala
trait Resettable:
  def reset(): Unit

trait Growable[A]:
  def add(a: A): Unit

def f(x: Resettable & Growable[String]): Unit =
  x.reset()
  x.add("first")
```