function stickHeader() {
	window.addEventListener("scroll", () => {
		const header = document.querySelector("header");
		header.classList.toggle("sticky", window.scrollY > 0);
		const video = document.querySelector(".testo__video");
	});
}
stickHeader();

document.addEventListener("click", documentClick);

function documentClick(e) {
	const tragetItem = e.target;
	if (tragetItem.closest(".icon-menu")) {
		document.documentElement.classList.toggle("menu-open");
	}
}
