<template>
  <section class="section4" id="Project">
    <div class="projectTitle">
      <h4>PROJECT</h4>
      <h3>{{ project[0].pjname }}</h3>
      <p>{{ project[0].comment }}</p>
      <div class="projectContent">
        <div v-for="pjlists in pjlist" class="box">
          <div class="img__wrap">
            <img :src="pjlists.img" alt="" />
          </div>
          <div class="text__wrap">
            <h2>{{ pjlists.pjtitle }}</h2>
            <p class="using">{{ pjlists.using }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="projectTitle">
      <h3>{{ project[1].pjname }}</h3>
      <p>{{ project[1].comment }}</p>
      <div class="projectContent">
        <div v-for="toyProjects in toyProject" class="box calc">
          <div class="img__wrap">
            <img :src="toyProjects.img" alt="" />
          </div>
          <div class="text__wrap">
            <h2>{{ toyProjects.pjtitle }}</h2>
            <p class="using">{{ toyProjects.using }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="projectTitle">
      <h3>{{ project[2].pjname }}</h3>
      <p>{{ project[2].comment }}</p>
      <div class="projectContent">
        <div v-for="webClones in webClone" class="box">
          <div class="img__wrap">
            <img :src="webClones.img" alt="" />
          </div>
          <div class="text__wrap">
            <h2>{{ webClones.pjtitle }}</h2>
            <p class="using">{{ webClones.using }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        project: [
          {pjname: 'renewal project', comment: 'html 부터 backend 부분까지 작업한 프로젝트'},
          {pjname: 'toy project', comment: '남는 시간을 이용해 JS와 Vue를 활용하여 만든 토이 프로젝트 '},
          {pjname: 'web clone', comment: 'HTML, CSS의 기초를 다지기 위해 연습했던 웹 클로닝 사이트'},
        ],
        pjlist: [
          {img: require('../assets/seomoonThum.png'), pjtitle: '서문시장 야시장', using: 'HTML, CSS, JS, nodeJS, MySQL', complete: 'false'},
          {img: require('../assets/hyosungThum.png'), pjtitle: '효성 중공업', using: 'HTML, CSS, JS, jQuery, NodeJS, MySQL', complete: 'false'},
          {img: require('../assets/takjuThum.png'), pjtitle: '서울 탁주', using: 'HTML, CSS, JS, jQuery, NodeJS, MySQL', complete: 'false'},
        ],
        toyProject: [
          {img: require('../assets/calcThum.png'), pjtitle: '계산기', using: 'HTML, CSS, JS'},
          {img: require('../assets/guguThum.png'), pjtitle: '구구단 게임', using: 'HTML, CSS, JS, Vue'},
          {img: require('../assets/findnumThum.png'), pjtitle: 'UP! DOWN!', using: 'HTML, CSS, JS, Vue'},
          {img: require('../assets/todolist.png'), pjtitle: '일정표 만들기', using: 'vue'},
        ],
        webClone: [
          {img: require('../assets/dosiraktongThum.png'), pjtitle: '도시락통', using: 'HTML, CSS, JS'},
          {img: require('../assets/gardenThum.png'), pjtitle: '싱그러운 집', using: 'HTML, CSS, JS'},
          {img: require('../assets/richmondThum.png'), pjtitle: '더 리치먼드 평창', using: 'HTML, CSS, JS'},
        ],
      };
    },
  };
</script>

<style scoped>
  .section4 {
    width: 100%;
    height: auto;
    padding: 110px 20px 29px 20px;
    box-sizing: border-box;
  }
  .projectTitle > h4 {
    font-weight: bold;
    color: #365bab;
  }
  .projectTitle > h3 {
    font-weight: 500;
    color: #365bab;
  }
  .projectTitle > p {
    margin-top: 10px;
    font-weight: bold;
  }
  .projectTitle {
    width: 1500px;
    margin: 40px auto;
  }
  .using {
    margin: 7px 0;
    font-weight: bold;
  }
  .projectTitle > .projectContent > .box {
    padding: 10px;
    box-shadow: 0px 1px 8px 3px #0000002e;
    color: rgba(0, 0, 0, 25%);
    box-sizing: border-box;
    transition: all 0.3s;
    width: calc(33.33% - 20px);
  }
  .projectTitle > .projectContent > .box[data-v-4722f99c].calc {
    width: calc(25% - 20px);
  }
  .projectTitle > .projectContent > .box:hover {
    box-shadow: 0 10px 10px 5px;
    transform: translateY(-10px);
  }
  .box > .text__wrap > h2 {
    padding-left: 8px;
    font-weight: bold;
    color: #365bab;
    letter-spacing: 2px;
    box-sizing: border-box;
  }
  .box > .text__wrap > p {
    padding-left: 10px;
    box-sizing: border-box;
  }
  .projectContent {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .img__wrap {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
  }
  .img__wrap > img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (max-width: 1500px) {
    .projectTitle {
      width: 100%;
    }
    .projectContent {
      width: 100%;
    }
  }
  @media (max-width: 1200px) {
    .section4 {
      padding: 70px 20px 29px 20px;
    }
  }
  @media (max-width: 768px) {
    .projectContent {
      flex-direction: column;
    }
    .projectTitle > .projectContent > .box {
      width: 100%;
      margin: 0 auto;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
    }
    .projectTitle > .projectContent > .box[data-v-4722f99c].calc {
      width: 100%;
    }
    .img__wrap {
      /* width: 200px; */
      /* min-width: 200px; */
      width: 44%;
      margin-bottom: 0;
      margin-right: 10px;
    }
    .projectTitle {
      margin: 20px 0;
      text-align: center;
    }
    .section4 > h4 {
      text-align: center;
    }
    .text__wrap {
      width: 56%;
    }
  }
</style>
