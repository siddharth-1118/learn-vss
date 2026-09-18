## Chapter 3: VSS Architecture Overview

### 1. What is the VSS Architecture?
VSS features a multi-stage compiled architecture designed in pure C for safety, speed, and cross-platform portability.

### 2. Compiler & VM Pipeline Flow

```
+-------------------------------------------------------------------+
|                        VSS Source Code (.vss)                     |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|               Lexer (Tokenization / Scanner in lexer.c)           |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|             Parser (Abstract Syntax Tree in parser.c)             |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|         Bytecode Compiler (Instruction Generation compiler.c)     |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|          Virtual Machine (Bytecode Execution Engine vm.c)         |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|                Runtime Output & OS Interface Builtins             |
+-------------------------------------------------------------------+
```

### 3. Pipeline Component Descriptions
1. **Lexer (`lexer.c`):** Scans raw text bytes and converts them into structured `VSS_Token` objects (`VSS_TOKEN_SAY`, `VSS_TOKEN_MAKE`, `VSS_TOKEN_BECOMES`, etc.).
2. **Parser (`parser.c`):** Analyzes the stream of tokens and constructs an Abstract Syntax Tree (AST) composed of `VSS_Stmt` and `VSS_Expr` nodes.
3. **Bytecode Compiler (`compiler.c`):** Traverses the AST and emits low-level VM opcodes (`VSS_OP_GET_GLOBAL`, `VSS_OP_CALL`, `VSS_OP_ADD`, `VSS_OP_JUMP_IF_FALSE`).
4. **Virtual Machine (`vm.c`):** A stack-based execution virtual machine written in C that interprets opcodes and handles Garbage Collection / Automatic Reference Counting (ARC).