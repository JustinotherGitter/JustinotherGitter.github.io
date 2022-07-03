function toggleSideNav(item) {
    let width = document.getElementById("SideNav").style.width;
    let labels = Array.from(document.getElementsByClassName("nav-label"));
    let isClosed = width == "" || width == "64px";
    
    if (isClosed == true) {
        document.getElementById("SideNav").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
        document.getElementById("toggle-icon").textContent = "Close";

        labels.forEach(element => {
            console.log(element);
            element.classList.remove("label-transparent");
        });

    } else {
        document.getElementById("SideNav").style.width = "64px";
        document.getElementById("main").style.marginLeft = "64px";
        document.getElementById("toggle-icon").textContent = "Menu";
        
        labels.forEach(element => {
            element.classList.add("label-transparent");
        });
    }
}
