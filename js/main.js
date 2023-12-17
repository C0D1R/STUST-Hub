(() => {
    window.addEventListener('load', () => {
        if(sessionStorage.getItem('CourseList')) {
            document.getElementById('list').innerHTML = sessionStorage.getItem('CourseList');
        }
    });
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const getRadioBoxValue = (RadioValue) => {
        return Array.from(RadioValue).find(radio => radio.checked).value;
    }
    const getCheckBoxValue = (CheckBoxValue) => {
        return Array.from(CheckBoxValue)
                    .filter(checkbox => checkbox.checked)
                    .map(checkbox => checkbox.value);
    }
    const getGeneralField = (dept) => {
        const scienceDepts = ['ee', 'mech', 'eecs', 'oe', 'csie', 'chem', 'bio', 'ic', 'vc', 'mes', 'cpd', 'pmi'];
        const humanitiesDepts = ['imi', 'ib', 'fin', 'ba', 'mis', 'accinfo', 'leisure', 'mim', 'hm', 'english', 'japan', 'childcare', 'ss'];
        const type = {
            science: ['humanities_and_arts', 'social_science', 'comprehensive_practice'],
            humanities: ['humanities_and_arts', 'natural_science', 'comprehensive_practice'],
            all: ['humanities_and_arts', 'social_science', 'natural_science', 'comprehensive_practice']
        };
        return scienceDepts.includes(dept)    ? type.science :
               humanitiesDepts.includes(dept) ? type.humanities : type.all;
    }
    const AddListTitle = (html) => {
        html = `
               <div class="card card--hide-moblie">
                   <div class="card__name">課程名稱</div>
                   <div class="card__type">課程類別</div>
                   <div class="card__lecturer">授課教師</div>
                   <div class="card__credit">學分</div>
                   <div class="card__class-field">通識領域／班級</div>
                   <div class="card__time">上課時間</div>
               </div>
               ` + html;
        return html
    }
    const createWorker = (data) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker('./js/search_worker.js');
            worker.postMessage(data);
            worker.onmessage = event => {
                resolve(event.data);
            };
            worker.onerror = event => {
                reject(event.error);
            };
        });
    }

    const list = $('#list');
    const btn = $('#btn');

    const main = () => {
        let promises = [];

        const options = {
            semester: $$('[name="semester"]'),
            schoolSystem: $$('[name="schoolsystem"]'),
            department: $$('[name="department"]'),
            courseType: $$('[name="coursetype"]'),
            grade: $$('[name="grade"]'),
            time: $$('[name="time"]'),
        };

        const weekMaping = {
            'M': '一',
            'T': '二',
            'W': '三',
            'R': '四',
            'F': '五',
            'S': '六',
            'U': '日',
        };

        const semester = getRadioBoxValue(options.semester);
        const schoolsystem = getRadioBoxValue(options.schoolSystem);
        const department =  getRadioBoxValue(options.department);
        const coursetype = getCheckBoxValue(options.courseType);
        const grade = `${getCheckBoxValue(options.grade)
                       .join().replace(/,/g, '(?!技)|')}(?!技)|領域`;
        const time = getCheckBoxValue(options.time)
                     .map((option) => option.replace(/([A-Z])(\d)/,
                        (match, p1, p2) =>
                            `${weekMaping[p1]}[\\d\\s]*${p2}`))
                     .join().replace(/,/g, '|');
        console.log(time);

        for(let i = coursetype.length-1, url = ''; i >= 0; i--) {
            if(coursetype[i] != 'general_elective') {
                url = `../data/${semester}/${semester}_${schoolsystem}_${department}_${coursetype[i]}.json`;
                promises.push(createWorker([url, grade, time]));
            }
            else {
                const gencourse = getGeneralField(department);
                for(let j = gencourse.length-1; j >= 0; j--) {
                    url = `../data/${semester}/${semester}_${gencourse[j]}.json`;
                    promises.push(createWorker([url, grade, time]));
                }
            }
        }
        Promise.all(promises)
            .then((data) => {
                list.innerHTML = AddListTitle(data.join().replace(/,/g, ''));
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