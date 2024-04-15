import styled from "styled-components";

export const FormComponentStyled = styled.div `

  width: 70vw;
  height: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    padding: .5vw;
    font-size: 16px;
    width: 40vw;
    border: 1px solid #000000;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  .button {
    padding: .4vw .5vw;
    font-size: 18px;
    background-color: #2ecc71;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: sans-serif;
  }
  
  

`