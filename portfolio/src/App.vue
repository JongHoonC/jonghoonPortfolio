<template>
  <mainSection></mainSection>
  <aboutSection></aboutSection>
</template>

<script>
  import mainSection from './components/mainSection.vue';
  import aboutSection from './components/aboutSection.vue';

  export default {
    name: 'App',
    components: {
      mainSection,
      aboutSection,
    },
  };
</script>

<style></style>
