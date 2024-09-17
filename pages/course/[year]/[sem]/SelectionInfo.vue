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
    // title: "選課資訊 | STUST HUB",
});

useSeoMeta({
    title: "選課資訊 | STUST HUB",
    ogTitle: "選課資訊 | STUST HUB",
    description:
        "立即查看 STUST HUB 提供的選課資訊！幫助您快速了解南台科技大學當學年學期的選課資訊，包含選課時間、規則等重要訊息。",
    ogDescription:
        "立即查看 STUST HUB 提供的選課資訊！幫助您快速了解南台科技大學當學年學期的選課資訊，包含選課時間、規則等重要訊息。",
});
</script>
