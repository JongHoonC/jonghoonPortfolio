<template>
  <!-- <div class="example-modal-window"> -->
  <!-- </div> -->
  <MyModal @close="closeModal(index)" v-for="(pjlists, index) in pjlist" v-show="modal == index">
    <div class="firstImg">
      <img :src="pjlists.firstImg" alt="" />
      <img :src="pjlists.secondImg" alt="" />
      <img :src="pjlists.thirdImg" alt="" />
      <img :src="pjlists.fourthImg" alt="" />
      <img :src="pjlists.fifthImg" alt="" />
      <img :src="pjlists.sixthImg" alt="" />
    </div>
  </MyModal>
  <section class="section4" id="Project">
    <div class="projectTitle">
      <h4>PROJECT</h4>
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
        <div class="projectContent">
          <div v-for="toyProjects in toyProject1" class="box calc">
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
      <h3>{{ project[0].pjname }}</h3>
      <p>{{ project[0].comment }}</p>
      <div class="projectContent">
        <div v-for="(pjlists, index) in pjlist" class="box">
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
                  <img @click="openModal(index)" :src="pjlists.mokImg" alt="" />
                </div>
              </div>
            </div>
            <p class="using">{{ pjlists.using }}</p>
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
  import {ref} from 'vue';
  import MyModal from './MyModal.vue';
  export default {
    components: {MyModal},
    setup() {
      let modal = ref();
      let hoverImg__ignore = [{img: require('../assets/home.png')}, {img: require('../assets/github.png')}];
      let project = [
        {pjname: 'renewal project', comment: '기존 사이트를 리뉴얼한 리뉴얼 프로젝트'},
        {pjname: 'java script project', comment: '자바스크립트 실력을 늘리기 위한 토이 프로젝트'},
        {pjname: 'web clone', comment: 'HTML, CSS의 기초를 다지기 위해 연습했던 웹 클로닝 사이트'},
      ];
      let pjlist = [
        {
          img: require('../assets/seomoonThum.png'),
          pjtitle: '서문시장 야시장',
          using: 'HTML, CSS, JS, nodeJS, MySQL',
          site: 'https://seomoon-jonghoon.herokuapp.com/',
          git: 'https://github.com/JongHoonC/seomoon.git',
          homeImg: require('../assets/home.png'),
          gitImg: require('../assets/github.png'),
          mokImg: require('../assets/mockup.png'),
          firstImg: require('../assets/seomoon/서문시장.png'),
          secondImg: require('../assets/seomoon/email1.gif'),
        },
        {
          img: require('../assets/hyosungThum.png'),
          pjtitle: '효성 중공업',
          using: 'HTML, CSS, JS, jQuery, NodeJS, MySQL',
          site: 'https://hyosung-jonghoon.herokuapp.com/',
          git: 'https://github.com/JongHoonC/NODE-Hyosung.git',
          homeImg: require('../assets/home.png'),
          gitImg: require('../assets/github.png'),
          mokImg: require('../assets/mockup.png'),
          firstImg: require('../assets/hyosung/효성중공업1.png'),
          secondImg: require('../assets/hyosung/hyosung2.gif'),
          thirdImg: require('../assets/hyosung/hyosung3.gif'),
          fourthImg: require('../assets/hyosung/효성중공업2.png'),
          fifthImg: require('../assets/hyosung/hyosung4.gif'),
          sixthImg: require('../assets/hyosung/효성중공업3.png'),
        },
        {
          img: require('../assets/takjuThum.png'),
          pjtitle: '서울 탁주',
          using: 'HTML, CSS, JS, jQuery, NodeJS, MySQL',
          site: 'https://takju-jonghoon.herokuapp.com/',
          git: 'https://github.com/JongHoonC/SeoulTakju.git',
          homeImg: require('../assets/home.png'),
          gitImg: require('../assets/github.png'),
          mokImg: require('../assets/mockup.png'),
          firstImg: require('../assets/takju/takju1.png'),
          secondImg: require('../assets/takju/takju1.gif'),
          thirdImg: require('../assets/takju/takju2.png'),
          fourthImg: require('../assets/takju/takju2.gif'),
          fifthImg: require('../assets/takju/takju3.png'),
        },
      ];
      let toyProject = [
        {
          img: require('../assets/rocksissorpaper.png'),
          pjtitle: '가위 바뷔 보 게임',
          using: 'HTML, CSS, JS',
          homeImg: require('../assets/home.png'),
          gitImg: require('../assets/github.png'),
          site: 'https://jonghoonc.github.io/RockSissorPaper/',
          git: 'https://github.com/JongHoonC/RockSissorPaper.git',
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
          pjtitle: 'To Do List',
          using: 'HTML, CSS, JS',
          homeImg: require('../assets/home.png'),
          gitImg: require('../assets/github.png'),
          site: 'https://jonghoonc.github.io/TodoListJS/',
          git: 'https://github.com/JongHoonC/TodoListJS.git',
        },
      ];
      let toyProject1 = [
        {
          img: require('../assets/ballcontrol.png'),
          pjtitle: '공 움직이기',
          using: 'HTML, CSS, JS',
          homeImg: require('../assets/home.png'),
          gitImg: require('../assets/github.png'),
          site: 'https://jonghoonc.github.io/ballControl/',
          git: 'https://github.com/JongHoonC/ballControl.git',
        },
        {
          img: require('../assets/appleTree.png'),
          pjtitle: '사과 나무 게임',
          using: 'HTML, CSS, JS',
          homeImg: require('../assets/home.png'),
          gitImg: require('../assets/github.png'),
          site: 'https://jonghoonc.github.io/appleTree/',
          git: 'https://github.com/JongHoonC/appleTree.git',
        },
        {
          img: require('../assets/kiosk.png'),
          pjtitle: '키오스크',
          using: 'HTML, CSS, JS',
          homeImg: require('../assets/home.png'),
          gitImg: require('../assets/github.png'),
          site: 'https://jonghoonc.github.io/kiosk/',
          git: 'https://github.com/JongHoonC/kiosk.git',
        },
        {
          img: require('../assets/avoid.png'),
          pjtitle: '장애물 피하기',
          using: 'HTML, CSS, JS',
          homeImg: require('../assets/home.png'),
          gitImg: require('../assets/github.png'),
          site: 'https://jonghoonc.github.io/avoidObject/',
          git: 'https://github.com/JongHoonC/avoidObject.git',
        },
      ];
      let webClone = [
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
      ];
      function openModal(index) {
        modal.value = index;
        document.body.style = 'overflow: hidden';
      }
      function closeModal() {
        modal.value = 'index';
        document.body.style = 'overflow: unset';
      }

      return {modal, hoverImg__ignore, project, pjlist, toyProject, toyProject1, webClone, openModal, closeModal};
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
  .projectTitle > .projectContent > .box.calc {
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
  .firstImg {
    width: 1000px;
  }
  .firstImg > img {
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
    .projectTitle > .projectContent > .box.calc {
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
    .fadeup > .img > .mok__wrap {
      display: none;
    }
  }
</style>
