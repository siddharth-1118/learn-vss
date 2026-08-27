# PART 5 — CONTROL FLOW

## Chapter 13: Conditional Branching

### 1. What is it?
Conditional branching executes different blocks of code depending on whether a condition evaluates to `yes` (true) or `no` (false).

### 2. Syntax (`when`, `orwhen`, `otherwise`, `finish`)
```vss
when <condition1>
    # Execute if condition1 is yes
orwhen <condition2>
    # Execute if condition2 is yes
otherwise
    # Execute if all conditions are no
finish
```

### 3. Practical Example
```vss
make score becomes 85

when score at_least 90
    say "Grade: A"
orwhen score at_least 80
    say "Grade: B"
orwhen score at_least 70
    say "Grade: C"
otherwise
    say "Grade: F"
finish
```

### 4. Switch Case Matching (`choose`, `case`)
```vss
make command becomes "start"

choose command
    case "start"
        say "System Starting..."
    case "stop"
        say "System Shutting Down..."
    case "restart"
        say "System Rebooting..."
finish
```