## Chapter 9: Primitive Data Types

### 1. What is it?
VSS features five core primitive data types: Numbers, Strings, Booleans, Empty, and Native Handles.

### 2. Supported Types Summary

| Data Type | Keyword / Literal | Description | Example |
| :--- | :--- | :--- | :--- |
| **Number** | Numeric literal | Double-precision floating point numbers | `42`, `3.14159`, `-10` |
| **String** | Double quotes `""` | Immutable UTF-8 text sequences | `"Hello VSS"` |
| **Boolean** | `yes` / `no` | Truthy (`yes`) and Falsy (`no`) values | `yes`, `no` |
| **Empty** | `empty` | Represents missing or null references | `empty` |

### 3. Syntax & Examples
```vss
make integer_val becomes 100
make float_val becomes 99.95
make title becomes "VSS Language"
make is_online becomes yes
make result becomes empty

say integer_val
say float_val
say title
say is_online
say result
```

### 4. Expected Output
```
100
99.95
VSS Language
yes
empty
```