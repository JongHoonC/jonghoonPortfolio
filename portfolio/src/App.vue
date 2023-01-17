<template>
  <mainSection></mainSection>
  <aboutSection></aboutSection>
  <skillSection></skillSection>
  <project-section></project-section>
</template>

<script>
  import mainSection from './components/mainSection.vue';
  import aboutSection from './components/aboutSection.vue';
  import skillSection from './components/skillSection.vue';
  import ProjectSection from './components/projectSection.vue';

  export default {
    name: 'App',
    components: {
      mainSection,
      aboutSection,
      skillSection,
      ProjectSection,
    },
  };
</script>

<style></style>
