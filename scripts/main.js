function toggleSideNav(item) {
    let width = document.getElementById("SideNav").style.width;
    let labels = Array.from(document.getElementsByClassName("nav-label"));
    let isClosed = width == "" || width == "64px";
    
    if (isClosed == true) {
        document.getElementById("SideNav").style.width = "200px";
        document.getElementsByTagName('header')[0].style.paddingLeft = "152px";
        document.getElementById("ToggleIcon").textContent = "Close";

        labels.forEach(element => {
            element.classList.remove("nav-label-hid");
        });

    } else {
        document.getElementById("SideNav").style.width = "64px";
        document.getElementsByTagName('header')[0].style.paddingLeft = "16px";
        document.getElementById("ToggleIcon").textContent = "Menu";
        
        labels.forEach(element => {
            element.classList.add("nav-label-hid");
        });
    }
}
