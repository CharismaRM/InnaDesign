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
    const priceCount = document.querySelector(".price__count");
    let totalSum = 0;
    priceCount.innerHTML = totalSum;
    const checkboxes = document.querySelectorAll(".price__checkbox");
    const clearBtn = document.querySelector(".price__clear");
    function updateSum() {
        let sum = 0;
        checkboxes.forEach((cb => {
            if (cb.checked) sum += parseInt(cb.dataset.value);
        }));
        totalSum = sum;
        priceCount.innerHTML = totalSum;
    }
    checkboxes.forEach((cb => {
        cb.addEventListener("change", updateSum);
    }));
    clearBtn.addEventListener("click", (() => {
        checkboxes.forEach((cb => cb.checked = false));
        updateSum();
    }));
    document.querySelectorAll(".question-icon").forEach((icon => {
        const tooltipId = icon.getAttribute("data-tooltip-id");
        const tooltip = document.getElementById(tooltipId);
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) icon.addEventListener("click", (() => {
            document.querySelectorAll(".tooltip").forEach((t => {
                t.style.opacity = "0";
                t.style.visibility = "hidden";
                t.style.transform = "translateX(-50%) translateY(-8px)";
            }));
            if (tooltip.style.opacity !== "1") {
                tooltip.style.opacity = "1";
                tooltip.style.visibility = "visible";
                tooltip.style.transform = "translateX(-50%) translateY(0)";
            } else {
                tooltip.style.opacity = "0";
                tooltip.style.visibility = "hidden";
                tooltip.style.transform = "translateX(-50%) translateY(-8px)";
            }
        }));
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