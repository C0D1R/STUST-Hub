<template>
    <div>
        <CourseFilterForm />

        <div class="mb-4 grid gap-y-2 sm:grid-cols-2 sm:gap-x-4">
            <!-- <CourseListModeSwitcher @modeChange="handleModeChange" /> -->
            <CourseListViewSwitcher />
        </div>

        <CourseList
            v-if="courseListCurrentMode === 'basic'"
            :strategy="courseSearchPageStrategy"
        />
        <CourseEnrollmentList v-else />
    </div>
</template>

<script setup>
useHead({
    title: "搜尋課程 | STUST HUB",
});

const courseSearchPageStrategy = useCourseSearchPageStrategy();

const courseListCurrentMode = ref("basic");

const handleModeChange = (mode) => {
    courseListCurrentMode.value = mode;
};
</script>
