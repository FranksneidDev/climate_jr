import styled from "styled-components";

export const ModalDataComponentStyled = styled.div `
  width: 25vw;
  height: 10vw;
  background: #ffff;
  border-radius: 1.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  .weatherData-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .close {
      cursor: pointer;
    }
  }

`