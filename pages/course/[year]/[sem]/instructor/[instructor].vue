<template>
    <CourseList :strategy="courseCommonPageStrategy" />
</template>

<script setup>
const route = useRoute();

useHead({
    // title: `${route.params.instructor} | STUST HUB`,
});

useSeoMeta({
    title: `${route.params.instructor} | STUST HUB`,
    ogTitle: `${route.params.instructor} | STUST HUB`,
    description: `立即查看 STUST HUB 提供的課程教師探索頁面！在這裡，您可以快速找到南台科技大學 ${route.params.year} 學年第 ${route.params.sem} 學期由${route.params.instructor}教師所開設的課程。`,
    ogDescription: `立即查看 STUST HUB 提供的課程教師探索頁面！在這裡，您可以快速找到南台科技大學 ${route.params.year} 學年第 ${route.params.sem} 學期由${route.params.instructor}教師所開設的課程。`,
});

const courseCommonPageStrategy = useCourseCommonPageStrategy();
</script>
