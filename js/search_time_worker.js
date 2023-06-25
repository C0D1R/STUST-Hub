(() => {
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
                    <div class="card card__content--mobiles-hide">
                        <div class="card__title">
                            <div class="card__title__name">課程名稱</div>
                            <div class="card__title__type">課程類別</div>
                        </div>
                        <div class="card__content card__content--sm">
                            <div class="card__content__item card__content__item--lg card__content__lecturer">授課教師</div>
                            <div class="card__content__item card__content__item--sm card__content__credit">學分</div>
                        </div>
                        <div class="card__content card__content--lg">
                            <div class="card__content__item card__content__item--lg card__content__class-field">通識領域／班級</div>
                            <div class="card__content__item card__content__item--sm card__content__time">上課時間</div>
                        </div>
                    </div>
                   `;
        for(let i = 0, temp = null; i < data.length-1 && (temp = data[i]); i++) {
            if(filter.test(temp.filter)) {
                html += `
                        <div class="card">
                            <div class="card__title">
                                <div class="card__title__name">${temp.name}</div>
                                <div class="card__title__type">${temp.type}</div>
                            </div>
                            <div class="card__content card__content--desktops-hide">
                                <div class="card__content__thes card__content__item--lg">授課教師</div>
                                <div class="card__content__thes card__content__item--sm">學分</div>
                            </div>
                            <div class="card__content card__content--sm">
                                <div class="card__content__item card__content__item--lg card__content__lecturer">${temp.lecturer}</div>
                                <div class="card__content__item card__content__item--sm card__content__credit">${temp.credit}</div>
                            </div>
                            <div class="card__content card__content--desktops-hide">
                                <div class="card__content__thes card__content__item--lg">通識領域／班級</div>
                                <div class="card__content__thes card__content__item--sm">上課時間</div>
                            </div>
                            <div class="card__content card__content--lg">
                                <div class="card__content__item card__content__item--lg card__content__class-field">${temp.class_field}</div>
                                <div class="card__content__item card__content__item--sm card__content__time">${temp.time}</div>
                            </div>
                        </div>
                        `;
            }
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