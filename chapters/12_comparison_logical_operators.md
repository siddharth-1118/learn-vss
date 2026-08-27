## Chapter 12: Comparison & Logical Operators

### 1. What is it?
Comparison operators evaluate relationships between two values and return `yes` or `no`.

### 2. Comparison Operator Table

| Word Keyword | Symbol Equivalent | Description | Example | Result |
| :--- | :--- | :--- | :--- | :--- |
| `above` | `>` | Greater than | `10 above 5` | `yes` |
| `below` | `<` | Less than | `5 below 10` | `yes` |
| `at_least` | `>=` | Greater than or equal | `10 at_least 10` | `yes` |
| `at_most` | `<=` | Less than or equal | `5 at_most 5` | `yes` |
| `same_as` | `==` | Equal to | `"a" same_as "a"` | `yes` |
| `not_same_as` | `!=` | Not equal to | `"a" not_same_as "b"`| `yes` |

### 3. Logical Operators Table
- `and`: Evaluates to `yes` if both conditions are truthy.
- `or`: Evaluates to `yes` if at least one condition is truthy.
- `not`: Inverts boolean state (`not yes` evaluates to `no`).

```vss
make age becomes 22
make has_ticket becomes yes

when age at_least 18 and has_ticket same_as yes
    say "Access Granted"
finish
```