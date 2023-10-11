import styled from "styled-components";
import StyledText from "../ui/StyledText";
import { devices } from "@/styles/breakpoints";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  color: #333;

  @media only screen and ${devices.md} {
    flex-direction: row;
    margin-bottom: 24px;
  }
`;
export const FilterTitle = styled(StyledText)`
  flex: 1;
  margin-bottom: 12px;

  @media only screen and ${devices.md} {
    margin-bottom: unset;
  }
`;

export const FilterSelect = styled.select`
    font-size 16px;
    height: 30px;
    width: 200px;
`;

export const FilterOptions = styled.option``;

export const MatchCounter = styled.div``;
