## Chapter 23: JSON Handling

### 1. What is it?
The `json` module parses JSON text strings into VSS Maps/Lists and serializes VSS data structures back to JSON strings.

### 2. Syntax Example
```vss
grab json

make json_str becomes "{\"id\": 101, \"title\": \"VSS Docs\"}"
make data_map becomes json.parse(json_str)

say data_map field "title"

make serialized becomes json.stringify(data_map)
say serialized
```