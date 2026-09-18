# PART 8 — ERROR HANDLING

## Chapter 16: Error Handling

### 1. What is it?
Error handling intercepts runtime exceptions (such as file not found or invalid JSON format) without terminating the application.

### 2. Syntax (`attempt...rescue...finish`)
```vss
attempt
    make data becomes filesystem.read_file("non_existent_file.txt")
    say data
rescue
    say "Warning: Failed to read file. Using fallback defaults."
finish
```