(() => {
    const dataUrl = '../data/club/club.json';
    const list = document.getElementById('list');
    const CreateWorker = data => {
        return new Promise((resolve, reject) => {
            const worker = new Worker('club_worker.js');
            worker.postMessage(data);
            worker.onmessage = event => {
                resolve(event.data);
            };
            worker.onerror = event => {
                reject(event.error);
            };
        });
    }
    
    window.addEventListener('load', () => {
        if(sessionStorage.getItem('ClubList')) {
            list.innerHTML = sessionStorage.getItem('ClubList');
        }
        else {
            CreateWorker(dataUrl)
                .then((data) => {
                    list.innerHTML = data;
                }, (error) => {
                    console.error(error);
                })
                .finally(() => {
                    sessionStorage.setItem('ClubList', list.innerHTML);
                });
        }
    });
})();