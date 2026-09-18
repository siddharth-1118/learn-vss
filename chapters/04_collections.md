# Collections: Lists and Maps

VSS provides two main collection types: lists for ordered sequences and maps for key-value stores.

## Working with Lists

Declaring lists uses square brackets:

```vss
make numbers becomes [10, 20, 30]
```

To access an element, use the `item` keyword followed by the 0-indexed position:

```vss
make first becomes numbers item 0
say first
```

To add an element to the end of a list, use the `put` statement:

```vss
put 40 into numbers
```

To get the size of a list, use the `__size` builtin:

```vss
say __size(numbers)
```

## Working with Maps

Maps store key-value associations. Declaring them uses the `map` keyword:

```vss
make user becomes map [ "username": "sid", "role": "admin" ]
```

To access a field from a map, use the `field` keyword:

```vss
make name becomes user field "username"
say name
```

To set or modify a map field, use the `set` statement:

```vss
set user field "role" becomes "moderator"
```
