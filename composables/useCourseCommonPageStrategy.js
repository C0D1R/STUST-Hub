export const useCourseCommonPageStrategy = () => {
    const courseSemesterStore = useCourseSemesterStore();
    const { year, sem, semester } = storeToRefs(courseSemesterStore);

    const { setItem, getItem } = useLocalforage();

    const route = useRoute();

    const fetchCourses = async () => {
        const coursesKey = semester.value;
        const cacheExpirationKey = `${semester.value}_expiration`;

        try {
            const cachedCourses = await getItem(coursesKey);
            
            const cachedExpirationTime = await getItem(cacheExpirationKey);
            const currentTime = new Date().getTime();

            if (
                cachedCourses &&
                cachedExpirationTime &&
                currentTime < cachedExpirationTime
            ) {
                console.log("courses from cache");
                return cachedCourses;
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

            const courses = await getItem(coursesKey);

            return courses;
        } catch (err) {
            console.error(`Error fetching courses: ${err}`);
            throw err;
        }
    };

    const filterCourses = (courses) => {
        const pathSegments = route.path.split("/");
        const lastSegment = pathSegments[pathSegments.length - 1];
        const secondLastSegment = pathSegments[pathSegments.length - 2];
    
        switch (secondLastSegment) {
            case "class":
                const className = decodeURIComponent(
                    pathSegments[pathSegments.length - 1]
                );
                return courses.filter((course) => course.classes.includes(className));
    
            case "instructor":
                const instructorName = decodeURIComponent(lastSegment);
                return courses.filter((course) =>
                    course.instructors.includes(instructorName)
                );
    
            case "language":
                const targetLanguage = decodeURIComponent(lastSegment);
                return courses.filter((course) => 
                    course.languages.includes(targetLanguage)
                );
    
            case "location":
                return courses.filter((course) => 
                    course.locations.includes(lastSegment)
                );
    
            case "weekday":
                const weekday = decodeURIComponent(lastSegment).split("")[1];
                return courses.filter((course) =>
                    course.schedule.includes(weekday)
                );

            case 'period':
                const period = decodeURIComponent(lastSegment).match(/\d+/)[0];
                const periodRegex = new RegExp(`\\b${period}\\b`)
                return courses.filter((course) =>
                    periodRegex.test(course.schedule)
                );
        }
    };

    const processCourses = (courses) => {
        return courses.map((course) => {
            course.instructors = course.instructors.join('、');
            course.classes =
                course.classes.length > 1
                    ? `${course.classes[0].trim()}等合開`
                    : course.classes[0];

            return course;
        });
    };

    return {
        fetchCourses,
        filterCourses,
        processCourses
    }
};