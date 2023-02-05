<template>
  <section class="section2" id="About">
    <div class="section2__wrap">
      <div class="my__intro">
        <div class="inner__intro">
          <div class="img__wrap">
            <h4>ABOUT</h4>
            <article class="intro__imagebox"></article>
          </div>
          <article class="intro__history">
            <div class="history__inner">
              <div class="intro__name">
                <h4>백종훈<span>1999.01.26</span></h4>
              </div>
              <h3>HISTORY</h3>
              <P v-for="historylist in history">{{ historylist.year }} {{ historylist.action }}</P>
            </div>
          </article>
          <article class="intro__introduce">
            <div class="introduce--title">
              <h3>INTRODUCE</h3>
            </div>
            <div class="introduce--subtitle">
              <h2>
                부딪혀보고 시도하는 프론트엔드 개발자<br />
                백종훈 입니다.
              </h2>
            </div>
            <div class="introduce--content">
              <p>
                안녕하세요. 실패를 두려워하지 않는 신입 프론트엔드 개발자 <span>백종훈</span> 입니다.<br />
                더 높은 곳을 바라보며 프론트엔드에 대한 더 많은 것을 보고 배우면서 꾸준히 성장하는 개발자가 되고 싶습니다. 반드시 오류를 해결한다는 마음가짐으로 항상 맡은 일에 대한 책임을 가지고 임하겠습니다.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        history: [
          {year: '2023', action: '학점은행제 학사 학위 취득 예정'},
          {year: '2022.09.01 ~ 2023.02.14', action: '뷰 프론트엔드 과정 수료'},
          {year: '2019', action: 'IT보안과 졸업'},
          {year: '2017', action: '네트워크 관리사 취득'},
          {year: '2017', action: 'PC정비사 취득'},
          {year: '2014', action: '육군참모총장배 로봇 프로그래밍 대회 2등 수상'},
        ],
      };
    },
  };
</script>

<style scoped>
  /* ==========큰 섹션 묶기=========== */
  .section2__wrap {
    display: flex;
    align-items: center;
    width: 1500px;
    height: 100vh;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .img__wrap > h4 {
    margin-bottom: 90px;
    font-weight: bold;
    color: #365bab;
  }

  /* =========이미지 박스 부분 ============= */
  .intro__imagebox {
    width: 300px;
    height: 392px;
    /* border: 1px solid #000; */
    background-image: url(../assets/portpolioimg.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  /* =========히스토리 부분========== */
  .intro__history {
    display: flex;
    flex-direction: column;
    width: 42%;
    padding: 160px 0 0 20px;
    box-sizing: border-box;
  }

  /* ==========이름============= */

  .intro__name > h4 {
    font-weight: bold;
  }
  .intro__name > h4 > span {
    margin-left: 10px;
    font-size: 1.875rem;
  }

  /* ============이너 인트로============= */
  .inner__intro {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  /* ==========이너 히스토리============ */
  .history__inner > h3 {
    margin: 30px 0 40px 0;
    font-weight: 500;
    color: #365bab;
  }

  .history__inner > p {
    margin: 20px 0;
  }

  /* =============인트로듀스============ */
  .intro__introduce {
    position: relative;
    top: 12px;
    width: 60%;
    padding: 200px 15px 0 15px;
    box-sizing: border-box;
    transition: none;
  }
  .introduce--title > h3 {
    font-weight: 500;
    color: #365bab;
  }

  .introduce--subtitle > h2 {
    margin: 20px 0;
    font-weight: bold;
  }

  .introduce--content > p {
    line-height: 300%;
    word-break: break-all;
  }
  .introduce--content > p > span {
    font-weight: bold;
  }

  @media (max-width: 1500px) {
    .section2__wrap {
      width: 100%;
    }
  }
  @media (max-width: 1440px) {
    .intro__imagebox {
      width: 278px;
      height: 362px;
    }
  }

  @media (max-width: 1200px) {
    .section2__wrap {
      height: auto;
      padding-top: 25px;
      box-sizing: border-box;
    }
    .my__intro {
      padding-top: 40px;
      box-sizing: border-box;
    }
    .inner__intro {
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
    }
    .img__wrap {
      width: 40%;
    }
    .img__wrap > h4 {
      margin: 0;
    }
    .intro__imagebox {
      width: 249px;
      height: 315px;
      margin: 0 auto;
    }
    .intro__history {
      width: 60%;
    }
    .history__inner > h3 {
      margin: 20px 0;
    }

    .intro__introduce {
      top: 10px;
      width: 87vw;
      padding: 0;
    }
    .intro__history {
      padding: 50px 0 0 20px;
      box-sizing: border-box;
    }
  }

  @media (max-width: 768px) {
    .intro__imagebox {
      width: 219px;
      height: 278px;
    }
    .inner__intro {
      flex-direction: column;
    }
    .intro__introduce {
      width: 100%;
      padding: 0;
      text-align: center;
    }
    .intro__history {
      width: 100%;
      padding: 20px 0;
      text-align: center;
    }
    .img__wrap {
      width: 100%;
      text-align: center;
    }
    .img__wrap > h3 {
      margin-bottom: 20px;
      padding-top: 30px;
    }
    .img__wrap > h3 {
      text-align: left;
    }
  }
</style>
