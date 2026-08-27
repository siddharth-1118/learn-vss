## Chapter 20: Native SQLite Database Engine

### 1. What is it?
VSS features an embedded SQLite database driver built into the language runtime.

### 2. CRUD Operations Example
```vss
grab database

note Open or create database
make db becomes database.open("app.db")

note Create Table
database.execute(db, "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)")

note Insert Record
database.execute(db, "INSERT INTO users (name, email) VALUES ('Siddharth', 'sid@example.com')")

note Query Records
make rows becomes database.query(db, "SELECT * FROM users")
say rows
```