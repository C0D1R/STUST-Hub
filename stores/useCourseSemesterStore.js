export const useCourseSemesterStore = defineStore('courseSemester', () => {
    const year = ref('113');
    const sem = ref('1');

    const semester = computed(() => `${year.value}-${sem.value}`);

    const setSemester = (semester) => {
        [year.value, sem.value] = semester.split("-");
    }

    return {
        year,
        sem,
        semester,
        setSemester
    }
});