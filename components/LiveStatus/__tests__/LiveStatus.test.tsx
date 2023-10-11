import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LiveStatus from "..";

describe("tes LiveStatus Component", () => {
  it('should render "FT" inside the circle if match live status is equal to "FT"', () => {
    render(<LiveStatus matchStatusType="finished" matchLiveStatus="FT" />);

    const myElement = screen.getByText(/FT/i);

    expect(myElement).toBeInTheDocument();
  });

  it('should render time(minutes) consumed inside the circle if match status is equal to "inprogress"', () => {
    render(<LiveStatus matchStatusType="inprogress" matchLiveStatus="58" />);

    const myElement = screen.getByText("58'");

    expect(myElement).toBeInTheDocument();
  });

  it('should render "HT" inside the circle if match status is equal to "inprogress"', () => {
    render(<LiveStatus matchStatusType="inprogress" matchLiveStatus="HT" />);

    const myElement = screen.getByText("HT");

    expect(myElement).toBeInTheDocument();
  });

  it('should not render any text inside the circle if match status is equal to "canceled"', () => {
    render(
      <LiveStatus matchStatusType="canceled" matchLiveStatus="Canceled" />
    );

    const myElement = screen.queryByRole("text");

    expect(myElement).not.toBeInTheDocument();
  });

  it('should not render any text inside the circle if match status is equal to "notstarted"', () => {
    render(<LiveStatus matchStatusType="notstarted" matchLiveStatus="-" />);

    const myElement = screen.queryByRole("text");

    expect(myElement).not.toBeInTheDocument();
  });
});
