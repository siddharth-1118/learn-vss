# PART 9 — MODULES AND PACKAGES

## Chapter 17: Modules and Namespaces

### 1. What is it?
Modules organize code into logical scopes. Use `grab` to load standard library or custom file modules, and `namespace` to group task exports.

### 2. Syntax Example
```vss
grab filesystem
grab string
grab json

namespace math_utils
    task square needs x
        send x * x
    finish
finish

say math_utils.square(9)
```