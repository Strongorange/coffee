import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  const watchMenu = () => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  useEffect(() => {
    watchMenu();
    return watchMenu();
  }, [showMenu]);

  return (
    <>
      <main className="main">
        <div className="divider"> </div>
        <article className="first_article">
          <div>
            <span>I'VE BEEN FEELING</span>
            <b>HOME PRESSURE</b>
          </div>
          <span>
            집에서 즐기는 특별한 휴식, 홈 프레셔<br></br>지친 일상속의 소소한
            힐링이되어줄 당신만의 작은 카페
          </span>
        </article>

        <article className="second_article">
          <h1>ABOUT</h1>
          <div className="text__divider"> </div>
          <span>COFFEE BEANS & ROASTING</span>
          <div className="grid">
            <div className="grid__item">
              <div className="item__img"></div>
              <h3>커피 본연의 맛을 찾아</h3>
              <p>In search of natural born Sweetness</p>
              <a href="#">Show Detail</a>
            </div>
            <div className="grid__item">
              <div className="item__img"></div>
              <h3>조화로운 열의 전달</h3>
              <p>Harmonious heat Delivery</p>
              <a href="#">Show Detail</a>
            </div>
            <div className="grid__item">
              <div className="item__img"></div>
              <h3>블렌드? 상상만 했던 그 맛!</h3>
              <p>Blend: Mix & Match</p>
              <a href="#">Show Detail</a>
            </div>
            <div className="grid__item">
              <div className="item__img"></div>
              <h3>로스팅: 달콤함의 발현</h3>
              <p>More than just a Rating</p>
              <a href="#">Show Detail</a>
            </div>
          </div>
        </article>
        <Zoom>
          <article className="third_article slide-in">
            <div> </div>
            <h1>
              HOMEMADE<br></br>BAKERY
            </h1>
          </article>
        </Zoom>

        <article className="fourth_article">
          <h1>DESSERT</h1>
          <div className="text__divider"> </div>
          <span>SEETS & BRUNCH</span>
          <div className="second__grid">
            <div className="grid__item">
              <div className="item__img"></div>
              <h3>티라미쏘</h3>
              <p>TIRAMISSO</p>
            </div>

            <div className="grid__item">
              <div className="item__img"></div>
              <h3>치즈케이크 타르트</h3>
              <p>CHEESE CAKE TART</p>
            </div>

            <div className="grid__item">
              <div className="item__img"></div>
              <h3>파운드 케이크</h3>
              <p>POUND CAKE</p>
            </div>
          </div>
        </article>

        <Zoom>
          <article className="fifth_article slide-in">
            <div> </div>
            <h1>
              FRESH<br></br>ROASTED BEANS
            </h1>
          </article>
        </Zoom>

        <article className="sixth_article">
          <h1>COLD BREW</h1>
          <div className="text__divider"> </div>
          <span>COLLECTION</span>
          <div className="third__grid">
            <div className="grid__item">
              <div className="item__img"></div>
              <h3>더 선명하고 깨끗하게</h3>
              <p>ForVivid Flavor</p>
            </div>

            <div className="grid__item">
              <div className="item__img"></div>
              <h3>자체 개발 추출방식</h3>
              <p>Original Extraction Mechanism</p>
            </div>

            <div className="grid__item">
              <div className="item__img"></div>
              <h3>콜드브루 커피: 새로운 패러다임</h3>
              <p>Cold Brew Coffee: The Next Wave</p>
            </div>
          </div>
        </article>
        <Zoom>
          <article className="seventh_article slide-in">
            <div> </div>
            <h1>COLD BREW COFFEE</h1>
          </article>
        </Zoom>

        <article className="eighth_article">
          <h1>SHOP</h1>
          <div className="text__divider"> </div>
          <span>ALL PRODUCTS</span>
          <div className="eighth_article_img"></div>
          <a href="#">Go to Shop</a>
        </article>
      </main>
    </>
  );
};

export default Home;
