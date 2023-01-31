const {defineConfig} = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: '/jonghoonPortfolio/', //레파지토리명
  outputDir: './docs', //dist를 docs로 바꾸고  npm run build 후 깃에 업로드 하기
  // 깃허브에  setting  ==>   pages  ==>  barnch(main ,   /docs )
});
