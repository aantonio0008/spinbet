import { devices } from "@/styles/breakpoints";
import styled from "styled-components";

export const LiveStatusInner = styled.div`
  margin: auto;
  width: 50px;
  height: 50px;
  position: relative;

  @media only screen and ${devices.md} {
    width: 80px;
    height: 80px;
  }
`;
export const LiveStatusContainer = styled.div`
  min-width: 50px;

  @media only screen and ${devices.md} {
    min-width: 100px;
  }
`;
