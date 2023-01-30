<template>
  <section class="section1" id="Main">
    <div id="gnb">
      <h2 v-bind:class="`${gnblist}`" v-for="gnblist in gnb" v-bind:data-target="gnblist">
        <a :href="`#${gnblist}`">{{ gnblist }}</a>
      </h2>
    </div>
    <div class="section1__title">
      <h1>
        시도하는 개발자<br />
        <span> 백종훈</span> 입니다.
      </h1>
    </div>
    <!-- <div class="spacer s0"></div> -->
    <div id="animate" class="box1 blue">
      <div class="section1__img"></div>
    </div>
    <div class="hello" data-aos="fade-up" data-aos-offset="700" data-aos-duration="200">
      <h1>"반갑습니다"</h1>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        gnb: ['Main', 'About', 'Skill', 'Project', 'Contact'],
      };
    },
  };
</script>

<style scoped>
  /* =============헤더=============== */
  #gnb {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9990;
    width: 100%;
    padding: 40px 50px;
    background-color: #eaebe4;
    box-sizing: border-box;
    transition: all 0.2s;
  }

  #gnb > h2 {
    display: block;
    margin-left: 30px;
    font-weight: bold;
    letter-spacing: 3px;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.2s;
  }
  #gnb > h2 > a {
    display: block;
    width: 100%;
    height: auto;
    color: #6d5e70;
    transition: all 0.2s;
  }
  #gnb > h2.active > a[data-v-a63be1e8] {
    font-size: 26px;
    color: #365bab;
  }

  .section1 {
    position: relative;
    width: 100%;
    height: 2000px;
  }

  .section1__title {
    position: absolute;
    top: 10%;
    left: 50%;
    width: 100%;
    transform: translate(-50%);
  }
  .section1__title > h1 {
    width: 100%;
    text-align: center;
  }
  .section1__title > h1 > span {
    font-weight: bold;
    color: #365bab;
  }
  .section1__title > h1 > br {
    display: none;
  }
  .section1__img {
    display: flex;
    width: 140px;
    height: 211px;
    margin: 370px auto;
    background-image: url(../assets/blue.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    transition: all 0.2s;
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

  .hello {
    display: block;
    position: absolute;
    bottom: 700px;
    left: 200px;
  }
  .hello > h1 {
  }
  @media (max-width: 1200px) {
    #gnb {
      padding: 20px 50px;
    }
    #gnb > h2.active > a[data-v-a63be1e8] {
      font-size: 22px;
    }
    .section1__img {
      margin: 500px auto;
    }
    .hello {
      bottom: 700px;
      left: 100px;
    }
  }
  @media (max-width: 768px) {
    #gnb {
      justify-content: space-between;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
    }
    #gnb > h2 {
      margin-left: 0px;
    }
    #gnb > h2.active > a[data-v-a63be1e8] {
      font-size: 20px;
    }
    .section1 {
      height: 1800px;
    }
    .section1__title > h1 > br {
      display: block;
    }
    .section1__img {
      margin: 370px auto;
    }
  }
</style>
