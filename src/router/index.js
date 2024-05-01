import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('../components/SearchForm.vue')
        },
        {
            path: '/teacher',
            name: 'teacher',
            component: () => import('../views/TeacherCourseView.vue')
        },
        {
            path: '/class',
            name: 'class',
            component: () => import('../views/ClassCourseView.vue')
        },
        {
            path: '/course/:id',
            name: 'CourseDetail',
            component: () => import('../components/CourseDetail.vue')
        },
        {
            path: '/lecturer/:id',
            name: 'TeacherCourse',
            component: () => import('../components/TeacherCourse.vue')
        },
        {
            path: '/class/:id',
            name: 'ClassCourse',
            component: () => import('../components/ClassCourse.vue')
        },
    ]
})

export default router
