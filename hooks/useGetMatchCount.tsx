import { FilterOption } from "@/types/FilterOptions";
import { Match } from "@/types/Match";
import { useMemo } from "react";

const getMatchCount = (matchData: Match[], matchType: string) => {
  const count = matchData.reduce((accumulator: number, value: Match) => {
    if (value.status.type === matchType) {
      accumulator++;
    }
    return accumulator;
  }, 0);

  return count;
};
const useGetMatchCount = (
  matchData: Match[],
  filterOptions: FilterOption[]
) => {
  const options = filterOptions;
  const matchFilter = useMemo(() => {
    for (let optionIndex in options) {
      options[optionIndex].count = getMatchCount(
        matchData,
        options[optionIndex].value
      );
    }
    return options;
  }, [matchData, options]);

  return { matchFilter };
};

export default useGetMatchCount;
