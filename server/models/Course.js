import mongoose from 'mongoose'

const courseListSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true
    },
    credit: { type: String, required: true },
    type: { type: String, required: true },
    instructors: { type: String, required: true },
    classes: { type: String, required: true },
    schedule: { type: String, required: true }
})

const courseDetailSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    name: {
        zh: { type: String, required: true },
        en: { type: String, required: true }
    },
    credit: { type: String, required: true },
    type: { type: String, required: true },
    classes: [{ type: String }],
    instructors: [{ type: String }],
    schedule: [{
        day: { type: String },
        period: { type: String },
        location: { type: String }
    }],
    hours: {
        course: { type: String, required: true },
        practice: { type: String, required: true }
    },
    languages: [{ type: String, required: true }],
    certificationsSupport: [{ type: String }],
    description: { type: String },
    prerequisites: { type: String },
    syllabus: {
        zh: { type: String },
        en: { type: String }
    },
    weeklySchedule: { type: String },
    exams: {
        midterm: { type: String },
        final: { type: String },
        other: { type: String },
    },
    teachingAndAssessment: [
        {
            objective: { type: String },
            teachingMethods: [{ type: String }],
            assessmentMethods: [
                {
                    method: { type: String },
                    type: { type: String },
                }
            ]
        }
    ],
    textbook: {
        title: { type: String },
        author: { type: String },
        publisher: { type: String },
        year: { type: String },
        ISBN: { type: String },
        edition: { type: String }
    },
    referenceBooks: { type: String },
    teachingSoftware: { type: String },
    rules: { type: String },
})

export const getCourseListModel = (semester) => {
    return mongoose.model('CourseList', courseListSchema, `${semester}_course_list`)

}
export const getCourseDetailModel = (semester) => {
    return mongoose.model('CourseDetail', courseDetailSchema, `${semester}_course_detail`)
}