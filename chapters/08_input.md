# User and System Input

So far, we have focused on outputting data to the console using the `say` statement. In a real-world application, however, you need to capture input from users, environment files, or the command line.

VSS provides three primary ways to handle input.

## 1. Command Line Arguments

When executing a VSS file, you can pass arguments directly after the file name. Inside your script, you can access these arguments as a list using the `__system_args()` builtin.

For example, create a file `greet_cli.vss`:

```vss
grab string

make args becomes __system_args()
make arg_count becomes __size(args)

note The first arg is the binary path, the second is the script path
note Additional user arguments start at index 2
when arg_count at_least 3
    make name becomes args item 2
    say "Hello, " + name + "! Welcome to VSS."
otherwise
    say "Usage: vss greet_cli.vss <your_name>"
finish
```

Run this in your terminal:
```bash
vss greet_cli.vss Siddharth
```

Output:
```bash
Hello, Siddharth! Welcome to VSS.
```

## 2. Environment Variables

Environment variables are a key input mechanism for configuring credentials or secrets. You can fetch environment variables using the `__system_env()` builtin:

```vss
make api_key becomes __system_env("API_KEY")
when api_key same_as empty
    say "API_KEY environment variable is not set."
otherwise
    say "Loaded API KEY successfully."
finish
```

## 3. Interactive Terminal Input

While VSS does not have a native blocking console input builtin, you can easily read interactive console inputs by executing a quick system shell command via `__system_run`:

```vss
say "What is your favorite programming language?"

note Execute PowerShell to read input from terminal
make user_input becomes __system_run("powershell -Command \"Read-Host\"")

note Clean the line ending whitespace
grab string
make clean_input becomes string.trim(user_input)

say "You entered: " + clean_input
```
