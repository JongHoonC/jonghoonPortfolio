<template>
  <section class="section4" id="Project">
    <div class="projectTitle">
      <h1>{{ project[0].pjname }}</h1>
      <p>{{ project[0].comment }}</p>
      <div class="projectContent">
        <div v-for="pjlists in pjlist" class="box">
          <div class="img__wrap">
            <img :src="pjlists.img" alt="" />
          </div>
          <h2>{{ pjlists.pjtitle }}</h2>
          <p class="using">{{ pjlists.using }}</p>
        </div>
      </div>
    </div>
    <div class="projectTitle">
      <h1>{{ project[1].pjname }}</h1>
      <p>{{ project[1].comment }}</p>
      <div class="projectContent">
        <div v-for="toyProjects in toyProject" class="box">
          <div class="img__wrap">
            <img :src="toyProjects.img" alt="" />
          </div>
          <h2>{{ toyProjects.pjtitle }}</h2>
          <p class="using">{{ toyProjects.using }}</p>
        </div>
      </div>
    </div>
    <div class="projectTitle">
      <h1>{{ project[2].pjname }}</h1>
      <p>{{ project[2].comment }}</p>
      <div class="projectContent">
        <div v-for="webClones in webClone" class="box">
          <div class="img__wrap">
            <img :src="webClones.img" alt="" />
          </div>
          <h2>{{ webClones.pjtitle }}</h2>
          <p class="using">{{ webClones.using }}</p>
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
          {pjname: 'Project', comment: 'html 부터 backend 부분까지 작업한 프로젝트'},
          {pjname: 'Toy Project', comment: '남는 시간을 이용해 JS와 Vue를 활용하여 만든 토이 프로젝트 '},
          {pjname: 'WEB Clone', comment: 'HTML, CSS의 기초를 다지기 위해 연습했던 웹 클로닝 사이트'},
        ],
        pjlist: [
          {img: require('../assets/seomoonThum.png'), pjtitle: '서문시장 야시장', using: 'HTML, CSS, JS, nodeJS, MySQL'},
          {img: require('../assets/hyosungThum.png'), pjtitle: '효성 중공업', using: 'HTML, CSS, JS, jQuery, NodeJS, MySQL'},
          {img: require('../assets/takjuThum.png'), pjtitle: '서울 탁주', using: 'HTML, CSS, JS, jQuery, NodeJS, MySQL'},
        ],
        toyProject: [
          {img: require('../assets/calcThum.png'), pjtitle: '계산기', using: 'HTML, CSS, JS'},
          {img: require('../assets/guguThum.png'), pjtitle: '구구단 게임', using: 'HTML, CSS, JS, Vue'},
          {img: require('../assets/findnumThum.png'), pjtitle: 'UP & DOWN 게임', using: 'HTML, CSS, JS, Vue'},
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
  .projectTitle > h1 {
    padding-top: 20px;
    font-size: 30px;
    font-weight: bold;
    color: #365bab;
    box-sizing: border-box;
  }
  .projectTitle > p {
    margin-top: 10px;
    font-weight: bold;
  }
  .projectTitle {
    margin: 80px 0;
  }
  .using {
    margin: 7px 0;
    font-weight: bold;
  }
  .box {
    padding: 5px;
    box-shadow: 0px 1px 8px 3px #0000002e;
    color: rgba(0, 0, 0, 25%);
    box-sizing: border-box;
    transition: all 0.3s;
  }
  .box:hover {
    box-shadow: 0 10px 10px 5px;
    transform: translateY(-10px);
  }
  .box > h2 {
    padding-left: 10px;
    font-weight: bold;
    color: #365bab;
    letter-spacing: 4px;
    box-sizing: border-box;
  }
  .box > p {
    padding-left: 10px;
    box-sizing: border-box;
  }
  .section4 {
    width: 1500px;
    height: auto;
    margin: 0 auto;
    padding: 20px 0;
    box-sizing: border-box;
  }
  .projectContent {
    display: flex;
    justify-content: space-between;
    width: 1420px;
    margin: 40px auto;
  }
  .img__wrap {
    width: 450px;
    height: auto;
    margin-bottom: 15px;
  }
  .img__wrap > img {
    display: block;
    width: 100%;
    height: auto;
  }
</style>
