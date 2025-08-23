
function themeSwitch() {
    const element = document.body;
    const button = document.getElementById("theme-switch-button");
    element.classList.toggle("dark");
}

function openPost(event, postName) {
    var i, blogpreview, bloglink;

    blogpreview = document.getElementsByClassName("blogpreview");
    for (i = 0; i < blogpreview.length; i++) {
        blogpreview[i].style.display = "none";
    }

    bloglink = document.getElementsByClassName("bloglink");
    for (i = 0; i < bloglink.length; i++) {
        bloglink[i].className = bloglink[i].className.replace(" active", "");
    }

    document.getElementById(postName).style.display = "block";
    event.currentTarget.classList.add("active")
}

