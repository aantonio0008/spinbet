import { dummyData } from "@/constant/sports";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import MatchFilter from "@/components/MatchFilter";
import MatchListItem from "@/components/MatchListItem";
import { Match } from "@/types/Match";
import Card from "@/components/ui/Card";
import { Wrapper } from "./match/Match.styles";
import { MatchListContainer } from "./styles/HomePage.style";
const HomePage = () => {
  const [matches, setMatches] = useState<Match[]>(dummyData);

  const onChangeFilterHandler = (selectedOption: string) => {
    if (selectedOption === "all") {
      setMatches(dummyData);
    } else {
      let result = dummyData.filter(
        (sport) => sport.status.type === selectedOption
      );
      setMatches(result);
    }
  };
  return (
    <Wrapper>
      <Card>
        <MatchFilter
          matchData={dummyData}
          onChangeFilterHandler={onChangeFilterHandler}
        />
        <MatchListContainer>
          {matches.map((match, index) => {
            return <MatchListItem key={match.id} match={match} index={index} />;
          })}
        </MatchListContainer>
      </Card>
    </Wrapper>
  );
};

export default HomePage;
