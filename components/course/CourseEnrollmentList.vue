<template>
    <div v-if="courses && courses.length">
        <div @change="toggleFavorite" :class="styles.getCourseContainer()">
            <CourseEnrollmentListCaption />

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
const { year, sem, semester } = storeToRefs(courseSemesterStore);

const { setItem, getItem } = useLocalforage();

const fetchCourses = async () => {
    const targetDepartmentKey = `${semester.value}_${courseFilterParams.value.department}`;
    const targetGeneralKey = `${semester.value}_general`;

    try {
        const cachedCourse = (await getItem(targetDepartmentKey)).filter(
            (c) => c !== null
        );
        const cachedGeneralCourse = (await getItem(targetGeneralKey)).filter(
            (c) => c !== null
        );
        if (cachedCourse && cachedGeneralCourse) {
            console.log("courses from cache");
            return [cachedCourse, cachedGeneralCourse];
        }
    } catch (err) {
        console.error(`Error reading from cache: ${err}`);
    }

    try {
        const courseData = await $fetch(
            `/api/course/${year.value}/${sem.value}`
        );

        try {
            if (courseData) {
                for (const dept of courseData) {
                    await setItem(dept.id, dept.courses);
                }
            }
        } catch (err) {
            console.error(`Error setting item to cache: ${err}`);
        }

        console.log("courses from api");
        const departmentCourses = (await getItem(targetDepartmentKey)).filter(
            (c) => c !== null
        );
        const generalCourses = (await getItem(targetGeneralKey)).filter(
            (c) => c !== null
        );
        return [departmentCourses, generalCourses];
    } catch (err) {
        console.error(`Error fetching courses: ${err}`);
        throw err;
    }
};

const getGeneralField = (dept) => {
    const scienceDepts = [
        "ee",
        "mech",
        "eecs",
        "oe",
        "csie",
        "chem",
        "bio",
        "ic",
        "vc",
        "mes",
        "cpd",
        "pmi",
    ];
    const humanitiesDepts = [
        "imi",
        "ib",
        "fin",
        "ba",
        "mis",
        "accinfo",
        "leisure",
        "mim",
        "hm",
        "english",
        "japan",
        "childcare",
        "ss",
    ];
    const type = {
        science: ["人文藝術領域", "社會科學領域", "綜合實踐領域"],
        humanities: ["人文藝術領域", "自然科學領域", "綜合實踐領域"],
        all: ["人文藝術領域", "社會科學領域", "自然科學領域", "綜合實踐領域"],
    };
    return scienceDepts.includes(dept)
        ? type.science
        : humanitiesDepts.includes(dept)
        ? type.humanities
        : type.all;
};

const filterCourses = ([deptCourses, genCourses]) => {
    if (!deptCourses) return [];

    const typeMap = {
        compulsory: "必修",
        elective: "選修",
        general: "通識",
    };

    const typePattern = courseFilterParams.value.courseType
        .map((type) => typeMap[type])
        .join("|");

    const typeFilterRegex = new RegExp(`(${typePattern})`);

    const gradeMap = {
        first: "一",
        second: "二",
        third: "三",
        fourth: "四",
        fifth: "五",
    };

    const gradePattern = courseFilterParams.value.grade
        .map((grade) => gradeMap[grade])
        .join("|");

    const gradeFilterRegex = new RegExp(`(?<!^)(${gradePattern})`);

    const times = {};
    const dayMap = {
        M: "一",
        T: "二",
        W: "三",
        R: "四",
        F: "五",
        S: "六",
        U: "日",
    };

    courseFilterParams.value.time.forEach((time) => {
        const splitRegex = new RegExp(/(?<=[A-Za-z])(?=\d+)/);
        const [day, period] = time.split(splitRegex);

        if (!times[day]) {
            times[day] = [];
        }
        times[day].push(period);
    });

    const timePattern = Object.entries(times)
        .map(([day, periods]) => {
            const mappedDay = dayMap[day];
            const joinedPeriods = periods.join("|");
            const dayPattern = `(?<=${mappedDay})[\\s\\d]+\\b(${joinedPeriods})\\b`;

            return dayPattern;
        })
        .join("|");

    const timeFilterRegex = new RegExp(timePattern);

    const coursesFiltered = deptCourses
        .filter((course) => {
            // Filter by course type
            return typeFilterRegex.test(course.type);
        })
        .filter((course) => {
            // Filter by grade
            // Regex: (?<!^)(一|二|三|四|五)

            const isGradeMatch = course.classes.some((classItem) =>
                gradeFilterRegex.test(classItem)
            );

            return isGradeMatch;
        })
        .filter((course) => {
            // Filter by time
            // Regex: (?<=一)[\s\d]+\b(1|2|3|4|5|6|7|8|9|10|11|12|13|14)\b
            // Regex: (?<=二)[\s\d]+\b(1|2|3|4|5|6|7|8|9|10|11|12|13|14)\b
            // Regex: (?<=三)[\s\d]+\b(1|2|3|4|5|6|7|8|9|10|11|12|13|14)\b
            // Regex: (?<=四)[\s\d]+\b(1|2|3|4|5|6|7|8|9|10|11|12|13|14)\b
            // Regex: (?<=五)[\s\d]+\b(1|2|3|4|5|6|7|8|9|10|11|12|13|14)\b
            // courseFilterParams.value.time;

            return timeFilterRegex.test(course.schedule);
        })
        .filter((course) => {
            // Filter by school system
            // courseFilterParams.value.schoolSystem;

            return true;
        })
        .map((course) => {
            // Filter by class
            course.classes =
                course.classes.length > 1
                    ? `${course.classes[0].trim()}等合開`
                    : course.classes[0];
            return course;
        });

    const isGeneral = courseFilterParams.value.courseType.some(
        (type) => type === "general"
    );
    const fieldTypePattern = getGeneralField(
        courseFilterParams.value.department
    ).join("|");
    const fieldTypeRegex = new RegExp(`${fieldTypePattern}`);

    const generalCoursesFiltered = isGeneral
        ? genCourses
              .filter((course) =>
                  course.classes.some((field) => fieldTypeRegex.test(field))
              )
              .filter((course) => timeFilterRegex.test(course.schedule))
              .map((course) => {
                  course.classes = course.classes.toString();
                  return course;
              })
        : [];

    return [coursesFiltered, generalCoursesFiltered];
};

watch(
    [semester, courseFilterParams],
    async () => {
        const [departmentCourses, generalCourses] = await fetchCourses();
        const [deptCoursesFiltered, genCoursesFiltered] = filterCourses([
            departmentCourses,
            generalCourses,
        ]);
        courses.value = [...deptCoursesFiltered, ...genCoursesFiltered];
    },
    {
        immediate: true,
        deep: true,
    }
);

const displayItems = [
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
    {
        caption: "人數上限",
        captionStyle: "before:content-['人數上限']",
        key: "credit",
    },
    {
        caption: "當前人數",
        captionStyle: "before:content-['當前人數']",
        key: "credit",
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
            "grid-cols-[1fr,1.3fr,1fr] grid-rows-3 gap-x-1.5 gap-y-2",
            "md:grid-cols-[1fr,1.5fr,1fr]",
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
            "grid-cols-[1fr,1.3fr,1fr] grid-rows-3 gap-x-1.5 gap-y-2",
            "md:grid-cols-[1fr,1.5fr,1fr]",
        ];
        const tableStyle = [
            "grid-cols-[3fr,1.2fr,1.5fr,.8fr,.4fr,.4fr] grid-rows-[3.75rem] items-center justify-evenly gap-x-5 pl-10",
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
        const tableStyle = ["before:!content-none"];

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
