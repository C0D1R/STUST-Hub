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
    // title: "搜尋課程 | STUST HUB",
});

useSeoMeta({
    title: "搜尋課程 | STUST HUB",
    ogTitle: "搜尋課程 | STUST HUB",
    description:
        "立即使用 STUST HUB 搜尋課程功能！快速找到南台科技大學裡各科系的最新課程資料與詳細課程資訊，讓你的選課過程更加順暢。",
    ogDescription:
        "立即使用 STUST HUB 搜尋課程功能！快速找到南台科技大學裡各科系的最新課程資料與詳細課程資訊，讓你的選課過程更加順暢。",
});

const courseSearchPageStrategy = useCourseSearchPageStrategy();

const courseListCurrentMode = ref("basic");

const handleModeChange = (mode) => {
    courseListCurrentMode.value = mode;
};
</script>
