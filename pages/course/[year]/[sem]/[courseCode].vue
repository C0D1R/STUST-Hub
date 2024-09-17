<template>
    <div v-if="course" class="max-w-screen-lg mx-auto">
        <article>
            <h1 class="grid px-3 py-5">
                <span class="text-2xl font-bold">{{ course.name.zh }}</span>
                <span class="'text-xl'">{{ course.name.en }}</span>
            </h1>

            <div
                :class="[
                    'grid grid-flow-row-dense gap-3 mb-3',
                    'sm:grid-cols-3',
                ]"
            >
                <CourseDetailsInfo
                    v-for="info in courseInfoFields"
                    :key="info.key"
                    :course="course"
                    :course-field="info"
                />
            </div>

            <div :class="['grid grid-cols-2 gap-3 mb-3']">
                <CourseDetailsContent
                    v-for="content in courseContentFields"
                    :key="content.key"
                    :course="course"
                    :course-field="content"
                />
            </div>
        </article>
    </div>
</template>

<script setup>
const { courseInfoFields, courseContentFields } = useCourseDetailsFields();
// const { course } = useCourseDetailsData();

const route = useRoute();
const year = route.params.year;
const sem = route.params.sem;
const courseCode = route.params.courseCode;

const { data: course } = useFetch(`/api/course/${year}/${sem}/${courseCode}`);

watchEffect(() => {
    const courseTitle = course.value
        ? `${course.value.name.zh} | STUST HUB`
        : "課程詳情 | STUST HUB";
    const courseDescription = course.value ? course.value.description : "";

    useHead({
        // title: courseTitle,
    });

    useSeoMeta({
        title: courseTitle,
        ogTitle: courseTitle,
        description: courseDescription,
        ogDescription: courseDescription,
    });
});
</script>
