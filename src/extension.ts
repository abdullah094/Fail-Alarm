import * as vscode from "vscode";
import { AudioPlayer } from "./audioPlayer";

let audioPlayer: AudioPlayer;
let enabled = true;

export function activate(context: vscode.ExtensionContext): void {
  audioPlayer = new AudioPlayer(context.extensionPath);

  const listener = vscode.window.onDidEndTerminalShellExecution((event) => {
    if (!enabled) {
      return;
    }
    if (event.exitCode !== undefined && event.exitCode !== 0) {
      audioPlayer.play();
    }
  });

  const toggleCommand = vscode.commands.registerCommand(
    "failAlarm.toggle",
    () => {
      enabled = !enabled;
      vscode.window.showInformationMessage(
        `Fail Alarm: ${enabled ? "Enabled" : "Disabled"}`
      );
    }
  );

  context.subscriptions.push(listener, toggleCommand);
}

export function deactivate(): void {
  audioPlayer?.stop();
}
