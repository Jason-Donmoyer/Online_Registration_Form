
let html = document.getElementById("html-format");
let text = document.getElementById("text-format");

text.addEventListener("click", () => {
	html.checked = false;
});

html.addEventListener("click", () => {
	text.checked = false;
});

