# Standard Library Modules

VSS includes built-in modules for managing files, strings, SQLite databases, and HTTP requests. Use the `grab` statement to load them.

## File System (`grab filesystem`)

Manage files and directories:

```vss
grab filesystem

make path becomes "test.txt"
filesystem.write_file(path, "Hello VSS File System!")
when filesystem.exists_file(path)
    make content becomes filesystem.read_file(path)
    say content
    filesystem.delete_file(path)
finish
```

## String Processing (`grab string`)

Perform string utilities:

```vss
grab string

make text becomes "  VSS programming language  "
make clean becomes string.trim(text)
make upper becomes string.upper(clean)
say upper
```

## JSON Utility (`grab json`)

Parse and serialize JSON strings:

```vss
grab json

make raw_json becomes "{\"id\": 101, \"active\": true}"
make parsed_map becomes json.parse(raw_json)
say parsed_map field "id"
```

## HTTP Client & Server (`grab http`, `grab web`)

Make API calls or run web servers:

```vss
grab http
grab web

note Make API Call
make response becomes http.get("https://api.github.com")

note Start Web Server
web.route("/", { req -> send "Welcome!" })
web.serve(8080)
```
