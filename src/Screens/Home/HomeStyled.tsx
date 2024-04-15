import styled from "styled-components";

export const HomeStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/images/login/clima-tipos.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: start; //pone los elemntos hijos al arriba
  align-items: center; //posisiciona sus elementos hijos en medio
  overflow: hidden;
  
  .header-container {
    width: 50vw;
    height: 4vw;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .header-text {
      font-family: sans-serif;
    }
  }

`