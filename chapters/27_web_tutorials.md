# PART 12 — WEB & DATABASE APPLICATION DEVELOPMENT

## Chapter 27: Real-World Application Tutorials

### Project 1: RESTful Student Management API
```vss
grab webflow
grab orm

orm.connect("students.db")
orm.execute("CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT, gpa REAL)")

webflow.route("/api/students", { req ->
    make rows becomes orm.query("SELECT * FROM students")
    send webflow.json(rows)
})

webflow.serve(8080)
```