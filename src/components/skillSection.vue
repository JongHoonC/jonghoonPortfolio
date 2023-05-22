<template>
  <section class="section3" id="Skill">
    <div class="skillTitle">
      <h4>SKILL</h4>
    </div>
    <div class="skillContent">
      <div class="skillUpper">
        <div v-for="(skillUppers, index) in skillUpper">
          <h2>{{ skillUppers.lang }}</h2>
          <div class="line" v-bind:id="`line${index + 1}`"></div>
          <p v-html="skillUppers.comment"></p>
        </div>
      </div>
      <div class="skillUnder">
        <div v-for="(skillUnders, index) in skillUnder">
          <h2>{{ skillUnders.lang }}</h2>
          <div class="line" v-bind:id="`line${index + 4}`"></div>
          <p v-html="skillUnders.comment"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        skillUpper: [
          {lang: 'HTML', comment: '웹 표준을 준수하며 접근성이<br/> 뛰어난 사이트를 제작할 수 있습니다.'},
          {lang: 'CSS', comment: 'CSS 코딩 컨벤션(Coding Convention)을<br/>지키며 나 혼자만의 코드가 아닌 여러사람이 봐도<br/>잘 알아볼 수 있어 가독성과 판독능력을 높일 수 있습니다.'},
          {lang: 'JS', comment: '모던 자바스크립트를 작성할 수 있으며,<br/> 객체나 배열에 대한 알맞은 반복문을 사용할 수 있으며, 많은 자바스크립트 프로젝트 개발 경험을 살려 기본이 탄탄한<br/> 개발자로써 더 성장할 수 있습니다.1'},
        ],
        skillUnder: [
          {
            lang: 'Node.js',
            comment: 'REST API를 이해하고,<br/> get, post, put, delete에 대해 설명 할 수 있습니다.<br/>npm을 사용할 수 있으며, html로 짜여진 코드를 ejs<br/>구조로 변환시킬 수 있습니다. express와 route를<br/> 사용해 서버를 구성할 수 있습니다.',
          },
          {lang: 'MySQL', comment: 'SQL 구문 중 DML, DDL, DCL에 <br/> 각각 어떤 명령어가 있고 그 명령어가 어떠한 역할을 하는지<br/> 이해하고 사용할 수 있습니다.'},
          {lang: 'VUE', comment: 'vue cli를 활용해 본 포트폴리오를 제작했습니다.<br/> 또 JS로 작성된 구문을 vue양식에 맞게 작성할 수 있습니다.'},
        ],
      };
    },
  };
</script>

<style scoped>
  /* ===========프로그래스 바============== */
  .line {
    width: 180px;
    height: 8px;
    margin: 20px;
    margin: 10px auto 22px auto;
  }
  .section3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1600px;
    margin: 0 auto;
  }
  .skillTitle > h4 {
    font-weight: bold;
    color: #365bab;
    letter-spacing: 10px;
  }

  .skillContent > div {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .skillContent > div > div {
    width: 450px;
  }
  .skillContent > div > div > h2 {
    font-weight: bold;
  }

  .skillContent > div > p {
    text-align: center;
  }
  .skillUpper {
    width: 1550px;
    margin: 100px auto;
  }
  .skillUnder {
    width: 1550px;
    margin: 0 auto;
  }
  @media (max-width: 1600px) {
    .section3 {
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .skillUpper {
      width: 100%;
    }
    .skillUnder {
      width: 100%;
    }
  }
  @media (max-width: 1200px) {
    .section3 {
      height: auto;
      padding-top: 70px;
    }

    .skillContent {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
    }
    .skillContent > div {
      flex-direction: column;
      justify-content: space-between;
      margin: 0;
    }
    .skillContent > div > div {
      width: auto;
      height: 200px;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    .skillContent {
      display: flex;
      flex-direction: column;
    }
    .skillContent > div > div {
      width: auto;
      height: 180px;
      text-align: center;
    }
    .skillTitle > h4 {
      text-align: center;
    }
  }
</style>
