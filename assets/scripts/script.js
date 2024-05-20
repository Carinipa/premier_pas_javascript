
//Function qui permet d'ajouter des span en fonction du nombre d'léméent dans le tableau
function addDot() {
	let divDot = document.querySelector(".dots")

	for (const slide in slides) {
		let inputDot = document.createElement("span")
		inputDot.classList.add("dot")
		inputDot.id = slide
		if (slide == 0) {
			inputDot.classList.add("dot_selected")
		}
		divDot.appendChild(inputDot)
	}
}

//Function qui permet le changement des slides
//@params slideIndex = integer (l'index du tableau)
function changeSlide(slideIndex) {
	let bannerImg = document.querySelector(".banner-img")
	let bannerP = document.querySelector("#banner p")
	let inputDot = document.getElementById(slideIndex)

	bannerImg.src = slides[slideIndex].image
	bannerP.innerHTML = slides[slideIndex].tagLine
	document.querySelector(".dot_selected").classList.remove("dot_selected")
	inputDot.classList.add("dot_selected")
}

//Function qui permet le changement des slides au clic sur les flêches droite et gauche
function displaySlides() {
	let arrowRight = document.querySelector(".arrow_right")
	let arrowLeft = document.querySelector(".arrow_left")
	let slideIndex = 0

	arrowRight.addEventListener("click", () => {
		slideIndex++
		if (slides.length - 1 < slideIndex) {
			slideIndex = 0
		}
		changeSlide(slideIndex)
	})

	arrowLeft.addEventListener("click", () => {
		slideIndex--
		if (slideIndex < 0) {
			slideIndex = slides.length - 1
		}
		changeSlide(slideIndex)
	})
}




