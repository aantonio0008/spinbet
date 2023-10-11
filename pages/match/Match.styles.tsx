import StyledText from "@/components/ui/StyledText";
import { devices } from "@/styles/breakpoints";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 100%;
  height: fit-content;
  padding: 52px 0px;
  background-color: #3d3d3d;

  @media only screen and ${devices.md} {
    padding: 52px 0px;
    margin: unset;
  }
`;

export const CountryText = styled(StyledText)`
  color: #ababac;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 8px;
  @media only screen and ${devices.md} {
    font-size: 16px;
  }
`;

export const CompetitionText = styled(StyledText)`
  font-size: 20px;
  margin-bottom: 8px;
  @media only screen and ${devices.sm} {
    font-size: 24px;
  }
  @media only screen and ${devices.md} {
    font-size: 52px;
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px 10%;
  width: 100%;
`;

export const HomeTeamName = styled(StyledText)`
  font-size: 16px;
  width: 20%;
  flex: 0.5;
  text-align: center;

  @media only screen and ${devices.md} {
    font-size: 24px;
  }

  @media only screen and ${devices.md} {
    font-size: 40px;
  }
`;

export const AwayTeamName = styled(HomeTeamName)``;
