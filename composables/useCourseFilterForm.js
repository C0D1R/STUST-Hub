export const useCourseFilterForm = () => {
    const formFields = ref([
        // {
        //     "id": "semester",
        //     "name": "semester",
        //     "type": "radio",
        //     "caption": "學期",
        //     "options": [
        //         {
        //             "id": "113-1",
        //             "value": "113-1",
        //             "context": "113-1",
        //             "checked": true
        //         },
        //         {
        //             "id": "112-2",
        //             "value": "112-2",
        //             "context": "112-2",
        //             "checked": false
        //         },
        //         {
        //             "id": "112-1",
        //             "value": "112-1",
        //             "context": "112-1",
        //             "checked": false
        //         },
        //         {
        //             "id": "111-2",
        //             "value": "111-2",
        //             "context": "111-2",
        //             "checked": false
        //         },
        //         {
        //             "id": "111-1",
        //             "value": "111-1",
        //             "context": "111-1",
        //             "checked": false
        //         },
        //         {
        //             "id": "110-2",
        //             "value": "110-2",
        //             "context": "110-2",
        //             "checked": false
        //         },
        //         {
        //             "id": "110-1",
        //             "value": "110-1",
        //             "context": "110-1",
        //             "checked": false
        //         }
        //     ]
        // },
        {
            "id": "schoolSystem",
            "name": "schoolSystem",
            "type": "checkbox",
            "caption": "學制",
            "options": [
                {
                    "id": "daySchool",
                    "value": "daySchool",
                    "context": "日間部",
                    "checked": true
                },
                {
                    "id": "nightSchool",
                    "value": "nightSchool",
                    "context": "夜間部",
                    "checked": false
                }
            ]
        },
        {
            "id": "department",
            "name": "department",
            "type": "radio",
            "caption": "系所",
            "options": [
                {
                    "id": "imi",
                    "value": "imi",
                    "context": "工資系",
                    "row": "1",
                    "checked": true
                },
                {
                    "id": "ib",
                    "value": "ib",
                    "context": "國企系",
                    "row": "1",
                    "checked": false
                },
                {
                    "id": "fin",
                    "value": "fin",
                    "context": "財金系",
                    "row": "1",
                    "checked": false
                },
                {
                    "id": "ba",
                    "value": "ba",
                    "context": "企管系",
                    "row": "1",
                    "checked": false
                },
                {
                    "id": "mis",
                    "value": "mis",
                    "context": "資管系",
                    "row": "1",
                    "checked": false
                },
                {
                    "id": "accinfo",
                    "value": "accinfo",
                    "context": "會資系",
                    "row": "1",
                    "checked": false
                },
                {
                    "id": "leisure",
                    "value": "leisure",
                    "context": "休閒系",
                    "row": "1",
                    "checked": false
                },
                {
                    "id": "mim",
                    "value": "mim",
                    "context": "行流系",
                    "row": "1",
                    "checked": false
                },
                {
                    "id": "hm",
                    "value": "hm",
                    "context": "餐旅系",
                    "row": "1",
                    "checked": false
                },
                {
                    "id": "ee",
                    "value": "ee",
                    "context": "電機系",
                    "row": "2",
                    "checked": false
                },
                {
                    "id": "mech",
                    "value": "mech",
                    "context": "機械系",
                    "row": "2",
                    "checked": false
                },
                {
                    "id": "eecs",
                    "value": "eecs",
                    "context": "電子系",
                    "row": "2",
                    "checked": false
                },
                {
                    "id": "oe",
                    "value": "oe",
                    "context": "光電系",
                    "row": "2",
                    "checked": false
                },
                {
                    "id": "csie",
                    "value": "csie",
                    "context": "資工系",
                    "row": "2",
                    "checked": false
                },
                {
                    "id": "chem",
                    "value": "chem",
                    "context": "化材系",
                    "row": "2",
                    "checked": false
                },
                {
                    "id": "bio",
                    "value": "bio",
                    "context": "生食系",
                    "row": "2",
                    "checked": false
                },
                {
                    "id": "ic",
                    "value": "ic",
                    "context": "資傳系",
                    "row": "3",
                    "checked": false
                },
                {
                    "id": "vc",
                    "value": "vc",
                    "context": "視傳系",
                    "row": "3",
                    "checked": false
                },
                {
                    "id": "mes",
                    "value": "mes",
                    "context": "多樂系",
                    "row": "3",
                    "checked": false
                },
                {
                    "id": "cpd",
                    "value": "cpd",
                    "context": "產設系",
                    "row": "3",
                    "checked": false
                },
                {
                    "id": "pmi",
                    "value": "pmi",
                    "context": "流音系",
                    "row": "3",
                    "checked": false
                },
                {
                    "id": "english",
                    "value": "english",
                    "context": "英語系",
                    "row": "4",
                    "checked": false
                },
                {
                    "id": "japan",
                    "value": "japan",
                    "context": "日語系",
                    "row": "4",
                    "checked": false
                },
                {
                    "id": "childcare",
                    "value": "childcare",
                    "context": "幼保系",
                    "row": "4",
                    "checked": false
                },
                {
                    "id": "ss",
                    "value": "ss",
                    "context": "高福系",
                    "row": "4",
                    "checked": false
                }
            ]
        },
        {
            "id": "courseType",
            "name": "courseType",
            "type": "checkbox",
            "caption": "類別",
            "options": [
                {
                    "id": "compulsory",
                    "value": "compulsory",
                    "context": "必修",
                    "checked": true
                },
                {
                    "id": "elective",
                    "value": "elective",
                    "context": "選修",
                    "checked": false
                },
                {
                    "id": "general",
                    "value": "general",
                    "context": "通識",
                    "checked": false
                }
            ]
        },
        {
            "id": "grade",
            "name": "grade",
            "type": "checkbox",
            "caption": "年級",
            "options": [
                {
                    "id": "first",
                    "value": "first",
                    "context": "一年級",
                    "checked": true
                },
                {
                    "id": "second",
                    "value": "second",
                    "context": "二年級",
                    "checked": false
                },
                {
                    "id": "third",
                    "value": "third",
                    "context": "三年級",
                    "checked": false
                },
                {
                    "id": "fourth",
                    "value": "fourth",
                    "context": "四年級",
                    "checked": false
                },
                {
                    "id": "fifth",
                    "value": "fifth",
                    "context": "五年級",
                    "checked": false
                }
            ]
        },
        {
            "id": "time",
            "name": "time",
            "type": "checkbox",
            "caption": "時間",
            "options": [
                {
                    "id": "PeriodGroup",
                    "group": [
                        {
                            "id": "Period",
                            "value": "P",
                            "context": "全選",
                            "type": "button",
                            "span": true
                        },
                        {
                            "id": "Period1",
                            "value": "1",
                            "context": "1",
                            "type": "button",
                            "span": false
                        },
                        {
                            "id": "Period2",
                            "value": "2",
                            "context": "2",
                            "type": "button",
                            "span": false
                        },
                        {
                            "id": "Period3",
                            "value": "3",
                            "context": "3",
                            "type": "button",
                            "span": false
                        },
                        {
                            "id": "Period4",
                            "value": "4",
                            "context": "4",
                            "type": "button",
                            "span": false
                        },
                        {
                            "id": "Period5",
                            "value": "5",
                            "context": "5",
                            "type": "button",
                            "span": false
                        },
                        {
                            "id": "Period6",
                            "value": "6",
                            "context": "6",
                            "type": "button",
                            "span": false
                        },
                        {
                            "id": "Period7",
                            "value": "7",
                            "context": "7",
                            "type": "button",
                            "span": false
                        },
                        {
                            "id": "Period8",
                            "value": "8",
                            "context": "8",
                            "type": "button",
                            "span": false
                        },
                        {
                            "id": "Period9",
                            "value": "9",
                            "context": "9",
                            "type": "button",
                            "span": false
                        },
                        {
                            "id": "Period10",
                            "value": "10",
                            "context": "10",
                            "type": "button",
                            "span": false
                        },
                        {
                            "id": "Period11",
                            "value": "11",
                            "context": "11",
                            "type": "button",
                            "span": false
                        },
                        {
                            "id": "Period12",
                            "value": "12",
                            "context": "12",
                            "type": "button",
                            "span": false
                        },
                        {
                            "id": "Period13",
                            "value": "13",
                            "context": "13",
                            "type": "button",
                            "span": false
                        },
                        {
                            "id": "Period14",
                            "value": "14",
                            "context": "14",
                            "type": "button",
                            "span": false
                        }
                    ]
                },
                {
                    "id": "MondayGroup",
                    "group": [
                        {
                            "id": "Monday",
                            "value": "M",
                            "context": "一",
                            "type": "button",
                            "span": true
                        },
                        {
                            "id": "Monday1",
                            "value": "M1",
                            "context": "1",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Monday2",
                            "value": "M2",
                            "context": "2",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Monday3",
                            "value": "M3",
                            "context": "3",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Monday4",
                            "value": "M4",
                            "context": "4",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Monday5",
                            "value": "M5",
                            "context": "5",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Monday6",
                            "value": "M6",
                            "context": "6",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Monday7",
                            "value": "M7",
                            "context": "7",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Monday8",
                            "value": "M8",
                            "context": "8",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Monday9",
                            "value": "M9",
                            "context": "9",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Monday10",
                            "value": "M10",
                            "context": "10",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Monday11",
                            "value": "M11",
                            "context": "11",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Monday12",
                            "value": "M12",
                            "context": "12",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Monday13",
                            "value": "M13",
                            "context": "13",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Monday14",
                            "value": "M14",
                            "context": "14",
                            "type": "checkbox",
                            "span": false
                        }
                    ]
                },
                {
                    "id": "TuesdayGroup",
                    "group": [
                        {
                            "id": "Tuesday",
                            "value": "T",
                            "context": "二",
                            "type": "button",
                            "span": true
                        },
                        {
                            "id": "Tuesday1",
                            "value": "T1",
                            "context": "1",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Tuesday2",
                            "value": "T2",
                            "context": "2",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Tuesday3",
                            "value": "T3",
                            "context": "3",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Tuesday4",
                            "value": "T4",
                            "context": "4",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Tuesday5",
                            "value": "T5",
                            "context": "5",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Tuesday6",
                            "value": "T6",
                            "context": "6",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Tuesday7",
                            "value": "T7",
                            "context": "7",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Tuesday8",
                            "value": "T8",
                            "context": "8",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Tuesday9",
                            "value": "T9",
                            "context": "9",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Tuesday10",
                            "value": "T10",
                            "context": "10",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Tuesday11",
                            "value": "T11",
                            "context": "11",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Tuesday12",
                            "value": "T12",
                            "context": "12",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Tuesday13",
                            "value": "T13",
                            "context": "13",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Tuesday14",
                            "value": "T14",
                            "context": "14",
                            "type": "checkbox",
                            "span": false
                        }
                    ]
                },
                {
                    "id": "WednesdayGroup",
                    "group": [
                        {
                            "id": "Wednesday",
                            "value": "W",
                            "context": "三",
                            "type": "button",
                            "span": true
                        },
                        {
                            "id": "Wednesday1",
                            "value": "W1",
                            "context": "1",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Wednesday2",
                            "value": "W2",
                            "context": "2",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Wednesday3",
                            "value": "W3",
                            "context": "3",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Wednesday4",
                            "value": "W4",
                            "context": "4",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Wednesday5",
                            "value": "W5",
                            "context": "5",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Wednesday6",
                            "value": "W6",
                            "context": "6",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Wednesday7",
                            "value": "W7",
                            "context": "7",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Wednesday8",
                            "value": "W8",
                            "context": "8",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Wednesday9",
                            "value": "W9",
                            "context": "9",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Wednesday10",
                            "value": "W10",
                            "context": "10",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Wednesday11",
                            "value": "W11",
                            "context": "11",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Wednesday12",
                            "value": "W12",
                            "context": "12",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Wednesday13",
                            "value": "W13",
                            "context": "13",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Wednesday14",
                            "value": "W14",
                            "context": "14",
                            "type": "checkbox",
                            "span": false
                        }
                    ]
                },
                {
                    "id": "thuRdayGroup",
                    "group": [
                        {
                            "id": "thuRday",
                            "value": "R",
                            "context": "四",
                            "type": "button",
                            "span": true
                        },
                        {
                            "id": "thuRday1",
                            "value": "R1",
                            "context": "1",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "thuRday2",
                            "value": "R2",
                            "context": "2",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "thuRday3",
                            "value": "R3",
                            "context": "3",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "thuRday4",
                            "value": "R4",
                            "context": "4",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "thuRday5",
                            "value": "R5",
                            "context": "5",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "thuRday6",
                            "value": "R6",
                            "context": "6",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "thuRday7",
                            "value": "R7",
                            "context": "7",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "thuRday8",
                            "value": "R8",
                            "context": "8",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "thuRday9",
                            "value": "R9",
                            "context": "9",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "thuRday10",
                            "value": "R10",
                            "context": "10",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "thuRday11",
                            "value": "R11",
                            "context": "11",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "thuRday12",
                            "value": "R12",
                            "context": "12",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "thuRday13",
                            "value": "R13",
                            "context": "13",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "thuRday14",
                            "value": "R14",
                            "context": "14",
                            "type": "checkbox",
                            "span": false
                        }
                    ]
                },
                {
                    "id": "FridayGroup",
                    "group": [
                        {
                            "id": "Friday",
                            "value": "F",
                            "context": "五",
                            "type": "button",
                            "span": true
                        },
                        {
                            "id": "Friday1",
                            "value": "F1",
                            "context": "1",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Friday2",
                            "value": "F2",
                            "context": "2",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Friday3",
                            "value": "F3",
                            "context": "3",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Friday4",
                            "value": "F4",
                            "context": "4",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Friday5",
                            "value": "F5",
                            "context": "5",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Friday6",
                            "value": "F6",
                            "context": "6",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Friday7",
                            "value": "F7",
                            "context": "7",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Friday8",
                            "value": "F8",
                            "context": "8",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Friday9",
                            "value": "F9",
                            "context": "9",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Friday10",
                            "value": "F10",
                            "context": "10",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Friday11",
                            "value": "F11",
                            "context": "11",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Friday12",
                            "value": "F12",
                            "context": "12",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Friday13",
                            "value": "F13",
                            "context": "13",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Friday14",
                            "value": "F14",
                            "context": "14",
                            "type": "checkbox",
                            "span": false
                        }
                    ]
                },
                {
                    "id": "SaturdayGroup",
                    "group": [
                        {
                            "id": "Saturday",
                            "value": "S",
                            "context": "六",
                            "type": "button",
                            "span": true
                        },
                        {
                            "id": "Saturday1",
                            "value": "S1",
                            "context": "1",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Saturday2",
                            "value": "S2",
                            "context": "2",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Saturday3",
                            "value": "S3",
                            "context": "3",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Saturday4",
                            "value": "S4",
                            "context": "4",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Saturday5",
                            "value": "S5",
                            "context": "5",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Saturday6",
                            "value": "S6",
                            "context": "6",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Saturday7",
                            "value": "S7",
                            "context": "7",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Saturday8",
                            "value": "S8",
                            "context": "8",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Saturday9",
                            "value": "S9",
                            "context": "9",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Saturday10",
                            "value": "S10",
                            "context": "10",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Saturday11",
                            "value": "S11",
                            "context": "11",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Saturday12",
                            "value": "S12",
                            "context": "12",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Saturday13",
                            "value": "S13",
                            "context": "13",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "Saturday14",
                            "value": "S14",
                            "context": "14",
                            "type": "checkbox",
                            "span": false
                        }
                    ]
                },
                {
                    "id": "sUndayGroup",
                    "group": [
                        {
                            "id": "sUnday",
                            "value": "U",
                            "context": "日",
                            "type": "button",
                            "span": true
                        },
                        {
                            "id": "sUnday1",
                            "value": "U1",
                            "context": "1",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "sUnday2",
                            "value": "U2",
                            "context": "2",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "sUnday3",
                            "value": "U3",
                            "context": "3",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "sUnday4",
                            "value": "U4",
                            "context": "4",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "sUnday5",
                            "value": "U5",
                            "context": "5",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "sUnday6",
                            "value": "U6",
                            "context": "6",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "sUnday7",
                            "value": "U7",
                            "context": "7",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "sUnday8",
                            "value": "U8",
                            "context": "8",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "sUnday9",
                            "value": "U9",
                            "context": "9",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "sUnday10",
                            "value": "U10",
                            "context": "10",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "sUnday11",
                            "value": "U11",
                            "context": "11",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "sUnday12",
                            "value": "U12",
                            "context": "12",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "sUnday13",
                            "value": "U13",
                            "context": "13",
                            "type": "checkbox",
                            "span": false
                        },
                        {
                            "id": "sUnday14",
                            "value": "U14",
                            "context": "14",
                            "type": "checkbox",
                            "span": false
                        }
                    ]
                }
            ]
        }
    ])

    return {
        formFields
    }
}