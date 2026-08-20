const cards = document.querySelectorAll(".creature");
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("image-modal-img");
const modalCaption = document.getElementById("image-modal-caption");
const closeButton = document.getElementById("image-modal-close");

function openModal(imageSource, imageAlt) {
	modalImage.src = imageSource;
	modalImage.alt = imageAlt;
	modalCaption.textContent = imageAlt;

	modal.classList.add("active");
	modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
	modal.classList.remove("active");
	modal.setAttribute("aria-hidden", "true");
	modalImage.src = "";
}

cards.forEach((card) => {
	card.tabIndex = 0;

	card.addEventListener("click", () => {
		const image = card.querySelector(".creature-image img");

		if (!image) {
			return;
		}

		openModal(image.src, image.alt || "Criatura");
	});

	card.addEventListener("keydown", (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			card.click();
		}
	});
});

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
	if (event.target === modal) {
		closeModal();
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && modal.classList.contains("active")) {
		closeModal();
	}
});
