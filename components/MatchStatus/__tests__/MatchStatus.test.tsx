import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MatchStatus from "..";

describe("test MatchStatus Component", () => {
  it('should render "Ended" and text should be green if match status is equal to "finished"', () => {
    render(
      <MatchStatus
        matchStatusType="finished"
        matchDate="10.09.2023."
        matchTime="14:00"
      />
    );

    const myElement = screen.queryByText(/Ended/i);

    expect(myElement).toBeInTheDocument();
  });

  it('should render "Live" if match status is equal to "inprogress"', () => {
    render(
      <MatchStatus
        matchStatusType="inprogress"
        matchDate="10.09.2023."
        matchTime="14:00"
      />
    );

    const myElement = screen.getByText(/Live/i);

    expect(myElement).toBeInTheDocument();
  });

  it('should render "Cancelled" if match status is equal to "canceled"', () => {
    render(
      <MatchStatus
        matchStatusType="canceled"
        matchDate="10.09.2023."
        matchTime="14:00"
      />
    );

    const myElement = screen.getByText(/Cancelled/i);

    expect(myElement).toBeInTheDocument();
  });

  it('should render date and time if match status is equal to "notstarted"', () => {
    render(
      <MatchStatus
        matchStatusType="notstarted"
        matchDate="10.09.2023."
        matchTime="14:00"
      />
    );

    const myElement = screen.getByText(/Oct 9th 14:00/i);

    expect(myElement).toBeInTheDocument();
  });
});
