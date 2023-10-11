import { useMemo } from "react";

const useGetLiveStatus = (matchStatusType: string, matchLiveStatus: string) => {
  const liveStatus = useMemo(() => {
    if (matchStatusType === "inprogress") {
      if (matchLiveStatus === "HT") {
        return { percentage: 50, statusText: matchLiveStatus };
      } else {
        const calculatedPercent = 100 / (90 / parseInt(matchLiveStatus));
        return {
          percentage: calculatedPercent,
          statusText: `${matchLiveStatus}'`,
        };
      }
    } else if (matchStatusType === "finished") {
      return { percentage: 100, statusText: matchLiveStatus };
    }
    return { percentage: 0, statusText: "" };
  }, [matchLiveStatus, matchStatusType]);

  return liveStatus;
};

export default useGetLiveStatus;
