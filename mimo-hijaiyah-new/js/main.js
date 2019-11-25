// init sidenav ketika content berhasil di load 
document.addEventListener('DOMContentLoaded', function () {
    var sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav);

    // menangkap huruf kemudian play bunyi
    const a = document.querySelector('.a');
    a.addEventListener('click', function () {
        const bunyi = a.children[1];
        bunyi.play();
    });

    const ba = document.querySelector('.ba');
    ba.addEventListener('click', function () {
        const bunyi = ba.children[1];
        bunyi.play();
    });

    const ta = document.querySelector('.ta');
    ta.addEventListener('click', function () {
        const bunyi = ta.children[1];
        bunyi.play();
    });

    const tsa = document.querySelector('.tsa');
    tsa.addEventListener('click', function () {
        const bunyi = tsa.children[1];
        bunyi.play();
    });

    const ja = document.querySelector('.ja');
    ja.addEventListener('click', function () {
        const bunyi = ja.children[1];
        bunyi.play();
    });

    const ha = document.querySelector('.ha');
    ha.addEventListener('click', function () {
        const bunyi = ha.children[1];
        bunyi.play();
    });

    const kha = document.querySelector('.kha');
    kha.addEventListener('click', function () {
        const bunyi = kha.children[1];
        bunyi.play();
    });

    const da = document.querySelector('.da');
    da.addEventListener('click', function () {
        const bunyi = da.children[1];
        bunyi.play();
    });


});