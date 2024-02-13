<template>
  <div>
    <layouts-navigator />
    mens-clothing
  </div>
</template>

<script setup lang="ts">
const state = useBreadcrumb({ title: "Men Clothings" });

onMounted(() => {
  console.log("log - state: ", state);
});
</script>

<style scoped></style>
