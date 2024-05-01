<template>
    <main>
        <div
            class="mx-2 mb-2 rounded-lg border border-black/10 bg-white sm:mx-4 lg:mx-auto lg:w-[94vw] xl:w-5/6"
        ></div>
    </main>
</template>

<script>
export default {
    data() {},
    beforeCreate() {
        this.testData = [
            {
                'subcode': '01D14Z01',
                'name': '服務學習(一)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '鄭淑真',
                        'mail': 'kittyc@stust.edu.tw'
                    }
                ],
                'type': '自選必修',
                'class': ['日服務學習重修'],
                'time': '三 5 6',
                'location': 'Z100',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '150',
                        'current': '101'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '101'
                    }
                }
            },
            {
                'subcode': '01D1501R',
                'name': '服務學習(二)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '鄭淑真',
                        'mail': 'kittyc@stust.edu.tw'
                    }
                ],
                'type': '自選必修',
                'class': ['日服務學習重修'],
                'time': '三 7 8',
                'location': 'Z100',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '200',
                        'current': '170'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '170'
                    }
                }
            },
            {
                'subcode': '01D14Z02',
                'name': '服務學習(一)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '鄭淑真',
                        'mail': 'kittyc@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': ['日服務學習重修'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '4'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '4'
                    }
                }
            },
            {
                'subcode': '01D1501S',
                'name': '服務學習(二)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '鄭淑真',
                        'mail': 'kittyc@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': ['日服務學習重修'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '7'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '7'
                    }
                }
            },
            {
                'subcode': '01D13H1S',
                'name': '英語聽講實務(二)(特別班學)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '潘玉美',
                        'mail': 'z1k@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': ['大學英語加強班'],
                'time': '三 5 6',
                'location': 'T0206',
                'language': ['華語', '英語'],
                'capacity': {
                    'total': {
                        'max': '27',
                        'current': '27'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '27',
                        'current': '27'
                    }
                }
            },
            {
                'subcode': '01D13H1R',
                'name': '英語聽講實務(二)(特別班聽)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '吳佩珊',
                        'mail': 'z8h@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': ['大學英語加強班'],
                'time': '三 5 6',
                'location': 'E0409',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '6',
                        'current': '5'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '5'
                    }
                }
            },
            {
                'subcode': '01D13I0R',
                'name': '基礎專業英文(特別班學)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '施茹譯',
                        'mail': 'z9t@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': ['大學英語加強班'],
                'time': '三 7 8',
                'location': 'S416',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '26',
                        'current': '25'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '26',
                        'current': '25'
                    }
                }
            },
            {
                'subcode': '01D13I0S',
                'name': '基礎專業英文(特別班聽)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '潘玉美',
                        'mail': 'z1k@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': ['大學英語加強班'],
                'time': '三 7 8',
                'location': 'T0206',
                'language': ['華語', '英語'],
                'capacity': {
                    'total': {
                        'max': '4',
                        'current': '2'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '2'
                    }
                }
            },
            {
                'subcode': '01D13J0V',
                'name': '進階英文表達(特別班學)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '施茹譯',
                        'mail': 'z9t@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': ['大學英語加強班'],
                'time': '三 5 6',
                'location': 'S414',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '30'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '30',
                        'current': '30'
                    }
                }
            },
            {
                'subcode': '01D13J0U',
                'name': '進階英文表達(特別班聽)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '邱千娪',
                        'mail': 'z1q@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': ['大學英語加強班'],
                'time': '三 5 6',
                'location': 'E0410',
                'language': ['華語', '英語'],
                'capacity': {
                    'total': {
                        'max': '2',
                        'current': '2'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '2'
                    }
                }
            },
            {
                'subcode': '03D08804',
                'name': '導師時間(A)',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '陳素連',
                        'mail': 'suelien@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['教育學程－中'],
                'time': '二 2',
                'location': 'N102',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '11'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '11'
                    }
                }
            },
            {
                'subcode': '03D08803',
                'name': '導師時間(B)',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '王志蓮',
                        'mail': 'gellien1@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['教育學程－中'],
                'time': '四 13',
                'location': 'N204',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '17'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '17'
                    }
                }
            },
            {
                'subcode': '03D09901',
                'name': '外語群教學實習',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '張韶華',
                        'mail': 'shaohua@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['教育學程－中'],
                'time': '二 3 4',
                'location': 'N103',
                'language': ['華語', '華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '1'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '1'
                    }
                }
            },
            {
                'subcode': '03D14001',
                'name': '生涯規劃及職業教育與訓練',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '王志蓮',
                        'mail': 'gellien1@stust.edu.tw'
                    },
                    {
                        'name': '陳信豪',
                        'mail': 'yuching8892@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['教育學程－中', '教育學程－小'],
                'time': '四 11 12',
                'location': 'N204',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '30'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '30'
                    }
                }
            },
            {
                'subcode': '03D12I01',
                'name': '餐旅群教學實習',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '吳怡惠',
                        'mail': 'nick1104@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['教育學程－中'],
                'time': '二 1 2',
                'location': 'N204',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '3'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '3'
                    }
                }
            },
            {
                'subcode': '03D13L01',
                'name': '藝術群教學實習',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '黃綝怡',
                        'mail': 'zay@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['教育學程－中'],
                'time': '一 3 4',
                'location': 'N103',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '1'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '1'
                    }
                }
            },
            {
                'subcode': '03D14B01',
                'name': '性別關係',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '王揚智',
                        'mail': 'wyj2572@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['教育學程－中', '教育學程－小'],
                'time': '二 2',
                'location': 'N107',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '10'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '10'
                    }
                }
            },
            {
                'subcode': '03D02501',
                'name': '人際關係與溝通',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '王志蓮',
                        'mail': 'gellien1@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['教育學程－中', '教育學程－小'],
                'time': '三 5 6',
                'location': 'N403',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '13'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '13'
                    }
                }
            },
            {
                'subcode': '03D13Q01',
                'name': '教育社會學',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '鄭育萍',
                        'mail': 'yptntw@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['教育學程－中', '教育學程－小'],
                'time': '一 11 12',
                'location': 'N107',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '32',
                        'current': '31'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '31'
                    }
                }
            },
            {
                'subcode': '03D13R01',
                'name': '教育哲學',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '鄭育萍',
                        'mail': 'yptntw@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['教育學程－中', '教育學程－小'],
                'time': '二 7 8',
                'location': 'N107',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '17'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '17'
                    }
                }
            },
            {
                'subcode': '03D14C02',
                'name': '教師專業發展',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '王揚智',
                        'mail': 'wyj2572@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['教育學程－中', '教育學程－小'],
                'time': '二 11 12',
                'location': 'W0401',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '25'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '25'
                    }
                }
            },
            {
                'subcode': '03D13P01',
                'name': '教學媒體與運用',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '李育強',
                        'mail': 'lyc002@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['教育學程－中', '教育學程－小'],
                'time': '一 7 8',
                'location': 'N401',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '32',
                        'current': '32'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '32'
                    }
                }
            },
            {
                'subcode': '03D13N01',
                'name': '輔導原理與實務',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '張治遙',
                        'mail': 'changcy@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['教育學程－中', '教育學程－小'],
                'time': '四 5 6',
                'location': 'N403',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '7'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '7'
                    }
                }
            },
            {
                'subcode': '03D12L01',
                'name': '學校行政與教育法規',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '黃哲彬',
                        'mail': 'brucehjb@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['教育學程－中', '教育學程－小'],
                'time': '二 13 14',
                'location': 'W0401',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '10'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '10'
                    }
                }
            },
            {
                'subcode': '03D13801',
                'name': '學習原理',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '王揚智',
                        'mail': 'wyj2572@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['教育學程－中', '教育學程－小'],
                'time': '二 3 4',
                'location': 'N107',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '8'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '8'
                    }
                }
            },
            {
                'subcode': '03D14201',
                'name': '學習評量',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '歐慧敏',
                        'mail': 'hmou@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['教育學程－中', '教育學程－小'],
                'time': '三 3 4',
                'location': 'N107',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '11'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '11'
                    }
                }
            },
            {
                'subcode': '03D08801',
                'name': '導師時間(C)',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '張韶華',
                        'mail': 'shaohua@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['教育學程－小'],
                'time': '一 13',
                'location': 'N502',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '45',
                        'current': '24'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '24'
                    }
                }
            },
            {
                'subcode': '03D08802',
                'name': '導師時間(D)',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '陳信豪',
                        'mail': 'yuching8892@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['教育學程－小'],
                'time': '四 9',
                'location': 'N403',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '45',
                        'current': '28'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '28'
                    }
                }
            },
            {
                'subcode': '03D05001',
                'name': '國民小學教學實習',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '何銘鴻',
                        'mail': 'rkv772209@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['教育學程－小'],
                'time': '三 11 12',
                'location': 'W0401',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '40',
                        'current': '26'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '26'
                    }
                }
            },
            {
                'subcode': '03D14701',
                'name': '國民小學綜合活動教材教法(雙語)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '陳素連',
                        'mail': 'suelien@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['教育學程－小'],
                'time': '二 3 4',
                'location': 'N102',
                'language': ['英語', '華語'],
                'capacity': {
                    'total': {
                        'max': '10',
                        'current': '7'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '7'
                    }
                }
            },
            {
                'subcode': '03D05701',
                'name': '國民小學數學教材教法',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '李育強',
                        'mail': 'lyc002@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['教育學程－小'],
                'time': '二 5 6',
                'location': 'N107',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '24'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '24'
                    }
                }
            },
            {
                'subcode': '03D14601',
                'name': '國民小學雙語教學實習(二)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '陳素連',
                        'mail': 'suelien@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['教育學程－小'],
                'time': '一 1 2',
                'location': 'N204',
                'language': ['英語', '華語'],
                'capacity': {
                    'total': {
                        'max': '10',
                        'current': '4'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '4'
                    }
                }
            },
            {
                'subcode': '03D05801',
                'name': '國音及說話',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '何銘鴻',
                        'mail': 'rkv772209@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['教育學程－小'],
                'time': '三 13 14',
                'location': 'W0401',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '33',
                        'current': '33'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '33'
                    }
                }
            },
            {
                'subcode': '03D14A01',
                'name': '課程發展與設計(雙語)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '張韶華',
                        'mail': 'shaohua@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['教育學程－小'],
                'time': '一 11 12',
                'location': 'N502',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '40',
                        'current': '4'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '4'
                    }
                }
            },
            {
                'subcode': '03D14301',
                'name': '自然科學概論',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '戴守煌',
                        'mail': 'shdai@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['教育學程－小'],
                'time': '一 3 4',
                'location': 'M205',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '11'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '11'
                    }
                }
            },
            {
                'subcode': '03D14901',
                'name': '自然科學概論(雙語)(此課不開)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '戴守煌',
                        'mail': 'shdai@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['教育學程－小'],
                'time': '',
                'location': '',
                'language': ['華語', '英語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '0'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '03D13502',
                'name': '社會學習領域概論',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '陳信豪',
                        'mail': 'yuching8892@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['教育學程－小'],
                'time': '四 7 8',
                'location': 'N403',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '13'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '13'
                    }
                }
            },
            {
                'subcode': '03D13H01',
                'name': '國民小學綜合活動教材教法',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '歐慧敏',
                        'mail': 'hmou@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['教育學程－小'],
                'time': '三 1 2',
                'location': 'N107',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '12'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '12'
                    }
                }
            },
            {
                'subcode': '03D04701',
                'name': '鍵盤樂',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '魏欣儀',
                        'mail': 'violawei@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['教育學程－小'],
                'time': '一 5 6',
                'location': 'W0912',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '21'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '21'
                    }
                }
            },
            {
                'subcode': '05D01701',
                'name': '全民國防教育軍事訓練課程(軍訓)-全民國防(C1)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '楊榮康',
                        'mail': 'koeibbrobin@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['軍訓選修'],
                'time': '一 3 4',
                'location': 'D105',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '50',
                        'current': '49'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '49'
                    }
                }
            },
            {
                'subcode': '05D01702',
                'name': '全民國防教育軍事訓練課程(軍訓)-全民國防(C2)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '郭延彰',
                        'mail': 'stusto67@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['軍訓選修'],
                'time': '三 5 6',
                'location': 'D105',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '50',
                        'current': '48'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '48'
                    }
                }
            },
            {
                'subcode': '05D01801',
                'name': '全民國防教育軍事訓練課程(軍訓)-防衛動員',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '李慈惠',
                        'mail': 'chuhui@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['軍訓選修'],
                'time': '三 1 2',
                'location': 'D105',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '50',
                        'current': '50'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '50'
                    }
                }
            },
            {
                'subcode': '05D01601',
                'name': '全民國防教育軍事訓練課程(軍訓)-國防政策(A1)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '谷明輝',
                        'mail': 'samku8310@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['軍訓選修'],
                'time': '二 7 8',
                'location': 'D105',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '50',
                        'current': '48'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '48'
                    }
                }
            },
            {
                'subcode': '05D01602',
                'name': '全民國防教育軍事訓練課程(軍訓)-國防政策(A2)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '吳建憲',
                        'mail': 'jasonchwu@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['軍訓選修'],
                'time': '二 1 2',
                'location': 'D105',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '50',
                        'current': '47'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '47'
                    }
                }
            },
            {
                'subcode': '05D01901',
                'name': '全民國防教育軍事訓練課程(軍訓)-國防科技',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '吳智泰',
                        'mail': 'charles610129@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['軍訓選修'],
                'time': '三 3 4',
                'location': 'D105',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '50',
                        'current': '50'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '50'
                    }
                }
            },
            {
                'subcode': '05D01501',
                'name': '全民國防教育軍事訓練課程(軍訓)-國際情勢(B1)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '陳朝政',
                        'mail': 'jacktp6327@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['軍訓選修'],
                'time': '二 3 4',
                'location': 'D105',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '50',
                        'current': '50'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '50'
                    }
                }
            },
            {
                'subcode': '05D01502',
                'name': '全民國防教育軍事訓練課程(軍訓)-國際情勢(B2)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '吳昭宏',
                        'mail': 'wwu72521@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['軍訓選修'],
                'time': '一 6 7',
                'location': 'D105',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '50',
                        'current': '49'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '49'
                    }
                }
            },
            {
                'subcode': '01M00301',
                'name': '英語加強課程(二)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '包尼爾',
                        'mail': 'baoneer1@stust.edu.tw'
                    },
                    {
                        'name': '史帝夫',
                        'mail': 'ridibundus@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['碩研英語加強班'],
                'time': '一 7 8 9 四 7 8 9',
                'location': 'W0407',
                'language': ['英語', '全程外語教學'],
                'capacity': {
                    'total': {
                        'max': '15',
                        'current': '3'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '3'
                    }
                }
            },
            {
                'subcode': '01D15R0E',
                'name': '學生輔導時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '王聖禾',
                        'mail': 'sunhur0315@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一甲'],
                'time': '四 6',
                'location': 'K302',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '57'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0010O',
                'name': '導師時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '王聖禾',
                        'mail': 'sunhur0315@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一甲'],
                'time': '四 5',
                'location': 'K302',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '57'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0000O',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '必修',
                'class': ['四技自控一甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '57'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D15009',
                'name': '服務學習(二)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '王聖禾',
                        'mail': 'sunhur0315@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一甲'],
                'time': '一 4 四 1',
                'location': 'Z100',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '57'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D27301',
                'name': '計算機程式及實習(二)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '劉雲輝',
                        'mail': 'yhliu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一甲'],
                'time': '一 5 6',
                'location': 'E0202',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '60'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': '3',
                        'current': '3'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D27401',
                'name': '工程圖學及實習',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '黃文勇',
                        'mail': 'wyhuang@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一甲'],
                'time': '四 7 8 9',
                'location': 'K302',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '60'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': '3',
                        'current': '3'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D34S01',
                'name': '工廠實習',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '黃冠展',
                        'mail': 'kuanchan@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一甲'],
                'time': '四 2 3 4',
                'location': 'V205',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '60'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': '3',
                        'current': '3'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D12S09',
                'name': '中文閱讀與表達(二)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '呂昇陽',
                        'mail': 'a560301@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一甲'],
                'time': '二 7 8',
                'location': 'T0505',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '59'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': '3',
                        'current': '1'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '1'
                    }
                }
            },
            {
                'subcode': '04D06B09',
                'name': '體育生活(二)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '杜珈霖',
                        'mail': 'dodo1017@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一甲'],
                'time': '一 1 2',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '59'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': '2',
                        'current': '0'
                    },
                    'external': {
                        'max': '2',
                        'current': '2'
                    }
                }
            },
            {
                'subcode': '10D08601',
                'name': '微積分(二)',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '呂金塗',
                        'mail': 'ctlu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一甲'],
                'time': '二 1 2 3',
                'location': 'K302',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '60'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': '3',
                        'current': '3'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D31M01',
                'name': '機構學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '林育昇',
                        'mail': 'yushenglin@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一甲'],
                'time': '一 7 8 9',
                'location': 'K403',
                'language': ['華語', '英語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '60'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': '3',
                        'current': '3'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D13H1T',
                'name': '英語聽講實務(二)(A1)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '謝旼妤',
                        'mail': 'heidiskype@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': ['四技自控一甲', '四技自控一乙', '四技車輛一甲', '四技車輛一乙'],
                'time': '二 5 6',
                'location': 'N308',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '30',
                        'current': '28'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '28'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D13H0N',
                'name': '英語聽講實務(二)(A2)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '吳宜錚',
                        'mail': 'zaz@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': ['四技自控一甲', '四技自控一乙', '四技車輛一甲', '四技車輛一乙'],
                'time': '二 5 6',
                'location': 'T0111',
                'language': ['英語', '華語'],
                'capacity': {
                    'total': {
                        'max': '55',
                        'current': '35'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': '3',
                        'current': '0'
                    },
                    'external': {
                        'max': '3',
                        'current': '3'
                    }
                }
            },
            {
                'subcode': '01D13H0O',
                'name': '英語聽講實務(二)(B1)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '曾瓊瑢',
                        'mail': 'zt7@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': ['四技自控一甲', '四技自控一乙', '四技車輛一甲', '四技車輛一乙'],
                'time': '二 5 6',
                'location': 'T0106',
                'language': ['華語', '英語'],
                'capacity': {
                    'total': {
                        'max': '55',
                        'current': '55'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '52'
                    },
                    'deptartment': {
                        'max': '3',
                        'current': '0'
                    },
                    'external': {
                        'max': '3',
                        'current': '3'
                    }
                }
            },
            {
                'subcode': '01D13H0P',
                'name': '英語聽講實務(二)(B2)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '劉怡伶',
                        'mail': 'z9q@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': ['四技自控一甲', '四技自控一乙', '四技車輛一甲', '四技車輛一乙'],
                'time': '二 5 6',
                'location': 'T0110',
                'language': ['英語', '華語'],
                'capacity': {
                    'total': {
                        'max': '55',
                        'current': '55'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '54'
                    },
                    'deptartment': {
                        'max': '3',
                        'current': '1'
                    },
                    'external': {
                        'max': '3',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D13H0Q',
                'name': '英語聽講實務(二)(C)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '陳詩卉',
                        'mail': 'sophia212@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': ['四技自控一甲', '四技自控一乙', '四技車輛一甲', '四技車輛一乙'],
                'time': '二 5 6',
                'location': 'T0108',
                'language': ['華語', '英語'],
                'capacity': {
                    'total': {
                        'max': '55',
                        'current': '46'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '40'
                    },
                    'deptartment': {
                        'max': '3',
                        'current': '3'
                    },
                    'external': {
                        'max': '3',
                        'current': '3'
                    }
                }
            },
            {
                'subcode': '10D36401',
                'name': '基礎物理',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '莊鎧榤',
                        'mail': 'mimi3922@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': [
                    '四技自控一甲',
                    '四技自控一乙',
                    '四技奈米一甲',
                    '四技奈米一乙',
                    '四技車輛一甲',
                    '四技車輛一乙'
                ],
                'time': '三 4',
                'location': 'K302',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '58'
                    },
                    'class': {
                        'max': '55',
                        'current': '55'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '3'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D32Z01',
                'name': '自動化概論',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '莊鎧榤',
                        'mail': 'mimi3922@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控一甲', '四技自控一乙'],
                'time': '五 1 2 3',
                'location': 'K411',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '55',
                        'current': '54'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '43'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '11'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D35601',
                'name': '物理(二)(此課不開)',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '林開政',
                        'mail': 'kjlin@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控一甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '0',
                        'current': '0'
                    },
                    'class': {
                        'max': '55',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D34M01',
                'name': '氣壓控制技術',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '詹超',
                        'mail': 'chaujan@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控一甲', '四技自控一乙'],
                'time': '三 1 2 3',
                'location': 'K002',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '60'
                    },
                    'class': {
                        'max': '55',
                        'current': '55'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D31N01',
                'name': '能源與環境',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '陳宥任',
                        'mail': 'uzchen0809@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': [
                    '四技自控一甲',
                    '四技自控一乙',
                    '四技奈米一甲',
                    '四技奈米一乙',
                    '四機械國專一甲'
                ],
                'time': '五 1 2 3',
                'location': 'K302',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '57',
                        'current': '55'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '50'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D15R0F',
                'name': '學生輔導時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '沈毓泰',
                        'mail': 'syt@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一乙'],
                'time': '四 6',
                'location': 'K309',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '53'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '53'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0010P',
                'name': '導師時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '沈毓泰',
                        'mail': 'syt@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一乙'],
                'time': '四 5',
                'location': 'K309',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '53'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '53'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0000P',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '必修',
                'class': ['四技自控一乙'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '53'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '53'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D1500A',
                'name': '服務學習(二)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '沈毓泰',
                        'mail': 'syt@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一乙'],
                'time': '一 9 二 4',
                'location': 'Z100',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '53'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '53'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D27304',
                'name': '計算機程式及實習(二)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '劉雲輝',
                        'mail': 'yhliu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一乙'],
                'time': '一 7 8',
                'location': 'E0202',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '58'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '53'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D27403',
                'name': '工程圖學及實習',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '黃文勇',
                        'mail': 'wyhuang@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一乙'],
                'time': '四 2 3 4',
                'location': 'K309',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '55'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '53'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '2'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D34S03',
                'name': '工廠實習',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '黃冠展',
                        'mail': 'kuanchan@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一乙'],
                'time': '四 7 8 9',
                'location': 'V205',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '59'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '53'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '6'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D12S0A',
                'name': '中文閱讀與表達(二)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '呂昇陽',
                        'mail': 'a560301@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一乙'],
                'time': '三 5 6',
                'location': 'K302',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '61',
                        'current': '60'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '52'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '4'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '4'
                    }
                }
            },
            {
                'subcode': '04D06B0A',
                'name': '體育生活(二)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '賈寶山',
                        'mail': 'sangog@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一乙'],
                'time': '一 1 2',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '56'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '53'
                    },
                    'deptartment': {
                        'max': '2',
                        'current': '2'
                    },
                    'external': {
                        'max': '2',
                        'current': '1'
                    }
                }
            },
            {
                'subcode': '10D08604',
                'name': '微積分(二)',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '李雨容',
                        'mail': 'yjlee@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一乙'],
                'time': '二 1 2 3',
                'location': 'R502',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '58'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '53'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D31M02',
                'name': '機構學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '劉乃上',
                        'mail': 'nliou@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控一乙'],
                'time': '一 3 4 5',
                'location': 'K309',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '60'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '53'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '7'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D15R0K',
                'name': '學生輔導時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '蕭瑞陽',
                        'mail': 'jyhsiao@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控二甲'],
                'time': '四 6',
                'location': 'K403',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '58'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '58'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0010Y',
                'name': '導師時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '蕭瑞陽',
                        'mail': 'jyhsiao@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控二甲'],
                'time': '四 5',
                'location': 'K403',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '58'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '58'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0000Y',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '必修',
                'class': ['四技自控二甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '58'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '58'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D11504',
                'name': '台灣與世界',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '王見川',
                        'mail': 'chuan@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控二甲'],
                'time': '四 3 4',
                'location': 'K403',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '55'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '54'
                    },
                    'deptartment': {
                        'max': '3',
                        'current': '0'
                    },
                    'external': {
                        'max': '5',
                        'current': '1'
                    }
                }
            },
            {
                'subcode': '10D17901',
                'name': '材料力學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '陳冠仁',
                        'mail': 'kjchen@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控二甲'],
                'time': '一 2 5 6',
                'location': 'K404',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '63',
                        'current': '63'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '6'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D03101',
                'name': '動力學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '蕭瑞陽',
                        'mail': 'jyhsiao@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控二甲'],
                'time': '四 7 8 9',
                'location': 'K403',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '65',
                        'current': '65'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '8'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D04201',
                'name': '電工學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '吳敏光',
                        'mail': 'w2m@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控二甲'],
                'time': '二 1 2 3',
                'location': 'K408',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '63',
                        'current': '62'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '58'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '4'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D17801',
                'name': '熱力學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '李友竹',
                        'mail': 'maxli@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控二甲'],
                'time': '二 7 8 9',
                'location': 'K403',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '63',
                        'current': '63'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '58'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '04D03401',
                'name': '體育生活(四)：有氧舞蹈(A)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '徐翠敏',
                        'mail': 'htm509@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': [
                    '四技自控二甲',
                    '四技自控二乙',
                    '四技奈米二甲',
                    '四技奈米二乙',
                    '四技高福二甲',
                    '四技工管二甲',
                    '四技工管二乙',
                    '四技商設二甲',
                    '四技動畫二甲'
                ],
                'time': '一 3 4',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '40',
                        'current': '39'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '39'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '04D03801',
                'name': '體育生活(四)：羽球(A)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '傅慧榕',
                        'mail': 'hufu@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': [
                    '四技自控二甲',
                    '四技自控二乙',
                    '四技奈米二甲',
                    '四技奈米二乙',
                    '四技高福二甲',
                    '四技工管二甲',
                    '四技工管二乙',
                    '四技商設二甲',
                    '四技動畫二甲'
                ],
                'time': '一 3 4',
                'location': '',
                'language': ['華語', '華語'],
                'capacity': {
                    'total': {
                        'max': '45',
                        'current': '43'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '43'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '04D06901',
                'name': '體育生活(四)：拳擊(A)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '李政達',
                        'mail': 'ct1204@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': [
                    '四技自控二甲',
                    '四技自控二乙',
                    '四技奈米二甲',
                    '四技奈米二乙',
                    '四技高福二甲',
                    '四技工管二甲',
                    '四技工管二乙',
                    '四技商設二甲',
                    '四技動畫二甲'
                ],
                'time': '一 3 4',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '45',
                        'current': '45'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '45'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '04D04001',
                'name': '體育生活(四)：桌球(A)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '陳艷麗',
                        'mail': 'chyenli@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': [
                    '四技自控二甲',
                    '四技自控二乙',
                    '四技奈米二甲',
                    '四技奈米二乙',
                    '四技高福二甲',
                    '四技工管二甲',
                    '四技工管二乙',
                    '四技商設二甲',
                    '四技動畫二甲'
                ],
                'time': '一 3 4',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '51',
                        'current': '51'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '51'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '04D05201',
                'name': '體育生活(四)：健身雕塑(A)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '杜珈霖',
                        'mail': 'dodo1017@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': [
                    '四技自控二甲',
                    '四技自控二乙',
                    '四技奈米二甲',
                    '四技奈米二乙',
                    '四技高福二甲',
                    '四技工管二甲',
                    '四技工管二乙',
                    '四技商設二甲',
                    '四技動畫二甲'
                ],
                'time': '一 3 4',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '46',
                        'current': '44'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '44'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '04D03601',
                'name': '體育生活(四)：游泳(A)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '陳新福',
                        'mail': 'sfchen@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': [
                    '四技自控二甲',
                    '四技自控二乙',
                    '四技奈米二甲',
                    '四技奈米二乙',
                    '四技高福二甲',
                    '四技工管二甲',
                    '四技工管二乙',
                    '四技商設二甲',
                    '四技動畫二甲'
                ],
                'time': '一 3 4',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '45',
                        'current': '9'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '8'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '1',
                        'current': '1'
                    }
                }
            },
            {
                'subcode': '04D05001',
                'name': '體育生活(四)：瑜珈(A)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '張雅評',
                        'mail': 'pinytw@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': [
                    '四技自控二甲',
                    '四技自控二乙',
                    '四技奈米二甲',
                    '四技奈米二乙',
                    '四技高福二甲',
                    '四技工管二甲',
                    '四技工管二乙',
                    '四技商設二甲',
                    '四技動畫二甲'
                ],
                'time': '一 3 4',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '40',
                        'current': '36'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '36'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '04D04401',
                'name': '體育生活(四)：壘球(A)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '洪榮臨',
                        'mail': 'rrr712106@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': [
                    '四技自控二甲',
                    '四技自控二乙',
                    '四技奈米二甲',
                    '四技奈米二乙',
                    '四技高福二甲',
                    '四技工管二甲',
                    '四技工管二乙',
                    '四技商設二甲',
                    '四技動畫二甲'
                ],
                'time': '一 3 4',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '55',
                        'current': '55'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '55'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '04D04801',
                'name': '體育生活(四)：籃球(A)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '賴慶霖',
                        'mail': 'eric1225@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': [
                    '四技自控二甲',
                    '四技自控二乙',
                    '四技奈米二甲',
                    '四技奈米二乙',
                    '四技高福二甲',
                    '四技工管二甲',
                    '四技工管二乙',
                    '四技商設二甲',
                    '四技動畫二甲'
                ],
                'time': '一 3 4',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '55',
                        'current': '53'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '53'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D36501',
                'name': '基礎電學',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '沈毓泰',
                        'mail': 'syt@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': [
                    '四技自控二甲',
                    '四技自控二乙',
                    '四技奈米二甲',
                    '四技奈米二乙',
                    '四技車輛二甲',
                    '四技車輛二乙'
                ],
                'time': '三 4',
                'location': 'K403',
                'language': ['華語', '英語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '56'
                    },
                    'class': {
                        'max': '55',
                        'current': '55'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '1'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D35G01',
                'name': '3D列印',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '陳璟璿',
                        'mail': 'cch1108@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': [
                    '四技自控二甲',
                    '四技自控二乙',
                    '四技奈米二甲',
                    '四技奈米二乙',
                    '四技車輛二甲',
                    '四技車輛二乙',
                    '四技化材二甲',
                    '四技化材二乙',
                    '四技食品二甲'
                ],
                'time': '五 7 8 9',
                'location': 'E0202',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '59'
                    },
                    'class': {
                        'max': '55',
                        'current': '54'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D35701',
                'name': '工程數學(二)',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '呂金塗',
                        'mail': 'ctlu@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': [
                    '四技自控二甲',
                    '四技自控二乙',
                    '四技奈米二甲',
                    '四技奈米二乙',
                    '四技車輛二甲',
                    '四技車輛二乙'
                ],
                'time': '三 1 2 3',
                'location': 'K403',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '25'
                    },
                    'class': {
                        'max': '55',
                        'current': '20'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '12D09901',
                'name': '創意性問題解決技巧',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '瞿嘉駿',
                        'mail': 'ccchu@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控二甲', '四技自控二乙'],
                'time': '一 1 四 1 2',
                'location': 'K403',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '50'
                    },
                    'class': {
                        'max': '55',
                        'current': '45'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '15D04601',
                'name': '數位邏輯原理與實務',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '彭守道',
                        'mail': 'stpeng@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控二甲', '四技自控二乙', '四技車輛二甲', '四技車輛二乙'],
                'time': '二 4 5 6',
                'location': 'R402',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '60'
                    },
                    'class': {
                        'max': '55',
                        'current': '55'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D27001',
                'name': '機械製造',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '董景瑞',
                        'mail': 'generaytung@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控二甲', '四技自控二乙'],
                'time': '五 1 2 3',
                'location': 'K403',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '62',
                        'current': '61'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '54'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '7'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D32E02',
                'name': '機電整合技術(A)',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '王聖禾',
                        'mail': 'sunhur0315@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控二甲', '四技自控二乙'],
                'time': '一 7 8 9',
                'location': 'K301',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '54'
                    },
                    'class': {
                        'max': '45',
                        'current': '43'
                    },
                    'deptartment': {
                        'max': '15',
                        'current': '10'
                    },
                    'external': {
                        'max': '1',
                        'current': '1'
                    }
                }
            },
            {
                'subcode': '10D32E01',
                'name': '機電整合技術(B)(此課不開)',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '蘇嘉祥',
                        'mail': 'jssu@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控二甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '0',
                        'current': '0'
                    },
                    'class': {
                        'max': '0',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D15R0P',
                'name': '學生輔導時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '呂金塗',
                        'mail': 'ctlu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控二乙'],
                'time': '四 6',
                'location': 'K404',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '57'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D00117',
                'name': '導師時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '呂金塗',
                        'mail': 'ctlu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控二乙'],
                'time': '四 5',
                'location': 'K404',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '57'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D00017',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '必修',
                'class': ['四技自控二乙'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '57'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D11507',
                'name': '台灣與世界',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '梁媛淋',
                        'mail': 'alcliang@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控二乙'],
                'time': '四 3 4',
                'location': 'K404',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '54'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '53'
                    },
                    'deptartment': {
                        'max': '2',
                        'current': '0'
                    },
                    'external': {
                        'max': '5',
                        'current': '1'
                    }
                }
            },
            {
                'subcode': '10D17902',
                'name': '材料力學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '王永鵬',
                        'mail': 'wyplsm@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控二乙'],
                'time': '四 7 8 9',
                'location': 'K404',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '62',
                        'current': '62'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D03103',
                'name': '動力學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '蕭瑞陽',
                        'mail': 'jyhsiao@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控二乙'],
                'time': '一 2 5 6',
                'location': 'K403',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '64',
                        'current': '64'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '7'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D04202',
                'name': '電工學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '吳敏光',
                        'mail': 'w2m@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控二乙'],
                'time': '二 7 8 9',
                'location': 'K408',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '60'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '3'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D17802',
                'name': '熱力學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '李友竹',
                        'mail': 'maxli@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控二乙'],
                'time': '二 1 2 3',
                'location': 'K309',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '59'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': '2',
                        'current': '2'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0011B',
                'name': '導師時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '王永鵬',
                        'mail': 'wyplsm@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控三甲'],
                'time': '五 4',
                'location': 'K309',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '51'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '51'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0001B',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '必修',
                'class': ['四技自控三甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '51'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '51'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D35201',
                'name': '自動控制實習',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '沈毓泰',
                        'mail': 'syt@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控三甲'],
                'time': '四 1 2 3',
                'location': 'K408',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '56'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '51'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D10002',
                'name': '工程統計學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '李友竹',
                        'mail': 'maxli@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控三甲', '四技自控三乙', '四技奈米三甲', '四技奈米三乙'],
                'time': '一 5 6 7',
                'location': 'K302',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '62',
                        'current': '61'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '57'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '4'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D15001',
                'name': '生醫工程技術',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '陳璟璿',
                        'mail': 'cch1108@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控三甲', '四技自控三乙', '四技奈米三甲', '四技奈米三乙'],
                'time': '一 2 3 4',
                'location': 'K302',
                'language': ['華語', '英語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '22'
                    },
                    'class': {
                        'max': '55',
                        'current': '17'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D36601',
                'name': '能源實作與電網應用',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '張明豪',
                        'mail': 'kelvinchang1984@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控三甲', '四技自控三乙', '四技奈米三甲', '四技奈米三乙'],
                'time': '三 4 5 6',
                'location': 'K402',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '56'
                    },
                    'class': {
                        'max': '55',
                        'current': '55'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '1'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D03001',
                'name': '馬達原理與控制',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '吳敏光',
                        'mail': 'w2m@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控三甲', '四技自控三乙', '四技車輛三甲', '四技車輛三乙'],
                'time': '五 1 2 3',
                'location': 'K402',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '65',
                        'current': '64'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '59'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D35S01',
                'name': '深度學習方法於太陽光電技術之實作應用',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '林克默',
                        'mail': 'kemo@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控三甲', '四技自控三乙', '四技奈米三甲', '四技奈米三乙'],
                'time': '二 7 8 9',
                'location': 'K309',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '48'
                    },
                    'class': {
                        'max': '55',
                        'current': '44'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '4'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D20101',
                'name': '創意性機構設計',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '瞿嘉駿',
                        'mail': 'ccchu@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控三甲', '四技自控三乙', '四技奈米三甲', '四技奈米三乙'],
                'time': '二 1 2 3',
                'location': 'K402',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '63',
                        'current': '63'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '58'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D31J01',
                'name': '智慧型機器人概論',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '吳敏光',
                        'mail': 'w2m@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控三甲', '四技自控三乙', '四技奈米三甲', '四技奈米三乙'],
                'time': '三 1 2 3',
                'location': 'K402',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '61',
                        'current': '58'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '55'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '3'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D34E01',
                'name': '智慧型機器損壞線上診斷技術與單晶片實作應用',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '沈毓泰',
                        'mail': 'syt@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控三甲', '四技自控三乙', '四技奈米三甲', '四技奈米三乙'],
                'time': '一 5 6 7',
                'location': 'K413',
                'language': ['華語', '英語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '39'
                    },
                    'class': {
                        'max': '55',
                        'current': '36'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '3'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D21901',
                'name': '進階工業日文',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '楊政峰',
                        'mail': 'exchange@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': [
                    '四技自控三甲',
                    '四技自控三乙',
                    '四技奈米三甲',
                    '四技奈米三乙',
                    '四技車輛三甲',
                    '四技車輛三乙'
                ],
                'time': '五 1 2 3',
                'location': 'K309',
                'language': ['華語', '日語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '60'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '55'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D31601',
                'name': '感測元件與運動控制實務',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '沈毓泰',
                        'mail': 'syt@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控三甲', '四技自控三乙'],
                'time': '二 1 2 3',
                'location': 'K413',
                'language': ['華語', '英語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '21'
                    },
                    'class': {
                        'max': '55',
                        'current': '16'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D16701',
                'name': '電腦輔助製造',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '陳璟璿',
                        'mail': 'cch1108@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控三甲', '四技自控三乙'],
                'time': '二 4 5 6',
                'location': 'E0202',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '61',
                        'current': '61'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '56'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D24101',
                'name': '精密機械振動測試與分析',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '王永鵬',
                        'mail': 'wyplsm@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控三甲', '四技自控三乙', '四技奈米三甲', '四技奈米三乙'],
                'time': '二 7 8 9',
                'location': 'K302',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '57'
                    },
                    'class': {
                        'max': '55',
                        'current': '55'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '2'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D36801',
                'name': '領導合作與職場實務探究',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '許藝菊',
                        'mail': 'yichu@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技自控三甲', '四技自控三乙', '四技奈米三甲', '四技奈米三乙'],
                'time': '三 1 2 3',
                'location': 'E0504',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '52'
                    },
                    'class': {
                        'max': '55',
                        'current': '52'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0011D',
                'name': '導師時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '陳宥任',
                        'mail': 'uzchen0809@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控三乙'],
                'time': '五 4',
                'location': 'K402',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '48'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '48'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0001D',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '必修',
                'class': ['四技自控三乙'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '48'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '48'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D35202',
                'name': '自動控制實習',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '沈毓泰',
                        'mail': 'syt@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控三乙'],
                'time': '四 7 8 9',
                'location': 'K408',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '54'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '48'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '6'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D1120C',
                'name': '外語能力檢定',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '李政源',
                        'mail': 'mtiger@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控四甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '40'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '40'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D15T18',
                'name': '社團參與',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '王江舜',
                        'mail': 'randywang@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控四甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '48'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '48'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D25801',
                'name': '專業證照',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '王聖璋',
                        'mail': 'scwang@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控四甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '48'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '48'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0011H',
                'name': '導師時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '詹超',
                        'mail': 'chaujan@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控四甲'],
                'time': '三 4',
                'location': 'K412',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '48'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '48'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0001H',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '必修',
                'class': ['四技自控四甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '48'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '48'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D26701',
                'name': '塑膠模具原理與實務',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '曾信智',
                        'mail': 'hjtzeng@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': [
                    '四技自控四甲',
                    '四技自控四乙',
                    '四技奈米四甲',
                    '四技奈米四乙',
                    '四技車輛四甲',
                    '四技車輛四乙'
                ],
                'time': '四 1 2 3',
                'location': 'K302',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '58',
                        'current': '58'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '56'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '2'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D36701',
                'name': '綠電永續淨零跨域整合實務',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '陳宥任',
                        'mail': 'uzchen0809@stust.edu.tw'
                    },
                    {
                        'name': '林芳俐',
                        'mail': 'lucialin@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': [
                    '四技自控四甲',
                    '四技自控四乙',
                    '四技奈米四甲',
                    '四技奈米四乙',
                    '四技車輛四甲',
                    '四技車輛四乙'
                ],
                'time': '二 7 8 9',
                'location': 'R503',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '35',
                        'current': '30'
                    },
                    'class': {
                        'max': '15',
                        'current': '15'
                    },
                    'deptartment': {
                        'max': '15',
                        'current': '15'
                    },
                    'external': {
                        'max': '5',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D30901',
                'name': '燃料電池技術',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '張崴縉',
                        'mail': 'wcchang@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': [
                    '四技自控四甲',
                    '四技自控四乙',
                    '四技奈米四甲',
                    '四技奈米四乙',
                    '四技車輛四甲',
                    '四技車輛四乙'
                ],
                'time': '二 1 2 3',
                'location': 'K411',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '52'
                    },
                    'class': {
                        'max': '55',
                        'current': '47'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D35T01',
                'name': '職涯規劃與職場見習',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '吳忠春',
                        'mail': 'wcc@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': [
                    '四技自控四甲',
                    '四技自控四乙',
                    '四技奈米四甲',
                    '四技奈米四乙',
                    '四技車輛四甲',
                    '四技車輛四乙'
                ],
                'time': '五 7 8 9',
                'location': 'K302',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '62',
                        'current': '62'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '55'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '7'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D31B01',
                'name': '機械產業實習(二)',
                'credit': '10',
                'lecturer': [
                    {
                        'name': '王聖璋',
                        'mail': 'scwang@stust.edu.tw'
                    }
                ],
                'type': '管制選修',
                'class': [
                    '四技自控四甲',
                    '四技自控四乙',
                    '四技奈米四甲',
                    '四技奈米四乙',
                    '四技車輛四甲',
                    '四技車輛四乙'
                ],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '42',
                        'current': '41'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '41'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D1120D',
                'name': '外語能力檢定',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '李政源',
                        'mail': 'mtiger@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控四乙'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '44'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '44'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D15T19',
                'name': '社團參與',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '王江舜',
                        'mail': 'randywang@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控四乙'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '48'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '48'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D25802',
                'name': '專業證照',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '王聖璋',
                        'mail': 'scwang@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控四乙'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '48'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '48'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0011J',
                'name': '導師時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '瞿嘉駿',
                        'mail': 'ccchu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技自控四乙'],
                'time': '一 5',
                'location': 'K411',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '46'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '46'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0001J',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '必修',
                'class': ['四技自控四乙'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '48'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '48'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D1121O',
                'name': '外語能力檢定',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '李政源',
                        'mail': 'mtiger@stust.edu.tw'
                    }
                ],
                'type': '自選必修',
                'class': [
                    '四技自控延修',
                    '四技奈米延修',
                    '四技車輛延修',
                    '四技企電延修',
                    '四技產設延修',
                    '四技流音延修',
                    '四高齡服務延修',
                    '四技高福延修',
                    '四技醫電延修',
                    '四技電資延修',
                    '四技控晶延修',
                    '四技電子延修',
                    '四技網通延修',
                    '四技晶片延修',
                    '四技系統延修',
                    '四技微電延修',
                    '四技化材延修',
                    '四技工管延修',
                    '四技電商延修',
                    '四技國企延修',
                    '四技企管延修',
                    '四技財金延修',
                    '四技資管延修',
                    '四技會資延修',
                    '四技休閒延修',
                    '四技應英延修',
                    '四技行流延修',
                    '四技應日延修',
                    '四技資傳延修',
                    '四技資工延修',
                    '四技食品延修',
                    '四技幼保延修',
                    '四技商設延修',
                    '四技動畫延修',
                    '四技創設延修',
                    '四技多樂延修',
                    '四技半導體延修',
                    '四技餐旅延修'
                ],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '',
                        'current': '68'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '68'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D25807',
                'name': '專業證照',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '王聖璋',
                        'mail': 'scwang@stust.edu.tw'
                    }
                ],
                'type': '自選必修',
                'class': ['四技自控延修', '四技奈米延修', '四技車輛延修'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '9'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '9'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0006Y',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '自選必修',
                'class': [
                    '二技企管延修',
                    '二技資管延修',
                    '二技休閒延修',
                    '二技應英延修',
                    '二技幼保延修',
                    '四技自控延修',
                    '四技奈米延修',
                    '四技車輛延修',
                    '四技企電延修',
                    '四技產設延修',
                    '四技流音延修',
                    '四高齡服務延修',
                    '四技高福延修',
                    '四技醫電延修',
                    '四技電資延修',
                    '四技控晶延修',
                    '四技電子延修',
                    '四技網通延修',
                    '四技晶片延修',
                    '四技系統延修',
                    '四技微電延修',
                    '四技化材延修',
                    '四技工管延修',
                    '四技電商延修',
                    '四技國企延修',
                    '四國際商務延修',
                    '四技企管延修',
                    '四技財金延修',
                    '四國際金融延修',
                    '四技資管延修',
                    '四技會資延修',
                    '四技休閒延修',
                    '四技應英延修',
                    '四技行流延修',
                    '四技應日延修',
                    '四技資傳延修',
                    '四技資工延修',
                    '四技食品延修',
                    '四技幼保延修',
                    '四技商設延修',
                    '四技動畫延修',
                    '四技創設延修',
                    '四技多樂延修',
                    '四技半導體延修',
                    '四技餐旅延修'
                ],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '',
                        'current': '11'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '11'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D34X01',
                'name': '實務專題(一)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '王聖璋',
                        'mail': 'scwang@stust.edu.tw'
                    }
                ],
                'type': '自選必修',
                'class': ['四技自控延修', '四技奈米延修', '四技車輛延修'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '8'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '8'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D34Y01',
                'name': '實務專題(二)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '王聖璋',
                        'mail': 'scwang@stust.edu.tw'
                    }
                ],
                'type': '自選必修',
                'class': ['四技自控延修', '四技奈米延修', '四技車輛延修'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '19'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '1'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '18'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D12501',
                'name': '英文能力課程',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '黃麗麗',
                        'mail': 'z1n@stust.edu.tw'
                    }
                ],
                'type': '自選必修',
                'class': [
                    '四技自控延修',
                    '四技奈米延修',
                    '四技車輛延修',
                    '四技產設延修',
                    '四技流音延修',
                    '四高齡服務延修',
                    '四技高福延修',
                    '四技醫電延修',
                    '四技電資延修',
                    '四技控晶延修',
                    '四技電子延修',
                    '四技網通延修',
                    '四技晶片延修',
                    '四技系統延修',
                    '四技微電延修',
                    '四技化材延修',
                    '四技工管延修',
                    '四技電商延修',
                    '四技國企延修',
                    '四技企管延修',
                    '四技財金延修',
                    '四技資管延修',
                    '四技會資延修',
                    '四技休閒延修',
                    '四技應英延修',
                    '四技行流延修',
                    '四技應日延修',
                    '四技資傳延修',
                    '四技資工延修',
                    '四技食品延修',
                    '四技幼保延修',
                    '四技商設延修',
                    '四技動畫延修',
                    '四技創設延修',
                    '四技多樂延修',
                    '四技半導體延修',
                    '四技餐旅延修'
                ],
                'time': '一 7 8 9',
                'location': 'T0311',
                'language': ['英語', '華語'],
                'capacity': {
                    'total': {
                        'max': '',
                        'current': '22'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '22'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D15R11',
                'name': '學生輔導時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '許藝菊',
                        'mail': 'yichu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一甲', '四機械國專一甲'],
                'time': '四 6',
                'location': 'R501',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '43'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '43'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0011Z',
                'name': '導師時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '許藝菊',
                        'mail': 'yichu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一甲', '四機械國專一甲'],
                'time': '四 5',
                'location': 'R501',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '43'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '43'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D0001Z',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一甲', '四機械國專一甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '43'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '43'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D1500K',
                'name': '服務學習(二)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '許藝菊',
                        'mail': 'yichu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一甲', '四機械國專一甲'],
                'time': '一 5 四 4',
                'location': 'Z100',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '43'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '43'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D27302',
                'name': '計算機程式及實習(二)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '林克默',
                        'mail': 'kemo@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一甲', '四機械國專一甲'],
                'time': '一 1 2',
                'location': 'E0202',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '56',
                        'current': '56'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '43'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '13'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D34S02',
                'name': '工廠實習',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '董景瑞',
                        'mail': 'generaytung@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一甲', '四機械國專一甲'],
                'time': '二 1 2 3',
                'location': 'V205',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '49',
                        'current': '49'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '43'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '6'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D12S0K',
                'name': '中文閱讀與表達(二)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '郭璉謙',
                        'mail': 'artichko@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一甲'],
                'time': '一 3 4',
                'location': 'E0407',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '41'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '38'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '3'
                    },
                    'external': {
                        'max': '5',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '04D06B0K',
                'name': '體育生活(二)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '陳毅',
                        'mail': 'chenyi@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一甲', '四機械國專一甲'],
                'time': '一 6 7',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '46'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '43'
                    },
                    'deptartment': {
                        'max': '2',
                        'current': '2'
                    },
                    'external': {
                        'max': '2',
                        'current': '1'
                    }
                }
            },
            {
                'subcode': '10D08602',
                'name': '微積分(二)',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '王聖禾',
                        'mail': 'sunhur0315@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一甲', '四機械國專一甲'],
                'time': '二 7 8 9',
                'location': 'K412',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '48'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '43'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D13H11',
                'name': '英語聽講實務(二)(A)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '陳淑吟',
                        'mail': 'estherchen@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': [
                    '四技奈米一甲',
                    '四技奈米一乙',
                    '四技半導體一甲',
                    '四技半導體一乙',
                    '四半導國專一甲',
                    '四機械國專一甲'
                ],
                'time': '四 1 2',
                'location': 'T0110',
                'language': ['華語', '英語'],
                'capacity': {
                    'total': {
                        'max': '56',
                        'current': '56'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '56'
                    },
                    'deptartment': {
                        'max': '3',
                        'current': '0'
                    },
                    'external': {
                        'max': '3',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D13H12',
                'name': '英語聽講實務(二)(B)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '陳怡如',
                        'mail': 'gracechen@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': [
                    '四技奈米一甲',
                    '四技奈米一乙',
                    '四技半導體一甲',
                    '四技半導體一乙',
                    '四半導國專一甲',
                    '四機械國專一甲'
                ],
                'time': '四 1 2',
                'location': 'T0106',
                'language': ['華語', '英語'],
                'capacity': {
                    'total': {
                        'max': '56',
                        'current': '56'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '55'
                    },
                    'deptartment': {
                        'max': '3',
                        'current': '0'
                    },
                    'external': {
                        'max': '3',
                        'current': '1'
                    }
                }
            },
            {
                'subcode': '01D13H14',
                'name': '英語聽講實務(二)(C)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '陳淑微',
                        'mail': 'sophieus@stust.edu.tw'
                    }
                ],
                'type': '管制必修',
                'class': ['四技奈米一甲', '四技奈米一乙', '四技半導體一甲', '四技半導體一乙'],
                'time': '四 1 2',
                'location': 'T0111',
                'language': ['英語', '華語'],
                'capacity': {
                    'total': {
                        'max': '55',
                        'current': '50'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '44'
                    },
                    'deptartment': {
                        'max': '3',
                        'current': '3'
                    },
                    'external': {
                        'max': '3',
                        'current': '3'
                    }
                }
            },
            {
                'subcode': '10D36301',
                'name': '氣壓控制實務',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '詹超',
                        'mail': 'chaujan@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技奈米一甲', '四技奈米一乙', '四機械國專一甲'],
                'time': '二 4 5 6',
                'location': 'K002',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '41'
                    },
                    'class': {
                        'max': '55',
                        'current': '39'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '2'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '14D02701',
                'name': '創意性問題解決技巧',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '瞿嘉駿',
                        'mail': 'ccchu@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技奈米一甲', '四技奈米一乙', '四機械國專一甲'],
                'time': '二 4 5 6',
                'location': 'K412',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '42'
                    },
                    'class': {
                        'max': '55',
                        'current': '36'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '6'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D15R12',
                'name': '學生輔導時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '蘇嘉祥',
                        'mail': 'jssu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一乙'],
                'time': '四 6',
                'location': 'E0409',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '39'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '39'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D00120',
                'name': '導師時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '蘇嘉祥',
                        'mail': 'jssu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一乙'],
                'time': '四 5',
                'location': 'E0409',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '39'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '39'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D00020',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一乙'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '39'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '39'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D1500L',
                'name': '服務學習(二)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '蘇嘉祥',
                        'mail': 'jssu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一乙'],
                'time': '一 5 四 4',
                'location': 'Z100',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '39'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '39'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D27305',
                'name': '計算機程式及實習(二)',
                'credit': '1',
                'lecturer': [
                    {
                        'name': '林克默',
                        'mail': 'kemo@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一乙'],
                'time': '一 3 4',
                'location': 'E0202',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '50',
                        'current': '50'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '39'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '11'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D34S04',
                'name': '工廠實習',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '董景瑞',
                        'mail': 'generaytung@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一乙'],
                'time': '二 7 8 9',
                'location': 'V205',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '44'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '39'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D12S0L',
                'name': '中文閱讀與表達(二)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '林麗美',
                        'mail': 'linbo@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一乙'],
                'time': '一 1 2',
                'location': 'E0502',
                'language': ['華語', '台語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '40'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '39'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '1'
                    },
                    'external': {
                        'max': '5',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '04D06B0L',
                'name': '體育生活(二)',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '蘇素月',
                        'mail': 'susy915@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一乙'],
                'time': '一 6 7',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '50',
                        'current': '43'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '39'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '1'
                    },
                    'external': {
                        'max': 'Unlimited',
                        'current': '3'
                    }
                }
            },
            {
                'subcode': '10D08605',
                'name': '微積分(二)',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '黃東雍',
                        'mail': 'huangt@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米一乙'],
                'time': '二 1 2 3',
                'location': 'E0502',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '44'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '39'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D15R13',
                'name': '學生輔導時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '陳冠仁',
                        'mail': 'kjchen@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二甲'],
                'time': '四 6',
                'location': 'K412',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '32'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D00121',
                'name': '導師時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '陳冠仁',
                        'mail': 'kjchen@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二甲'],
                'time': '四 5',
                'location': 'K412',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '32'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D00021',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '32'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D1150D',
                'name': '台灣與世界',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '盧彥光',
                        'mail': 'yenkung@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二甲'],
                'time': '一 5 6',
                'location': 'K412',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '35'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '31'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '0'
                    },
                    'external': {
                        'max': '5',
                        'current': '4'
                    }
                }
            },
            {
                'subcode': '10D27503',
                'name': '電腦輔助機械製圖及實習',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '蘇嘉祥',
                        'mail': 'jssu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二甲'],
                'time': '二 1 2 3',
                'location': 'E0202',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '37'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D17905',
                'name': '材料力學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '林儒禮',
                        'mail': 'ruli@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二甲'],
                'time': '二 7 8 9',
                'location': 'E0408',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '42',
                        'current': '42'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '10'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D04203',
                'name': '電工學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '黃東雍',
                        'mail': 'huangt@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二甲'],
                'time': '二 4 5 6',
                'location': 'E0502',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '39',
                        'current': '39'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '7'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D27601',
                'name': '機械製造',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '曾信智',
                        'mail': 'hjtzeng@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二甲'],
                'time': '四 7 8 9',
                'location': 'K412',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '33'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '1'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D31M05',
                'name': '機構學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '林育昇',
                        'mail': 'yushenglin@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二甲'],
                'time': '四 1 2 3',
                'location': 'K411',
                'language': ['華語', '英語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '36'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '4'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D07401',
                'name': '熱處理學與金相學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '吳忠春',
                        'mail': 'wcc@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技奈米二甲', '四技奈米二乙'],
                'time': '一 7 8 9',
                'location': 'K007',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '64',
                        'current': '64'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '48'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '16'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D32E03',
                'name': '機電整合技術',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '蘇嘉祥',
                        'mail': 'jssu@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技奈米二甲', '四技奈米二乙'],
                'time': '五 1 2 3',
                'location': 'K308',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '27'
                    },
                    'class': {
                        'max': '45',
                        'current': '13'
                    },
                    'deptartment': {
                        'max': '15',
                        'current': '14'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D15R14',
                'name': '學生輔導時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '林克默',
                        'mail': 'kemo@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二乙'],
                'time': '四 6',
                'location': 'E0410',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '32'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D00122',
                'name': '導師時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '林克默',
                        'mail': 'kemo@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二乙'],
                'time': '四 5',
                'location': 'E0410',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '32'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D00022',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二乙'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '32'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D1150E',
                'name': '台灣與世界',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '吳玲君',
                        'mail': 'zd5@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二乙'],
                'time': '一 1 2',
                'location': 'T0103',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '32'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '0'
                    },
                    'external': {
                        'max': '5',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D27504',
                'name': '電腦輔助機械製圖及實習',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '蘇嘉祥',
                        'mail': 'jssu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二乙'],
                'time': '四 7 8 9',
                'location': 'E0202',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '35'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '3'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D17906',
                'name': '材料力學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '林儒禮',
                        'mail': 'ruli@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二乙'],
                'time': '二 1 2 3',
                'location': 'K504',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '43',
                        'current': '40'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '31'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '9'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D04204',
                'name': '電工學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '黃東雍',
                        'mail': 'huangt@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二乙'],
                'time': '四 1 2 3',
                'location': 'E0502',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '36'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '4'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D27602',
                'name': '機械製造',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '曾信智',
                        'mail': 'hjtzeng@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二乙'],
                'time': '二 4 5 6',
                'location': 'K504',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '36'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '4'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D31M06',
                'name': '機構學',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '林育昇',
                        'mail': 'yushenglin@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米二乙'],
                'time': '二 7 8 9',
                'location': 'K504',
                'language': ['華語', '英語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '37'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '32'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D00123',
                'name': '導師時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '曾信智',
                        'mail': 'hjtzeng@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米三甲'],
                'time': '四 4',
                'location': 'K402',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '44'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '44'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D00023',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '必修',
                'class': ['四技奈米三甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '44'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '44'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D31O01',
                'name': '工程‧倫理與社會',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '許藝菊',
                        'mail': 'yichu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米三甲'],
                'time': '四 7 8',
                'location': 'E0504',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '49'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '44'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '5'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '14D06101',
                'name': '奈米材料學',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '王聖璋',
                        'mail': 'scwang@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米三甲'],
                'time': '四 5 6',
                'location': 'K402',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '48'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '44'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '4'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D34Z01',
                'name': '機械工程實驗',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '魏慶華',
                        'mail': 'chingwei@stust.edu.tw'
                    },
                    {
                        'name': '陳冠仁',
                        'mail': 'kjchen@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米三甲'],
                'time': '四 1 2 3',
                'location': 'K005',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '44'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '44'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '14D02201',
                'name': '微機電系統',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '鄭宜肪',
                        'mail': 'ifcheng@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米三甲', '四技奈米三乙'],
                'time': '二 4 5 6',
                'location': 'K401',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '95',
                        'current': '92'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '90'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '2'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D35C01',
                'name': '微機電元件設計',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '林重達',
                        'mail': ''
                    }
                ],
                'type': '選修',
                'class': ['四技奈米三甲', '四技奈米三乙'],
                'time': '二 1 2 3',
                'location': 'K401',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '20'
                    },
                    'class': {
                        'max': '55',
                        'current': '19'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '1'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D34D01',
                'name': '機械專業英文(此課不開)',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '王永鵬',
                        'mail': 'wyplsm@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技奈米三甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '0',
                        'current': '0'
                    },
                    'class': {
                        'max': '55',
                        'current': '0'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D00124',
                'name': '導師時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '吳忠春',
                        'mail': 'wcc@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米三乙'],
                'time': '四 4',
                'location': 'K411',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '46'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '46'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D00024',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '必修',
                'class': ['四技奈米三乙'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '46'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '46'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D31O02',
                'name': '工程‧倫理與社會',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '許藝菊',
                        'mail': 'yichu@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米三乙'],
                'time': '一 8 9',
                'location': 'E0505',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '53',
                        'current': '53'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '46'
                    },
                    'deptartment': {
                        'max': 'Unlimited',
                        'current': '7'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '14D06102',
                'name': '奈米材料學',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '王聖璋',
                        'mail': 'scwang@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米三乙'],
                'time': '四 8 9',
                'location': 'K411',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '48'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '46'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '2'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D34Z02',
                'name': '機械工程實驗',
                'credit': '2',
                'lecturer': [
                    {
                        'name': '魏慶華',
                        'mail': 'chingwei@stust.edu.tw'
                    },
                    {
                        'name': '陳冠仁',
                        'mail': 'kjchen@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米三乙'],
                'time': '四 1 2 3',
                'location': 'K402',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '48'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '46'
                    },
                    'deptartment': {
                        'max': '5',
                        'current': '2'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D1120I',
                'name': '外語能力檢定',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '李政源',
                        'mail': 'mtiger@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米四甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '38'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '38'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D15T1A',
                'name': '社團參與',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '王江舜',
                        'mail': 'randywang@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米四甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '41'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '41'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D25803',
                'name': '專業證照',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '王聖璋',
                        'mail': 'scwang@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米四甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '41'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '41'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D00125',
                'name': '導師時間',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '林育昇',
                        'mail': 'yushenglin@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米四甲'],
                'time': '一 4',
                'location': 'K402',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '41'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '41'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D00025',
                'name': '操行',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '未定',
                        'mail': ''
                    }
                ],
                'type': '必修',
                'class': ['四技奈米四甲'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '41'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '41'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '10D31901',
                'name': '模具加工與熱處理',
                'credit': '3',
                'lecturer': [
                    {
                        'name': '戴子堯',
                        'mail': 'tytai@stust.edu.tw'
                    }
                ],
                'type': '選修',
                'class': ['四技奈米四甲', '四技奈米四乙'],
                'time': '一 6 7 8',
                'location': 'K402',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '28'
                    },
                    'class': {
                        'max': '40',
                        'current': '19'
                    },
                    'deptartment': {
                        'max': '20',
                        'current': '9'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            },
            {
                'subcode': '01D1120J',
                'name': '外語能力檢定',
                'credit': '0',
                'lecturer': [
                    {
                        'name': '李政源',
                        'mail': 'mtiger@stust.edu.tw'
                    }
                ],
                'type': '必修',
                'class': ['四技奈米四乙'],
                'time': '',
                'location': '',
                'language': ['華語'],
                'capacity': {
                    'total': {
                        'max': '60',
                        'current': '40'
                    },
                    'class': {
                        'max': 'Unlimited',
                        'current': '40'
                    },
                    'deptartment': {
                        'max': '0',
                        'current': '0'
                    },
                    'external': {
                        'max': '0',
                        'current': '0'
                    }
                }
            }
        ]
    }
}
</script>
