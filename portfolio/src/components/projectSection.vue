<template>
  <!-- <div class="example-modal-window"> -->
  <MyModal @close="closeModal" v-if="modal">
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
    <p class="show">Vue.js Modal Window!</p>
  </MyModal>
  <!-- </div> -->
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
            <div class="fadeup">
              <div class="img">
                <a v-bind:href="pjlists.site" target="_blank">
                  <img :src="pjlists.homeImg" alt="" />
                </a>
                <a v-bind:href="pjlists.git" target="_blank">
                  <img :src="pjlists.gitImg" alt="" />
                </a>
                <div class="mok__wrap">
                  <img @click="openModal" :src="pjlists.mokImg" alt="" />
                </div>
              </div>
            </div>
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
            <div class="fadeup">
              <div class="img">
                <a v-bind:href="toyProjects.site" target="_blank">
                  <img :src="toyProjects.homeImg" alt="" />
                </a>
                <a v-bind:href="toyProjects.git" target="_blank">
                  <img :src="toyProjects.gitImg" alt="" />
                </a>
              </div>
            </div>
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
            <div class="fadeup">
              <div class="img">
                <a v-bind:href="webClones.site" target="_blank">
                  <img :src="webClones.homeImg" alt="" />
                </a>
                <a v-bind:href="webClones.git" target="_blank">
                  <img :src="webClones.gitImg" alt="" />
                </a>
              </div>
            </div>
            <p class="using">{{ webClones.using }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import MyModal from './MyModal.vue';
  export default {
    components: {MyModal},
    data() {
      return {
        modal: false,
        message: '',
        hoverImg__ignore: [{img: require('../assets/home.png')}, {img: require('../assets/github.png')}],
        project: [
          {pjname: 'renewal project', comment: 'html 부터 backend 부분까지 작업한 프로젝트'},
          {pjname: 'toy project', comment: '남는 시간을 이용해 JS와 Vue를 활용하여 만든 토이 프로젝트 '},
          {pjname: 'web clone', comment: 'HTML, CSS의 기초를 다지기 위해 연습했던 웹 클로닝 사이트'},
        ],
        pjlist: [
          {
            img: require('../assets/seomoonThum.png'),
            pjtitle: '서문시장 야시장',
            using: 'HTML, CSS, JS, nodeJS, MySQL',
            complete: 'false',
            site: 'http://seomoonjh-env.eba-vifj7trn.ap-northeast-1.elasticbeanstalk.com/',
            git: 'https://github.com/JongHoonC/seomoon.git',
            homeImg: require('../assets/home.png'),
            gitImg: require('../assets/github.png'),
            mokImg: require('../assets/mockup.png'),
          },
          {
            img: require('../assets/hyosungThum.png'),
            pjtitle: '효성 중공업',
            using: 'HTML, CSS, JS, jQuery, NodeJS, MySQL',
            complete: 'false',
            site: 'http://jonghoon-env.eba-5pmv5k3e.ap-northeast-1.elasticbeanstalk.com/',
            git: 'https://github.com/JongHoonC/NODE-Hyosung.git',
            homeImg: require('../assets/home.png'),
            gitImg: require('../assets/github.png'),
            mokImg: require('../assets/mockup.png'),
          },
          {
            img: require('../assets/takjuThum.png'),
            pjtitle: '서울 탁주',
            using: 'HTML, CSS, JS, jQuery, NodeJS, MySQL',
            complete: 'false',
            site: 'http://jonghoontakju-env.eba-2hzeja3e.ap-northeast-1.elasticbeanstalk.com/',
            git: 'https://github.com/JongHoonC/SeoulTakju.git',
            homeImg: require('../assets/home.png'),
            gitImg: require('../assets/github.png'),
            mokImg: require('../assets/mockup.png'),
          },
        ],
        toyProject: [
          {
            img: require('../assets/calcThum.png'),
            pjtitle: '계산기',
            using: 'HTML, CSS, JS',
            homeImg: require('../assets/home.png'),
            gitImg: require('../assets/github.png'),
            site: 'http://bjh0126.dothome.co.kr/calculatorJS/index.html',
            git: 'https://github.com/JongHoonC/calculatorJS.git',
          },
          {
            img: require('../assets/guguThum.png'),
            pjtitle: '구구단 게임',
            using: 'HTML, CSS, JS, Vue',
            homeImg: require('../assets/home.png'),
            gitImg: require('../assets/github.png'),
            site: 'http://bjh0126.dothome.co.kr/gugudanGame/gugudan.html',
            git: 'https://github.com/JongHoonC/gugudanGame.git',
          },
          {
            img: require('../assets/findnumThum.png'),
            pjtitle: 'UP! DOWN!',
            using: 'HTML, CSS, JS, Vue',
            homeImg: require('../assets/home.png'),
            gitImg: require('../assets/github.png'),
            site: 'http://bjh0126.dothome.co.kr/updowngame/index.html',
            git: 'https://github.com/JongHoonC/updowngame.git',
          },
          {
            img: require('../assets/todolist.png'),
            pjtitle: '일정표 만들기',
            using: 'vue',
            homeImg: require('../assets/home.png'),
            gitImg: require('../assets/github.png'),
            site: 'https://jonghoonc.github.io/',
            git: 'https://github.com/JongHoonC/TodoList.git',
          },
        ],
        webClone: [
          {
            img: require('../assets/dosiraktongThum.png'),
            pjtitle: '도시락통',
            using: 'HTML, CSS, JS',
            homeImg: require('../assets/home.png'),
            gitImg: require('../assets/github.png'),
            site: 'http://bjh0126.dothome.co.kr/dosiraktong/index.html',
            git: 'https://github.com/JongHoonC/dosiraktong.git',
          },
          {
            img: require('../assets/gardenThum.png'),
            pjtitle: '싱그러운 집',
            using: 'HTML, CSS, JS',
            homeImg: require('../assets/home.png'),
            gitImg: require('../assets/github.png'),
            site: 'http://bjh0126.dothome.co.kr/shouse.garden/index.html',
            git: 'https://github.com/JongHoonC/shouse.garden.git',
          },
          {
            img: require('../assets/richmondThum.png'),
            pjtitle: '더 리치먼드 평창',
            using: 'HTML, CSS, JS',
            homeImg: require('../assets/home.png'),
            gitImg: require('../assets/github.png'),
            site: 'http://bjh0126.dothome.co.kr/therichmond/index.html',
            git: 'https://github.com/JongHoonC/therichmond.git',
          },
        ],
      };
    },
    methods: {
      openModal() {
        this.modal = true;
        document.body.style = 'overflow: hidden';
      },
      closeModal() {
        this.modal = false;
        document.body.style = 'overflow: unset';
      },
    },
  };
</script>

<style scoped>
  .section4 {
    width: 100%;
    height: auto;

    padding: 70px 20px 29px 20px;
    box-sizing: border-box;
  }
  .projectTitle > h4 {
    font-weight: bold;
    color: #365bab;
  }
  .projectTitle > h3 {
    margin: 20px 0;
    font-weight: 500;
    color: #365bab;
  }
  .projectTitle > p {
    margin-top: 10px;
    font-weight: bold;
  }
  .projectTitle {
    width: 1500px;
    margin: 80px auto;
  }
  .using {
    margin: 7px 0;
    font-weight: bold;
  }
  .projectTitle > .projectContent > .box {
    overflow: hidden;
    width: calc(33.33% - 20px);
    padding: 10px;
    box-shadow: 0px 1px 8px 3px #0000002e;
    color: rgba(0, 0, 0, 25%);
    box-sizing: border-box;
    transition: all 0.3s;
  }
  .projectTitle > .projectContent > .box[data-v-4722f99c].calc {
    width: calc(25% - 20px);
  }

  /* /////////////////박스 호버/////////////////// */
  .projectTitle > .projectContent > .box:hover {
    box-shadow: 0 10px 10px 5px;
    transform: translateY(-10px);
  }
  .projectTitle > .projectContent > .box:hover > .text__wrap > .using {
    visibility: hidden;
  }
  .projectTitle > .projectContent > .box:hover > .text__wrap > h2 {
    visibility: hidden;
  }
  .projectTitle > .projectContent > .box:hover > .text__wrap > .fadeup {
    display: block;
    position: absolute;
    bottom: 25px;
    left: 0;
    z-index: 9999;
    width: 100%;
    background-color: #eaebe4;
    animation: fadeInUp 0.3s;
  }
  /* /////////////////////////////////////////////// */
  .text__wrap {
    transition: all 0.3s;
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
  .fadeup {
    display: none;
  }
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  .img {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
  .fadeup > .img > a {
    display: block;
    width: 32px;
  }
  .fadeup > .img > a > img {
    /* display: block; */
    width: 100%;
    height: auto;
  }
  .fadeup > .img > .mok__wrap {
    display: block;
    width: 32px;
    cursor: pointer;
  }
  .fadeup > .img > .mok__wrap > img {
    /* display: block; */
    width: 100%;
    height: auto;
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
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 30px;
    }
    .projectTitle > .projectContent > .box[data-v-4722f99c].calc {
      width: 100%;
    }
    .img__wrap {
      width: 44%;
      margin-right: 10px;
      margin-bottom: 0;
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
    .projectTitle > .projectContent > .box:hover > .text__wrap > .fadeup {
      position: relative;
      top: 10px;
      width: 100%;
      height: auto;
    }
    .img {
      justify-content: space-evenly;
    }
  }
</style>
