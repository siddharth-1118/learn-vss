# Variables and Data Types

In VSS, variable names are clean and explicit. There are no confusing symbol prefixes.

## Declaring Variables

To declare a new variable, use the `make` statement followed by `becomes`:

```vss
make message becomes "Hello, VSS!"
make count becomes 10
make is_active becomes yes
```

## Modifying Variables

To update or mutate the value of an existing variable, do **not** use the `make` keyword. Just write the variable name followed by `becomes` or `=`:

```vss
make score becomes 100
score becomes score + 5
say score
```

## Data Types

VSS has a dynamic, lightweight type system featuring:
- **Strings:** Double-quoted text (e.g. `"Hello"`).
- **Numbers:** Integers and decimals (e.g. `42`, `3.14`).
- **Booleans:** Represented by keywords `yes` (true) and `no` (false).
- **Empty:** Represented by the keyword `empty` (similar to null/none).
- **Lists:** Ordered sequences (e.g. `[1, 2, 3]`).
- **Maps:** Key-value pairs (e.g. `map [ "key": "value" ]`).
