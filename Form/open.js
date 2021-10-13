var collapse = document.querySelector("button.collapse");

function autoCollapse() {
    var change = document.querySelector("div.btnCollapse");
    if (
        JSON.parse(localStorage.getItem("collapse")) == false ||
        JSON.parse(localStorage.getItem("collapse")) == null
    ) {
        localStorage.setItem("collapse", "true");
        change.style.height = "20px";
        change.style.overflow = "hidden";
    } else {
        localStorage.setItem("collapse", "false");
        change.style.height = "";
        change.style.overflow = "unset";
    }
}

autoCollapse();
collapse.onclick = autoCollapse;
autoCollapse();