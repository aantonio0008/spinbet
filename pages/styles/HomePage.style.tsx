import styled from "styled-components";

const Wrapper = styled.div`
  margin: 100px 0px;
`;

export const MatchListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow: scroll;
  padding: 0 12px 12px;
  -webkit-mask-image: linear-gradient(black, #000000de);
  mask-image: linear-gradient(black, transparent);
`;
