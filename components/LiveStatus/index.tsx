import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { LiveStatusContainer, LiveStatusInner } from "./LiveStatus.style";
import { useBreakpoint } from "@/hooks/useBreakpoints";
import useGetLiveStatus from "@/hooks/useGetLiveStatus";

type Props = {
  matchStatusType: string;
  matchLiveStatus: string;
};

const LiveStatus: React.FC<Props> = ({ matchStatusType, matchLiveStatus }) => {
  const { isSM } = useBreakpoint();

  const liveStatus = useGetLiveStatus(matchStatusType, matchLiveStatus);

  return (
    <LiveStatusContainer>
      <LiveStatusInner>
        <CircularProgressbar
          value={liveStatus.percentage}
          text={liveStatus.statusText}
          strokeWidth={2}
          styles={buildStyles({
            textColor: matchStatusType === "finished" ? "#45ca5b" : "#fff",
            pathColor: "#45d65d",
            trailColor: "#585f59",
            textSize: isSM ? "32px" : "40px",
          })}
        />
      </LiveStatusInner>
    </LiveStatusContainer>
  );
};

export default LiveStatus;
