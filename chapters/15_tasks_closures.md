# PART 7 — FUNCTIONS (TASKS)

## Chapter 15: Tasks and Closures

### 1. What is it?
Tasks are reusable functions in VSS. Closures are anonymous inline functions that can be passed around as values.

### 2. Declaring Tasks (`task...needs...send...finish`)
```vss
task calculate_total needs price, quantity, tax_rate
    make subtotal becomes price * quantity
    make tax becomes subtotal * tax_rate
    send subtotal + tax
finish

make final_bill becomes calculate_total(100, 2, 0.1)
say "Final Bill: " + final_bill
```

### 3. Anonymous Closures (`{ x, y -> ... }`)
```vss
make multiply becomes { x, y -> send x * y }
make product becomes multiply(6, 7)
say product
```