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
    AddDesktopList = (data, filter) => {
        let html = '';
        for(let i = data.length-1, temp = null; i >= 0 && (temp = data[i]); i--) {
            if(!filter.test(temp.list_field_class)) {
                continue;
            }
            html += `
                    <div class="list__container">
                        <span class="list__item list__item--name">${temp.list_name}</span>
                        <span class="list__item list__item--credit">${temp.list_credit}</span>
                        <span class="list__item list__item--lecturer">${temp.list_lecturer}</span>
                        <span class="list__item list__item--type">${temp.list_type}</span>
                        <span class="list__item list__item--fieldclass">${temp.list_field_class}</span>
                        <span class="list__item list__item--time">${temp.list_time}</span>
                    </div>
                    `;
        }
        return html;
    };
    self.addEventListener('message', event => {
        getJson(event.data[0])
            .then((data) => {
                self.postMessage(AddDesktopList(data, new RegExp(event.data[1])));
            }, (error) => {
                console.error(error);
            })
            .finally(() => {
                self.close();
            });
    });
})();