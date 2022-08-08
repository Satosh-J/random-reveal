import styled, { keyframes } from "styled-components";

const CarouselKeyFrame = keyframes`
  0% {margin-top: 0px}
  15% {margin-top: 0px}
  100% {margin-top: -100%}
`;

const MarqueePanel = styled.div`
  animation: ${CarouselKeyFrame} 27s linear infinite;
`;

export default MarqueePanel;
