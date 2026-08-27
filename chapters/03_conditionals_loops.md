# Conditionals and Loops

VSS provides clean flow control structures using simple keywords.

## Comparative Operators

Instead of using symbols like `<` or `>`, VSS uses readable word-based comparison operators:
- `below`: Less than (`<`)
- `above`: Greater than (`>`)
- `at_least`: Greater than or equal to (`>=`)
- `at_most`: Less than or equal to (`<=`)
- `same_as`: Equal to (`==`)
- `not_same_as`: Not equal to (`!=`)

## Conditionals (when...finish)

VSS uses `when` blocks to handle conditional branching:

```vss
make age becomes 20
when age at_least 18
    say "You are an adult."
otherwise
    say "You are a minor."
finish
```

## Conditional Loops (during...finish)

A conditional loop runs as long as a statement evaluates to `yes`. Note that inside the block, modifying variables does not use `make`:

```vss
make count becomes 1
during count at_most 5
    say "Count is: " + count
    count becomes count + 1
finish
```

## Sized Loops (repeat)

If you just need to repeat an action a fixed number of times:

```vss
repeat 3 times
    say "Running loop..."
finish
```

## Iterator Loops

To loop through items in lists:

```vss
make names becomes ["Alice", "Bob", "Charlie"]
repeat each name in names
    say "Hello, " + name
finish
```
