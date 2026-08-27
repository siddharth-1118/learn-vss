# PART 4 — OPERATORS REFERENCE

## Chapter 11: Arithmetic & Assignment Operators

### 1. What is it?
Arithmetic operators perform mathematical calculations (`+`, `-`, `*`, `/`, `%`).

### 2. Operator Reference Table

| Symbol | Operation | Example | Result |
| :--- | :--- | :--- | :--- |
| `+` | Addition / Concatenation | `10 + 5` / `"A" + "B"` | `15` / `"AB"` |
| `-` | Subtraction | `10 + -5` | `5` |
| `*` | Multiplication | `4 * 5` | `20` |
| `/` | Division | `20 / 4` | `5` |
| `%` | Modulus (Remainder) | `10 % 3` | `1` |

### 3. Subtraction Syntax Rule in VSS
Because VSS supports space-separated function calls, write subtraction using negative addition `+ -` or parentheses `(a - b)`:
```vss
make a becomes 20
make b becomes 5
make diff becomes a + -b
say diff
```