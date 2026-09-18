# PART 2 — INPUT AND OUTPUT

## Chapter 6: Input and Output in VSS

> **Version Badge:**
> - `say` Output: **Available since: VSS 1.0**
> - Command-Line Arguments Input: **Introduced in: VSS 2.1**
> - Environment Variable Input: **Introduced in: VSS 2.2**
> - Subprocess Terminal Input: **Introduced in: VSS 2.2.2**
> - Native Interactive `stdin` Input: **[PLANNED FEATURE]**

---

### 1. Output Statement (`say`)
- **Available since:** VSS 1.0
- **What is it?** The `say` keyword evaluates an expression and prints its result followed by a newline to stdout.
- **Syntax:** `say <expression>`
- **Example:**
  ```vss
  say "Welcome to VSS Input & Output"
  ```
- **Expected Output:**
  ```
  Welcome to VSS Input & Output
  ```

---

### 2. Current Input Capabilities in VSS 3.0

VSS currently provides **three production mechanisms** for receiving input into a program:

#### Method A: Command-Line Arguments (`__system_args()`)
- **Introduced in:** VSS 2.1
- **Syntax:** `make args becomes __system_args()`
- **Example:**
  ```vss
  make args becomes __system_args()
  when __size(args) at_least 3
      make user_name becomes args item 2
      say "Hello, " + user_name
  finish
  ```
- **Terminal Execution:**
  ```bash
  vss script.vss Siddharth
  ```

#### Method B: Environment Variables (`__system_env()`)
- **Introduced in:** VSS 2.2
- **Syntax:** `make val becomes __system_env("VAR_NAME")`

#### Method C: Subprocess Shell Input (`__system_run()`)
- **Introduced in:** VSS 2.2.2
- **Syntax:** `make user_input becomes __system_run("powershell -Command \"Read-Host\"")`

---

### 3. Native Interactive Stdin Input Status

> **IMPORTANT ACCURACY NOTICE:**
> Native interactive `stdin` blocking prompt input (e.g. `input()`) is **currently NOT natively implemented in the C compiler runtime of VSS Version 3.0**.

#### Feature Status: **PLANNED FEATURE (VSS 3.1 Roadmap)**

#### C Compiler & Runtime Blueprint Required to Implement Stdin Input:
To add native `input()` in future VSS versions, the following C compiler files must be updated:

1. **Lexer (`vss/src/lexer.c`):**
   Register keyword token `VSS_TOKEN_INPUT` in `keyword_type()`.
2. **Parser (`vss/src/parser.c`):**
   Add `parse_input_expression()` to handle expression parsing.
3. **Builtins Engine (`vss/src/builtins.c`):**
   Implement `builtin_input()` using C `fgets(stdin)` to block execution and return string values.
4. **Virtual Machine (`vss/src/vm.c`):**
   Register opcode `VSS_OP_INPUT` to push standard input onto the VM execution stack.