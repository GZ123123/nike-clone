<template>
  <footer ref="container" class="bg-[#111111] text-[#7e7e7e]">
    <div class="container mx-auto p-10 pb-0">
      <div class="footer-body flex justify-between mb-4">
        <div class="flex-1 flex">
          <div class="flex-1 text-white text-sm">
            <ul class="flex flex-col gap-y-[3px]">
              <li class="leading-8">
                <NuxtLink class="uppercase" to="/stores"
                  >FIND A STORE
                </NuxtLink>
              </li>
              <li class="leading-8">
                <NuxtLink class="uppercase" to="/membership"
                  >BECOME A MEMBER
                </NuxtLink>
              </li>
              <li class="leading-8">
                <NuxtLink to="/feedback">Send Us Feedback</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex-1 text-xs">
            <ul class="flex flex-col gap-y-[3px]">
              <li class="leading-6">
                <NuxtLink class="text-white uppercase text-sm" to="/help"
                  >GET HELP
                </NuxtLink>
              </li>
              <li class="leading-6">
                <NuxtLink class="hover:text-white" to="/order/details"
                  >Order Status</NuxtLink
                >
              </li>
              <li class="leading-6">
                <NuxtLink
                  class="hover:text-white"
                  to="/help/a/shipping-delivery-gs"
                  >Delivery</NuxtLink
                >
              </li>
              <li class="leading-6">
                <NuxtLink
                  class="hover:text-white"
                  to="/help/a/returns-policy-gs"
                  >Returns</NuxtLink
                >
              </li>
              <li class="leading-6">
                <NuxtLink
                  class="hover:text-white"
                  to="/help/a/payment-options-gs"
                  >Payment Options
                </NuxtLink>
              </li>
              <li class="leading-6">
                <NuxtLink class="hover:text-white" to="/help/#contact"
                  >Contact Us</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="flex-1 text-xs">
            <ul class="flex flex-col gap-y-[3px]">
              <li class="leading-6">
                <NuxtLink class="text-white uppercase text-sm" to="/about">
                  ABOUT NIKE
                </NuxtLink>
              </li>

              <li class="leading-6"><NuxtLink to="/news">News</NuxtLink></li>
              <li class="leading-6">
                <NuxtLink class="hover:text-white" to="/careers"
                  >Careers</NuxtLink
                >
              </li>
              <li class="leading-6">
                <NuxtLink class="hover:text-white" to="/investors"
                  >Investors</NuxtLink
                >
              </li>
              <li class="leading-6">
                <NuxtLink class="hover:text-white" to="/sustainability"
                  >Sustainability</NuxtLink
                >
              </li>
            </ul>
          </div>

          <div class="flex-1"></div>
        </div>
        <div class="flex gap-x-4">
          <div class="size-[30px] bg-gray-300"></div>
          <div class="size-[30px] bg-gray-300"></div>
          <div class="size-[30px] bg-gray-300"></div>
          <div class="size-[30px] bg-gray-300"></div>
        </div>
      </div>
      <div class="sub-footer flex items-center">
        <div class="flex-1 flex items-end pt-3">
          <NuxtLink class="text-white" to="language__turnel">
            Vietnamese
          </NuxtLink>
          <div class="ml-4">© 2023 Nike, Inc. All Rights Reserved</div>
        </div>
        <div class="flex-1 flex flex-col justify-end">
          <div class="w-full pt-2 pb-3"></div>
          <ul class="flex gap-x-3 text-sm justify-end">
            <li class="p-2">
              <NuxtLink class="hover:text-white" to="#"> Guides</NuxtLink>
            </li>
            <li class="p-2">
              <NuxtLink class="hover:text-white" to="#">
                Terms of Sale
              </NuxtLink>
            </li>
            <li class="p-2">
              <NuxtLink class="hover:text-white" to="#"> Terms of Use</NuxtLink>
            </li>
            <li class="p-2">
              <NuxtLink class="hover:text-white" to="#">
                Privacy Policy
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
