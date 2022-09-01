import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FBauth, signInGoogleWithPopup } from "../Firebase/FB";
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../Contexts/Context";

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

const SocialLoginView = styled(Hdiv)`
  justify-content: space-around;
  align-items: center;
`;

const SocialIcon = styled.span``;

const Login = () => {
  // State, Variables
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);

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

  const onClickLogin = (email, pw) => {
    try {
      signInWithEmailAndPassword(FBauth, email, pw)
        .then((userCredential) => {
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

  const onSubmit = (e) => {
    e.preventDefault();
    onClickLogin(email, pw);
    console.log("submitted");
  };

  const onClickGoogleLogin = () => {
    try {
      signInGoogleWithPopup();
    } catch (error) {
      console.log(`error from googlepopup login catch state : \n ${error}`);
    }
    console.log("google clicked");
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  // Return Components
  return (
    <Article>
      <Form onSubmit={onSubmit}>
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
        <LoginBtn type="submit">로그인</LoginBtn>
        <SignupBtn type="button" onClick={onClickSinup}>
          회원가입
        </SignupBtn>
        <SocialLoginView>
          <SocialIcon onClick={onClickGoogleLogin}>구글</SocialIcon>
          <SocialIcon>깃헙</SocialIcon>
        </SocialLoginView>
      </Form>
    </Article>
  );
};

export default Login;
