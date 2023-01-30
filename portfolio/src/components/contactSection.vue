<template>
  <section class="section5" id="Contact">
    <div class="sectionTitle">
      <h4>CONTACT</h4>
      <h2>
        제 포트폴리오를 봐주셔서 감사합니다.<br />
        최소한의 시간으로 최고의 효율을 뽑는 개발자가 되겠습니다.
      </h2>
    </div>
    <div class="contactBox">
      <div class="imgWrap" id>
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
          <a :href="`${publicPath}jonghoonResume.pdf`" download><h2>이력서</h2></a>
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
        resume: '@/assets/resume.pdf',
        publicPath: process.env.BASE_URL,
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
    margin: 0 auto;
  }
  .imgWrap > img {
    display: block;
    width: 100%;
    height: auto;
  }

  .sectionTitle > h4 {
    font-weight: bold;
    color: #365bab;
  }
  .sectionTitle > h2 {
    margin: 20px 0;
    font-weight: bold;
  }

  .contactBox {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 900px;
    margin: 50px auto 0 auto;
  }
  .callMe {
    text-align: left;
  }
  .role {
    margin: 20px 0;
  }
  .callMe > div > p {
    font-weight: bold;
    color: #365bab;
  }
  .callMe > div > h2 {
    margin: 5px 0 40px 0;
    font-weight: bold;
  }
  .clickBox {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .clickBox > a {
    display: block;
    overflow: hidden;
    width: 200px;
    height: 60px;
    border: none;
    border-radius: 999px;
    background-color: #365bab;
    line-height: 63px;
  }

  .clickBox > a > h2 {
    font-weight: bold;
    color: #eaebe4;
    text-align: center;
    letter-spacing: 3px;
  }

  .clickBox > a:nth-child(1) {
    margin-right: 50px;
  }

  @media (max-width: 1200px) {
    .imgWrap {
      width: 200px;
    }
    .clickBox > a {
      width: 150px;
      height: 40px;
      line-height: 43px;
    }
    .section5 {
      padding: 20px 20px 120px 20px;
      box-sizing: border-box;
    }
  }
  @media (max-width: 900px) {
    .contactBox {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .section5 {
      padding: 40px 20px 40px 20px;
    }
    .imgWrap {
      min-width: 130px;
    }
    .clickBox > a:nth-child(1) {
      margin-right: 20px;
    }
    .contactBox {
      flex-direction: column;
      margin-top: 0;
    }
    .callMe {
      margin-top: 30px;
      text-align: center;
    }
    .callMe > div > h2 {
      margin: 5px 0 20px 0;
    }
  }
</style>
