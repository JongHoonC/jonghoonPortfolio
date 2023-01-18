<template>
  <section class="section5" id="Contact">
    <div class="sectionTitle">
      <h1>Contact</h1>
      <h2>
        제 포트폴리오를 봐주셔서 감사합니다.<br />
        최소한의 시간으로 최고의 효율을 뽑는 개발자가 되겠습니다.
      </h2>
    </div>
    <div class="contactBox">
      <div class="imgWrap">
        <img :src="img" alt="" />
      </div>
      <div class="callMe">
        <div class="name">
          <p>NAME</p>
          <h2>{{ name }}</h2>
        </div>
        <div class="role">
          <p>ROLE</p>
          <h2>{{ role }}</h2>
        </div>
        <div class="phone">
          <p>PHONE</p>
          <h2>{{ phone }}</h2>
        </div>
        <div class="clickBox">
          <a v-bind:href="img" download><h2>자기소개서</h2></a>
          <a v-bind:href="img" download><h2>이력서</h2></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        img: require('../assets/black.png'),
        name: '백종훈',
        role: 'Front-End Developer',
        phone: '010-3869-3741',
      };
    },
  };
</script>

<style scoped>
  .section5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .imgWrap {
    width: 230px;
    height: auto;
  }
  .imgWrap > img {
    display: block;
    width: 100%;
    height: auto;
  }

  .sectionTitle > h1 {
    color: #365bab;
    font-weight: bold;
  }
  .sectionTitle > h2 {
    font-weight: bold;
    margin: 20px 0;
  }

  .contactBox {
    width: 900px;
    display: flex;
    align-items: center;
    margin: 50px auto 0 auto;
    justify-content: space-evenly;
  }
  .callMe {
    text-align: left;
  }
  .role {
    margin: 20px 0;
  }
  .callMe > div > p {
    color: #365bab;
    font-weight: bold;
  }
  .callMe > div > h2 {
    font-weight: bold;
    margin: 5px 0 40px 0;
  }
  .clickBox {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .clickBox > a {
    display: block;
    width: 200px;
    height: 60px;
    border: none;
    background-color: #365bab;
    border-radius: 999px;
    line-height: 60px;
    overflow: hidden;
  }

  .clickBox > a > h2 {
    color: #eaebe4;
    text-align: center;
    letter-spacing: 3px;
    font-weight: bold;
  }

  .clickBox > a:nth-child(1) {
    margin-right: 50px;
  }
</style>
