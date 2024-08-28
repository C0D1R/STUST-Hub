import { promises as fs } from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
    // const query = getQuery(event)
    // const year = query.year
    // const sem = query.sem
    // const semester = query.semester

    const [ year, sem, courseCode ] = event.context.params._.split('/')
    const semester = `${year}-${sem}`

    const dataDir = path.join('server', 'data', 'course')
    const filePath = courseCode ?
        path.join(dataDir, year, sem, 'detail', `${semester}_${courseCode}.json`) :
        path.join(dataDir, year, sem, `${semester}_courses.json`)

    try {
        const courseData = await fs.readFile(filePath)
        if (courseCode) {
            return JSON.parse(courseData)
        }
        return JSON.parse(courseData).slice(0, 100)
    } catch (err) {
        console.error(
            courseCode ?
            `Error reading course details: ${err}` :
            `Error reading course data: ${err}`
        )
        throw createError({
            statusCode: 404,
            statusMessage:
                courseCode ?
                `Course details for ${courseCode} not found` :
                `Course data for semester ${semester} not found`
        })
    }
})