<template>
    <div
        class="grid grid-cols-2 gap-y-2 py-2 border border-gray-100/15 rounded-lg"
    >
        <p
            v-for="stat in stats"
            class="flex gap-x-2 sm:gap-x-4 items-end justify-center first-of-type:border-r first-of-type:border-gray-100/15"
        >
            <CountTo
                :start-val="0"
                :end-val="stat.count"
                :duration="1000"
                :separator="null"
                :suffix="stat.suffix"
                class="text-2xl font-bold"
            />
            <span class="text-sm text-gray-100/55">
                {{ stat.text }}
            </span>
        </p>
    </div>
</template>

<script setup>
import CountToPackage from "vue3-count-to";
const { CountTo } = CountToPackage;

const stats = {
    department: {
        count: 25,
        text: "個科系",
        suffix: "",
    },
    courseCount: {
        count: 3700,
        text: "門課程",
        suffix: "+",
    },
};
</script>
