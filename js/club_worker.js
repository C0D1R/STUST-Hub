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

    const isEmpty = obj => {
        return (typeof obj == undefined|| obj == null|| obj == '')? true: false;
    }

    const AddClubList = data => {
        let html = '';
        for(let i = 0, str = ''; i < data.length; i++) {
            html += `
                    <div class="list__item">
                        <div class="list__item__name">${data[i].name}</div>
                        <div class="list__item__intro">${data[i].intro}</div>
                        <div class="list__item__link">
                    `;
            for(let j = 0, temp = null; j < data[i].link.length && (temp = data[i].link[j]); j++) {
                if(!isEmpty(temp)) {
                    str = (/instagram/i).test(temp) ? 'ig' :
                          (/facebook/i).test(temp)  ? 'fb' :
                          (/line/i).test(temp)      ? 'line' : 'link';
                    path = `img/${str}3.png`;
                    html += `
                                <a href="${temp}">
                                    <img src="${path}" alt="${data[i].name}的${str}連結"
                                         class="list__item__link__img">
                                </a>
                            `;
                }
            }
            html += `
                        </div>
                    </div>
                    `;
        }
        return html;
    }

    self.addEventListener('message', event => {
        getJson(event.data)
            .then((data) => {
                self.postMessage(AddClubList(data));
            }, (error) => {
                console.error(error);
            })
            .finally(() => {
                self.close();
            });
    });
})();