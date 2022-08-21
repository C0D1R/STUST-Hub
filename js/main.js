(() => {
    window.addEventListener('load', () => {
        if(sessionStorage.getItem('CourseList')) {
            document.getElementById('list').innerHTML = sessionStorage.getItem('CourseList');
        }
    });
    const list = document.getElementById('list'),
          btn = document.getElementById('btn'),
          isDesktop = screen.width >= 1024 ? true : false,
    getRadioBoxValue = RadioBoxValue => {
        for(let i = RadioBoxValue.length-1; i >= 0; i--) {
            if(RadioBoxValue[i].checked) {
                return RadioBoxValue[i].value;
            }
        }
    },
    getCheckBoxValue = CheckBoxValue => {
        let CheckedValue = [];
        for(let i = CheckBoxValue.length-1, j = 0; i >= 0; i--) {
            if(CheckBoxValue[i].checked) {
                CheckedValue[j++] = CheckBoxValue[i].value;
            }
        }
        return CheckedValue;
    },
    getGeneralField = (dept) => {
        switch(dept) {
            case 'ee':
            case 'mech':
            case 'eecs':
            case 'oe':
            case 'csie':
            case 'chem':
            case 'bio':
            case 'vc':
            case 'ic':
            case 'mes':
            case 'cpd':
            case 'pmi':
                return ['humanities_and_arts', 'social_science', 'comprehensive_practice'];
            case 'imi':
            case 'ib':
            case 'accinfo':
            case 'ba':
            case 'fin':
            case 'leisure':
            case 'mim':
            case 'mis':
            case 'hm':
            case 'english':
            case 'japan':
            case 'childcare':
            case 'ss':
                return ['humanities_and_arts', 'natural_science', 'comprehensive_practice'];
            default:
                return ['humanities_and_arts', 'social_science', 'natural_science', 'comprehensive_practice'];
        }
    },
    createWorker = data => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(isDesktop ? './js/desktop_worker.js'
                                                : './js/mobile_worker.js');
            worker.postMessage(data);
            worker.onmessage = event => {
                resolve(event.data);
            };
            worker.onerror = event => {
                reject(event.error);
            };
        });
    },
    AddListThead = html => {
        html = `<div class="list__container">
                    <span class="list__item list__item--name">課程名稱</span>
                    <span class="list__item list__item--credit">學分</span>
                    <span class="list__item list__item--lecturer">任課教師</span>
                    <span class="list__item list__item--type">課程類別</span>
                    <span class="list__item list__item--fieldclass">班級／領域</span>
                    <span class="list__item list__item--time">時間</span>
                </div>
                ` + html;
        return html;
    },
    main = () => {
        let promises = [];
        const semester = getRadioBoxValue(document.getElementsByName('semester')),
              schoolsystem = getRadioBoxValue(document.getElementsByName('schoolsystem')),
              department =  getRadioBoxValue(document.getElementsByName('department')),
              coursetype = getCheckBoxValue(document.getElementsByName('coursetype')),
              grade = `${getCheckBoxValue(document.getElementsByName('grade'))
                       .join().replace(/,/g, '(?!技)|')}(?!技)|領域`;
        for(let i = coursetype.length-1, url = ''; i >= 0; i--) {
            if(coursetype[i] != 'general_elective') {
                url = `../data/${semester}_${schoolsystem}_${department}_${coursetype[i]}.json`;
                promises.push(createWorker([url, grade]));
            }
            else {
                const gencourse = getGeneralField(department);
                for(let j = gencourse.length-1; j >= 0; j--) {
                    url = `../data/${semester}/${semester}_${gencourse[j]}.json`;
                    promises.push(createWorker([url, grade]));
                }
            }
        }
        Promise.all(promises)
            .then((data) => {
                list.innerHTML = isDesktop ? AddListThead(data.join().replace(/,/g, ''))
                                           : data.join().replace(/,/g, '');
            }, (error) => {
                console.error(error);
            })
            .finally(() => {
                sessionStorage.setItem('CourseList', list.innerHTML);
            });
    };
    btn.addEventListener('click', () => {
        sessionStorage.clear();
        return main();
    });
})();