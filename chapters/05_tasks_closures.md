# Tasks and Closures

VSS uses the term **task** to declare reusable functions.

## Declaring Tasks

Tasks can optionally accept arguments using `needs` and return values using `send`:

```vss
task greet needs name
    say "Hello, " + name
finish

task add needs a, b
    send a + b
finish

greet("Siddharth")
make sum becomes add(5, 7)
say sum
```

## Closures (Anonymous Functions)

You can assign functions to variables as closures using braces `{}` and the arrow `->`:

```vss
make multiply becomes { x, y -> send x * y }
make result becomes multiply(4, 5)
say result
```
