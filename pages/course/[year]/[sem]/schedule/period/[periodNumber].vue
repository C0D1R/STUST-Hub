<template>
    <CourseList :strategy="courseCommonPageStrategy" />
</template>

<script setup>
const route = useRoute();

useHead({
    title: `${route.params.periodNumber} | STUST HUB`,
});

const courseCommonPageStrategy = useCourseCommonPageStrategy();
</script>
