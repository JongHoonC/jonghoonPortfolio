<template>
  <mainSection></mainSection>
  <aboutSection></aboutSection>
  <skillSection></skillSection>
  <project-section></project-section>
  <contact-section></contact-section>
</template>

<script>
import mainSection from './components/mainSection.vue';
import aboutSection from './components/aboutSection.vue';
import skillSection from './components/skillSection.vue';
import ProjectSection from './components/projectSection.vue';
import ContactSection from './components/contactSection.vue';

export default {
  name: 'App',
  components: {
    mainSection,
    aboutSection,
    skillSection,
    ProjectSection,
    ContactSection,
  },
};
</script>

<style></style>
