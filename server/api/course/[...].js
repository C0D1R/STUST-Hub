import { getCourseListModel, getCourseDetailModel } from '@/server/models/Course'

export default defineEventHandler(async (event) => {
    const [ year, sem, courseCode ] = event.context.params._.split('/')
    const semester = `${year}-${sem}`

    try {
        if (courseCode) {
            const CourseDetail = getCourseDetailModel(semester)
            const course = await CourseDetail.findOne({ code: courseCode }, { _id: 0 })

            if (!course) {
                throw createError({
                    statusCode: 404,
                    statusMessage: `Course details for ${courseCode} not found in semester ${semester}`
                })
            }
            return course
        }

        const CourseList = getCourseListModel(semester)
        const courses = await CourseList.find({}, { _id: 0 })

        if (courses.length === 0) {
            throw createError({
                statusCode: 404,
                statusMessage: `No courses found in semester ${semester}`
            })
        }
        return courses

    } catch (err) {
        console.error(`Error fetching course data: ${err}`)
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        })
    }
})