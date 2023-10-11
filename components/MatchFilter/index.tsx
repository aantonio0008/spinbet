import React, { ChangeEventHandler, useCallback, useState } from "react";
import {
  FilterContainer,
  FilterOptions,
  FilterSelect,
  FilterTitle,
} from "./MatchFilter.styles";
import { FilterOption } from "@/types/FilterOptions";
import { Match } from "@/types/Match";
import { filterOptions } from "@/constant/sports";
import useGetMatchCount from "@/hooks/useGetMatchCount";

type Props = {
  matchData: Match[];
  onChangeFilterHandler: (selectedOption: string) => void;
};

const MatchFilter: React.FC<Props> = ({ matchData, onChangeFilterHandler }) => {
  const { matchFilter: updatedFilterOptions } = useGetMatchCount(
    matchData,
    filterOptions
  );
  const [selectValue, setSelectValue] = useState<string>();
  const selectOnChangeHandler: ChangeEventHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectValue(e.target.value);
      onChangeFilterHandler(e.target.value);
    },
    [onChangeFilterHandler]
  );

  return (
    <FilterContainer>
      <FilterTitle as={"h2"}>Football Match Results</FilterTitle>
      <FilterSelect
        onChange={selectOnChangeHandler}
        placeholder="Filter"
        value={selectValue}
        defaultValue={"default"}
        data-testid="match-filter"
      >
        <FilterOptions value="default" disabled>
          Filters
        </FilterOptions>
        <FilterOptions value="all">All - {matchData.length}</FilterOptions>
        {updatedFilterOptions?.map((option: FilterOption) => {
          return (
            <FilterOptions key={option.value} value={option.value}>
              {option.name} - {option.count}
            </FilterOptions>
          );
        })}
      </FilterSelect>
    </FilterContainer>
  );
};

export default MatchFilter;
