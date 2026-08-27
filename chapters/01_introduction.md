# Introduction to VSS

Welcome to the **VSS Programming Language Book**! 

VSS stands for **Very Simple Syntax**. It is a custom-compiled programming language written in C, designed to be lightweight, incredibly fast, and easy to read. VSS cuts away unnecessary braces, semicolons, and boilerplates, giving you a clean and highly readable syntax while providing powerful backend and database modules out-of-the-box.

## Installing VSS

VSS is officially published to the Microsoft Windows Package Manager (WinGet). 

To install VSS on any Windows machine, open your PowerShell or Command Prompt terminal and run:

```bash
winget install vss.vss
```

Once installed, restart your terminal and verify the installation by typing:

```bash
vss help
```

## Your First Hello World

Let's write your very first VSS program. Create a new file named `hello.vss` and write:

```vss
note My first VSS program
say "Hello, World!"
```

To run this file, execute:

```bash
vss hello.vss
```

You should see `Hello, World!` printed instantly in your console. Congratulations, you just wrote and executed your first VSS program!
