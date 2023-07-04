(() =>{
    const getJson = url => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', url);
            request.onload = () => {
                request.status == 200 ? resolve(JSON.parse(request.responseText))
                                      : reject(new Error(request));
            };
            request.send(null);
        });
    }
    const AddList = (data, filter) => {
        let html = `
                    <div class="card card--hide-moblie">
                        <div class="card__name">課程名稱</div>
                        <div class="card__type">課程類別</div>
                        <div class="card__lecturer">授課教師</div>
                        <div class="card__credit">學分</div>
                        <div class="card__class-field">通識領域／班級</div>
                        <div class="card__time">上課時間</div>
                    </div>
                   `;
        for(let i = data.length-1, temp = null; i >= 0 && (temp = data[i]); i--) {
            if(!filter.test(temp.list_field_class)) {
                continue;
            }
            html += `
                    <div class="card">
                        <div class="card__name">${temp.name}</div>
                        <div class="card__type">
                            <div class="card__type--inside">${temp.type}</div>
                        </div>
                        <div class="card__item--lg card__caption">授課教師</div>
                        <div class="card__item--sm card__caption">學分</div>
                        <div class="card__item--lg card__content card__lecturer">${temp.lecturer}</div>
                        <div class="card__item--sm card__content card__credit">${temp.credit}</div>
                        <div class="card__item--lg card__caption">通識領域／班級</div>
                        <div class="card__item--sm card__caption">上課時間</div>
                        <div class="card__item--lg card__content card__class-field">${temp.class_field}</div>
                        <div class="card__item--sm card__content card__time">${temp.time}</div>
                    </div>
                    `;
        }
        return html;
    }
    self.addEventListener('message', event => {
        getJson(event.data[0])
            .then((data) => {
                self.postMessage(AddList(data, new RegExp(event.data[1])));
            }, (error) => {
                console.error(error);
            })
            .finally(() => {
                self.close();
            });
    });
})();