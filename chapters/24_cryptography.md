## Chapter 24: Cryptography

### 1. What is it?
The `crypto` module provides SHA-256 and MD5 hashing functions.

### 2. Syntax Example
```vss
grab crypto

make hash_sha256 becomes crypto.sha256("my_secret_token")
make hash_md5 becomes crypto.md5("my_secret_token")

say "SHA-256: " + hash_sha256
say "MD5: " + hash_md5
```