import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FBauth } from "../Firebase/FB";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const Article = styled.article``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Hdiv = styled.div`
  display: flex;
`;

const EmailInput = styled.input``;

const PwInput = styled.input``;

const LoginBtn = styled.button``;

const NormalText = styled.span``;

const SignupBtn = styled.button``;

const Login = () => {
  // State, Variables
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  // Funtions
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const onClickSinup = () => {
    navigate("/signup");
  };

  const onSubmit = (email, pw) => {
    try {
      signInWithEmailAndPassword(FBauth, email, pw)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("login success");
          navigate("/");
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Article>
      <Form>
        <Hdiv>
          <NormalText>EMAIL : &nbsp;</NormalText>
          <EmailInput
            type="email"
            onChange={onChangeEmail}
            value={email}
            required
          />
        </Hdiv>
        <Hdiv>
          <NormalText>PW : &nbsp;</NormalText>
          <PwInput type="password" onChange={onChangePw} value={pw} required />
        </Hdiv>
        <LoginBtn type="submit" onClick={() => onSubmit(email, pw)}>
          로그인
        </LoginBtn>
        <SignupBtn type="button" onClick={onClickSinup}>
          회원가입
        </SignupBtn>
      </Form>
    </Article>
  );
};

export default Login;
