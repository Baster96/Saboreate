document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    let currentPage = window.location.pathname.split("/").pop().toLowerCase();
    if (currentPage === "" || currentPage === "index.html") {
        currentPage = "index.html";
    }
    navLinks.forEach(link => {
        let linkHref = link.getAttribute("href");
        let normalizedHref = linkHref.replace("tabs/", "").toLowerCase();

        if (normalizedHref === currentPage) {
            console.log("✅ Activando enlace:", linkHref);
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
