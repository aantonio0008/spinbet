export type Match = {
  id: string;
  name: string;
  competitionId: string;
  competition: string;
  countryId: string;
  country: string;
  timestamp: number;
  date: string;
  time: string;
  status: {
    code: number;
    type: string;
  };
  round?: {
    round: number;
  };
  homeTeam: {
    id: number;
    name: string;
    slug: string;
    gender: string | null;
    subTeams: Array<any>;
  };
  awayTeam: {
    id: number;
    name: string;
    slug: string;
    gender: string | null;
    subTeams: Array<any>;
  };
  homeScore: {
    current?: number;
    period1?: number;
    normaltime?: number;
  };
  awayScore: {
    current?: number;
    period1?: number;
    normaltime?: number;
  };
  liveStatus: string;
};
