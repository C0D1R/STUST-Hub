<template>
    <div>
        <p class="flex flex-wrap gap-4 py-8 justify-center mb-4 sm:gap-x-6">
            <span class="text-5xl font-bold text-center">STUST HUB</span>
            <span class="grid grid-cols-2 gap-2 place-items-center sm:flex">
                <!-- grid grid-cols-2 gap-x-2 -->
                是由
                <span
                    class="text-xl font-bold p-2 bg-gray-800 rounded-lg sm:px-3 md:px-4"
                >
                    南台科大學生
                </span>
                建立的
                <span
                    class="text-xl font-bold p-2 bg-gray-800 rounded-lg sm:px-3 md:px-4"
                >
                    選課資訊平台
                </span>
            </span>
        </p>

        <CourseStatsSummary />
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
        "STUST HUB 是由南台科大學生建立的資訊平台，提供南台科技大學各科系的最新課程資料與選課資訊，讓你的選課過程更加流暢。",
    ogDescription:
        "STUST HUB 是由南台科大學生建立的資訊平台，提供南台科技大學各科系的最新課程資料與選課資訊，讓你的選課過程更加流暢。",
});
</script>
