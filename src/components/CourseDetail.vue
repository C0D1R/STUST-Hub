<template>
    <main
        class="mx-2 mb-2 rounded-2xl border border-black/8 bg-white p-2 sm:mx-4 sm:p-4 lg:mx-auto lg:w-[94vw] xl:w-5/6"
    >
        <div class="mb-2 sm:mb-4 sm:flex sm:items-center sm:justify-between">
            <h1 class="mb-2 text-xl font-semibold sm:mb-0">
                {{ course.name }}
            </h1>
            <label
                class="flex h-9 items-center justify-center rounded-lg border px-7 text-blue-500 hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:text-white"
            >
                <input
                    type="checkbox"
                    name="course"
                    class="peer sr-only"
                    :value="course.subcode"
                    :ref="course.subcode"
                    :checked="hasFavorited"
                    @change="toggleFavorite"
                />
                <i
                    class="relative mr-5 flex items-center justify-center before:absolute before:h-3.5 before:border before:border-blue-500 after:absolute after:w-3.5 after:border after:border-blue-500 peer-checked:after:border-white"
                ></i>
                收藏課程
            </label>
        </div>

        <section class="mb-4 grid grid-cols-[1fr,0.55fr,1fr] gap-2">
            <p class="rounded-lg border border-black/8 py-2 text-center">
                <span class="block">{{ course.subcode }}</span>
                <span class="block text-xs text-black/55">課程代碼</span>
            </p>
            <p class="rounded-lg border border-black/8 py-2 text-center">
                <span class="block">{{ course.credit }}</span>
                <span class="block text-xs text-black/55">學分</span>
            </p>
            <p class="rounded-lg border border-black/8 py-2 text-center">
                <span class="block">{{ course.type }}</span>
                <span class="block text-xs text-black/55">類型</span>
            </p>
        </section>

        <div class="md:grid md:grid-cols-2 md:gap-x-4">
            <section class="mb-4">
                <h2 class="pb-1 text-lg font-semibold">授課教師</h2>
                <div class="rounded-lg border border-black/10 px-2">
                    <div
                        v-for="lecturer in course.lecturer"
                        :key="lecturer"
                        class="mb-2 first:mt-2 lg:grid lg:grid-cols-[1fr,2.5fr] lg:gap-x-2"
                    >
                        <router-link
                            :to="{ path: `/lecturer/${lecturer.name}` }"
                            class="block rounded-t-lg border border-black/10 px-2 py-1 text-center lg:rounded-lg"
                        >
                            {{ lecturer.name }}
                        </router-link>
                        <component
                            :is="getMailType(lecturer.mail)"
                            :href="getMailHref(lecturer.mail)"
                            class="block rounded-b-lg border border-t-0 border-black/10 px-2 py-1 text-center empty:before:block empty:before:min-h-6 lg:rounded-lg lg:border-t"
                        >
                            {{ lecturer.mail }}
                        </component>
                    </div>
                </div>
            </section>

            <section class="mb-4">
                <h2 class="pb-1 text-lg font-semibold">開課班級</h2>
                <div
                    class="rounded-lg border border-black/10 px-2 pt-2 sm:grid sm:grid-cols-2 sm:gap-x-2"
                >
                    <router-link
                        v-for="(classText, index) in course.class"
                        :key="`class${index}`"
                        :to="{ path: `/class/${classText}` }"
                        class="mb-2 block rounded-lg border border-black/10 px-2 py-1 text-center"
                    >
                        {{ classText }}
                    </router-link>
                </div>
            </section>
        </div>

        <div class="sm:grid sm:grid-cols-2 sm:gap-x-4">
            <div>
                <section class="mb-4">
                    <h2 class="pb-1 text-lg font-semibold">上課資訊</h2>
                    <div class="rounded-lg border border-black/10 px-2">
                        <template v-if="hasTime(course.time)">
                            <div
                                class="grid grid-cols-3 grid-rows-1 place-items-center border-b border-black/8 py-1 text-black/55 last:border-none"
                            >
                                <p>星期</p>
                                <p>節次</p>
                                <p>地點</p>
                            </div>
                            <div
                                v-for="time in timeTransform(course.time)"
                                :key="`${dayZhToEn(time.day)}${time.period}`"
                                class="grid grid-cols-3 grid-rows-1 place-items-center border-b border-black/8 py-1 last:border-none"
                            >
                                <p>週{{ time.day }}</p>
                                <p>第 {{ time.period }} 節</p>
                                <p>{{ course.location }}</p>
                            </div>
                        </template>
                        <template v-else>
                            <p class="py-1 text-center">無資料</p>
                        </template>
                    </div>
                </section>
                <section class="mb-4">
                    <h2 class="pb-1 text-lg font-semibold">授課語言</h2>
                    <div
                        class="rounded-lg border border-black/10 px-2 pt-2 sm:grid sm:grid-cols-2 sm:gap-x-2"
                    >
                        <p
                            v-for="(classText, index) in course.language"
                            :key="index"
                            class="mb-2 block rounded-lg border border-black/10 px-2 py-1 text-center"
                        >
                            {{ classText }}
                        </p>
                    </div>
                </section>
            </div>

            <section class="mb-4">
                <h2 class="pb-1 text-lg font-semibold">選課人數</h2>
                <div class="rounded-lg border border-black/10 px-2">
                    <div
                        class="grid grid-cols-3 grid-rows-1 place-items-center border-b border-black/8 py-1 text-black/55 before:block"
                    >
                        <p>人數上限</p>
                        <p>當前人數</p>
                    </div>
                    <div
                        class="grid grid-cols-3 grid-rows-1 place-items-center border-b border-black/8 py-1"
                    >
                        <p>總人數</p>
                        <p>{{ course.capacity.total.max }}</p>
                        <p>{{ course.capacity.total.current }}</p>
                    </div>
                    <div
                        class="grid grid-cols-3 grid-rows-1 place-items-center border-b border-black/8 py-1"
                    >
                        <p>本班</p>
                        <p>{{ course.capacity.class.max }}</p>
                        <p>{{ course.capacity.class.current }}</p>
                    </div>
                    <div
                        class="grid grid-cols-3 grid-rows-1 place-items-center border-b border-black/8 py-1"
                    >
                        <p>本系</p>
                        <p>{{ course.capacity.deptartment.max }}</p>
                        <p>{{ course.capacity.deptartment.current }}</p>
                    </div>
                    <div class="grid grid-cols-3 grid-rows-1 place-items-center py-1">
                        <p>外系</p>
                        <p>{{ course.capacity.external.max }}</p>
                        <p>{{ course.capacity.external.current }}</p>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import localforage from 'localforage'

export default {
    data() {
        return {
            course: {},
            favorites: new Set()
        }
    },
    created() {
        const subcode = /(?<=\/course\/)\w*/.exec(this.$route.fullPath)[0]
        const dataPath = '/data/allcourse.json'

        const worker = new Worker(new URL('@/workers/getCourseDetails.js', import.meta.url))

        worker.postMessage({
            path: dataPath,
            subcode: subcode
        })

        worker.onmessage = (event) => {
            this.course = event.data.course
        }
    },
    mounted() {
        localforage
            .getItem('favoriteCourses')
            .then((storedFavorites) => {
                if (storedFavorites) {
                    this.favorites = new Set(storedFavorites)
                }
            })
            .catch((err) => {
                console.error(`Errors in acquiring favorite courses: ${err}`)
            })
    },
    computed: {
        hasFavorited() {
            return this.favorites.has(this.course.subcode)
        }
    },
    methods: {
        hasTime(time) {
            return time !== ''
        },
        getMailType(mail) {
            return mail !== '' ? 'a' : 'div'
        },
        getMailHref(mail) {
            return mail !== '' ? `mailto:${mail}` : null
        },
        timeTransform(timeString) {
            try {
                const result = []
                const timeArray = timeString.split(/\s/)

                let day = ''
                timeArray.forEach((time) => {
                    if (/[一二三四五六日]/.test(time)) {
                        day = time
                    } else if (/\d/.test(time)) {
                        result.push({
                            day: day,
                            period: time
                        })
                    }
                })

                return result.length > 0 ? result : '無資料'
            } catch (_) {
                return
            }
        },
        dayZhToEn(day) {
            const dayMap = {
                一: 'M',
                二: 'T',
                三: 'W',
                四: 'R',
                五: 'F',
                六: 'S',
                日: 'U'
            }
            return dayMap[day]
        },
        async toggleFavorite(e) {
            try {
                const storedFavorites = await localforage.getItem('favoriteCourses')
                const favorites = new Set(storedFavorites ? storedFavorites : '')

                if (e.target.checked) {
                    favorites.add(e.target.value)
                } else {
                    favorites.delete(e.target.value)
                }

                await localforage.setItem('favoriteCourses', Array.from(favorites))
            } catch (err) {
                console.error(
                    `The error occurred while retrieving or updating favorite courses: ${err}`
                )
            }
        }
    }
}
</script>
