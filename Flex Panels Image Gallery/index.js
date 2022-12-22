const panels = document.querySelectorAll(".panel");

function togglePanel(){
    this.classList.toggle("open");
    this.classList.toggle("open-active");
}

panels.forEach(panel => panel.addEventListener('click', togglePanel));