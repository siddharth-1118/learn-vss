# The VSS Package Ecosystem

VSS has a built-in package manager that downloads and installs reusable packages from the central GitHub repository registry.

## Installing Packages

To download a package into your local project environment:

```bash
vss install logger
vss install config
vss install fetch
```

Once installed, you can import and use them instantly inside your VSS scripts:

```vss
note main.vss
grab logger
grab config
grab fetch

logger.info("Initializing app...")
config.load(".env")
make token becomes config.get("API_TOKEN")
```

## Executing Tool Subcommands

Ecosystem packages containing executable subcommands can be run directly from your terminal:

```bash
vss apistudio get https://api.github.com
vss site build
vss deploy
```
