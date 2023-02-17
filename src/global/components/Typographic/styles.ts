import { IPrimaryColorProps } from "@/global/@types/type";
import styled from "styled-components";

export const Large = styled.h1<IPrimaryColorProps>`
  font-size: var(--font-size-large);  
  color: var(--blue-dark);
`

export const Medium = styled.h2<IPrimaryColorProps>`
  font-size: var(--font-size-medium);
  color: var(--blue-dark);

  @media (max-width: 768px) {
    font-size: var(--font-regular);
  }
`

export const Regular = styled.h3<IPrimaryColorProps>`
  font-size: var(--font-size-regular);
  color: var(--blue-dark);
`

export const Small = styled.h4<IPrimaryColorProps>`
  font-size: var(--font-size-small);
  color: var(--blue-dark);
`

export const Description = styled.p<IPrimaryColorProps>`
  font-size: var(--font-size-regular);
  color: var(--blue-dark);
`
export const Color = styled.span`
  font-size: var(--font-size-regular);
  color: var(--blue-dark);
  font-weight: 700;
`