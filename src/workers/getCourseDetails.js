self.onmessage = async (event) => {
    const dataPath = event.data?.path;
    const subcode = event.data?.subcode;
    
    const response = await fetch(dataPath);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const courses = Array.from(await response.json());

    const course = courses.find((course) => course.subcode === subcode)

    self.postMessage({
        course: course,
    });
};