(() => {
    const dataUrl = '../data/111-2/111-2_all_course.json'
    const btn = document.querySelector('#btn__menu');
    const list = document.querySelector('#list');

    const CreateWorker = data => {
        return new Promise((resolve, reject) => {
            const worker = new Worker('./js/search_time_worker.js');
            worker.postMessage(data);
            worker.onmessage = event => {
                resolve(event.data);
            };
            worker.onerror = event => {
                reject(event.error);
            };
        });
    }
    const getCheckBoxValue = CheckBoxValue => {
        let CheckedValue = [];
        for(let i = 0, j = 0; i < CheckBoxValue.length; i++) {
            if(CheckBoxValue[i].checked) {
                CheckedValue[j++] = CheckBoxValue[i].value;
            }
        }
        return CheckedValue;
    }
    const setCheckBoxAllNo = CheckBox => {
        for(let i = 0; i < CheckBox.length; i++) {
            if(CheckBox[i].checked) {
                CheckBox[i].checked = false;
            }
        }
        return CheckBox;
    }
    const setCheckBoxAllYesOrNo = CheckBox => {
        let AllYes = true;
        for(let i = 0; i < CheckBox.length; i++) {
            if(CheckBox[i].checked == false) {
                CheckBox[i].checked = true;
                AllYes = false;
            }
        }
        return AllYes? setCheckBoxAllNo(CheckBox): CheckBox;
    }
    const isEmpty = obj => {
        return (typeof obj == undefined|| obj == null|| obj == '')? true: false;
    }
    
    btn.addEventListener('click', e => {
        if(e.target.tagName != 'INPUT') {
            return;
        }

        const checkbox = btn.querySelectorAll('input[name="time"]');
        if(e.target.name == 'day') {
            const checkboxSheet = e.target.parentElement.parentElement.querySelectorAll('input[name="time"]');
            setCheckBoxAllYesOrNo(checkboxSheet);
        }
        else if(e.target.name == 'period') {
            const checkboxSheet = btn.querySelectorAll(`#btn__menu > div > label:nth-child(${Number(e.target.defaultValue)+1}) > input[name="time"]`);
            setCheckBoxAllYesOrNo(checkboxSheet);
        }
        else if(e.target.name == 'setall') {
            setCheckBoxAllYesOrNo(checkbox);
        }

        const filter_time = getCheckBoxValue(checkbox).join().replace(/,/g, '|');
        if(isEmpty(filter_time)) {
            list.innerHTML = '';
        }
        else {
            CreateWorker([dataUrl, filter_time])
                .then((data) => {
                    list.innerHTML = data;
                }, (error) => {
                    console.error(error);
                });
        }
    });
})();