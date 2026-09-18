# PART 2 — INSTALLATION AND GETTING STARTED

## Chapter 4: Installing VSS

### 1. What is Installation?
Installing VSS places the single `vss.exe` binary into your system PATH, allowing you to run VSS scripts from any terminal.

### 2. Method 1: WinGet Package Manager (Windows Official - Recommended)
VSS is officially published to the Microsoft Windows Package Manager repository (`winget-pkgs`).

Run PowerShell as Administrator:
```powershell
winget install vss.vss
```

### 3. Method 2: Official PowerShell Installer Script
Run the automated installation script directly:
```powershell
iwr -useb https://raw.githubusercontent.com/siddharth-1118/vss-language/main/install.ps1 | iex
```

### 4. Method 3: GitHub Releases Direct Download
1. Visit `https://github.com/siddharth-1118/vss-language/releases`.
2. Download `vss-windows-x64.zip`.
3. Extract `vss.exe` to `C:\Program Files\vss\`.
4. Add `C:\Program Files\vss\` to your System Environment `PATH`.