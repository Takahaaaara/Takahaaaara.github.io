function togglePreview(button) {
  button.previousElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");
}
function togglePopUp() {
  const span = document.getElementById("span");
  span.classList.toggle("show");
}
