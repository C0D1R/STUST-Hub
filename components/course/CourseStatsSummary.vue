<template>
    <div
        class="grid grid-cols-2 gap-y-2 py-2 bg-gray-800 border border-gray-100/15 rounded-lg max-w-3xl mx-auto"
    >
        <p
            v-for="stat in stats"
            class="flex gap-x-2 sm:gap-x-4 items-end justify-center first-of-type:border-r first-of-type:border-gray-100/15"
        >
            <span class="text-2xl font-bold">{{ stat.count }}</span>
            <span class="text-sm text-gray-100/55">
                {{ stat.text }}
            </span>
        </p>
        <p class="col-span-2 pt-2 mx-4 border-t border-gray-100/15">
            {{ statsText }}
        </p>
    </div>
</template>

<script setup>
const stats = {
    department: {
        count: "25",
        text: "個科系",
    },
    courseCount: {
        count: "3700+",
        text: "門課程",
    },
};

const statsText = computed(() => {
    return `你可以在這裡找到南台科技大學各科系的最新課程內容與選課資訊，這些課程內容與選課資訊涵蓋了南台科技大學裡所開設的 ${stats.department.count} 個科系、並且包含該學期校園裡的 ${stats.courseCount.count} 門課程。`;
});
</script>
