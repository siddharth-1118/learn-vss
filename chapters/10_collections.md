## Chapter 10: Collections: Lists and Maps

### 1. What is it?
Collections allow grouping multiple items together. VSS provides two primary native collection types: Lists (ordered arrays) and Maps (hash tables / key-value stores).

### 2. Lists (`[...]`)
Lists store ordered items accessible by 0-based integer indexes.

```vss
note Create a List
make fruits becomes ["Apple", "Banana", "Cherry"]

note Access an Item
make first_fruit becomes fruits item 0
say first_fruit

note Append an Item
put "Orange" into fruits

note Size of List
say __size(fruits)
```

### 3. Maps (`map [...]`)
Maps store key-value associations using string keys.

```vss
note Create a Map
make user becomes map [ "name": "Siddharth", "role": "Admin", "score": 95 ]

note Read a Field
make user_name becomes user field "name"
say user_name

note Modify or Add a Field
set user field "role" becomes "SuperAdmin"

say user field "role"
```

### 4. Line-by-Line Explanation
- `fruits item 0`: Retrieves index `0` from list `fruits`.
- `put "Orange" into fruits`: Appends `"Orange"` to the end of the list.
- `set user field "role" becomes "SuperAdmin"`: Updates the key `"role"` in map `user`.