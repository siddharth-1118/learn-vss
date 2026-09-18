## Chapter 25: System Builtins & User Input

### 1. What is it?
Access OS command line arguments (`__system_args`), environment variables (`__system_env`), platform details (`__system_platform`), or run system processes (`__system_run`).

### 2. Reading Command Line Inputs
```vss
make args becomes __system_args()
when __size(args) at_least 3
    say "Hello, " + (args item 2)
finish
```