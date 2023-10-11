import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MatchListItem from "..";

const mockMatch = {
  id: "hbaffaf",
  name: "FK Tyumen - Luch-Energiya Vladivostok",
  competitionId: "bbbg",
  competition: "Football National League",
  countryId: "cb",
  country: "Russia",
  timestamp: 1470484800,
  date: "06.08.2016.",
  time: "12:00",
  status: {
    code: 100,
    type: "finished",
  },
  round: {
    round: 6,
  },
  homeTeam: {
    id: 75207,
    name: "FK Tyumen",
    slug: "fk-tyumen",
    gender: "M",
    subTeams: [],
  },
  awayTeam: {
    id: 5852,
    name: "Luch-Energiya Vladivostok",
    slug: "luch-energiya-vladivostok",
    gender: "M",
    subTeams: [],
  },
  homeScore: {
    current: 0,
    period1: 0,
    normaltime: 0,
  },
  awayScore: {
    current: 0,
    period1: 0,
    normaltime: 0,
  },
  liveStatus: "FT",
};

describe("test MatchListItem Component", () => {
  it('should render "[homeTeamName] vs [awayTeamName]', () => {
    render(<MatchListItem match={mockMatch} index={1} />);

    const myElement = screen.getByText(
      "FK Tyumen vs Luch-Energiya Vladivostok"
    );

    expect(myElement).toBeInTheDocument();
  });
});
