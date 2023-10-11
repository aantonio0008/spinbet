import { devices } from "@/styles/breakpoints";
import styled, { css } from "styled-components";
import StyledText from "../ui/StyledText";

export const MatchStatusText = styled(StyledText)<{ $type?: string }>`
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 32px;

  @media only screen and ${devices.md} {
    font-size: 16px;
  }

  ${(props) => {
    if (props.$type === "finished") {
      return css`
        color: #45ca5b;
      `;
    }
    if (props.$type === "inprogress") {
      return css`
        color: #cdbc30;
      `;
    }
    if (props.$type === "canceled") {
      return css`
        color: #c36672;
      `;
    }
  }}
`;
