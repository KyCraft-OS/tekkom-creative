window.openPortfolio = function () {
    document.getElementById("portfolioModal").style.display = "flex";
};

window.closePortfolio = function () {
    document.getElementById("portfolioModal").style.display = "none";
};

window.openRailsModal = function () {
    document.getElementById("railsModal").style.display = "flex";
};

window.closeRailsModal = function () {
    document.getElementById("railsModal").style.display = "none";
};


// Web Design
document.querySelectorAll(".portfolio-card")[0].addEventListener("click", openPortfolio);


// RAILS / Microcontroller
document.querySelectorAll(".portfolio-card")[1].addEventListener("click", openRailsModal);


// Tutup modal dengan tombol Escape
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closePortfolio();
        closeRailsModal();
    }
});