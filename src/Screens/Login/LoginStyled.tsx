import styled from "styled-components";

export const LoginStyled = styled.div`
  //position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/public/images/login/clima-tipos.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  .container-login {
    width: 22vw;
    height: 27vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    margin-right: 2vw;
    background: rgba(164, 168, 171, 0.8);; /* fallback for old browsers */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    opacity: .9;
    padding: 2vw;
    border-radius: 1.5vw;

    .form-login {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      gap: 1.5vw;
      width: 100%;

      .header-login {
        color: #ebf6f8;
        font-size: 2.2vw;
        font-weight: bold;
        font-family: sans-serif;
      }
      
      .input-container {
        margin-bottom: .1vw;
        width: 100%;
        
        .input-style{
          width: 18vw;
          padding: .8vw;
          margin: .2vw 0;
          background-color: #6a7173;
          color: black;
          font-weight: bold;
          font-size: 1.2vw;
          border: none;
          border-radius: 5px;
          outline: none;
          
        }
        .input-style::placeholder {
          color: #f4fafa;
          font-size: 1vw;
          font-weight: bold;
          font-family: sans-serif;
        }
      }
      
      .error {
        font-size: .85vw;
        font-family: "Inter", serif;
        color: #dc3545;
      }
    }

    .button-login {
      width: 18vw;
      background: #222a3f;
      color: white;
      font-weight: bold;
      padding: 1vw;
      border-radius: 1vw;
      border: none;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    }

    .remember-password {
      color: #fff;
      font-family: sans-serif;
      font-weight: bold;
      font-size: 1vw;
      cursor: pointer;
    }

    .button-register {
      width: 13vw;
      background: rgba(34, 40, 46, 0.9);
      color: white;
      font-size: 1.2vw;
      font-weight: bold;
      padding: 1vw;
      border-radius: 1vw;
      border: none;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    }

    //.container-check {
    //  display: flex;
    //  align-items: center;
    //  justify-content: start;
    //  gap: .5vw;
    //  width: 95%;
    //
    //  .input-check {
    //    cursor: pointer;
    //  }
    //  label {
    //    color: #ffffff;
    //    font-size: .8vw;
    //  }
    //}
    //.button-login {
    //  width: 100%;
    //  background: #3c50e0;
    //  color: #ffffff;
    //  padding: .3vw 0;
    //  cursor: pointer;
    //  transition: background 0.3s, box-shadow 0.3s;
    //}
    //.button-login:hover {
    //  background: #293a99;
    //  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    //}
  }
}

`