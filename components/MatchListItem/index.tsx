import { Match } from "@/types/Match";
import React from "react";
import {
  MatchContainer,
  MatchIndex,
  MatchIndexText,
  MatchStatusContainer,
  MatchText,
} from "./MatchListItem.styles";
import MatchStatus from "../MatchStatus";

type Props = {
  match: Match;
  index: number;
};

const MatchListItem: React.FC<Props> = ({ match, index }) => {
  return (
    <MatchContainer href={`/match/${match.id}`} data-testid="match-list">
      <MatchIndex>
        <MatchIndexText>{index + 1}</MatchIndexText>
      </MatchIndex>
      <MatchText>
        {match.homeTeam.name} vs {match.awayTeam.name}
      </MatchText>
      <MatchStatusContainer>
        <MatchStatus
          matchStatusType={match.status.type}
          matchDate={match.date}
          matchTime={match.time}
        />
      </MatchStatusContainer>
    </MatchContainer>
  );
};

export default MatchListItem;
