<template>
    <div>
        <NuxtLayout :name="layout">
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
useHead({
    // title: "STUST HUB",
});

useSeoMeta({
    title: "STUST HUB",
    ogTitle: "STUST HUB",
    description:
        "STUST HUB 是由南台科大學生建立的資訊平台，提供南台科技大學裡各科系的最新課程資料與選課資訊。",
    ogDescription:
        "STUST HUB 是由南台科大學生建立的資訊平台，提供南台科技大學裡各科系的最新課程資料與選課資訊。",
});

const route = useRoute();
const layout = computed(() => {
    // course 路徑下的頁面使用 course.vue 作為 layout
    // 但 course 路徑下的 [courseCode].vue 頁面使用 default.vue 作為 layout
    if (route.path.startsWith("/course") && !route.params.courseCode) {
        return "course";
    }
    return "default";
});

const colorMode = useColorMode();

onMounted(() => {
    document.documentElement.classList.add("dark");
});
</script>

<style>
body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
}
.dark body {
    @apply bg-gray-900 text-[#ebf4f1];
}
.sepia body {
    background-color: #f1e7d0;
    color: #433422;
}
</style>
