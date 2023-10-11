import { render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MatchFilter from "..";
import { dummyData, filterOptions } from "@/constant/sports";
import useGetMatchCount from "@/hooks/useGetMatchCount";

const mockOnChangeHandler = jest.fn();
const { result } = renderHook(() => useGetMatchCount(dummyData, filterOptions));

describe("test MatchFilter Component", () => {
  it("should render 'Result' filter with match count", () => {
    render(
      <MatchFilter
        matchData={dummyData}
        onChangeFilterHandler={mockOnChangeHandler}
      />
    );
    const option = result.current.matchFilter.find(
      (option) => option.value === "finished"
    );
    const resultElement = screen.getByText(`Result - ${option!.count}`);
    expect(resultElement).toBeInTheDocument();
  });

  it("should render 'Live' filter with match count", () => {
    render(
      <MatchFilter
        matchData={dummyData}
        onChangeFilterHandler={mockOnChangeHandler}
      />
    );
    const option = result.current.matchFilter.find(
      (option) => option.value === "inprogress"
    );
    const resultElement = screen.getByText(`Live - ${option!.count}`);
    expect(resultElement).toBeInTheDocument();
  });

  it("should render 'Result' filter with match count", () => {
    render(
      <MatchFilter
        matchData={dummyData}
        onChangeFilterHandler={mockOnChangeHandler}
      />
    );
    const option = result.current.matchFilter.find(
      (option) => option.value === "notstarted"
    );
    const resultElement = screen.getByText(`Upcoming - ${option!.count}`);
    expect(resultElement).toBeInTheDocument();
  });

  it("should render 'All' filter with match count", () => {
    render(
      <MatchFilter
        matchData={dummyData}
        onChangeFilterHandler={mockOnChangeHandler}
      />
    );

    const resultElement = screen.getByText(`All - ${dummyData!.length}`);
    expect(resultElement).toBeInTheDocument();
  });
});
