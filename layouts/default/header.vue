<template>
  <div ref="container" class="pre-header-wrapper">
    <div
      class="header-brand bg-gray-100 flex items-center justify-between px-9"
    >
      <div class="w-9 h-9"></div>
      <div
        class="desktop-user-menu h-9 mx-2 flex items-center gap-x-3 text-xs font-medium"
      >
        <div>
          <NuxtLink to="/retail" class="hover:text-gray-500"
            >Find a Store</NuxtLink
          >
        </div>
        <span>|</span>
        <div>
          <NuxtLink to="/help" class="hover:text-gray-500">Help</NuxtLink>
        </div>
        <span>|</span>
        <div>
          <NuxtLink to="/membership" class="hover:text-gray-500"
            >Join Us</NuxtLink
          >
        </div>
        <span>|</span>
        <div>
          <NuxtLink to="/sign-in" class="hover:text-gray-500">Sign In</NuxtLink>
        </div>
      </div>
    </div>
    <header class="relative h-15 flex items-center px-9 pt-1">
      <div class="logo">
        <Logo></Logo>
      </div>
      <div class="navigation h-full flex-1 flex justify-end">
        <Menu :menu="menu"></Menu>

        <div class="search">S</div>
      </div>
      <div class="actions flex items-center gap-x-3">
        <div class="w-9 h-9 p-2 cursor-pointer">
          <icons-heart filled="false"></icons-heart>
        </div>
        <div class="w-9 h-9 p-2 cursor-pointer">
          <icons-cart filled="false"></icons-cart>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import Menu from "./menu.vue";
import { menu } from "./menu.json";

// #region Data
// #endregion

// #region Function
// #endregion
</script>
