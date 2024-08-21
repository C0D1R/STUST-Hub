<template>
    <div>
        <NuxtLayout :name="layout">
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
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

useHead({
    title: "STUST HUB",
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
});
</script>

<style>
body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
}
.dark body {
    background-color: #091a28;
    color: #ebf4f1;
}
.sepia body {
    background-color: #f1e7d0;
    color: #433422;
}
</style>
