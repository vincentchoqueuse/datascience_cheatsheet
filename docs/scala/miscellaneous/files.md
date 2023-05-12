# Read/Write files

## Using Java

### Reading

```scala
import java.io.File
import java.util.Scanner	

val path: String = "dir/subdir/file.txt"
val sc = new Scanner(File(path))

try {
    var line = ""
    while sc.hasNextLine()
    do {
        line = sc.nextLine()
        println(line)
    }
}
catch {
    case e: Exception => println(e)
}
finally {
    sc.close()
}
```

### Writing

```scala
import java.io.{PrintWriter, File}

val path: String = "dir/subdir/file.txt"
val pw = new PrintWriter(File(path))

val str = "Hello, World"

try {
    pw.write(str)
}
catch {
    case e: Exception => println(e)
}
finally {
    pw.close()
}
```

## Using Scala

### Reading

```scala
import io.Source.fromFile

val path: String = "dir/subdir/file.txt"
val source = fromFile(path)

try {
    val lines = source.getLines()
}
catch {
    case e: Exception => println(e)
}
finally {
    source.close()
}
```