## Chapter 21: Native HTTP Client

### 1. What is it?
VSS includes an HTTP client module to make GET and POST requests to external APIs over the web.

### 2. Fetching API Data Example
```vss
grab fetch

make user_profile becomes fetch.get("https://api.github.com/users/siddharth-1118")
say "User Name: " + (user_profile field "name")
say "Bio: " + (user_profile field "bio")
```