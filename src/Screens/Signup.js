import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const SignupBtn = styled.button``;

const CancelBtn = styled.button``;

const NormalText = styled.span``;

const Signup = () => {
  // State, Variable
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Functions
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onChangeCheckPw = (e) => {
    setCheckPw(e.target.value);
  };

  const onSignup = (email, pw, checkPw) => {
    if (pw === checkPw) {
      setIsError(false);
      try {
        createUserWithEmailAndPassword(FBauth, email, pw)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            setErrorMessage(error.message);
            setIsError(true);
            console.log(`errorCode : \n ${error.code}`);
            console.log(`errorMessage : \n ${error.message}`);
          });
        console.log("finish");
      } catch (error) {
        console.log(error);
      } finally {
        //
        if (!isError) {
          navigate("/login");
        }
      }
    }
  };

  const onClickCancelBtn = () => {
    navigate("/login");
  };

  return (
    <Article>
      <Form>
        <Hdiv>
          <NormalText>EMAIL : </NormalText>
          <EmailInput
            type="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일을 입력하세요"
            required
          />
        </Hdiv>
        <Hdiv>
          <NormalText>PW : </NormalText>
          <PwInput
            type="password"
            value={pw}
            onChange={onChangePw}
            placeholder="비밀번호를 입력하세요"
            minLength={6}
            required
          />
        </Hdiv>
        <Hdiv>
          <NormalText>PW 확인 : </NormalText>
          <PwInput
            type="password"
            value={checkPw}
            onChange={onChangeCheckPw}
            placeholder="비밀번호를 확인하세요"
            minLength={6}
            required
          />
        </Hdiv>

        <SignupBtn type="submit" onClick={() => onSignup(email, pw, checkPw)}>
          회원가입
        </SignupBtn>
        <CancelBtn type="button" onClick={onClickCancelBtn}>
          취소
        </CancelBtn>
      </Form>
      {isError ? <NormalText>{String(errorMessage)}</NormalText> : null}
    </Article>
  );
};

export default Signup;
