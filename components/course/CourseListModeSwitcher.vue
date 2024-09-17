<template>
    <div :class="styles.listModeContainer">
        <label
            v-for="mode in courseListModes"
            :key="mode.id"
            :class="styles.listModeLabel"
        >
            <input
                type="radio"
                name="courseListMode"
                class="sr-only"
                :value="mode.value"
                v-model="selectedMode"
                @change="$emit('modeChange', selectedMode)"
            />
            {{ mode.context }}
        </label>
    </div>
</template>

<script setup>
const selectedMode = ref("basic");

const courseListModes = [
    {
        id: "basicMode",
        value: "basic",
        context: "課程基本資料",
    },
    {
        id: "enrollmentMode",
        value: "enrollment",
        context: "選課即時人數",
    },
];

const styles = computed(() => ({
    listModeContainer: [
        "grid grid-cols-2 overflow-hidden rounded-lg border border-blue-500 bg-white text-center text-blue-500",
    ],
    listModeLabel: [
        "py-1.5",
        "dark:bg-gray-800",
        "hover:cursor-pointer",
        "has-[:checked]:bg-blue-500 has-[:checked]:text-white",
    ],
}));
</script>
