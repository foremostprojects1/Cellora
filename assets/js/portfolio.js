// INDEX-5 PORTFOLIOS
const portfolioContainer = document.querySelector(".rv-5-portfolios");
const portfolios = document.querySelectorAll(".rv-5-portfolio");
portfolioContainer.style.backgroundImage = `url(${portfolios[0].querySelector(".rv-5-portfolio__img img").getAttribute("src")})`;

function handleMouseOver() {
    portfolioContainer.style.backgroundImage = `url(${this.querySelector(".rv-5-portfolio__img img").getAttribute("src")})`;
}

portfolios.forEach(portfolio => {
    portfolio.addEventListener("mouseover", handleMouseOver);
});