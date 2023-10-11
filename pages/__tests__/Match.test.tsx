import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MatchPage from "../match/[...slug]";

const mockMatchObj = {
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

describe("test Match Component", () => {
  it("should contain match country", async () => {
    render(<MatchPage matchDetails={mockMatchObj} />);
    const myElement = screen.queryByText(/russia/i);

    await expect(myElement).toBeInTheDocument();
  });

  it("should contain match competition", () => {
    render(<MatchPage matchDetails={mockMatchObj} />);

    const myElement = screen.getByText(/Football National League/i);

    expect(myElement).toBeInTheDocument();
  });

  it("should contain match Home Team name", () => {
    render(<MatchPage matchDetails={mockMatchObj} />);

    const myElement = screen.getByText(/FK Tyumen/i);

    expect(myElement).toBeInTheDocument();
  });

  it("should contain match Away Team name", () => {
    render(<MatchPage matchDetails={mockMatchObj} />);

    const myElement = screen.getByText(/Luch-Energiya Vladivostok/i);

    expect(myElement).toBeInTheDocument();
  });
});
