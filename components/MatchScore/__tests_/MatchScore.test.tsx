import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MatchScore from "..";

describe("test MatchScore Component", () => {
  it('should render score if match status is equal to "finished"', () => {
    render(
      <MatchScore
        matchStatusType="finished"
        homeTeamScore={1}
        awayTeamScore={0}
      />
    );

    const myElement = screen.getByText("1 - 0");
    expect(myElement).toBeInTheDocument();
  });

  it('should render score if match status is equal to "inprogress"', () => {
    render(
      <MatchScore
        matchStatusType="inprogress"
        homeTeamScore={1}
        awayTeamScore={1}
      />
    );

    const myElement = screen.getByText("1 - 1");
    expect(myElement).toBeInTheDocument();
  });

  it('should render "0 - 0" if match status is equal to "canceled"', () => {
    render(
      <MatchScore
        matchStatusType="canceled"
        homeTeamScore={1}
        awayTeamScore={1}
      />
    );

    const myElement = screen.getByText("0 - 0");
    expect(myElement).toBeInTheDocument();
  });

  it('should render "0 - 0" if match status is equal to "notstarted"', () => {
    render(
      <MatchScore
        matchStatusType="notstarted"
        homeTeamScore={1}
        awayTeamScore={1}
      />
    );

    const myElement = screen.getByText("0 - 0");
    expect(myElement).toBeInTheDocument();
  });
});
