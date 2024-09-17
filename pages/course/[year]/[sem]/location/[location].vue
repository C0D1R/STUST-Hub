<template>
    <CourseList :strategy="courseCommonPageStrategy" />
</template>

<script setup>
const route = useRoute();

useHead({
    // title: `${route.params.location} | STUST HUB`,
});

const building = route.params.location.match(/[a-zA-Z]+/)[0];
const classroom = route.params.location.match(/\d+/)[0];

useSeoMeta({
    title: `${route.params.location} | STUST HUB`,
    ogTitle: `${route.params.location} | STUST HUB`,
    description: `立即查看 STUST HUB 提供的課程地點探索頁面！在這裡，您可以快速找到南台科技大學 ${route.params.year} 學年第 ${route.params.sem} 學期在 ${building} 棟 ${classroom} 教室所開設的課程。`,
    ogDescription: `立即查看 STUST HUB 提供的課程地點探索頁面！在這裡，您可以快速找到南台科技大學 ${route.params.year} 學年第 ${route.params.sem} 學期在 ${building} 棟 ${classroom} 教室所開設的課程。`,
});

const courseCommonPageStrategy = useCourseCommonPageStrategy();
</script>
