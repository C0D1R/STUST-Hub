<template>
    <div v-once class="mx-auto mb-4 w-[94vw] rounded-2xl border border-black/8 bg-white xl:w-5/6">
        <div
            v-for="header in headers"
            :key="header.id"
            class="mx-3 border-b border-black/8 lg:grid lg:grid-cols-[12%,auto] lg:items-center lg:py-1"
        >
            <h2 class="py-2 text-center font-bold text-black/60">{{ header.caption }}</h2>
            <div
                v-if="header.id !== 'department' && header.id !== 'time'"
                class="grid grid-cols-[repeat(auto-fill,5.625rem)] justify-center pb-2 lg:justify-normal lg:pb-0"
            >
                <SearchOption
                    v-for="item in items[header.id]"
                    :key="item.id"
                    :input-type="header.type"
                    :input-name="header.id"
                    :input-value="item.value"
                    :input-text="item.context"
                />
            </div>
            <div v-else-if="header.id === 'department'">
                <div
                    v-for="item in items[header.id]"
                    :key="`${item.college.id}block`"
                    class="grid grid-cols-[repeat(auto-fill,5.625rem)] justify-center pb-2 lg:justify-normal lg:pb-0"
                >
                    <SearchOption
                        v-for="dept in item.depts"
                        :key="dept.id"
                        :input-type="header.type"
                        :input-name="header.id"
                        :input-value="dept.value"
                        :input-text="dept.context"
                    />
                </div>
            </div>
            <div
                v-else
                class="grid grid-flow-col grid-cols-8 grid-rows-[repeat(15,2.125rem)] gap-1 pb-2 lg:m-1.5 lg:grid-flow-row lg:grid-cols-[repeat(15,minmax(0,3.75rem))] lg:grid-rows-[repeat(8,2.125rem)]"
                @change="eventAgent"
            >
                <SearchTimeOption
                    v-for="item in items[header.id]"
                    :key="item.id"
                    :input-type="header.type"
                    :input-name="header.id"
                    :input-value="item.value"
                    :input-ref="item.value"
                    :input-text="item.context"
                />
            </div>
        </div>

        <div class="p-3 lg:flex lg:justify-center">
            <label
                class="block rounded-lg bg-blue-500 py-1 text-center text-white lg:rounded-3xl lg:px-7 lg:py-1.5"
            >
                <input type="button" name="send" class="sr-only" @click="handleSubmit" />
                送出
            </label>
        </div>
    </div>

    <main v-if="courses" class="mx-auto mb-4 w-[94vw] xl:w-5/6">
        <CourseItem :courses="courses"></CourseItem>
    </main>
</template>

<script>
import SearchOption from '@/components/SearchOption.vue'
import SearchTimeOption from '@/components/SearchTimeOption.vue'
import CourseItem from '@/components/CourseItem.vue'

export default {
    data() {
        return {
            path: {
                semester: '',
                schoolSystem: '',
                department: '',
                courseType: [],
                grade: [],
                time: []
            },
            courses: null
        }
    },
    beforeCreate() {
        this.headers = [
            { caption: '學期', type: 'radio', id: 'semester' },
            { caption: '學制', type: 'radio', id: 'schoolSystem' },
            { caption: '系所', type: 'radio', id: 'department' },
            { caption: '類別', type: 'checkbox', id: 'courseType' },
            { caption: '年級', type: 'checkbox', id: 'grade' },
            { caption: '時間', type: 'checkbox', id: 'time' }
        ]
        this.items = {
            semester: [
                { id: '112-2', context: '112-2', value: '112-2' },
                { id: '112-1', context: '112-1', value: '112-1' },
                { id: '111-2', context: '111-2', value: '111-2' },
                { id: '111-1', context: '111-1', value: '111-1' },
                { id: '110-2', context: '110-2', value: '110-2' },
                { id: '110-1', context: '110-1', value: '110-1' }
            ],
            schoolSystem: [
                { id: 'daySchool', context: '日間部', value: 'daySchool' },
                { id: 'nightSchool', context: '夜間部', value: 'nightSchool' }
            ],
            department: [
                {
                    college: { id: 'business', context: '商管學院', value: 'business' },
                    depts: [
                        { id: 'imi', context: '工資系', value: 'imi' },
                        { id: 'ib', context: '國企系', value: 'ib' },
                        { id: 'fin', context: '財金系', value: 'fin' },
                        { id: 'ba', context: '企管系', value: 'ba' },
                        { id: 'mis', context: '資管系', value: 'mis' },
                        { id: 'accinfo', context: '會資系', value: 'accinfo' },
                        { id: 'leisure', context: '休閒系', value: 'leisure' },
                        { id: 'mim', context: '行流系', value: 'mim' },
                        { id: 'hm', context: '餐旅系', value: 'hm' }
                    ]
                },
                {
                    college: { id: 'engineering', context: '工學院', value: 'engineering' },
                    depts: [
                        { id: 'ee', context: '電機系', value: 'ee' },
                        { id: 'mech', context: '機械系', value: 'mech' },
                        { id: 'eecs', context: '電子系', value: 'eecs' },
                        { id: 'oe', context: '光電系', value: 'oe' },
                        { id: 'csie', context: '資工系', value: 'csie' },
                        { id: 'chem', context: '化材系', value: 'chem' },
                        { id: 'bio', context: '生食系', value: 'bio' }
                    ]
                },
                {
                    college: {
                        id: 'communication',
                        context: '數位設計學院',
                        value: 'communication'
                    },
                    depts: [
                        { id: 'ic', context: '資傳系', value: 'ic' },
                        { id: 'vc', context: '視傳系', value: 'vc' },
                        { id: 'mes', context: '多樂系', value: 'mes' },
                        { id: 'cpd', context: '產設系', value: 'cpd' },
                        { id: 'pmi', context: '流音系', value: 'pmi' }
                    ]
                },
                {
                    college: { id: 'humanities', context: '人文社會學院', value: 'humanities' },
                    depts: [
                        { id: 'english', context: '英語系', value: 'english' },
                        { id: 'japan', context: '日語系', value: 'japan' },
                        { id: 'childcare', context: '幼保系', value: 'childcare' },
                        { id: 'ss', context: '高福系', value: 'ss' }
                    ]
                }
            ],
            courseType: [
                { id: 'compulsory', context: '必修', value: 'compulsory' },
                { id: 'elective', context: '選修', value: 'elective' },
                { id: 'general', context: '通識', value: 'general' }
            ],
            grade: [
                { id: 'first', context: '一年級', value: 'first' },
                { id: 'second', context: '二年級', value: 'second' },
                { id: 'third', context: '三年級', value: 'third' },
                { id: 'fourth', context: '四年級', value: 'fourth' },
                { id: 'fifth', context: '五年級', value: 'fifth' }
            ]
        }
    },
    created() {
        this.items.time = this.generateTime()
        this.courses = JSON.parse(sessionStorage.getItem('courses'))
    },
    methods: {
        generateTime() {
            const result = []
            const times = [
                { context: '', value: 'P', id: 'Period' },
                { context: '一', value: 'M', id: 'Monday' },
                { context: '二', value: 'T', id: 'Tuesday' },
                { context: '三', value: 'W', id: 'Wednesday' },
                { context: '四', value: 'R', id: 'thuRday' },
                { context: '五', value: 'F', id: 'Friday' },
                { context: '六', value: 'S', id: 'Saturday' },
                { context: '日', value: 'U', id: 'sUnday' }
            ]
            times.forEach((time) => {
                result.push(time)

                for (let period = 1; period < 15; period++) {
                    const value = `${time.value !== 'P' ? time.value : ''}${period}`
                    const id = `${time.id}${period}`

                    result.push({
                        context: period,
                        value: value,
                        id: id
                    })
                }
            })

            return result
        },
        eventAgent(e) {
            const isDayBtn = /\b[A-OQ-Z]\b/.test(e.target.value)
            const isPeriodBtn = /\b\d{1,2}\b/.test(e.target.value)
            const isAllBtn = /P/.test(e.target.value)

            const isCheckBtn = isDayBtn || isPeriodBtn || isAllBtn

            const changeState = []

            if (isCheckBtn) {
                if (isDayBtn) {
                    const day = e.target.value
                    const checked = e.target.checked

                    for (let period = 1; period < 15; period++) {
                        const isChangeState = this.$refs[`${day}${period}`][0].checked !== checked

                        if (isChangeState) {
                            changeState.push(period)
                        }

                        this.$refs[`${day}${period}`][0].checked = checked
                    }
                }

                if (isPeriodBtn) {
                    const days = ['M', 'T', 'W', 'R', 'F', 'S', 'U']
                    const period = e.target.value
                    const checked = e.target.checked

                    for (const day of days) {
                        const isChangeState = this.$refs[`${day}${period}`][0].checked !== checked

                        if (isChangeState) {
                            changeState.push(day)
                        }

                        this.$refs[`${day}${period}`][0].checked = checked
                    }
                }

                if (isAllBtn) {
                    const days = ['M', 'T', 'W', 'R', 'F', 'S', 'U']
                    const checked = e.target.checked

                    days.forEach((day) => {
                        this.$refs[day][0].checked = checked

                        for (let period = 1; period < 15; period++) {
                            this.$refs[`${day}${period}`][0].checked = checked
                        }
                    })

                    for (let period = 1; period < 15; period++) {
                        this.$refs[period][0].checked = checked
                    }

                    return
                }
            }

            const hasChangeState = changeState.length > 0
            const dayPeriod = hasChangeState
                ? changeState
                : e.target.value.match(/[A-OQ-Z]|\d{1,2}/g)

            dayPeriod.forEach((value) => {
                const checkboxes = []
                const isDay = /[A-OQ-Z]/.test(value)

                if (isDay) {
                    for (let period = 1; period < 15; period++) {
                        checkboxes.push(this.$refs[`${value}${period}`][0])
                    }
                } else {
                    const days = ['M', 'T', 'W', 'R', 'F', 'S', 'U']

                    days.forEach((day) => {
                        checkboxes.push(this.$refs[`${day}${value}`][0])
                    })
                }

                this.$refs[value][0].checked = checkboxes.every((checkbox) => checkbox.checked)
            })
        },
        handleSubmit() {
            const filterData = ''
            const dataPath = '/data/allcourse.json'

            const worker = new Worker(new URL('@/workers/filter.js', import.meta.url))
            worker.onmessage = (event) => {
                this.courses = event.data.courseData
                sessionStorage.setItem('courses', JSON.stringify(event.data.courseData))
            }

            worker.postMessage({
                path: dataPath,
                filter: filterData
            })
        }
    },
    components: {
        SearchOption,
        SearchTimeOption,
        CourseItem
    }
}
</script>
