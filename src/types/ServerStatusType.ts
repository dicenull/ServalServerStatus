import type { Player } from "./Player";

export type ServerStatus = {
    name: string;
    playerCount: number;
    players: Array<Player>;
    online: boolean;
    version: string;
    description: string;
};
