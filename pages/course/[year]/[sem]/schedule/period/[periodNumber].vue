<template>
    <CourseList :strategy="courseCommonPageStrategy" />
</template>

<script setup>
const route = useRoute();

useHead({
    // title: `${route.params.periodNumber} | STUST HUB`,
});

const periodDescription = route.params.periodNumber.replace(/\D/g, "");

useSeoMeta({
    title: `${route.params.periodNumber} | STUST HUB`,
    ogTitle: `${route.params.periodNumber} | STUST HUB`,
    description: `立即查看 STUST HUB 提供的課程時間探索頁面！在這裡，您可以快速找到南台科技大學 ${route.params.year} 學年第 ${route.params.sem} 學期在第 ${periodDescription} 節所開設的課程。`,
    ogDescription: `立即查看 STUST HUB 提供的課程時間探索頁面！在這裡，您可以快速找到南台科技大學 ${route.params.year} 學年第 ${route.params.sem} 學期在第 ${periodDescription} 節所開設的課程。`,
});

const courseCommonPageStrategy = useCourseCommonPageStrategy();
</script>
