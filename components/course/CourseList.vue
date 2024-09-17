<template>
    <div v-if="courses && courses.length">
        <div @change="toggleFavorite" :class="styles.getCourseContainer()">
            <CourseListCaption />

            <article
                v-for="course in courses"
                :key="course.code"
                :class="styles.getCourseArticle()"
            >
                <NuxtLink
                    :to="routes.course(course.code)"
                    :class="styles.getCourseLink()"
                >
                    <h2 :class="styles.getCourseName()">
                        {{ course.name }}
                    </h2>

                    <p
                        v-for="item in displayItems"
                        :key="`${course.code}${item.key}`"
                        :class="[styles.getCourseInfo(), item.captionStyle]"
                    >
                        {{ course[item.key] }}
                    </p>
                </NuxtLink>
                <!-- <div :class="styles.getFavoriteContainer()">
                    <label :class="styles.getFavoriteLabel()">
                        <input
                            type="checkbox"
                            name="course"
                            class="sr-only"
                            :value="course.code"
                            :checked="isFavorite(course.code)"
                        />
                    </label>
                </div> -->
            </article>
        </div>
    </div>
</template>

<script setup>
const courses = ref(null);

const { routes } = useCourseRoutes();

const courseListViewModeStore = useCourseListViewModeStore();
const { isCardMode } = storeToRefs(courseListViewModeStore);

const courseFilterStore = useCourseFilterStore();
const { courseFilterParams } = storeToRefs(courseFilterStore);

const courseSemesterStore = useCourseSemesterStore();
const { semester } = storeToRefs(courseSemesterStore);

const props = defineProps({
    strategy: {
        type: Object,
        required: true,
    },
});

watch(
    [semester, courseFilterParams],
    async () => {
        const coursesData = await props.strategy.fetchCourses();
        const coursesFiltered = props.strategy.filterCourses(coursesData);
        const coursesProcessed = props.strategy.processCourses(coursesFiltered);
        courses.value = coursesProcessed;
    },
    {
        immediate: true,
        deep: true,
    }
);

const displayItems = [
    { caption: "學分", captionStyle: "before:content-['學分']", key: "credit" },
    { caption: "類型", captionStyle: "before:content-['類型']", key: "type" },
    {
        caption: "教師",
        captionStyle: "before:content-['教師']",
        key: "instructors",
    },
    {
        caption: "班級",
        captionStyle: "before:content-['班級']",
        key: "classes",
    },
    {
        caption: "時間",
        captionStyle: "before:content-['時間']",
        key: "schedule",
    },
];

const styles = computed(() => ({
    getCourseContainer: () => {
        const baseStyle = [
            "mb-4 rounded-2xl",
            "border-black/15",
            "dark:border-gray-100/15",
        ];
        const cardStyle = [
            "grid grid-cols-1 gap-2",
            "md:grid-cols-2",
            "xl:grid-cols-3",
        ];
        const tableStyle = [
            "overflow-x-scroll border",
            "lg:overflow-x-visible",
        ];

        return [...baseStyle, ...(isCardMode.value ? cardStyle : tableStyle)];
    },
    getCourseArticle: () => {
        const baseStyle = [
            "grid",
            "bg-white border-black/15",
            "dark:bg-gray-800 dark:border-gray-100/15",
        ];
        const cardStyle = [
            "relative rounded-2xl border px-4 pb-2",
            "grid-cols-[1.3fr,1fr,1fr] grid-rows-3 gap-x-1.5 gap-y-2",
            "md:grid-cols-[1.5fr,1fr,1fr]",
        ];
        const tableStyle = [
            "min-w-[75rem] grid-cols-[auto,5rem] border-times",
            "last:rounded-b-2xl even:bg-opacity-50",
            "lg:min-w-0",
        ];

        return [...baseStyle, ...(isCardMode.value ? cardStyle : tableStyle)];
    },
    getCourseLink: () => {
        const baseStyle = ["grid"];
        const cardStyle = [
            "col-span-full row-span-full",
            "grid-cols-[1.3fr,1fr,1fr] grid-rows-3 gap-x-1.5 gap-y-2",
            "md:grid-cols-[1.5fr,1fr,1fr]",
        ];
        const tableStyle = [
            "grid-cols-[3fr,.5fr,.9fr,1.2fr,1.5fr,.8fr] grid-rows-[3.75rem] items-center justify-evenly gap-x-5 pl-10",
        ];

        return [...baseStyle, ...(isCardMode.value ? cardStyle : tableStyle)];
    },
    getCourseName: () => {
        const baseStyle = ["overflow-hidden text-ellipsis whitespace-nowrap"];
        const cardStyle = [
            "col-span-full border-b border-black/15 py-2 font-bold",
            "dark:border-gray-100/15",
        ];
        const tableStyle = [""];

        return [...baseStyle, ...(isCardMode.value ? cardStyle : tableStyle)];
    },
    getCourseInfo: () => {
        const baseStyle = [
            "overflow-hidden text-ellipsis whitespace-nowrap",
            "before:block before:text-xs before:text-black/55",
            "dark:before:text-gray-100/55",
        ];
        const cardStyle = ["text-center text-sm"];
        const tableStyle = ["before:content-none"];

        return [...baseStyle, ...(isCardMode.value ? cardStyle : tableStyle)];
    },
    getFavoriteContainer: () => {
        const baseStyle = ["grid h-full w-full"];
        const cardStyle = [
            "absolute col-start-3 row-start-3 justify-center pb-2 pr-4",
        ];
        const tableStyle = ["place-items-center"];

        return [...baseStyle, ...(isCardMode.value ? cardStyle : tableStyle)];
    },
    getFavoriteLabel: () => {
        const baseStyle = [
            "grid place-items-center rounded-lg border border-blue-500",
            "before:absolute before:block before:h-3.5 before:border before:border-blue-500",
            "after:absolute after:block after:w-3.5 after:border after:border-blue-500",
            "hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:after:border-white",
        ];
        const cardStyle = ["h-9 px-10"];
        const tableStyle = ["p-5"];

        return [...baseStyle, ...(isCardMode.value ? cardStyle : tableStyle)];
    },
}));
</script>
