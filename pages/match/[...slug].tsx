import { dummyData } from "../../constant/sports";
import "react-circular-progressbar/dist/styles.css";
import React from "react";
import { Match } from "@/types/Match";
import {
  Container,
  CountryText,
  CompetitionText,
  TeamContainer,
  HomeTeamName,
  AwayTeamName,
  Wrapper,
} from "./Match.styles";
import MatchStatus from "@/components/MatchStatus";
import MatchScore from "@/components/MatchScore";
import LiveStatus from "@/components/LiveStatus";
import { NextPageContext } from "next";
import Card from "@/components/ui/Card";

export default function MatchPage({ matchDetails }: { matchDetails: Match }) {
  return (
    <Wrapper>
      <Card>
        <Container>
          <CountryText>{matchDetails.country}</CountryText>
          <CompetitionText>{matchDetails.competition}</CompetitionText>
          <MatchStatus
            matchStatusType={matchDetails.status.type}
            matchDate={matchDetails.date}
            matchTime={matchDetails.time}
          />
          <MatchScore
            matchStatusType={matchDetails.status.type}
            homeTeamScore={
              matchDetails.homeScore.current
                ? matchDetails.homeScore.current
                : 0
            }
            awayTeamScore={
              matchDetails.awayScore.current
                ? matchDetails.awayScore.current
                : 0
            }
          />
          <TeamContainer>
            <HomeTeamName>{matchDetails.homeTeam.name}</HomeTeamName>
            <LiveStatus
              matchStatusType={matchDetails.status.type}
              matchLiveStatus={matchDetails.liveStatus}
            />
            <AwayTeamName>{matchDetails.awayTeam.name}</AwayTeamName>
          </TeamContainer>
        </Container>
      </Card>
    </Wrapper>
  );
}

MatchPage.getInitialProps = async (ctx: NextPageContext) => {
  const {
    query: { slug },
  } = ctx;

  let matchData = dummyData.find((match) => match.id === (slug && slug[0]));

  return { matchDetails: matchData };
};
