export const useCourseSearchPageStrategy = () => {
    const courseSemesterStore = useCourseSemesterStore();
    const { year, sem, semester } = storeToRefs(courseSemesterStore);

    const courseFilterStore = useCourseFilterStore();
    const { courseFilterParams } = storeToRefs(courseFilterStore);

    const { setItem, getItem } = useLocalforage();

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

    const fetchCourses = async () => {
        const targetDepartmentKey = `${semester.value}_${courseFilterParams.value.department}`;
        const targetGeneralKey = `${semester.value}_general`;
        const cacheExpirationKey = `${semester.value}_expiration`;
    
        try {
            const cachedCourse = await getItem(targetDepartmentKey);
            const cachedGeneralCourse = await getItem(targetGeneralKey);
            
            const cachedExpirationTime = await getItem(cacheExpirationKey);
            const currentTime = new Date().getTime();

            if (
                cachedCourse &&
                cachedGeneralCourse &&
                cachedExpirationTime &&
                currentTime < cachedExpirationTime
            ) {
                console.log("department courses from cache");
                return [cachedCourse, cachedGeneralCourse];
            }
        } catch (_) {}
    
        try {
            const courseData = await $fetch(
                `/api/course/${year.value}/${sem.value}`
            );
            console.log("courses from api");
    
            try {
                if (courseData) {
                    const oneDay = 1000 * 60 * 60 * 24;
                    const expirationTime = new Date().getTime() + oneDay;
                    await setItem(cacheExpirationKey, expirationTime);

                    for (const dept of courseData) {
                        await setItem(
                            dept.id,
                            dept.courses.filter((c) => c !== null)
                        );
                    }
    
                    await setItem(
                        semester.value,
                        Array.from(
                            new Map(
                                courseData
                                    .flatMap((dept) => dept.courses)
                                    .filter((c) => c !== null)
                                    .map((course) => [course.code, course])
                            ).values()
                        )
                    );
                }
            } catch (err) {
                console.error(`Error setting item to cache: ${err}`);
            }
    
            const departmentCourses = await getItem(targetDepartmentKey);
            const generalCourses = await getItem(targetGeneralKey);
    
            return [departmentCourses, generalCourses];
        } catch (err) {
            console.error(`Error fetching courses: ${err}`);
            throw err;
        }
    };

    const filterCourses = ([deptCourses, genCourses]) => {
        const isCoursesEmpty = !deptCourses && !genCourses;
        if (isCoursesEmpty) return [];
    
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
            });
    
        const isGeneral = courseFilterParams.value.courseType.some(
            (type) => type === "general"
        ) || courseFilterParams.value.courseType.length === 0;

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
            : [];
    
        return [coursesFiltered, generalCoursesFiltered];
    };

    const processCourses = ([deptCoursesFiltered, genCoursesFiltered]) => {
        const courses = [
            ...deptCoursesFiltered.map((course) => {
                course.instructors = course.instructors.join('、');
                course.classes =
                    course.classes.length > 1
                        ? `${course.classes[0].trim()}等合開`
                        : course.classes[0];
                return course;
            }),
            ...genCoursesFiltered.map((course) => {
                course.instructors = course.instructors.join('、');
                course.classes = course.classes.toString();
                return course;
            })
        ];

        return courses;
    };

    return {
        fetchCourses,
        filterCourses,
        processCourses
    }
};