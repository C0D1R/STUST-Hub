(() => {
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');

    const navHTML = `
                    <a class="nav__link nav__link--state" href="index.html">首頁</a>
                    <a class="nav__link nav__link--state" href="search.html">課程查詢</a>
                    <a class="nav__link nav__link--state" href="search_time.html">列表查詢</a>
                    <a class="nav__link nav__link--state" href="club.html">社團一覽</a>
                    <div class="nav__win">
                        <a class="nav__link nav__link--state" href="#">關於作者</a>
                    </div>
                    `;
    const footerHTML = 'Copyright © 2021 C0D1R. All Rights Reserved.';

    nav.innerHTML = navHTML;
    footer.innerHTML = footerHTML;
})();