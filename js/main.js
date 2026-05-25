(function () {
    'use strict';

    var yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }

    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.primary-nav');

    if (toggle && nav) {
        var setOpen = function (open) {
            nav.classList.toggle('is-open', open);
            toggle.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        };

        toggle.addEventListener('click', function () {
            setOpen(!nav.classList.contains('is-open'));
        });

        nav.addEventListener('click', function (e) {
            if (e.target.tagName === 'A' && nav.classList.contains('is-open')) {
                setOpen(false);
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && nav.classList.contains('is-open')) {
                setOpen(false);
                toggle.focus();
            }
        });
    }
})();
