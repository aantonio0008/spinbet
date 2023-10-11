import Link from "next/link";
import styled from "styled-components";
import StyledText from "../ui/StyledText";

export const MatchContainer = styled(Link)`
  display: flex;
  background-color: #212121;
  margin: 8px 0px;
  border-radius: 5px;
  align-items: center;
  min-height: 50px;
  padding: 4px 16px;
  color: #fff;
  text-decoration: unset;

  &:hover {
    backgroud-color: #333c;
  }
`;

export const MatchIndex = styled.div`
  background: #fff;
  color: #333;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  margin-right: 18px;
`;

export const MatchIndexText = styled(StyledText)`
  position: relative;
  top: 2px;
`;

export const MatchText = styled.div`
  font-size: 14px;
  flex: 1;
  max-width: 50%;
`;

export const MatchStatusContainer = styled.div`
  flex: 0.5;
  text-align: right;
`;
