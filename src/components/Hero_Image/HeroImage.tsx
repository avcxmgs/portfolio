import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const StyledContainer = styled.div<{ disabled?: boolean }>`
  position: relative;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const StyledHeroImage = styled.img<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  width: 1200px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;

const StyledHeroText = styled.div<{ disabled?: boolean }>`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: ${({ disabled }) => (disabled ? "gray" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, text, disabled }) => {
  return (
    <StyledContainer disabled={disabled}>
      <StyledHeroImage src={src} alt={alt} disabled={disabled} />
      <StyledHeroText disabled={disabled}>{text}</StyledHeroText>
    </StyledContainer>
  );
};

export default HeroImage;
