(function ($) {
    "use strict";
    const rv_2_menuBtn = document.querySelector(".rv-2-menu-btn");
    const rv_2_sideBar = document.querySelector(".rv-2-sidebar");

    rv_2_menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        rv_2_sideBar.classList.add("active");
    });

    document.addEventListener("click", (e) => {
        const isClickInsideMobileMenu = rv_2_sideBar.contains(e.target);

        if (!isClickInsideMobileMenu) {
            rv_2_sideBar.classList.remove("active");
        }
    });

})(jQuery);