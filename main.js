// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const button = document.getElementById("theme-switch-button");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        if (button) button.textContent = "light";
    } else {
        if (button) button.textContent = "dark";
    }
});

function themeSwitch() {
    const element = document.body;
    const button = document.getElementById("theme-switch-button");
    const isDark = element.classList.toggle("dark");
    // Save theme to localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (button) button.textContent = isDark ? "light" : "dark";
}


function openPost(event, postName) {
    var i, blogpreview, bloglink;

    blogpreview = document.getElementsByClassName("blogpreview");
    for (i = 0; i < blogpreview.length; i++) {
        blogpreview[i].style.display = "none";
    }

    bloglink = document.getElementsByClassName("bloglink");
    for (i = 0; i < bloglink.length; i++) {
        bloglink[i].classList.remove("active");
    }

    document.getElementById(postName).style.display = "block";
    event.currentTarget.classList.add("active");
}

