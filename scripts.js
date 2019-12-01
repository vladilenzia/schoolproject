document.addEventListener('DOMContentLoaded', () => {
    var bg1 = document.querySelector('.bg2');
    var bg2 = document.querySelector('.bg3');
    var body = document.querySelector('body');
    var toggleR = document.querySelector('.visible');
    var drops = document.querySelector('.hide');
    console.log(drops);

    toggleR.onclick = function() {
        if (drops.classList.contains('hide')) {
            drops.classList.remove('hide');
        } else {
            drops.classList.add("hide");
        }
    }

    body.addEventListener('mousemove', function(e) {
        let x = e.clientX;
        let y = e.clientY;
        bg1.style.transform = 'translateX(' + x / 60 + 'px' + ')';
        bg2.style.transform = 'translateY(' + y / 30 + 'px' + ')';
    });
    var oldScrollY = 0;
    var header = document.querySelector("header");

    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        var dY = scrolled - oldScrollY;

        if (dY <= 0) {
            header.className = "visible0";
        } else {
            header.className = "visible1";
        }
        oldScrollY = scrolled;
    };


});