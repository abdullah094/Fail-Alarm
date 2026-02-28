# Fail Alarm

A VS Code extension that plays a sound whenever a terminal command fails (exits with a non-zero exit code).

## Features

- Automatically detects failed terminal commands using VS Code's Shell Integration API
- Plays a short error sound on failure
- Toggle on/off via Command Palette: **Fail Alarm: Toggle On/Off**
- 1-second cooldown prevents audio spam from rapid failures
- Cross-platform: Windows, macOS, Linux

## Requirements

- VS Code 1.93 or later (for Shell Integration API support)
- Shell integration must be enabled in your terminal (enabled by default in recent VS Code versions)

## Usage

1. Install the extension
2. Open a terminal in VS Code
3. Run a command that fails (e.g., `exit 1` or `false`) — you'll hear a sound
4. Successful commands (exit code 0) produce no sound
5. Use the Command Palette (`Ctrl+Shift+P`) and search "Fail Alarm: Toggle On/Off" to enable/disable

## Extension Commands

| Command | Description |
|---------|-------------|
| `Fail Alarm: Toggle On/Off` | Enable or disable the fail alarm sound |
