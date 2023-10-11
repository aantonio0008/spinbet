import React, { useEffect, useState } from "react";
import { MatchStatusText } from "./MatchStatus.style";
import useGetGameStatus from "@/hooks/useGetGameStatus";

type Props = {
  matchStatusType: string;
  matchDate: string;
  matchTime: string;
};

const MatchStatus: React.FC<Props> = ({
  matchStatusType,
  matchDate,
  matchTime,
}) => {
  const { gameStatus: status } = useGetGameStatus(
    matchStatusType,
    matchDate,
    matchTime
  );
  const [gameStatus, setGameStatus] = useState<string>("Ended");
  useEffect(() => {
    setGameStatus(status);
  }, [status]);

  return (
    <MatchStatusText $type={matchStatusType}>{gameStatus}</MatchStatusText>
  );
};

export default MatchStatus;
