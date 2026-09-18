## Chapter 22: Filesystem Module

### 1. What is it?
The `filesystem` module manages file I/O operations and directory traversal.

### 2. Available Filesystem Tasks
- `filesystem.write_file(path, content)`: Writes text to file.
- `filesystem.read_file(path)`: Reads text file contents.
- `filesystem.exists_file(path)`: Returns `yes` if file exists.
- `filesystem.delete_file(path)`: Erases a file.
- `filesystem.create_directory(path)`: Creates a directory folder.
- `filesystem.files(path)`: Returns list of filenames in directory.