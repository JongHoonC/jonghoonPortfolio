<template>
  <mainSection></mainSection>
  <aboutSection></aboutSection>
  <skillSection></skillSection>
</template>

<script>
  import mainSection from './components/mainSection.vue';
  import aboutSection from './components/aboutSection.vue';
  import skillSection from './components/skillSection.vue';

  export default {
    name: 'App',
    components: {
      mainSection,
      aboutSection,
      skillSection,
    },
  };
</script>

<style></style>
