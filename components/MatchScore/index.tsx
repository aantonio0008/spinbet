import React from "react";
import {
  MatchScoreContainer,
  MatchScoreContainerText,
} from "./MatchScore.styles";

type Props = {
  matchStatusType: string;
  homeTeamScore: number;
  awayTeamScore: number;
};

const MatchScore: React.FC<Props> = ({
  matchStatusType,
  homeTeamScore,
  awayTeamScore,
}) => {
  return (
    <MatchScoreContainer>
      <MatchScoreContainerText>
        {matchStatusType === "notstarted" || matchStatusType === "canceled"
          ? "0 - 0"
          : `${homeTeamScore}
            - ${awayTeamScore}`}
      </MatchScoreContainerText>
    </MatchScoreContainer>
  );
};

export default MatchScore;
