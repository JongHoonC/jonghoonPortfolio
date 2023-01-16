<template>
  <section class="section1" id="Main">
    <div class="gnb">
      <h2 @click="goSection" v-for="gnblist in gnb" class="gotosec" v-bind:data-target="gnblist">{{ gnblist }}</h2>
    </div>
    <div class="section1__img"></div>
    <div class="section1__title">
      <h1>"{{ section1Title }}"</h1>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        section1Title: '반갑습니다.',
        gnb: ['Main', 'About', 'Skill', 'Project', 'Contact'],
      };
    },
    methods: {
      goSection(e) {
        if (!e.target.matches('.gotosec')) return; //gotosec라는 함수를 다른곳에서 썼을 경우 그 아래에 있는 if 문은 작동하지 않는다.
        e.preventDefault(); //새로고침 방지
        const sec = document.getElementById(e.target.dataset.target); //템플리트에서 작성한 data-target을 찾아서 이동하는 함수
        console.log(sec);
        if (sec) {
          sec.scrollIntoView({behavior: 'smooth'}); //화면이 부드럽게 내려가는 효과
        }
      },
    },
  };
</script>

<style scoped>
  /* =============헤더=============== */
  .gnb {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999;
    width: 100%;
    padding: 40px 50px;
    background-color: #eaebe4;
    box-sizing: border-box;
  }

  .gnb > h2 {
    display: block;
    padding-left: 30px;
    font-weight: bold;
    color: #6d5e70;
    letter-spacing: 3px;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.3s;
  }
  .gnb > h2:hover {
    font-size: 26px;
    color: #365bab;
  }
  .section1 {
    position: relative;
  }

  .section1__title h1 {
    position: absolute;
    top: 30%;
    left: 45%;
    transform: translate(-50%);
  }
  .section1__img {
    position: relative;
    top: 35%;
    left: 52%;
    z-index: -1;
    width: 334px;
    height: 478px;
    background-image: url(../assets/발표자세.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    transform: translate(-50%);
    animation-name: rotate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(-3deg);
    }
    50% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-3deg);
    }
  }
</style>
