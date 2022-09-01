import React, { useState } from "react";
import {
  UserLoginFormWrapper,
  LoginInput,
  Error,
  LoginButton,
  InputWrapper,
  LoginWrapper,
} from "./styles";

import Link from "next/link";
export default function UserLoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  //   const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleEmailInputChange = (event) => {
    setValues({
      ...values,
      email: event.target.value,
    });
    if (values.password) {
      setValid(true);
    }
  };

  const handlePasswordInputChange = (event) => {
    setValues({
      ...values,
      password: event.target.value,
    });
    if (values.email) {
      setValid(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  //   const openModal = () => {
  //     console.log("clicked");
  //     setModalIsOpen(true);
  //   };

  //   const closeModal = () => {
  //     console.log("clicked");
  //     setModalIsOpen(false);
  //   };

  return (
    <>
      <header></header>
      {/* <UserLoginFormWrapper> */}
      {/* {modalIsOpen ? (
          <TcModal onClick={closeModal} />
        ) : ( */}
      <UserLoginFormWrapper className="form-container">
        <LoginWrapper Name="register-form" onSubmit={handleSubmit}>
          <LoginInput
            onChange={handleEmailInputChange}
            value={values.email}
            id="email"
            className="form-field"
            type="text"
            placeholder="email"
            name="email"
          />
          {submitted && !values.password ? (
            <span id="first-name-error">Please enter your email</span>
          ) : null}
          <LoginInput
            onChange={handlePasswordInputChange}
            value={values.password}
            id="email"
            className="form-field"
            type="text"
            placeholder="password"
            name="password"
          />
          {submitted && !values.email ? (
            <span id="first-name-error">Please enter your password</span>
          ) : null}

          {valid ? (
            <div className="buttonCase">
              <button>Login</button>
            </div>
          ) : (
            <div className="buttonCase">
              <button>Login</button>
            </div>
          )}
          <div className="termsAndConditions">
            By logging in, I agree to the{" "}
            {/* <span className="tAndC" onClick={openModal}>
              terms and conditions
            </span>{" "} */}
            and choose to receive emails about 한국의 이미지 news, promotions,
            and offers.
          </div>
        </LoginWrapper>
      </UserLoginFormWrapper>
      {/* </UserLoginFormWrapper> */}
    </>
  );
}
