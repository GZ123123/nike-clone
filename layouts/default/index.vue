<template>
  <div>
    <Header />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "./footer.vue";
import Header from "./header.vue";
</script>

<style scoped></style>
