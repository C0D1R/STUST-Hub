<template>
    <div>
        <CourseSelectionTimeline />
    </div>
</template>

<script setup>
definePageMeta({
    path: "/course/:year/:sem/selection-info",
});

useHead({
    title: "選課資訊 | STUST HUB",
});
</script>
