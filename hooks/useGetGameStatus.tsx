import { useMemo } from "react";
import { useGetOrdinalNumber } from "./useGetOrdinalNumber";

const useGetGameStatus = (
  matchStatusType: string,
  matchDate: string,
  matchTime: string
) => {
  const { getOrdinalNumber } = useGetOrdinalNumber();
  const gameStatus = useMemo(() => {
    let status = "Ended";

    const date = new Date(matchDate);
    const dateShortMonth = date.toLocaleDateString("en-us", {
      month: "short",
    });
    const dateWeekday = getOrdinalNumber(date.getDate());
    if (matchStatusType === "inprogress") {
      status = "Live";
    } else if (matchStatusType === "notstarted") {
      status = `${dateShortMonth} ${dateWeekday} ${matchTime}`;
    } else if (matchStatusType === "canceled") {
      status = "Cancelled";
    }
    return status;
  }, [getOrdinalNumber, matchStatusType, matchDate, matchTime]);

  return { gameStatus: gameStatus };
};

export default useGetGameStatus;
