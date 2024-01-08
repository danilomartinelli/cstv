export type MatchStatus = "finished" | "not_played" | "not_started" | "running";

export interface Opponent {
    opponent: {
        id: number;
        name: string;
        image_url: string;
    }
}

export interface League {
    name: string;
    image_url: string;
}

export interface Serie {
    full_name: string;
}

export interface Match {
    id: number;
    status: MatchStatus;
    scheduled_at: string;
    opponents: Opponent[];
    league: League;
    serie: Serie;
}

export interface Player {
    id: number;
    first_name: string;
    last_name: string;
    slug: string;
    image_url: string | null;
}