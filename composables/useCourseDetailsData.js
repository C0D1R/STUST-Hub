export const useCourseDetailsData = () => {
    const course = ref({
        code: "80D07302",
        name: {
            zh: "管理學",
            en: "Management",
        },
        credit: "3.0",
        type: "必修",
        classes: [
            "四技自控一甲",
            "四技自控一乙",
            "四技奈米一甲",
            "四技奈米一乙",
            "四機械國專一甲",
            "四技四奈四米一八",
            "四技四奈四米一乙九",
            "四四四技四奈四米一十",
        ],
        instructors: ["陳可杰"],
        schedule: [
            {
                day: "週一",
                period: "第2節",
                location: "S414",
            },
            {
                day: "週一",
                period: "第3節",
                location: "S414",
            },
            {
                day: "週一",
                period: "第4節",
                location: "S414",
            },
        ],
        hours: {
            course: "3",
            practice: "0",
        },
        languages: [
            "華語",
            "英語",
            "◎全程外語教學"
        ],
        certificationsSupport: [
            "電腦軟體設計技術士",
            "國內證照、高普考、專技人員考試",
            "乙級汽車修護技術士證照",
            "乙級汽車修護技術士證照乙級汽車修護技術士證照",
            "TOCIE"
        ],
        description:
            "以課堂講授為主，輔以實際管理個案的探討與反思，協助學習理解何謂管理及管理者，以及管理理論的過去與未來環境。並介紹管理功能的各個層面及相關研究，使學習者對組織運用的管理知識有全面的認識。",
        prerequisites: "",
        syllabus: {
            zh: "第一章 管理者與管理第二章 管理理論的演進第三章 企業環境第四章 全球環境第五章 企業倫理與社會責任第六章 決策第七章 規劃者與策略第八章 組織概論第九章 新時代的組織結構第十章 組織文化與變革第十一章 激勵第十二章 領導第十三章 溝通第十四章 控制第十五章 人力資源管理第十六章 創新與創業精神",
            en: "Chapter 1 Manager And ManagementChapter 2 The Evolution Of Management TheoryChapter 3 Managing In A Changing EnvironmentChapter 4 Overview On The International EnvironmentChapter 5 Ethic And Corporate Social ResponsibilityChapter 6 Problem Solving and DecisionChapter 7 Planning and Strategic PlanningChapter 8 OrganisingChapter 9 Organization Structure in the New EraChapter 10 Managing Change and CultureChapter 11 MotivationChapter 12 LeadershipChapter 13 CommunicationChapter 14 ControllingChapter 15 Human Resource ManagementChapter 16 Innovation and Entrepreneurship",
        },
        weeklySchedule:
            "週次\t日期\t週別\t　1\t2024/2/19\t課程簡介\t上課方式，評分方式說明2\t2024/2/26\t第一章\t管理，企業3\t2024/3/4\t第二章\t管理，企業4\t2024/3/11\t第三章\t管理理論5\t2024/3/18\t第四章\t環境6\t2024/3/25\t第五章\t社會責任7\t2024/4/1\t第六章\t決策8\t2024/4/8\t第七章\t規劃9\t2024/4/15\t考試週\t期中考-紙筆測驗10\t2024/4/22\t第八章\t組織11\t2024/4/29\t第九章\t組織12\t2024/5/6\t第十章\t領導13\t2024/5/13\t第十一章\t激勵14\t2024/5/20\t第十二章\t溝通15\t2024/5/27\t第十三章\t控制16\t2024/6/3\t第十四章\t創業17\t2024/6/10\t放假\t　18\t2024/6/17\t考試週\t期末考-紙筆測驗",
        exams: {
            midterm: "紙筆測驗",
            final: "紙筆測驗",
            other: "無",
        },
        teachingAndAssessment: [
            {
                objective: "瞭解管理所面對的環境及管理理論之發展",
                teachingMethods: ["課堂講授"],
                assessmentMethods: [
                    {
                        "method": "實作",
                        "type": "平時"
                    },
                ],
            },
            {
                objective: "瞭解管理學重要理論之內容",
                teachingMethods: ["課堂講授"],
                assessmentMethods: [
                    {
                        "method": "實作",
                        "type": "平時"
                    },
                    {
                        "method": "實作",
                        "type": "期中"
                    }
                ],
            },
            {
                objective: "具備管理實務操作技巧",
                teachingMethods: ["分組討論"],
                assessmentMethods: [
                    {
                        "method": "實作",
                        "type": "平時"
                    },
                    {
                        "method": "實作",
                        "type": "期中"
                    },
                    {
                        "method": "實作",
                        "type": "期末"
                    }
                ],
            },
            {
                objective: "瞭解管理人員需具備的專業倫理",
                teachingMethods: ["課堂講授"],
                assessmentMethods: [
                    {
                        method: "筆試",
                        type: "期末",
                    },
                ],
            },
        ],
        textbook: {
            title: "管理學概論",
            author: "李慶芳、陳可杰 、蔡敦浩",
            publisher: "滄海圖書",
            year: "2023",
            ISBN: "ISBN 978-626-97291-5-9",
            edition: "1",
        },
        referenceBooks: "1. 趨勢類 a. 臺灣與世界─地方化與全球化，顧長永，復文，2005。 b. 全球化的趨勢與衝擊，David Held等著，沈宗瑞等譯，三民，2007。 c. 世界是平的，Thomas Friedman著，楊振富等譯，雅言文化，2005。 d. 臺灣的未來，薛天棟主編，華泰，2002。 2. 法政類 a. 民主與法治，黃勝興等著，高立，2009。 b. 全球化與臺灣社會:人權、法律與社會學的觀照，朱柔若，三民，2008。 c. 公民，沈六主編，三民，2005。 d. 人權概論，黎淑慧，新文京，2004。 e. 法學緒論，謝瑞智著，文笙，2004。 3. 歷史類 a. 臺灣的社會變遷，林柏維，車愰寮工作室，2007。 b. 世界現代史，王曾才，三民，2005。 c. 臺灣開發史，薛化元，三民，2009。 d. 世界通史當代篇，張象等著，五南，2003。 4. 其他類 a. 全球化下的臺灣經濟，瞿宛文，台灣社會研究雜誌社，2003。 b. 臺灣經濟論，蔡學儀，新文京，2004。 c. 全球浪潮，Jagdish Bhagwati著，周和君譯，五南，2007。 d. 婚姻與家庭，徐光國，揚智，2003。 e. 臺灣宗教變遷的社會政治分析，瞿海源，桂冠，1997。 f. 臺灣人的神明，董芳苑，前衛，2009。 g. 心理學，楊國樞等著，三民，1998。",
        teachingSoftware: "MS-POWER Point",
        rules: "本課程講述內容以講義為基礎，無指定教科書，上課時應攜帶講義來配合聽講，未帶講義者則列為平時成績的考核記錄。講義由總務股長統一代為影印，每位同學期初即請繳交50元以為影印費用，經濟上有困難者，則請告知老師。若偶而有事不能到課者，記得請其他同學代領講義。1. 本教學大綱得視實際教學之需要調整之。2. 學習態度為平時成績之主要依據，故同學上課應注意秩序等情況。3. 上課採固定座位，期初即會列出固定座位表。",
    });

    return {
        course
    }
}