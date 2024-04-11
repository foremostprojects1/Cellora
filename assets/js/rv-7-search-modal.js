(function ($) {
    "use strict";
    const rv7searchOpenBtn = document.querySelector(".rv-7-search-modal-open-btn");
    const rv7searchModal = document.querySelector(".rv-7-header-search-modal");
    const rv7searchCloseBtn = document.querySelector(".rv-7-search-modal-close-btn");

    rv7searchOpenBtn.addEventListener("click", () => {
        rv7searchModal.classList.add("active");
    })

    rv7searchCloseBtn.addEventListener("click", (e) => {
        rv7searchModal.classList.remove("active");
    })
})(jQuery);