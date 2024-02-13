<template>
  <div class="relative">
    <layouts-navigator />

    <Banner />

    {{ $t("welcome") }}

    <div class="h-[100vh]"></div>
  </div>
</template>

<script setup lang="ts">
import Banner from "./ignore/banner.vue";

useBreadcrumb({ title: "Men" });
</script>

<style scoped></style>
