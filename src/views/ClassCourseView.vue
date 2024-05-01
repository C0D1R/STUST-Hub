<template>
    <div
        @change="toggleEvents"
        class="mx-2 mb-2 rounded-lg border border-black/10 bg-white sm:mx-4 lg:mx-auto lg:w-[94vw] xl:w-5/6"
    >
        <section
            class="mx-4 border-b border-black/10 pb-3 pt-2 lg:grid lg:grid-cols-[12%,auto] lg:items-center lg:py-3"
        >
            <h2 class="pb-2 text-center font-bold text-black/60 lg:pb-0">學制</h2>
            <div class="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:mr-4 lg:grid-cols-9">
                <label
                    v-for="system in systems"
                    :key="system"
                    class="rounded-lg border border-blue-500 px-3.5 py-1 text-center text-blue-500 hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                >
                    <input type="checkbox" name="system" :value="system" class="sr-only" />
                    {{ system }}
                </label>
                <label
                    class="rounded-lg border border-blue-500 px-3.5 py-1 text-center text-blue-500 hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                >
                    <input type="checkbox" name="system" value="其他" class="sr-only" />
                    其他
                </label>
            </div>
        </section>
        <section
            class="mx-4 border-b border-black/10 pb-3 pt-2 last-of-type:border-b-0 lg:grid lg:grid-cols-[12%,auto] lg:items-center lg:py-3"
        >
            <h2 class="pb-2 text-center font-bold text-black/60 lg:pb-0">關鍵字</h2>
            <label class="flex">
                <input
                    type="text"
                    v-model="searchKey"
                    placeholder="搜尋學制、科系或班級"
                    class="flex-grow rounded-lg bg-black/5 px-3 py-1.5 lg:mr-4"
                />
            </label>
        </section>
    </div>

    <main class="mx-2 sm:mx-4 lg:mx-auto lg:w-[94vw] xl:w-5/6">
        <section
            v-for="(clas, classIndex) in classes"
            :key="clas"
            v-show="this.blockShow[classIndex]"
            class="mb-2 rounded-lg border border-black/10 bg-white"
        >
            <h3 class="mt-2 pl-2 text-xl font-bold sm:pl-4">
                {{ clas.system }}{{ clas.department }}
            </h3>
            <div
                class="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 sm:px-4 sm:pb-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            >
                <router-link
                    v-for="(dept, deptIndex) in clas.departments"
                    :key="dept"
                    v-show="this.classShow[classIndex][deptIndex]"
                    :to="{ path: `/class/${dept}` }"
                    class="overflow-hidden text-ellipsis whitespace-nowrap rounded-lg border border-black/10 p-2 text-center"
                >
                    {{ dept }}
                </router-link>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            classes: [],
            filterRe: [],
            searchKey: '',
            blockShow: [],
            classShow: []
        }
    },
    beforeCreate() {
        this.newClasses = [
            {
                'system': '五專',
                'department': '電機',
                'departments': [
                    '五專電機一甲',
                    '五專電機二甲',
                    '五專電機三甲',
                    '五專電機四甲',
                    '五專電機五甲',
                    '五專電機延修'
                ]
            },
            {
                'system': '五專',
                'department': '資工',
                'departments': [
                    '五專資工一甲',
                    '五專資工二甲',
                    '五專資工三甲',
                    '五專資工四甲',
                    '五專資工五甲',
                    '五專資工延修'
                ]
            },
            {
                'system': '五專',
                'department': '電子',
                'departments': ['五專電子一甲']
            },
            {
                'system': '五專',
                'department': '化材',
                'departments': ['五專化材一甲', '五專化材二甲']
            },
            {
                'system': '二技',
                'department': '企管',
                'departments': ['二技企管延修']
            },
            {
                'system': '二技',
                'department': '資管',
                'departments': ['二技資管延修']
            },
            {
                'system': '二技',
                'department': '休閒',
                'departments': ['二技休閒三甲', '二技休閒四甲', '二技休閒延修']
            },
            {
                'system': '二技',
                'department': '應英',
                'departments': ['二技應英延修']
            },
            {
                'system': '二技',
                'department': '幼保',
                'departments': ['二技幼保延修']
            },
            {
                'system': '四技',
                'department': '自控',
                'departments': [
                    '四技自控一甲',
                    '四技自控一乙',
                    '四技自控二甲',
                    '四技自控二乙',
                    '四技自控三甲',
                    '四技自控三乙',
                    '四技自控四甲',
                    '四技自控四乙',
                    '四技自控延修'
                ]
            },
            {
                'system': '四技',
                'department': '車輛',
                'departments': [
                    '四技車輛一甲',
                    '四技車輛一乙',
                    '四技車輛二甲',
                    '四技車輛二乙',
                    '四技車輛三甲',
                    '四技車輛三乙',
                    '四技車輛四甲',
                    '四技車輛四乙',
                    '四技車輛延修'
                ]
            },
            {
                'system': '四技',
                'department': '奈米',
                'departments': [
                    '四技奈米一甲',
                    '四技奈米一乙',
                    '四技奈米二甲',
                    '四技奈米二乙',
                    '四技奈米三甲',
                    '四技奈米三乙',
                    '四技奈米四甲',
                    '四技奈米四乙',
                    '四技奈米延修'
                ]
            },
            {
                'system': '四技',
                'department': '機械國專',
                'departments': ['四機械國專一甲']
            },
            {
                'system': '四技',
                'department': '高福',
                'departments': [
                    '四技高福一甲',
                    '四技高福二甲',
                    '四技高福三甲',
                    '四技高福四甲',
                    '四技高福延修'
                ]
            },
            {
                'system': '四技',
                'department': '工管',
                'departments': [
                    '四技工管一甲',
                    '四技工管一乙',
                    '四技工管二甲',
                    '四技工管二乙',
                    '四技工管三甲',
                    '四技工管三乙',
                    '四技工管四甲',
                    '四技工管四乙',
                    '四技工管延修'
                ]
            },
            {
                'system': '四技',
                'department': '商設',
                'departments': [
                    '四技商設一乙',
                    '四技商設一甲',
                    '四技商設二甲',
                    '四技商設三甲',
                    '四技商設四甲',
                    '四技商設延修'
                ]
            },
            {
                'system': '四技',
                'department': '動畫',
                'departments': [
                    '四技動畫一甲',
                    '四技動畫二甲',
                    '四技動畫三甲',
                    '四技動畫四甲',
                    '四技動畫延修'
                ]
            },
            {
                'system': '四技',
                'department': '化材',
                'departments': [
                    '四技化材一甲',
                    '四技化材二甲',
                    '四技化材二乙',
                    '四技化材三甲',
                    '四技化材三乙',
                    '四技化材四甲',
                    '四技化材四乙',
                    '四技化材延修'
                ]
            },
            {
                'system': '四技',
                'department': '食品',
                'departments': [
                    '四技食品一甲',
                    '四技食品一乙',
                    '四技食品二甲',
                    '四技食品三甲',
                    '四技食品三乙',
                    '四技食品四甲',
                    '四技食品四乙',
                    '四技食品延修'
                ]
            },
            {
                'system': '四技',
                'department': '企電',
                'departments': ['四技企電延修']
            },
            {
                'system': '四技',
                'department': '產設',
                'departments': [
                    '四技產設一甲',
                    '四技產設一乙',
                    '四技產設二甲',
                    '四技產設二乙',
                    '四技產設三甲',
                    '四技產設三乙',
                    '四技產設四甲',
                    '四技產設四乙',
                    '四技產設延修'
                ]
            },
            {
                'system': '四技',
                'department': '流音',
                'departments': [
                    '四技流音一甲',
                    '四技流音一乙',
                    '四技流音二甲',
                    '四技流音二乙',
                    '四技流音三甲',
                    '四技流音三乙',
                    '四技流音四甲',
                    '四技流音四乙',
                    '四技流音延修'
                ]
            },
            {
                'system': '四技',
                'department': '高齡服務',
                'departments': ['四高齡服務延修']
            },
            {
                'system': '四技',
                'department': '醫電',
                'departments': [
                    '四技醫電一甲',
                    '四技醫電二甲',
                    '四技醫電三甲',
                    '四技醫電四甲',
                    '四技醫電延修'
                ]
            },
            {
                'system': '四技',
                'department': '電資',
                'departments': [
                    '四技電資一甲',
                    '四技電資二甲',
                    '四技電資三甲',
                    '四技電資四甲',
                    '四技電資延修'
                ]
            },
            {
                'system': '四技',
                'department': '控晶',
                'departments': [
                    '四技控晶一甲',
                    '四技控晶一乙',
                    '四技控晶二甲',
                    '四技控晶二乙',
                    '四技控晶三甲',
                    '四技控晶三乙',
                    '四技控晶四甲',
                    '四技控晶四乙',
                    '四技控晶延修'
                ]
            },
            {
                'system': '四技',
                'department': '電子',
                'departments': [
                    '四技電子一甲',
                    '四技電子一乙',
                    '四技電子一丙',
                    '四技電子二甲',
                    '四技電子二乙',
                    '四技電子二丙',
                    '四技電子三甲',
                    '四技電子三乙',
                    '四技電子三丙',
                    '四技電子四甲',
                    '四技電子四乙',
                    '四技電子四丙',
                    '四技電子四丁',
                    '四技電子延修'
                ]
            },
            {
                'system': '四技',
                'department': '網通',
                'departments': ['四技網通延修']
            },
            {
                'system': '四技',
                'department': '晶片',
                'departments': ['四技晶片延修']
            },
            {
                'system': '四技',
                'department': '系統',
                'departments': ['四技系統延修']
            },
            {
                'system': '四技',
                'department': '微電',
                'departments': ['四技微電延修']
            },
            {
                'system': '四技',
                'department': '電商',
                'departments': [
                    '四技電商一甲',
                    '四技電商二甲',
                    '四技電商三甲',
                    '四技電商四甲',
                    '四技電商四乙',
                    '四技電商延修'
                ]
            },
            {
                'system': '四技',
                'department': '國企',
                'departments': [
                    '四技國企一甲',
                    '四技國企一乙',
                    '四技國企二甲',
                    '四技國企二乙',
                    '四技國企三甲',
                    '四技國企三乙',
                    '四技國企四甲',
                    '四技國企四乙',
                    '四技國企延修'
                ]
            },
            {
                'system': '四技',
                'department': '企管',
                'departments': [
                    '四技企管一甲',
                    '四技企管一乙',
                    '四技企管二甲',
                    '四技企管二乙',
                    '四技企管二丙',
                    '四技企管三甲',
                    '四技企管三乙',
                    '四技企管四甲',
                    '四技企管四乙',
                    '四技企管延修'
                ]
            },
            {
                'system': '四技',
                'department': '財金',
                'departments': [
                    '四技財金一甲',
                    '四技財金一乙',
                    '四技財金二甲',
                    '四技財金二乙',
                    '四技財金三甲',
                    '四技財金三乙',
                    '四技財金四甲',
                    '四技財金四乙',
                    '四技財金四丙',
                    '四技財金延修'
                ]
            },
            {
                'system': '四技',
                'department': '資管',
                'departments': [
                    '四技資管一甲',
                    '四技資管一乙',
                    '四技資管一丙',
                    '四技資管二甲',
                    '四技資管二乙',
                    '四技資管二丙',
                    '四技資管三甲',
                    '四技資管三乙',
                    '四技資管三丙',
                    '四技資管四甲',
                    '四技資管四乙',
                    '四技資管四丙',
                    '四技資管延修'
                ]
            },
            {
                'system': '四技',
                'department': '會資',
                'departments': ['四技會資三甲', '四技會資四甲', '四技會資延修']
            },
            {
                'system': '四技',
                'department': '休閒',
                'departments': [
                    '四技休閒一乙',
                    '四技休閒一甲',
                    '四技休閒二甲',
                    '四技休閒二乙',
                    '四技休閒三甲',
                    '四技休閒三乙',
                    '四技休閒四甲',
                    '四技休閒四乙',
                    '四技休閒延修'
                ]
            },
            {
                'system': '四技',
                'department': '應英',
                'departments': [
                    '四技應英一甲',
                    '四技應英二甲',
                    '四技應英三甲',
                    '四技應英四甲',
                    '四技應英延修'
                ]
            },
            {
                'system': '四技',
                'department': '行流',
                'departments': [
                    '四技行流一甲',
                    '四技行流一乙',
                    '四技行流二甲',
                    '四技行流二乙',
                    '四技行流三甲',
                    '四技行流三乙',
                    '四技行流四甲',
                    '四技行流四乙',
                    '四技行流延修'
                ]
            },
            {
                'system': '四技',
                'department': '應日',
                'departments': [
                    '四技應日一甲',
                    '四技應日一乙',
                    '四技應日二甲',
                    '四技應日二乙',
                    '四技應日三甲',
                    '四技應日三乙',
                    '四技應日四甲',
                    '四技應日四乙',
                    '四技應日延修'
                ]
            },
            {
                'system': '四技',
                'department': '資傳',
                'departments': [
                    '四技資傳一甲',
                    '四技資傳一乙',
                    '四技資傳二甲',
                    '四技資傳二乙',
                    '四技資傳三甲',
                    '四技資傳三乙',
                    '四技資傳四甲',
                    '四技資傳四乙',
                    '四技資傳延修'
                ]
            },
            {
                'system': '四技',
                'department': '資工',
                'departments': [
                    '四技資工一甲',
                    '四技資工一乙',
                    '四技資工一丙',
                    '四技資工二甲',
                    '四技資工二乙',
                    '四技資工二丙',
                    '四技資工三甲',
                    '四技資工三乙',
                    '四技資工三丙',
                    '四技資工四甲',
                    '四技資工四乙',
                    '四技資工延修'
                ]
            },
            {
                'system': '四技',
                'department': '幼保',
                'departments': [
                    '四技幼保一甲',
                    '四技幼保二甲',
                    '四技幼保三甲',
                    '四技幼保四甲',
                    '四技幼保延修'
                ]
            },
            {
                'system': '四技',
                'department': '創設',
                'departments': [
                    '四技創設一甲',
                    '四技創設二甲',
                    '四技創設三甲',
                    '四技創設四甲',
                    '四技創設延修'
                ]
            },
            {
                'system': '四技',
                'department': '多樂',
                'departments': [
                    '四技多樂一甲',
                    '四技多樂一乙',
                    '四技多樂一丙',
                    '四技多樂二甲',
                    '四技多樂二乙',
                    '四技多樂三甲',
                    '四技多樂三乙',
                    '四技多樂四甲',
                    '四技多樂四乙',
                    '四技多樂延修'
                ]
            },
            {
                'system': '四技',
                'department': '半導體',
                'departments': [
                    '四技半導體一甲',
                    '四技半導體一乙',
                    '四技半導體二甲',
                    '四技半導體二乙',
                    '四技半導體三甲',
                    '四技半導體四甲',
                    '四技半導體四乙',
                    '四技半導體延修'
                ]
            },
            {
                'system': '四技',
                'department': '餐旅',
                'departments': [
                    '四技餐旅一甲',
                    '四技餐旅一乙',
                    '四技餐旅二甲',
                    '四技餐旅二乙',
                    '四技餐旅三甲',
                    '四技餐旅三乙',
                    '四技餐旅四甲',
                    '四技餐旅四乙',
                    '四技餐旅延修'
                ]
            },
            {
                'system': '四技',
                'department': '國際商務',
                'departments': [
                    '四國際商務一甲',
                    '四國際商務二甲',
                    '四國際商務三甲',
                    '四國際商務四甲',
                    '四國際商務延修'
                ]
            },
            {
                'system': '四技',
                'department': '國際金融',
                'departments': ['四國際金融延修']
            },
            {
                'system': '四技',
                'department': '半導國專',
                'departments': ['四半導國專一甲']
            },
            {
                'system': '四技',
                'department': '高福國專',
                'departments': ['四高福國專一甲']
            },
            {
                'system': '四技',
                'department': '食品國專',
                'departments': ['四食品國專一甲']
            },
            {
                'system': '四技',
                'department': '資工國專',
                'departments': ['四資工國專一甲']
            },
            {
                'system': '碩研',
                'department': '機械',
                'departments': [
                    '碩研機械一甲',
                    '碩研機械二甲',
                    '碩研機械三甲',
                    '碩研機械四甲',
                    '碩研機械延修'
                ]
            },
            {
                'system': '碩研',
                'department': '機電',
                'departments': ['碩研機電一甲', '碩研機電二甲', '碩研機電三甲', '碩研機電四甲']
            },
            {
                'system': '碩研',
                'department': '電機國際',
                'departments': [
                    '碩電機國際一甲',
                    '碩電機國際二甲',
                    '碩電機國際三甲',
                    '碩電機國際四甲',
                    '碩電機國際延修'
                ]
            },
            {
                'system': '碩研',
                'department': '資工國際',
                'departments': ['碩資工國際一甲', '碩資工國際二甲']
            },
            {
                'system': '碩研',
                'department': '能源',
                'departments': ['碩研能源延修']
            },
            {
                'system': '碩研',
                'department': '電機',
                'departments': [
                    '碩研電機一甲',
                    '碩研電機二甲',
                    '碩研電機三甲',
                    '碩研電機四甲',
                    '碩研電機延修'
                ]
            },
            {
                'system': '碩研',
                'department': '電子國際',
                'departments': ['碩電子國際一甲']
            },
            {
                'system': '碩研',
                'department': '生醫',
                'departments': ['碩研生醫延修']
            },
            {
                'system': '碩研',
                'department': '資工',
                'departments': [
                    '碩研資工一甲',
                    '碩研資工二甲',
                    '碩研資工三甲',
                    '碩研資工四甲',
                    '碩研資工延修'
                ]
            },
            {
                'system': '碩研',
                'department': '電子',
                'departments': [
                    '碩研電子一甲',
                    '碩研電子二甲',
                    '碩研電子三甲',
                    '碩研電子四甲',
                    '碩研電子延修'
                ]
            },
            {
                'system': '碩研',
                'department': '化材',
                'departments': [
                    '碩研化材一甲',
                    '碩研化材二甲',
                    '碩研化材三甲',
                    '碩研化材四甲',
                    '碩研化材延修'
                ]
            },
            {
                'system': '碩研',
                'department': '全球經管',
                'departments': [
                    '碩全球經管一乙',
                    '碩全球經管一甲',
                    '碩全球經管二甲',
                    '碩全球經管二乙',
                    '碩全球經管三乙',
                    '碩全球經管三甲',
                    '碩全球經管四乙',
                    '碩全球經管四甲',
                    '碩全球經管延修'
                ]
            },
            {
                'system': '碩研',
                'department': '企管',
                'departments': [
                    '碩研企管一甲',
                    '碩研企管二甲',
                    '碩研企管三甲',
                    '碩研企管四甲',
                    '碩研企管延修'
                ]
            },
            {
                'system': '碩研',
                'department': '應日',
                'departments': [
                    '碩研應日一甲',
                    '碩研應日二甲',
                    '碩研應日三甲',
                    '碩研應日四甲',
                    '碩研應日延修'
                ]
            },
            {
                'system': '碩研',
                'department': '人資',
                'departments': ['碩研人資四甲']
            },
            {
                'system': '碩研',
                'department': '財法',
                'departments': [
                    '碩研財法一甲',
                    '碩研財法二甲',
                    '碩研財法三甲',
                    '碩研財法四甲',
                    '碩研財法延修'
                ]
            },
            {
                'system': '碩研',
                'department': '財金',
                'departments': ['碩研財金三甲']
            },
            {
                'system': '碩研',
                'department': '會資',
                'departments': ['碩研會資四甲']
            },
            {
                'system': '碩研',
                'department': '行流',
                'departments': ['碩研行流延修']
            },
            {
                'system': '碩研',
                'department': '資管',
                'departments': [
                    '碩研資管一甲',
                    '碩研資管二甲',
                    '碩研資管三甲',
                    '碩研資管四甲',
                    '碩研資管延修'
                ]
            },
            {
                'system': '碩研',
                'department': '休閒',
                'departments': [
                    '碩研休閒一甲',
                    '碩研休閒二甲',
                    '碩研休閒三甲',
                    '碩研休閒四甲',
                    '碩研休閒延修'
                ]
            },
            {
                'system': '碩研',
                'department': '餐旅',
                'departments': [
                    '碩研餐旅一甲',
                    '碩研餐旅二甲',
                    '碩研餐旅三甲',
                    '碩研餐旅四甲',
                    '碩研餐旅延修'
                ]
            },
            {
                'system': '碩研',
                'department': '教經',
                'departments': [
                    '碩研教經一甲',
                    '碩研教經二甲',
                    '碩研教經三甲',
                    '碩研教經四甲',
                    '碩研教經延修'
                ]
            },
            {
                'system': '碩研',
                'department': '應英',
                'departments': ['碩研應英三甲', '碩研應英四甲', '碩研應英延修']
            },
            {
                'system': '碩研',
                'department': '資傳',
                'departments': [
                    '碩研資傳一甲',
                    '碩研資傳二甲',
                    '碩研資傳三甲',
                    '碩研資傳四甲',
                    '碩研資傳延修'
                ]
            },
            {
                'system': '碩研',
                'department': '多樂',
                'departments': [
                    '碩研多樂一甲',
                    '碩研多樂二甲',
                    '碩研多樂三甲',
                    '碩研多樂四甲',
                    '碩研多樂延修'
                ]
            },
            {
                'system': '碩研',
                'department': '食品',
                'departments': ['碩研食品一甲', '碩研食品二甲', '碩研食品三甲', '碩研食品四甲']
            },
            {
                'system': '碩研',
                'department': '視傳',
                'departments': [
                    '碩研視傳一甲',
                    '碩研視傳二甲',
                    '碩研視傳三甲',
                    '碩研視傳四甲',
                    '碩研視傳延修'
                ]
            },
            {
                'system': '碩研',
                'department': '產設',
                'departments': [
                    '碩研產設一甲',
                    '碩研產設二甲',
                    '碩研產設三甲',
                    '碩研產設四甲',
                    '碩研產設延修'
                ]
            },
            {
                'system': '碩研',
                'department': '視傳國際',
                'departments': ['碩視傳國際二甲', '碩視傳國際三甲']
            },
            {
                'system': '碩研',
                'department': '半導體',
                'departments': [
                    '碩研半導體一甲',
                    '碩研半導體二甲',
                    '碩研半導體三甲',
                    '碩研半導體四甲'
                ]
            },
            {
                'system': '碩研',
                'department': '高企碩士班',
                'departments': []
            },
            {
                'system': '碩專',
                'department': '工管',
                'departments': [
                    '碩專工管一甲',
                    '碩專工管二甲',
                    '碩專工管三甲',
                    '碩專工管四甲',
                    '碩專工管五甲',
                    '碩專工管六甲',
                    '碩專工管延修'
                ]
            },
            {
                'system': '碩專',
                'department': '企管',
                'departments': [
                    '碩專企管一甲',
                    '碩專企管一乙',
                    '碩專企管二甲',
                    '碩專企管二乙',
                    '碩專企管三甲',
                    '碩專企管三乙',
                    '碩專企管四甲',
                    '碩專企管四乙',
                    '碩專企管五甲',
                    '碩專企管五乙',
                    '碩專企管六甲',
                    '碩專企管六乙',
                    '碩專企管延修'
                ]
            },
            {
                'system': '碩專',
                'department': '資管',
                'departments': [
                    '碩專資管一甲',
                    '碩專資管二甲',
                    '碩專資管三甲',
                    '碩專資管四甲',
                    '碩專資管五甲',
                    '碩專資管六甲',
                    '碩專資管延修'
                ]
            },
            {
                'system': '碩專',
                'department': '大數據',
                'departments': [
                    '碩專大數據一甲',
                    '碩專大數據二甲',
                    '碩專大數據三甲',
                    '碩專大數據四甲'
                ]
            },
            {
                'system': '碩專',
                'department': '休閒',
                'departments': [
                    '碩專休閒一甲',
                    '碩專休閒二甲',
                    '碩專休閒三甲',
                    '碩專休閒四甲',
                    '碩專休閒五甲',
                    '碩專休閒六甲',
                    '碩專休閒延修'
                ]
            },
            {
                'system': '碩專',
                'department': '行流',
                'departments': ['碩專行流一甲', '碩專行流二甲']
            },
            {
                'system': '碩專',
                'department': '財法',
                'departments': [
                    '碩專財法一甲',
                    '碩專財法二甲',
                    '碩專財法三甲',
                    '碩專財法四甲',
                    '碩專財法五甲',
                    '碩專財法六甲',
                    '碩專財法延修'
                ]
            },
            {
                'system': '碩專',
                'department': '教經',
                'departments': [
                    '碩專教經一甲',
                    '碩專教經二甲',
                    '碩專教經三甲',
                    '碩專教經四甲',
                    '碩專教經五甲',
                    '碩專教經六甲',
                    '碩專教經延修'
                ]
            },
            {
                'system': '博研',
                'department': '機電',
                'departments': [
                    '博研機電一甲',
                    '博研機電二甲',
                    '博研機電三甲',
                    '博研機電四甲',
                    '博研機電五甲',
                    '博研機電六甲',
                    '博研機電七甲',
                    '博研機電延修'
                ]
            },
            {
                'system': '博研',
                'department': '電機國際',
                'departments': [
                    '博電機國際一甲',
                    '博電機國際三甲',
                    '博電機國際四甲',
                    '博電機國際五甲',
                    '博電機國際六甲'
                ]
            },
            {
                'system': '博研',
                'department': '經管',
                'departments': [
                    '博研經管一甲',
                    '博研經管二甲',
                    '博研經管三甲',
                    '博研經管四甲',
                    '博研經管五甲',
                    '博研經管六甲',
                    '博研經管七甲',
                    '博研經管延修'
                ]
            },
            {
                'system': '博研',
                'department': '電機',
                'departments': [
                    '博研電機一甲',
                    '博研電機二甲',
                    '博研電機三甲',
                    '博研電機四甲',
                    '博研電機五甲',
                    '博研電機六甲',
                    '博研電機七甲',
                    '博研電機延修'
                ]
            },
            {
                'system': '博研',
                'department': '電子國際',
                'departments': ['博電子國際一甲']
            },
            {
                'system': '博研',
                'department': '電子',
                'departments': [
                    '博研電子一甲',
                    '博研電子二甲',
                    '博研電子三甲',
                    '博研電子四甲',
                    '博研電子五甲',
                    '博研電子六甲',
                    '博研電子七甲',
                    '博研電子延修'
                ]
            },
            {
                'system': '夜二技',
                'department': '高福',
                'departments': ['夜二技高福三甲', '夜二技高福四甲', '夜二技高福延修']
            },
            {
                'system': '夜二技',
                'department': '企管',
                'departments': ['夜二技企管三甲', '夜二技企管四甲', '夜二技企管延修']
            },
            {
                'system': '夜二技',
                'department': '英語',
                'departments': ['夜二技英語三甲', '夜二技英語四甲', '夜二技英語延修']
            },
            {
                'system': '夜二技',
                'department': '幼保',
                'departments': ['夜二技幼保三甲', '夜二技幼保四甲', '夜二技幼保延修']
            },
            {
                'system': '夜二技',
                'department': '教保',
                'departments': ['夜二技教保三甲']
            },
            {
                'system': '夜四技',
                'department': '自控',
                'departments': [
                    '夜四技自控一甲',
                    '夜四技自控二甲',
                    '夜四技自控三甲',
                    '夜四技自控四甲',
                    '夜四技自控延修'
                ]
            },
            {
                'system': '夜四技',
                'department': '車輛',
                'departments': [
                    '夜四技車輛一甲',
                    '夜四技車輛二甲',
                    '夜四技車輛三甲',
                    '夜四技車輛四甲',
                    '夜四技車輛四乙',
                    '夜四技車輛延修'
                ]
            },
            {
                'system': '夜四技',
                'department': '產設',
                'departments': ['夜四技產設延修']
            },
            {
                'system': '夜四技',
                'department': '高服',
                'departments': ['夜四技高服延修']
            },
            {
                'system': '夜四技',
                'department': '高福',
                'departments': ['夜四技高福四甲', '夜四技高福延修']
            },
            {
                'system': '夜四技',
                'department': '電機',
                'departments': [
                    '夜四技電機一甲',
                    '夜四技電機二甲',
                    '夜四技電機三甲',
                    '夜四技電機四甲',
                    '夜四技電機延修'
                ]
            },
            {
                'system': '夜四技',
                'department': '國企',
                'departments': ['夜四技國企延修']
            },
            {
                'system': '夜四技',
                'department': '企管',
                'departments': [
                    '夜四技企管一甲',
                    '夜四技企管二甲',
                    '夜四技企管三甲',
                    '夜四技企管四甲',
                    '夜四技企管延修'
                ]
            },
            {
                'system': '夜四技',
                'department': '企管產攜',
                'departments': [
                    '夜企管產攜一甲',
                    '夜企管產攜三甲',
                    '夜企管產攜四甲',
                    '夜企管產攜延修'
                ]
            },
            {
                'system': '夜四技',
                'department': '資管',
                'departments': [
                    '夜四技資管一甲',
                    '夜四技資管二甲',
                    '夜四技資管三甲',
                    '夜四技資管四甲',
                    '夜四技資管延修'
                ]
            },
            {
                'system': '夜四技',
                'department': '休閒',
                'departments': [
                    '夜四技休閒一甲',
                    '夜四技休閒二甲',
                    '夜四技休閒三甲',
                    '夜四技休閒四甲',
                    '夜四技休閒延修'
                ]
            },
            {
                'system': '夜四技',
                'department': '英語',
                'departments': [
                    '夜四技英語一甲',
                    '夜四技英語二甲',
                    '夜四技英語三甲',
                    '夜四技英語四甲',
                    '夜四技英語延修'
                ]
            },
            {
                'system': '夜四技',
                'department': '行流',
                'departments': [
                    '夜四技行流一甲',
                    '夜四技行流二甲',
                    '夜四技行流三甲',
                    '夜四技行流四甲',
                    '夜四技行流延修'
                ]
            },
            {
                'system': '夜四技',
                'department': '日語',
                'departments': [
                    '夜四技日語一甲',
                    '夜四技日語二甲',
                    '夜四技日語三甲',
                    '夜四技日語四甲',
                    '夜四技日語延修'
                ]
            },
            {
                'system': '夜四技',
                'department': '資傳',
                'departments': [
                    '夜四技資傳一甲',
                    '夜四技資傳二甲',
                    '夜四技資傳三甲',
                    '夜四技資傳四甲',
                    '夜四技資傳延修'
                ]
            },
            {
                'system': '夜四技',
                'department': '視傳',
                'departments': [
                    '夜四技視傳一甲',
                    '夜四技視傳二甲',
                    '夜四技視傳三甲',
                    '夜四技視傳四甲',
                    '夜四技視傳延修'
                ]
            },
            {
                'system': '夜四技',
                'department': '多樂',
                'departments': [
                    '夜四技多樂一甲',
                    '夜四技多樂二甲',
                    '夜四技多樂三甲',
                    '夜四技多樂四甲',
                    '夜四技多樂延修'
                ]
            },
            {
                'system': '夜四技',
                'department': '餐旅',
                'departments': [
                    '夜四技餐旅一甲',
                    '夜四技餐旅二甲',
                    '夜四技餐旅三甲',
                    '夜四技餐旅三乙',
                    '夜四技餐旅四甲',
                    '夜四技餐旅延修'
                ]
            },
            {
                'system': '夜四技',
                'department': '機械雙軌',
                'departments': ['夜機械雙軌三甲', '夜機械雙軌四甲', '夜機械雙軌延修']
            },
            {
                'system': '夜四技',
                'department': '電機產攜',
                'departments': ['夜電機產攜一甲']
            },
            {
                'system': '夜四技',
                'department': '行流產攜',
                'departments': ['夜行流產攜一甲', '夜行流產攜三甲', '夜行流產攜四甲']
            }
        ]
        this.systems = new Set(this.newClasses.map((clas) => clas.system))
        this.systemRe = new RegExp('')
        this.grade = {
            id: '年級',
            items: ['一年級', '二年級', '三年級', '四年級', '五年級', '六年級', '七年級', '延修']
        }
    },
    mounted() {
        this.classes = JSON.parse(JSON.stringify(this.newClasses))

        this.blockShow = this.newClasses.map(() => {
            return true
        })
        this.classShow = this.newClasses.map((clas) => {
            return clas.departments.map(() => {
                return true
            })
        })
    },
    methods: {
        toggleEvents(e) {
            if (e.target.type === 'checkbox') {
                const newSet = new Set(this.filterRe)

                if (e.target.checked) {
                    newSet.add(e.target.value)
                } else {
                    newSet.delete(e.target.value)
                }

                this.filterRe = Array.from(newSet)
            } else if (e.target.type === 'text') {
                // this.searchKey = e.target.value
            }

            const worker = new Worker(new URL('@/workers/showClass.js', import.meta.url))
            worker.onmessage = (event) => {
                this.blockShow = event.data.blockShow
                this.classShow = event.data.classShow
            }

            worker.postMessage({
                classes: this.newClasses,
                filter: Array.from(this.filterRe)
            })

            // const systemRe = new RegExp(`(^${this.filterRe.join('|')})`)

            // let classes = JSON.parse(JSON.stringify(this.newClasses))

            // if (this.filterRe.length > 0) {
            //     classes = classes.filter((clas) => systemRe.test(clas.system))
            // }

            // if (this.searchKey !== '') {
            //     classes = classes.filter((clas) => {
            //         clas.departments = clas.departments.filter((dept) =>
            //             dept.includes(this.searchKey)
            //         )
            //         return clas.departments.length > 0
            //     })
            // }

            // this.classes = classes
        },
        titleShow() {}
    }
}
</script>
