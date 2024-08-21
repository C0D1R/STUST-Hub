export const useCourseRoutes = () => {
    const courseSemesterStore = useCourseSemesterStore();
    const { year, sem } = storeToRefs(courseSemesterStore);

    const baseCourseUrl = computed(() => `/course/${year.value}/${sem.value}`);
    const routes = computed(() => ({
        course: (code) =>
            `${baseCourseUrl.value}/${code}`,
        instructor: (instructor) =>
            `${baseCourseUrl.value}/instructor/${instructor}`,
        class: (className) =>
            `${baseCourseUrl.value}/class/${className}`,
        language: (language) =>
            `${baseCourseUrl.value}/language/${language}`,
        weekday: (day) =>
            `${baseCourseUrl.value}/schedule/weekday/${getWeekday(day)}`,
        period: (period) =>
            `${baseCourseUrl.value}/schedule/period/${period}`,
        location: (location) =>
            `${baseCourseUrl.value}/location/${location}`,
    }))

    const getWeekday = (day) => {
        const weekdays = {
            一: "monday",
            二: "tuesday",
            三: "wednesday",
            四: "thursday",
            五: "friday",
            六: "saturday",
            日: "sunday",
        };
        return weekdays[day] || day.toLowerCase();
    };

    return {
        routes
    }
};