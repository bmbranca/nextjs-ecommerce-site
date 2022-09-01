import React from "react";
import {
  LandingWrapper,
  LoginWrapper,
  ImageWrapper,
} from "../components/styles";
import Image from "next/image";
import UserLoginForm from "../components/UserLoginForm";
import landingimg from "../img/landingimg.jpg";

export default function Login() {
  return (
    <LandingWrapper>
      <LoginWrapper>
        <UserLoginForm />
      </LoginWrapper>
      <ImageWrapper>
        <Image src={landingimg} alt="coffee" />
      </ImageWrapper>
    </LandingWrapper>
  );
}
