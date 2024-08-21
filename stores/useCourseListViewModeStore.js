export const useCourseListViewModeStore = defineStore('courseListViewMode', () => {
    const viewMode = ref('card')

    const isCardMode = computed(() => viewMode.value === 'card')
    const isTableMode = computed(() => viewMode.value === 'table')

    onMounted(() => {
        if (window.innerWidth >= 1024) {
            viewMode.value = 'table'
        }
    })

    return {
        viewMode,
        isCardMode,
        isTableMode
    }
})