## Chapter 18: The VSS Package Manager

### 1. What is it?
The VSS Package Manager allows installing reusable open-source packages directly into your project's local `packages/` directory.

### 2. Command Reference
```bash
# Install a package
vss install logger
vss install config
vss install fetch
vss install orm

# Import installed package inside your VSS script
grab logger
logger.info("Application starting...")
```