<template>
    <div class="mx-auto mb-4 w-[94vw] rounded-2xl border border-black/8 bg-white xl:w-5/6">
        <h2>系所</h2>
        <div
            v-for="college in departments"
            :key="college.id"
            class="grid grid-cols-[repeat(auto-fill,5.625rem)] justify-center pb-2 lg:justify-normal lg:pb-0"
        >
            <label
                v-for="dept in college.depts"
                :key="dept.id"
                class="m-1.5 block min-w-[4.875rem] rounded-2xl border border-blue-500 px-3.5 py-1 text-center text-blue-500 hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:text-white"
            >
                <input type="radio" name="department" :value="dept.id" class="sr-only" />
                {{ dept.context }}
            </label>
        </div>
    </div>
</template>

<script>
export default {
    data() {},
    beforeCreate() {
        this.departments = [
            {
                id: 'business',
                depts: [
                    { id: 'imi', context: '工資系' },
                    { id: 'ib', context: '國企系' },
                    { id: 'fin', context: '財金系' },
                    { id: 'ba', context: '企管系' },
                    { id: 'mis', context: '資管系' },
                    { id: 'accinfo', context: '會資系' },
                    { id: 'leisure', context: '休閒系' },
                    { id: 'mim', context: '行流系' },
                    { id: 'hm', context: '餐旅系' }
                ]
            },
            {
                id: 'engineering',
                depts: [
                    { id: 'ee', context: '電機系' },
                    { id: 'mech', context: '機械系' },
                    { id: 'eecs', context: '電子系' },
                    { id: 'oe', context: '光電系' },
                    { id: 'csie', context: '資工系' },
                    { id: 'chem', context: '化材系' },
                    { id: 'bio', context: '生食系' }
                ]
            },
            {
                id: 'communication',
                depts: [
                    { id: 'ic', context: '資傳系' },
                    { id: 'vc', context: '視傳系' },
                    { id: 'mes', context: '多樂系' },
                    { id: 'cpd', context: '產設系' },
                    { id: 'pmi', context: '流音系' }
                ]
            },
            {
                id: 'humanities',
                depts: [
                    { id: 'english', context: '英語系' },
                    { id: 'japan', context: '日語系' },
                    { id: 'childcare', context: '幼保系' },
                    { id: 'ss', context: '高福系' }
                ]
            }
        ]
    }
}
</script>
