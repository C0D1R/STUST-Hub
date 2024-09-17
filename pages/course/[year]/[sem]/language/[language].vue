<template>
    <CourseList :strategy="courseCommonPageStrategy" />
</template>

<script setup>
const route = useRoute();

useHead({
    // title: `${route.params.language} | STUST HUB`,
});

useSeoMeta({
    title: `${route.params.language} | STUST HUB`,
    ogTitle: `${route.params.language} | STUST HUB`,
    description: `立即查看 STUST HUB 提供的課程語言探索頁面！在這裡，您可以快速找到南台科技大學 ${route.params.year} 學年第 ${route.params.sem} 學期與${route.params.language}相關的課程。`,
    ogDescription: `立即查看 STUST HUB 提供的課程語言探索頁面！在這裡，您可以快速找到南台科技大學 ${route.params.year} 學年第 ${route.params.sem} 學期與${route.params.language}相關的課程。`,
});

const courseCommonPageStrategy = useCourseCommonPageStrategy();
</script>
