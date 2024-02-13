<template>
  <div ref="container" class="sticky-outer-wrapper h-15">
    <div
      class="sticky-inner-wrapper h-15 bg-white"
      :class="{ active: isActive }"
    >
      <nav
        class="container w-full h-full m-auto flex justify-between items-center"
      >
        <h1 class="min-w-56">{{ state.title }}</h1>
        <div>
          <ul class="flex gap-x-4">
            <li>
              <NuxtLink
                class="text-base font-medium text-black hover:text-gray-500"
                to="/w/mens-shoes"
                >Shoes
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-base font-medium text-black hover:text-gray-500"
                to="/w/mens-clothing"
                >Clothing
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-base font-medium text-black hover:text-gray-500"
                to="/w/mens-accessories-equipment"
                >Gear
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="min-w-56"></div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const ELEMENT_HEIGHT = 56;

// #region Data
const state = useBreadcrumb();

const { container, location } = useViewport(ELEMENT_HEIGHT);

const isActive = computed(() => location.value === 1);
// #endregion
</script>

<style scoped>
.sticky-inner-wrapper {
  width: 100%;
  z-index: 10;
}
.sticky-inner-wrapper.active {
  position: fixed;
  top: 0;
  left: 0;
}
.sticky-inner-wrapper h1 {
  transition: font-size 0.2s;
  font-size: 24px;
}

.sticky-inner-wrapper.active h1 {
  font-size: 16px;
}
</style>
