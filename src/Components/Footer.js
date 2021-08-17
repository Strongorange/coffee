import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer__grid">
        <div className="item">
          <h1>
            HOME<br></br>PRESSURE
          </h1>
        </div>
        <div className="item">
          <span>(주)노루컴퍼니</span>
          <span>사업자: 123-45678-321 / 요식업: 2021-08-11</span>
          <span>주소: 은하 32 지구2 107호</span>
          <span>고객센터: 1234-4567 / Noru123@earthmail.com</span>
        </div>
        <div className="item">
          <h3>POLICY</h3>
          <span>이용약관</span>
          <span>개인 정보 처리 방침</span>
          <span>사업자 정보 확인</span>
        </div>
        <div className="item">
          <h3>CONTACT</h3>
          <span>문의하기</span>
          <span>인스타그램</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
