const sideMenu = document.querySelector("aside");
const menuBTN = document.querySelector("#menu-btn");
const closeBTN = document.querySelector("#close-btn");
const toggleSidebarBtn = document.getElementById('toggle-sidebar-btn');

// Function to toggle sidebar visibility
function toggleSidebar() {
    if (sideMenu.style.display === 'none' || sideMenu.style.display === '') {
        sideMenu.style.display = 'block';
    } else {
        sideMenu.style.display = 'none';
    }
}

// Event listeners
menuBTN.addEventListener("click", () => {
    sideMenu.style.display = "block";
});

closeBTN.addEventListener("click", () => {
    sideMenu.style.display = "none";
});

toggleSidebarBtn.addEventListener('click', toggleSidebar);
