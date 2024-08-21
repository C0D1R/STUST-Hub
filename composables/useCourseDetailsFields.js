export const useCourseDetailsFields = () => {
    const courseInfoFields = [
        { caption: "課程代碼", key: "code" },
        { caption: "課程類型", key: "type" },
        { caption: "課程學分", key: "credit" },
        { caption: "授課語言", key: "languages" },
        { caption: "任課教師", key: "instructors" },
        
    
        { caption: "開課班級", key: "classes" },
    
        {
            caption: "課程時數",
            key: "hours",
            sub: [
                {
                    caption: "課程",
                    key: "course",
                },
                {
                    caption: "實習",
                    key: "practice",
                },
            ],
        },
        { caption: "上課時間", key: "schedule" },
    ];

    const courseContentFields = [
        { caption: "輔導考證", key: "certificationsSupport" },
        { caption: "先修科目與預備能力", key: "prerequisites" },
        { caption: "課程概述", key: "description" },
        {
            caption: "課程大綱",
            key: "syllabus",
            sub: [
                {
                    caption: "",
                    key: "zh",
                },
                {
                    caption: "",
                    key: "en",
                },
            ],
        },
        { caption: "課程進度表", key: "weeklySchedule" },
        {
            caption: "教學、評量方式",
            key: "teachingAndAssessment",
            sub: [
                {
                    caption: "",
                    key: "objective",
                },
                {
                    caption: "",
                    key: "teachingMethods",
                },
                {
                    caption: "",
                    key: "assessmentMethods",
                    sub: [
                        {
                            caption: "",
                            key: "method",
                        },
                        {
                            caption: "",
                            key: "type",
                        },
                    ],
                },
            ],
        },
        {
            caption: "考試方式",
            key: "exams",
            sub: [
                {
                    caption: "期中考",
                    key: "midterm",
                },
                {
                    caption: "期末考",
                    key: "final",
                },
                {
                    caption: "其他週",
                    key: "other",
                },
            ],
        },
        {
            caption: "指定用書",
            key: "textbook",
            sub: [
                {
                    caption: "書名",
                    key: "title",
                },
                {
                    caption: "作者",
                    key: "author",
                },
                {
                    caption: "書局",
                    key: "publisher",
                },
                {
                    caption: "年份",
                    key: "year",
                },
                {
                    caption: "ISBN",
                    key: "ISBN",
                },
                {
                    caption: "版本",
                    key: "edition",
                },
            ],
        },
        { caption: "參考書籍", key: "referenceBooks" },
        { caption: "教學軟體", key: "teachingSoftware" },
        { caption: "課程規範", key: "rules" },
    ];

    return {
        courseInfoFields,
        courseContentFields
    }
}