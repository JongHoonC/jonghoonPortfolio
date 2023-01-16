<template>
  <section class="section2" id="About">
    <div class="section2__wrap">
      <div class="img__wrap">
        <h1>About</h1>
        <article class="intro__imagebox"></article>
      </div>
      <div class="my__intro">
        <div class="intro__name">
          <h2>백종훈<span>1999.01.26</span></h2>
        </div>
        <div class="inner__intro">
          <article class="intro__history">
            <div class="history__inner">
              <h2>HISTORY</h2>
              <P v-for="historylist in history">{{ historylist.year }} {{ historylist.action }}</P>
            </div>
          </article>
          <article class="intro__introduce">
            <div class="introduce--title">
              <h2>INTRODUCE</h2>
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
                낮은 곳에서 높은 곳을 바라보며 프론트엔드에 대한 더 많은 것을 보고 배우면서 <br />
                꾸준히 성장하는 개발자가 되고 싶습니다.<br />
                반드시 오류를 해결한다는 마음가짐으로 항상 맡은 일에 대한 책임을 가지고 임하겠습니다.
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
    justify-content: space-between;
    width: 1600px;
    height: 100vh;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .img__wrap > h1 {
    margin-bottom: 50px;
    color: #365bab;
    font-weight: bold;
  }
  .my__intro {
    padding-top: 150px;
    box-sizing: border-box;
  }
  /* =========이미지 박스 부분 ============= */
  .intro__imagebox {
    width: 386px;
    height: 515px;
    border: 1px solid #000;
    /* background-image: url(../assets/portpolioimg.jpg); */
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  /* =========히스토리 부분========== */
  .intro__history {
    display: flex;
    flex-direction: column;
  }

  /* ==========이름============= */
  .intro__name > h2 {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 6px;
  }
  .intro__name > h2 > span {
    margin-left: 30px;
    font-size: 30px;
  }

  /* ============이너 인트로============= */
  .inner__intro {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /* ==========이너 히스토리============ */
  .history__inner > h2 {
    margin: 40px 0;
    font-size: 30px;
    font-weight: bold;
    color: #365bab;
    letter-spacing: 7px;
  }

  .history__inner > p {
    margin: 30px 0;
    letter-spacing: 1px;
  }

  /* =============인트로듀스============ */
  .intro__introduce {
    position: relative;
    top: 12px;
    margin-left: 100px;
    box-sizing: border-box;
  }
  .introduce--title > h2 {
    font-size: 30px;
    font-weight: bold;
    color: #365bab;
    letter-spacing: 7px;
  }

  .introduce--subtitle > h2 {
    margin: 20px 0;
    font-weight: bold;
    letter-spacing: 4px;
  }

  .introduce--content > p {
    line-height: 300%;
    letter-spacing: 1px;
  }
  .introduce--content > p > span {
    font-weight: bold;
  }

  @media (max-width: 1600px) {
    .section2__wrap {
      width: 100%;
    }
  }
</style>
