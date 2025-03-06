// Open Modal
function openModal(projectName) {
    document.getElementById("modal-text").textContent = projectName;
    document.getElementById("modal").style.display = "flex";
}

// Close Modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
