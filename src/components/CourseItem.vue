<template>
    <div
        class="mb-4 grid grid-cols-2 overflow-hidden rounded-lg border border-blue-500 bg-white text-center text-blue-500"
        @change="toggleUi"
    >
        <label
            v-for="toggleBtn in uiToggleBtns"
            :key="toggleBtn.enValue"
            class="py-1 hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:text-white"
        >
            <input
                type="radio"
                name="courseUi"
                class="sr-only"
                :value="toggleBtn.enValue"
                :checked="toggleBtn.checked"
            />
            {{ toggleBtn.zhValue }}
        </label>
    </div>

    <div
        @change="saveFavorite"
        :data-ui="courseUi.mode"
        class="transform-gpu rounded-2xl border-black/8 data-[ui=table]:mb-2 data-[ui=table]:overflow-x-scroll data-[ui=table]:border data-[ui=card]:md:grid data-[ui=card]:md:grid-cols-2 data-[ui=card]:md:gap-x-2 data-[ui=table]:lg:overflow-x-visible data-[ui=card]:xl:grid-cols-3"
    >
        <div
            :data-ui="courseUi.mode"
            class="grid min-w-[75rem] grid-cols-[3fr,.5fr,.9fr,1.2fr,1.5fr,.8fr] grid-rows-[3.75rem] items-center gap-x-5 rounded-t-2xl bg-white pl-10 pr-20 data-[ui=card]:hidden lg:min-w-0"
        >
            <p class="font-bold text-black/60">課程名稱</p>
            <p class="font-bold text-black/60">學分</p>
            <p class="font-bold text-black/60">類型</p>
            <p class="font-bold text-black/60">教師</p>
            <p class="font-bold text-black/60">班級</p>
            <p class="font-bold text-black/60">時間</p>
        </div>
        <article
            v-for="course in courses"
            :key="course.subcode"
            :data-ui="courseUi.mode"
            class="relative border-t border-black/8 bg-white data-[ui=card]:mb-2 data-[ui=card]:grid data-[ui=table]:min-w-[75rem] data-[ui=card]:grid-cols-[1.3fr,1fr,1fr] data-[ui=card]:grid-rows-3 data-[ui=card]:items-center data-[ui=card]:rounded-2xl data-[ui=card]:border data-[ui=table]:last:rounded-b-2xl data-[ui=table]:even:bg-opacity-50 data-[ui=card]:md:grid-cols-[1.5fr,1fr,1fr] lg:data-[ui=table]:min-w-0"
        >
            <router-link
                :to="{
                    path: `/course/${course.subcode}`
                }"
                :data-ui="courseUi.mode"
                class="grid data-[ui=card]:col-span-3 data-[ui=card]:row-span-3 data-[ui=table]:mr-20 data-[ui=card]:grid-cols-[1.3fr,1fr,1fr] data-[ui=table]:grid-cols-[3fr,.5fr,.9fr,1.2fr,1.5fr,.8fr] data-[ui=card]:grid-rows-3 data-[ui=table]:grid-rows-[3.75rem] data-[ui=table]:items-center data-[ui=table]:justify-evenly data-[ui=card]:gap-x-1.5 data-[ui=card]:gap-y-2 data-[ui=table]:gap-x-5 data-[ui=card]:px-4 data-[ui=card]:pb-2 data-[ui=table]:pl-10 data-[ui=card]:md:grid-cols-[1.5fr,1fr,1fr]"
            >
                <h2
                    :data-ui="courseUi.mode"
                    class="overflow-hidden text-ellipsis whitespace-nowrap data-[ui=card]:col-span-3 data-[ui=card]:border-b data-[ui=card]:border-black/8 data-[ui=card]:py-2 data-[ui=card]:font-bold"
                >
                    {{ course.name }}
                </h2>
                <h3
                    v-for="(pseudoCss, courseKey) in courseHeaders"
                    :key="`${course.subcode}${courseKey}`"
                    :data-ui="courseUi.mode"
                    class="overflow-hidden text-ellipsis whitespace-nowrap before:block before:text-xs before:text-black/55 data-[ui=card]:text-center data-[ui=card]:text-sm"
                    :class="pseudoCss"
                >
                    {{ course[courseKey] }}
                </h3>
            </router-link>
            <label
                :data-ui="courseUi.mode"
                class="absolute z-10 flex items-center justify-center rounded-lg border before:absolute before:block before:h-3.5 before:border before:border-blue-500 after:absolute after:block after:w-3.5 after:border after:border-blue-500 hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:after:border-white data-[ui=table]:right-5 data-[ui=table]:top-1/2 data-[ui=card]:col-start-3 data-[ui=card]:row-start-3 data-[ui=card]:mb-2 data-[ui=card]:mr-4 data-[ui=card]:h-9 data-[ui=table]:-translate-y-1/2 data-[ui=card]:place-self-center data-[ui=table]:p-5 data-[ui=card]:px-10"
            >
                <input
                    type="checkbox"
                    name="course"
                    :value="course.subcode"
                    :ref="course.subcode"
                    class="sr-only"
                />
            </label>
        </article>
    </div>
</template>

<script>
import localforage from 'localforage'

export default {
    props: {
        courses: Object
    },
    data() {
        return {
            courseUi: {
                mode: '',
                table: false,
                card: false
            },
            favorites: new Set()
        }
    },
    beforeCreate() {
        this.courseHeaders = {
            'credit': 'data-[ui=card]:before:content-["學分"]',
            'type': 'data-[ui=card]:before:content-["類型"]',
            'lecturer': 'data-[ui=card]:before:content-["教師"]',
            'class': 'data-[ui=card]:before:content-["班級"]',
            'time': 'data-[ui=card]:before:content-["時間"]'
        }
    },
    created() {
        this.uiToggleBtnsData = [
            {
                enValue: 'table',
                zhValue: '表格'
            },
            {
                enValue: 'card',
                zhValue: '卡片'
            }
        ]

        if (window.innerWidth >= 1024) {
            this.courseUi.table = true
            this.courseUi.mode = 'table'
        } else if (window.innerWidth < 1024) {
            this.courseUi.card = true
            this.courseUi.mode = 'card'
        }

        localforage
            .getItem('favoriteCourses')
            .then((storedFavorites) => {
                if (storedFavorites) {
                    this.favorites = new Set(storedFavorites)
                }
                this.setCheckedFavorites()
            })
            .catch((err) => {
                console.error(`Errors in acquiring favorite courses: ${err}`)
            })
    },
    mounted() {},
    computed: {
        uiToggleBtns() {
            return this.uiToggleBtnsData.map((btn) => {
                return {
                    enValue: btn.enValue,
                    zhValue: btn.zhValue,
                    checked: this.courseUi[btn.enValue]
                }
            })
        }
    },
    methods: {
        setCheckedFavorites() {
            this.$nextTick(() => {
                this.favorites.forEach((subcode) => {
                    if (this.$refs[subcode]) {
                        this.$refs[subcode][0].checked = true
                    }
                })
            })
        },
        saveFavorite(e) {
            if (e.target.checked) {
                this.favorites.add(e.target.value)
            } else {
                this.favorites.delete(e.target.value)
            }

            localforage.setItem('favoriteCourses', Array.from(this.favorites)).catch((err) => {
                console.error(`The error occurred while saving favorite courses: ${err}`)
            })
        },
        toggleUi(e) {
            const toggleValue = e.target.value
            if (toggleValue === 'table') {
                this.courseUi.table = true
                this.courseUi.card = false
                this.courseUi.mode = 'table'
            } else if (toggleValue === 'card') {
                this.courseUi.table = false
                this.courseUi.card = true
                this.courseUi.mode = 'card'
            }
        }
    }
}
</script>
