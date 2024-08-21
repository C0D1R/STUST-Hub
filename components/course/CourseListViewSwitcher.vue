<template>
    <div :class="styles.UIModeContainer">
        <label
            v-for="mode in viewModes"
            :key="mode.id"
            :class="styles.UIModeLabel"
        >
            <input
                type="radio"
                name="courseUi"
                class="sr-only"
                :value="mode.value"
                v-model="viewMode"
            />
            {{ mode.context }}
        </label>
    </div>
</template>

<script setup>
const courseListViewModeStore = useCourseListViewModeStore();
const { viewMode } = storeToRefs(courseListViewModeStore);

const viewModes = {
    table: {
        id: "tableViewMode",
        value: "table",
        context: "表格",
    },
    card: {
        id: "cardViewMode",
        value: "card",
        context: "卡片",
    },
};

const styles = computed(() => ({
    UIModeContainer: [
        "mb-4 grid grid-cols-2 overflow-hidden rounded-lg border border-blue-500 bg-white text-center text-blue-500",
    ],
    UIModeLabel: [
        "py-1.5",
        "dark:bg-gray-800",
        "hover:cursor-pointer",
        "has-[:checked]:bg-blue-500 has-[:checked]:text-white",
    ],
}));
</script>
