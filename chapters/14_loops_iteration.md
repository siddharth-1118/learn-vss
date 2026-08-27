# PART 6 — LOOPS AND ITERATION

## Chapter 14: Loops and Iteration

### 1. What is it?
Loops repeat a block of code multiple times until a condition changes or an iteration finishes.

### 2. Conditional Loops (`during...finish`)
```vss
make counter becomes 1

during counter at_most 3
    say "Iteration: " + counter
    counter becomes counter + 1
finish
```

### 3. Fixed Repetition (`repeat N times`)
```vss
repeat 3 times
    say "Ping server..."
finish
```

### 4. Collection Iteration (`repeat each item in list`)
```vss
make servers becomes ["Server-A", "Server-B", "Server-C"]

repeat each server in servers
    say "Connecting to " + server
finish
```

### 5. Loop Control (`leave` and `skip`)
- `leave`: Exits the current loop immediately (break).
- `skip`: Skips the rest of the current iteration and continues to the next (continue).

```vss
make i becomes 0
during i below 10
    i becomes i + 1
    when i same_as 3
        skip
    finish
    when i same_as 7
        leave
    finish
    say i
finish
```