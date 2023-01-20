<template>
  <section class="section1" id="Main">
    <div id="gnb">
      <h2 v-bind:class="`${gnblist}`" v-for="gnblist in gnb" v-bind:data-target="gnblist">
        <a :href="`#${gnblist}`">{{ gnblist }}</a>
      </h2>
    </div>
    <div class="section1__title">
      <h1>"{{ section1Title }}"</h1>
    </div>
    <!-- <div class="spacer s0"></div> -->
    <div id="animate" class="box1 blue">
      <div class="section1__img"></div>
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
  };
</script>

<style scoped>
  /* =============헤더=============== */
  #gnb {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    align-items: center;
    top: 0;
    right: 0;
    z-index: 9999;
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
    width: 100%;
    height: 2000px;
    position: relative;
  }

  .section1__title {
    position: absolute;
    top: 15%;
    left: 20%;
  }
  .section1__img {
    display: flex;
    margin: 370px auto;
    width: 140px;
    height: 211px;
    background-image: url(../assets/blue.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    animation-name: rotate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transition: all 0.2s;
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
  @media (max-width: 1200px) {
    #gnb {
      padding: 20px 50px;
    }
    #gnb > h2.active > a[data-v-a63be1e8] {
      font-size: 22px;
    }
  }
  @media (max-width: 768px) {
    #gnb {
      width: 100%;
      justify-content: space-between;
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
  }
</style>
