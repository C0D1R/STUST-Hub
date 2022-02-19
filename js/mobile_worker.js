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
    },
    AddMobileList = (data, filter) => {
        let html = '';
        for(let i = data.length-1, temp = null; i >= 0 && (temp = data[i]); i--) {
            if(!filter.test(temp.list_field_class)) {
                continue;
            }
            html += `
                    <div class="card">
                        <div class="card__container card__container--title">
                            <span class="fz1r">${temp.list_name}</span>
                            <span class="card__item__label">${temp.list_type}</span>
                        </div>
                        <div class="card__container card__container--content">
                            <div class="w55p media640_flex">
                                <div class="pb2 media640_w50p">
                                    <div class="fz75dr c999999">授課教師</div>
                                    <div class="fz875dr">${temp.list_lecturer}</div>
                                </div>
                                <div class="pb2 media640_w50p">
                                    <div class="fz75dr c999999">通識領域</div>
                                    <div class="fz875dr">${temp.list_field_class}</div>
                                </div>
                            </div>
                            <div class="w45p media640_flex">
                                <div class="pb2 media640_w50p">
                                    <div class="fz75dr c999999">學分</div>
                                    <div class="fz875dr">${temp.list_credit}</div>
                                </div>
                                <div class="pb2 media640_w50p">
                                    <div class="fz75dr c999999">上課時間</div>
                                    <div class="fz875dr">${temp.list_time}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        }
        return html;
    };
    self.addEventListener('message', event => {
        getJson(event.data[0])
            .then((data) => {
                self.postMessage(AddMobileList(data, new RegExp(event.data[1])));
            }, (error) => {
                console.error(error);
            })
            .finally(() => {
                self.close();
            });
    });
})();