<template>
    <CourseList :strategy="courseCommonPageStrategy" />
</template>

<script setup>
const route = useRoute();

useHead({
    // title: `${route.params.weekday} | STUST HUB`,
});

useSeoMeta({
    title: `${route.params.weekday} | STUST HUB`,
    ogTitle: `${route.params.weekday} | STUST HUB`,
    description: `立即查看 STUST HUB 提供的課程時間探索頁面！在這裡，您可以快速找到南台科技大學 ${route.params.year} 學年第 ${route.params.sem} 學期在${route.params.weekday}所開設的課程。`,
    ogDescription: `立即查看 STUST HUB 提供的課程時間探索頁面！在這裡，您可以快速找到南台科技大學 ${route.params.year} 學年第 ${route.params.sem} 學期在${route.params.weekday}所開設的課程。`,
});

const courseCommonPageStrategy = useCourseCommonPageStrategy();
</script>
