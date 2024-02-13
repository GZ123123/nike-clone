<template>
  <div class="menu">
    <ul
      class="desktop-menu absolute left-1/2 -translate-x-1/2 justify-center items-center"
    >
      <template v-for="item in menu">
        <li class="menu-item group">
          <template v-if="item.url">
            <a>{{ item.name }}</a>
          </template>
          <template v-else>
            <NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
          </template>

          <template v-if="item.subMenu?.length">
            <div
              class="absolute top-14 z-20 left-0 w-full bg-white hidden group-hover:block"
            >
              <div class="pt-4 pb-10 px-10 flex justify-center gap-5 bg-white">
                <template v-for="subItem in item.subMenu">
                  <div
                    class="min-w-56 pt-4 px-[6px] flex flex-col gap-y-[14px] text-left"
                  >
                    <button class="text-left font-medium text-base">
                      {{ subItem.name }}
                    </button>
                    <div class="flex flex-col gap-y-[6px]">
                      <template v-for="subSubItem in subItem.items">
                        <NuxtLink
                          :to="subSubItem.url"
                          class="text-sm text-gray-500 hover:text-black"
                          >{{ subSubItem.name }}</NuxtLink
                        >
                      </template>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
//#region Import
import type { IMenu } from "~/core/interfaces";
// #endregion

type TProps = {
  menu: IMenu;
};

//#region Config
defineProps<TProps>();
//#endregion
</script>

<style scoped>
.desktop-menu {
  margin: 0 auto;
  width: calc(100% - 480px);
  /* width: calc(100% - 680px); */
  height: 100%;
  overflow: hidden;
  max-width: 1255px;
}

ul.desktop-menu {
  list-style: none;
  list-style-type: none;

  text-align: center;
}

ul.desktop-menu li {
  display: inline-block;
  padding: 12px 12px 18px 12px;
  border-bottom: 2px solid white;
  transition: border-color 0.3s;
}

ul.desktop-menu li:hover {
  border-bottom: 2px solid black;
}
</style>
