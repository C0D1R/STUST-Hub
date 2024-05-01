<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

// import LoginForm from './components/LoginForm.vue';
// import TimeTable from './components/TimeTable.vue';
// import TimeTable2 from './components/TimeTable2.vue';
</script>

<template>
    <div class="grid h-screen grid-rows-[auto,1fr,auto]">
        <nav class="mb-4 flex items-center bg-blue-500/90 pl-[2%] text-white xl:pl-[8.4%]">
            <router-link :to="{ path: '/' }" class="px-5 py-3 font-semibold">首頁</router-link>
            <router-link :to="{ path: '/search' }" class="px-5 py-3 font-semibold">
                課程查詢
            </router-link>
            <router-link :to="{ path: '/teacher' }" class="px-5 py-3 font-semibold">
                教師查詢
            </router-link>
            <router-link :to="{ path: '/class' }" class="px-5 py-3 font-semibold">
                班級查詢
            </router-link>
            <router-link :to="{ path: '/capacity' }" class="px-5 py-3 font-semibold">
                人數查詢
            </router-link>
        </nav>
        <div class="flex flex-col">
            <router-view></router-view>
        </div>
        <footer class="bg-black/70 py-3 text-center text-white">
            Copyright © 2021 C0D1R. All Rights Reserved.
        </footer>
    </div>
</template>

<style>
body {
    @apply bg-black/[0.02];
}
</style>
