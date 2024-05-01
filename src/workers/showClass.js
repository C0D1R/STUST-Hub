self.onmessage = async (event) => {
    // input: course data (array)
    const filterRe = event.data?.filter;
    const classes = event.data?.classes;

    const re = new RegExp(`(^${filterRe.length > 0 ? filterRe.join('|') : '.'})`)

    const blockShow = classes.map((clas) => {
        return clas.departments.some((dept) => {
            return re.test(dept)
        });
    });

    const classShow = classes.map((clas) => {
        return clas.departments.map((dept) => {
            return re.test(dept)
        });
    });

    self.postMessage({
        blockShow: blockShow,
        classShow: classShow
    });
};