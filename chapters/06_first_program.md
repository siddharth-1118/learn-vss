## Chapter 6: Your First VSS Program

### 1. What is it?
Writing your first program in VSS demonstrates basic execution, file creation, and output printing.

### 2. Creating the Source File
Create a new file named `hello.vss` in your text editor:

```vss
note My first official VSS program
say "Hello, World! Welcome to VSS Version 3."
```

### 3. Explaining Every Line
- `note`: Declares a single-line comment. The compiler skips line comments.
- `say`: The native keyword to print expressions or strings to stdout.
- `"Hello, World!..."`: A literal String value.

### 4. Running the Program
Execute the file from your terminal:
```bash
vss hello.vss
```

Expected Output:
```
Hello, World! Welcome to VSS Version 3.
```