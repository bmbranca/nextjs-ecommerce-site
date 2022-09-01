import styled from "styled-components";

// Landing Page
export const LandingWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  border: 1px solid red;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 50%;
`;

export const UserLoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  padding: 3em;
  border: 1px solid blue;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LoginInput = styled.input`
  margin: 1em 0 1em 0;
  padding: 1em 2em;
  width: 75%;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  font-family: "Open Sans", sans-serif;
`;

export const Error = styled.span``;

export const LoginButton = styled.button`
  background: #000000;
  padding: 1em 2em;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  text-transform: uppercase;
`;
