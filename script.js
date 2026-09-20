window.openPortfolio = function () {
    document.getElementById("portfolioModal").style.display = "flex";
};

window.closePortfolio = function () {
    document.getElementById("portfolioModal").style.display = "none";
};

document.querySelector(".portfolio-card").addEventListener("click", openPortfolio);

document.querySelector(".portfolio-modal-close").addEventListener("click", closePortfolio);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closePortfolio();
    }
});