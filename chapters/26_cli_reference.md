# PART 11 — COMMAND LINE INTERFACE (CLI)

## Chapter 26: Complete CLI Reference

| Command | Description | Example |
| :--- | :--- | :--- |
| `vss <file.vss>` | Compile and run VSS script | `vss main.vss` |
| `vss --version` | Display VSS compiler version | `vss --version` |
| `vss help` | Display CLI help menu | `vss help` |
| `vss install <pkg>` | Download package from registry | `vss install logger` |
| `vss forge new <app>`| Scaffold new VSS project | `vss forge new myapp` |
| `vss testkit` | Run automated project test suite | `vss testkit` |
| `vss docs` | Generate HTML documentation | `vss docs` |
| `vss apistudio` | Test HTTP endpoints in terminal | `vss apistudio get http://localhost:8080` |
| `vss site` | Build static web app to dist/ | `vss site` |
| `vss env` | Manage local secrets (.vss_env) | `vss env set PORT 8080` |
| `vss deploy` | Deploy application locally | `vss deploy` |