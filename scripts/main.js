function toggleSideNav(item) {
    item.classList.toggle("change");

    changeNavWidth();
}

function changeNavWidth() {
    isClosed = document.getElementById("SideNav").style.width == "52px";
    
    if (isClosed == true) {
        document.getElementById("SideNav").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
    } else {
        document.getElementById("SideNav").style.width = "52px";
        document.getElementById("main").style.marginLeft = "52px";
    }
}