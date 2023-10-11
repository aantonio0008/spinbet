import { render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import HomePage from "..";
import { FilterOption } from "@/types/FilterOptions";
import useGetMatchCount from "@/hooks/useGetMatchCount";
import { dummyData, filterOptions } from "@/constant/sports";

const { result } = renderHook(() => useGetMatchCount(dummyData, filterOptions));

describe("test HomePage Component", () => {
  it("should render the correct number of data base on the filter option value 'all'", async () => {
    render(<HomePage />);
    const matchFilterElement = screen.getByTestId("match-filter");
    await userEvent.selectOptions(matchFilterElement, ["all"]);

    const matchListElements = screen.queryAllByTestId("match-list");

    expect(matchListElements.length).toBe(dummyData.length);
  });

  it("should render the correct number of data base on the filter option value 'finished'", async () => {
    render(<HomePage />);
    const matchFilterElement = screen.getByTestId("match-filter");
    await userEvent.selectOptions(matchFilterElement, ["finished"]);

    const matchListElements = screen.queryAllByTestId("match-list");

    const optionFilter = result.current.matchFilter.find(
      (option) => option.value === "finished"
    );

    expect(matchListElements.length).toBe(optionFilter!.count);
  });

  it("should render the correct number of data base on the filter option value 'inprogress'", async () => {
    render(<HomePage />);
    const matchFilterElement = screen.getByTestId("match-filter");
    await userEvent.selectOptions(matchFilterElement, ["inprogress"]);

    const matchListElements = screen.queryAllByTestId("match-list");

    const optionFilter = result.current.matchFilter.find(
      (option) => option.value === "inprogress"
    );

    expect(matchListElements.length).toBe(optionFilter!.count);
  });

  it("should render the correct number of data base on the filter option value 'notstarted'", async () => {
    render(<HomePage />);
    const matchFilterElement = screen.getByTestId("match-filter");
    await userEvent.selectOptions(matchFilterElement, ["notstarted"]);

    const matchListElements = screen.queryAllByTestId("match-list");

    const optionFilter = result.current.matchFilter.find(
      (option) => option.value === "notstarted"
    );

    expect(matchListElements.length).toBe(optionFilter!.count);
  });
});
