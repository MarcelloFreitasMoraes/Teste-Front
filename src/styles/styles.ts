import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  text-align: center;
`;
export const DescriptGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  line-height: 40px;
`;
export const Button = styled.button`
  height: 3rem;
  width: 220px;
  border-radius: 50.5px;
  font-size: 1rem;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: filter 0.2s;
  color: var(--blue-dark);

  &:hover {
    filter: brightness(0.8);
  }
`;
export const Estado = styled.a`
  &:hover {
    filter: brightness(0.8);
  }
`;
export const Content = styled.div`
  margin-top: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center; 
`;
export const CardContainer = styled.div`
display: flex;
align-items: center;
height: 10rem;
`;
export const Border = styled.div`
  font-size: var(--font-size-large);
  color: var(--blue-dark);
  border: 2px solid;
  border-radius: 10px;
  height: 8rem;
  width: 20rem;
  margin: 0 auto;
`;
