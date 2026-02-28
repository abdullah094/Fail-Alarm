declare module "node-wav-player" {
  interface PlayOptions {
    path: string;
    sync?: boolean;
  }
  export function play(options: PlayOptions): Promise<void>;
  export function stop(): void;
}
