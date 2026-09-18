## Chapter 7: Creating Your First Project

### 1. What is it?
VSS includes an ecosystem project scaffolder package called **`forge`** to generate structured project layouts automatically.

### 2. Scaffolding a New Project
Run the `forge` package subcommand from your terminal:
```bash
vss forge new my_web_app
```

### 3. Generated Project Structure
```
my_web_app/
│
├── main.vss          # Main application entry point
├── vss.json          # Project configuration & dependency manifest
├── routes/           # Web API route handlers
├── controllers/      # Business application logic
├── database/         # SQLite database files & schemas
└── tests/            # Automated test files (*_test.vss)
```

### 4. Project Configuration (`vss.json`)
```json
{
  "name": "my_web_app",
  "version": "1.0.0",
  "dependencies": {}
}
```