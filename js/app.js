(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    let price = document.querySelector(".price__count");
    let count = 0;
    price.innerHTML = count;
    const checkboxes = document.querySelectorAll(".price__checkbox");
    function updateSum() {
        let total = 0;
        checkboxes.forEach((checkbox => {
            if (checkbox.checked) total += parseInt(checkbox.dataset.value);
        }));
        count = total;
        price.innerHTML = count;
    }
    checkboxes.forEach((checkbox => {
        checkbox.addEventListener("change", updateSum);
    }));
    function clearCheckBoxes() {
        checkboxes.forEach((checkbox => {
            if (checkbox.checked) checkbox.checked = false;
        }));
    }
    const clear = document.querySelector(".price__clear");
    clear.addEventListener("click", (function() {
        clearCheckBoxes();
        count = 0;
        price.innerHTML = count;
    }));
    document.querySelectorAll(".faq__item").forEach((item => {
        item.addEventListener("click", (() => {
            if (item.classList.contains("active")) item.classList.remove("active"); else {
                document.querySelectorAll(".faq__item").forEach((i => i.classList.remove("active")));
                item.classList.add("active");
            }
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();