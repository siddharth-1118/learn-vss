# PART 10 — NATIVE VSS MODULES

## Chapter 19: Native HTTP Web Server

### 1. What is it?
VSS includes a native, high-concurrency HTTP web server engine compiled directly into the executable binary.

### 2. Basic Server Example
```vss
grab web

web.route("/", { req ->
    send "<h1>Welcome to VSS Web Server!</h1>"
})

web.route("/api/status", { req ->
    send "{\"status\": \"online\"}"
})

say "Starting server on port 8080..."
web.serve(8080)
```

### 3. Request Object Structure
The `req` parameter passed into route closure handlers is a VSS map containing:
- `req field "method"`: String HTTP method (`"GET"`, `"POST"`, etc.).
- `req field "path"`: String URL route path (`"/"`, `"/api/users"`).