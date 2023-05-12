# Containers

Scala offers a large variety of containers for your data: collections (`List`, `Seq`, `Set`, `Map`...), `Option`, `Either`, `Future`... Most of these containers have a monadic behaviour. We'll go over the main containers as well as the main methods you can use.

## `List` and `Seq`

Scala uses `List` and `Seq` to create vectors of data. They both work very similarly (in fact `List`'s parent class `LinearSeq` inherits `Seq`).

```scala
val xs: List[Int] = List(1, 2, 3)       // a List of Int
val ys = Seq("a", "b", "c")             // a Seq of String, type is deduced
```

## `Map`

Scala uses `Map` to create maps (also knows as hashmaps, dictionnary...).

*NB: the `->` notation can be used for tuples*

```scala
// a map of String and Int
val xm: Map[String, Int] = Map(("one", 1), ("two", 2), ("three", 3))

// a map of Int and Boolean, types are deduced
val ym = Map(1 -> true,
             2 -> false,
             3 -> false)
```

## `Option`

Scala uses `Option` to indicate that a data can be present or not. An value of type `Option[Int]` could contains an `Int` or not. This is very useful for methods that can "fail" (like finding an element in a `List`).

Scala uses `Some()` and `None` to work with `Option`

```scala
val x: Option[Int] = Some(1)        // data is present (1)
val y = None                        // no data, type is inferred
```

```scala
val xs: List[Int] = List(1, 2, 3)

val maybeOne = xs.find(i => i == 1)        // Some(1) (element found)
val maybeFour = xs.find(i => i == 4)       // None (element not found)
```

## Container methods

Most containers share the same methods such as `map`, `flatMap`, `filter`... If you are having trouble finding and understanding all of these methods (some can be quite complex), you can use this [Visual Reference](https://superruzafa.github.io/visual-scala-reference//).

### `map` method

```scala
trait Collection[A]:
    def map[B](f: (A) => B): Collection[B]
```

`map` creates a collection using as elements the results obtained from applying the function `f` to each element of this collection.

```scala
val xs = List(1, 2, 3)                  // List(1, 2, 3)
val twicexs = xs.map(x => x * 2)        // List(2, 4, 6)
```

### `flatMap` method

```scala
trait Collection[A]:
  def flatMap(f: (A) => Collection[B]): Collection[B]
```

`flatMap` creates a collection by applying the function `f` to each element and using the resulting subelements as elements of the new collection.

```scala
val xs = List(1, 2, 3)                      // List(1, 2, 3)
val ys = xs.flatMap(x => List(x, x * 2))    // List(1, 2, 2, 4, 3, 6)
```

### `filter` method

```scala
trait Collection[A]:
  def filter(p: (A) => Boolean): Collection[A]
```

`filter` creates a collection with those elements that satisfy the predicate `p` and discarding the rest.

```scala
val xs = List(1, 2, 3)                      // List(1, 2, 3)
val ys = xs.filter(x => x % 2 == 0)         // List(2)
```