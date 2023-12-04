//DOM => document objext model
function init() {
 const hamburger = document.querySelector(".hamburger");
const sidebarCloseButton = document.querySelector(".close-button");
const sidebarContainer = document.querySelector(".sidebar-container");


const openSidebar = {} => {
    sidebarContainer.classList.add ("show-sidebar");
};

const closeSidebar = {} => {
    sidebarContainer.classList.remove("show-sidebar");
};

hamburger.addEventListener("click", openSidebar);
sidebarCloseButton.addEventListener("click", closeSidebar);
}

init();