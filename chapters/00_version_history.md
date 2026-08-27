# PART 0 — VSS LANGUAGE VERSION EVOLUTION

## Chapter 0: Complete Version History (V1.0 through V3.0)

This section documents the complete historical evolution of the VSS Programming Language from Version 1 through Version 3.

---

### 1. VSS Version 1.0
- **Release Purpose:** Proof-of-concept release establishing the core "Very Simple Syntax" philosophy.
- **New Features:** Basic output, variable assignment, primitive number/string types.
- **Syntax Introduced:** `say`, `make`, `becomes`, `note`.
- **Features Improved:** Baseline character lexing in C.
- **Features Removed/Changed:** N/A (Initial Release).
- **CLI Changes:** Single binary execution (`vss script.vss`).
- **Compiler Changes:** AST-based tree-walk interpreter.
- **Runtime Changes:** Single-threaded execution stack.
- **Example Program (V1.0):**
  ```vss
  note VSS 1.0 Hello World
  make name becomes "Siddharth"
  say "Hello, " + name
  ```
- **Upgrade Instructions:** Upgrade to VSS 2.0 to access bytecode compilation and control flow loops.

---

### 2. VSS Version 2.0
- **Release Purpose:** Performance overhaul replacing tree-walk interpretation with a high-speed C Virtual Machine (VM).
- **New Features:** Bytecode compiler, stack VM, control flow, functions, lists, maps.
- **Syntax Introduced:** `when`, `orwhen`, `otherwise`, `finish`, `during`, `repeat`, `task`, `needs`, `send`, lists `[...]`, maps `map [...]`.
- **Features Improved:** 10x execution speedup via C VM opcodes.
- **CLI Changes:** Added `vss run` and basic debug trace flags.
- **Compiler Changes:** Transitioned from AST interpreter to opcode emitter (`compiler.c`).
- **Runtime Changes:** Stack-based virtual machine (`vm.c`) with basic reference counting.
- **Example Program (V2.0):**
  ```vss
  task add needs a, b
      send a + b
  finish
  make result becomes add(10, 20)
  say result
  ```

---

### 3. VSS Version 2.1
- **Release Purpose:** OS interaction and filesystem capability integration.
- **New Features:** Filesystem reading/writing, CLI command-line arguments, error handling.
- **Syntax Introduced:** `grab filesystem`, `__system_args()`, `attempt`, `rescue`.
- **Features Improved:** Better error messages with line and column reporting.
- **CLI Changes:** Added `vss --version` and `vss help`.
- **Compiler Changes:** Exception jump handling opcodes.
- **Runtime Changes:** Native C bindings for filesystem POSIX/Win32 APIs.

---

### 4. VSS Version 2.2
- **Release Purpose:** Web integration and JSON serialization.
- **New Features:** JSON parsing/stringify, HTTP GET/POST client fetch module.
- **Syntax Introduced:** `grab json`, `json.parse()`, `json.stringify()`, `grab fetch`.
- **Features Improved:** Map key lookup performance.
- **CLI Changes:** Package installer initial hooks (`vss install`).
- **Compiler Changes:** Extended native symbol lookup table.
- **Runtime Changes:** Integrated libcurl/socket HTTP client wrappers.

---

### 5. VSS Version 2.2.2
- **Release Purpose:** Security hashing and subprocess execution.
- **New Features:** Cryptographic hashing (SHA-256, MD5), subprocess runner (`__system_run`).
- **Syntax Introduced:** `grab crypto`, `crypto.sha256()`, `crypto.md5()`, `__system_run()`.
- **Features Improved:** Cross-platform subprocess execution on Windows & Linux.
- **CLI Changes:** Environment secret management command (`vss env`).

---

### 6. VSS Version 3.0 (Current Release)
- **Release Purpose:** Full-stack backend web development, native SQLite database engine, and complete package ecosystem.
- **New Features:** Native HTTP Web Server (`grab web`), native embedded SQLite database driver (`grab database`), full 12-package ecosystem (`forge`, `testkit`, `docs`, `webflow`, `orm`, `migrate`, `auth`, `apistudio`, `site`, `env`, `deploy`).
- **Syntax Introduced:** `web.route()`, `web.serve()`, `database.open()`, `database.query()`, `database.execute()`.
- **Features Improved:** Automatic Reference Counting (ARC) memory management in `vm.c`.
- **CLI Changes:** Full subcommand suite (`vss forge`, `vss testkit`, `vss docs`, `vss apistudio`, `vss site`, `vss deploy`).
- **Compiler Changes:** Closure capture support and optimized jump tables.