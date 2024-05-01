<template>
    <main class="mx-2 mb-2 sm:mx-4 lg:mx-auto lg:w-[94vw] xl:w-5/6">
        <div class="mb-4 rounded-lg border border-black/8 bg-white p-2 sm:p-4">
            <h1 class="pb-2 text-lg font-semibold">{{ name }}</h1>

            <section class="grid grid-cols-3 gap-x-2 sm:gap-x-4">
                <p class="rounded-lg border border-black/8 py-2 text-center">
                    <span class="block">{{ courses.length }}</span>
                    <span class="block text-xs text-black/55">課程數</span>
                </p>
                <p class="rounded-lg border border-black/8 py-2 text-center">
                    <span class="block">{{ courseCount.compulsory }}</span>
                    <span class="block text-xs text-black/55">必修課數</span>
                </p>
                <p class="rounded-lg border border-black/8 py-2 text-center">
                    <span class="block">{{ courseCount.elective }}</span>
                    <span class="block text-xs text-black/55">選修課數</span>
                </p>
            </section>
        </div>

        <CourseItem :courses="courses"></CourseItem>
    </main>
</template>

<script>
import CourseItem from '@/components/CourseItem.vue'

export default {
    data() {
        return {
            courses: {},
            courseCount: {}
        }
    },
    created() {
        this.name = decodeURIComponent(this.$route.path.match(/(?<=^\/lecturer\/).*/)[0])

        const dataPath = '/data/allcourse.json'

        const worker = new Worker(new URL('@/workers/filter.js', import.meta.url))

        worker.onmessage = (event) => {
            this.courses = event.data.courseData
            this.courseCount = event.data.courseCount
        }

        worker.postMessage({
            path: dataPath,
            filter: {
                name: this.name
            }
        })
    },
    components: {
        CourseItem
    }
}
</script>
