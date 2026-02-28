import * as path from "path";
import wavPlayer from "node-wav-player";

const COOLDOWN_MS = 1000;

export class AudioPlayer {
  private readonly soundPath: string;
  private lastPlayedAt = 0;

  constructor(extensionPath: string) {
    this.soundPath = path.join(extensionPath, "assets", "faa.wav");
  }

  async play(): Promise<void> {
    const now = Date.now();
    if (now - this.lastPlayedAt < COOLDOWN_MS) {
      return;
    }
    this.lastPlayedAt = now;

    try {
      await wavPlayer.play({ path: this.soundPath, sync: false });
    } catch (err) {
      console.error("[Fail Alarm] Audio playback error:", err);
    }
  }

  stop(): void {
    try {
      wavPlayer.stop();
    } catch {
      // ignore cleanup errors
    }
  }
}
