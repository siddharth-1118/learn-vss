# PART 13 — ADVANCED COMPILER INTERNALS

## Chapter 28: Under the Hood: Compiler & VM Internals

### 1. Lexer & Tokens (`lexer.c`)
The lexer converts source characters into sequential tokens using `keyword_type()` lookup table mapping keywords (`say`, `make`, `becomes`, `when`, `task`).

### 2. Parser & AST (`parser.c`)
`parse_statement()` and `parse_expression()` build recursive AST node trees (`VSS_Stmt` and `VSS_Expr`).

### 3. Compiler & Opcode Generation (`compiler.c`)
Emits stack-based opcodes (`VSS_OP_GET_GLOBAL`, `VSS_OP_SET_GLOBAL`, `VSS_OP_ADD`, `VSS_OP_CALL`, `VSS_OP_GET_FIELD`).

### 4. VM Execution & Reference Counting (`vm.c`)
The Virtual Machine executes the instruction loop (`run()`). Memory management uses Automatic Reference Counting (`vss_value_retain` / `vss_value_release`) for immediate cleanup.