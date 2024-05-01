self.onmessage = async (event) => {
    const dataPath = event.data?.path;
    const dataFilter = event.data?.filter;
    
    const response = await fetch(dataPath);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const result = {}

    let courseData = Array.from(await response.json()).slice(0, 100);

    if (dataFilter?.name) {
        courseData = courseData.filter((course) => course.lecturer.some((lect) => lect.name === dataFilter.name));
    } else if (dataFilter?.class) {
        courseData = courseData.filter((course) => course.class.some((clas) => clas === dataFilter.class));
    }

    let compulsoryCount = 0
    let electiveCount = 0

    if (dataFilter?.name || dataFilter?.class) {
        courseData.forEach((course) => {
            if (/必修/.test(course.type)) {
                compulsoryCount++;
            } else if(/選修/.test(course.type)) {
                electiveCount++;
            }
        });

        result.courseCount = {
            compulsory: compulsoryCount,
            elective: electiveCount
        }
    }

    courseData.forEach((course) => {
        course.lecturer = course.lecturer.map((lect) => lect.name).join('、');
        course.class = course.class.length > 1 ? `${course.class[0]}等合開` : course.class.toString();
        return course
    });
    result.courseData = courseData

    console.log(result)
    self.postMessage(result);
};