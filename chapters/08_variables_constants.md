# PART 3 — VSS LANGUAGE FUNDAMENTALS

## Chapter 8: Variables, Constants, and Assignment

### 1. What is it?
Variables store dynamic values in memory that can be read or modified during program execution. Constants are immutable variables whose value cannot be reassigned once set.

### 2. Why do we need it?
Variables allow programs to hold state—such as user inputs, database query results, or counter values—without hardcoding raw literals.

### 3. Syntax
- Variable Declaration: `make <identifier> becomes <value>` or `make <identifier> = <value>`
- Constant Declaration: `keep <identifier> becomes <value>` or `const <identifier> = <value>`
- Variable Reassignment: `<identifier> becomes <value>` or `<identifier> = <value>`

### 4. Basic Example
```vss
make user_name becomes "Siddharth"
keep max_login_attempts becomes 3

say user_name
say max_login_attempts

user_name becomes "Sai"
say user_name
```

### 5. Line-by-Line Explanation
- `make user_name becomes "Siddharth"`: Allocates a new variable named `user_name` in the global environment and initializes it with `"Siddharth"`.
- `keep max_login_attempts becomes 3`: Allocates an immutable constant `max_login_attempts` with value `3`.
- `user_name becomes "Sai"`: Reassigns the existing variable `user_name` to `"Sai"`. Note that we do NOT use `make` when mutating existing variables.

### 6. Expected Output
```
Siddharth
3
Sai
```

### 7. Practical Real-World Example: Tax Calculator
```vss
make product_price becomes 150
keep tax_rate becomes 0.18

make tax_amount becomes product_price * tax_rate
make total_price becomes product_price + tax_amount

say "Product Price: " + product_price
say "Tax (18%): " + tax_amount
say "Total Bill: " + total_price
```

### 8. Common Mistakes
- **Mistake:** Using `make` when updating an existing variable inside a loop.
  ```vss
  make i becomes 0
  during i below 5
      make i becomes i + 1 # WRONG: Declares a new local variable i every iteration!
  finish
  ```
  **Correction:** Omit `make` during reassignment: `i becomes i + 1`.

### 9. Important Rules
- Variable names must start with a letter or underscore (`_`).
- Variable declarations must use `make` or `keep`.
- Reassigning a `keep` (constant) variable throws a runtime error.

### 10. Related Concepts
- Scope & Closures
- Primitive Data Types