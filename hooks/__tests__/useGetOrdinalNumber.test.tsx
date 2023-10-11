import { renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useGetOrdinalNumber } from "../useGetOrdinalNumber";
import { act } from "react-dom/test-utils";

describe("test useGetOrdinalNumber Custom Hook", () => {
  it("should render the ordinal number 'th' suffix if number % 10 is greater than to 3", async () => {
    const { result } = renderHook(useGetOrdinalNumber);
    const actResult = await act(() => result.current.getOrdinalNumber(6));
    expect(actResult).toBe("6th");
  });

  it("should render the ordinal number 'th' suffix if number is greater than 3 and lessthan 21", async () => {
    const { result } = renderHook(useGetOrdinalNumber);
    const actResult = await act(() => result.current.getOrdinalNumber(4));
    expect(actResult).toBe("4th");
  });

  it("should render the ordinal number 'st' suffix if number % 10 is eqaul to 1", async () => {
    const { result } = renderHook(useGetOrdinalNumber);
    const actResult = await act(() => result.current.getOrdinalNumber(1));
    expect(actResult).toBe("1st");
  });

  it("should render the ordinal number 'nd' suffix if number % 10 is eqaul to 2", async () => {
    const { result } = renderHook(useGetOrdinalNumber);
    const actResult = await act(() => result.current.getOrdinalNumber(2));
    expect(actResult).toBe("2nd");
  });

  it("should render the ordinal number 'rd' suffix if number % 10 is eqaul to 3", async () => {
    const { result } = renderHook(useGetOrdinalNumber);
    const actResult = await act(() => result.current.getOrdinalNumber(3));
    expect(actResult).toBe("3rd");
  });
});
