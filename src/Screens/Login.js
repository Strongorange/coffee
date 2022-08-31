import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FBauth } from "../Firebase/FB";

const Article = styled.article`
  width: 100%;
  height: 70vh;
  display: flex;
`;

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

const SignupBtn = styled(LoginBtn)``;

const NormalText = styled.span``;

const Login = () => {
  // State, Variable
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  // Functions
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const onSignup = (email, pw) => {
    try {
      createUserWithEmailAndPassword(FBauth, email, pw)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
      console.log("finish");
    } catch (error) {
      console.log(error);
    } finally {
      //
    }
  };

  return (
    <Article>
      <Form>
        <Hdiv>
          <NormalText>EMAIL : </NormalText>
          <EmailInput
            type="text"
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일을 입력하세요"
          />
        </Hdiv>
        <Hdiv>
          <NormalText>PW : </NormalText>
          <PwInput
            type="password"
            value={pw}
            onChange={onChangePw}
            placeholder="비밀번호를 입력하세요"
          />
        </Hdiv>
        <LoginBtn>로그인</LoginBtn>
        <SignupBtn onClick={() => onSignup(email, pw)}>
          <Link>회원가입</Link>
        </SignupBtn>
      </Form>
    </Article>
  );
};

export default Login;
