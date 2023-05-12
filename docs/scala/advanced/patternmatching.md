# Pattern maching

Scala uses the keywords `match` and `case` as well as the `=>` notation to achieve pattern matching. A pattern matching block is evaluated as any other block, hence it have a return value and type.

*NB: the `_` case is used as the default case.*

```scala
def writtenInt(x: Int): String =
    x match
        case 1 => "one"
        case 2 => "two"
        case 3 => "three"
        case _ => "other"

println(writtenInt(1))      // prints "one"
println(writtenInt(3))      // prints "three"
println(writtenInt(4))      // prints "other"
```

## Matching on case classes

Case classes are especially useful for pattern matching as their class members can be extracted directly.

```scala
sealed abstract class Message

case class Email(sender: String, title: String, body: String) extends Message
case class SMS(caller: String, message: String) extends Message

def printMessage(m: Message): Unit =
    m match
		case Email(sender, title, body) =>
            println(s"From: <$sender>") 
            println(s"Subject: $title")
            println(body) 
		case SMS(caller, message) =>
            println(s"$caller: $message")

printMessage(Email("alice@gmail.com", "News from Australia", "Hi Bob, [...], see you soon!"))
printMessage(SMS("Bob", "Hi Alice, thanks for the mail!"))
```
Outputs:
```
From: <alice@gmail.com>
Subject: <News from Australia>     
Hi Bob, [...], see you soon!  

Bob: Hi Alice, thanks for the mail!
```

## Matching on type

Scala lets you matching on type only:

*NB: the `_` used in the example bellow is not the same as seen previously. It only means that we do not care about the instance matched.*

```scala
def sendNotification(m: Message): Unit =
    m match
		case e: Email => println("You received a mail")
		case _: SMS => println("You received a SMS")
```

## Pattern guards

Pattern guards are boolean expressions which are used to make cases more specific. Just add `if <boolean expression>` after the pattern.

```scala
def writtenInt(x: Int)(allowOdd: Boolean): String =
    x match
        case 1 if allowOdd => "one"
        case 2 => "two"
        case 3 if allowOdd => "three"
        case _ => "other"

println(writtenInt(1)(true))        // prints "one"
println(writtenInt(3)(false))       // prints "other"
println(writtenInt(4)(false))       // prints "other"
```