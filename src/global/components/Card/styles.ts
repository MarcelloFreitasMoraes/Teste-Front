import styled from "styled-components";

export const Container = styled.div`
width: 100%;
`
export const Border = styled.div`
  font-size: var(--font-size-large);  
  color: var(--blue-dark);
  border: 2px solid;
  border-radius: 10px;
  height: 8rem;
  width: 20rem; 
  text-align: center;
  background-color: var(--light);
  
  & > p {
    margin-top: 10px;
    justify-content: center;
    display: flex;
  }
`