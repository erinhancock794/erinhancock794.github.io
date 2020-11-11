function toggleMenu() {
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("navList").classList.toggle("hide");
    document.getElementById("navList").classList.toggle("open");
}

var x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu