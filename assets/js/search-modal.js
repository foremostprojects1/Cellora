(function ($) {
    "use strict";
    const searchOpenBtn = document.querySelector(".rv-search-modal-open-btn");
    const searchModal = document.querySelector(".rv-search-modal");
    const searchCloseBtn = document.querySelector(".rv-search-modal-close-btn");

    searchOpenBtn.addEventListener("click", () => {
        searchModal.classList.add("active");
    })

    searchCloseBtn.addEventListener("click", (e) => {
        searchModal.classList.remove("active");
    })
})(jQuery);