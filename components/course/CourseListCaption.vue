<template>
    <div v-show="isTableMode" :class="styles.headerContainer">
        <p v-for="header in courseHeaders" :key="header.id">
            {{ header.context }}
        </p>
    </div>
</template>

<script setup>
const courseListViewModeStore = useCourseListViewModeStore();
const { isTableMode } = storeToRefs(courseListViewModeStore);

const courseHeaders = [
    {
        id: "courseName",
        context: "課程名稱",
    },
    {
        id: "courseCredit",
        context: "學分",
    },
    {
        id: "courseType",
        context: "類型",
    },
    {
        id: "courseLecturer",
        context: "教師",
    },
    {
        id: "courseClass",
        context: "班級",
    },
    {
        id: "courseTime",
        context: "時間",
    },
];

const styles = computed(() => ({
    headerContainer: [
        "grid min-w-[75rem] grid-cols-[3fr,.5fr,.9fr,1.2fr,1.5fr,.8fr] grid-rows-[3.75rem]",
        "items-center gap-x-5 rounded-t-2xl bg-white pl-10 pr-20",
        "font-bold text-black/60",
        "dark:bg-gray-800 dark:text-white",
        "lg:min-w-0",
    ],
}));
</script>
