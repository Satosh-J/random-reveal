import styled, {keyframes} from "styled-components";

export const colorChange = keyframes`
0% { color: #075349; }
100% { color: #05CCB2; }
`;

export const TextChange = styled.td`
  animation: ${colorChange} 1s infinite;
`;
