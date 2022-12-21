// returns nodelist of all input elements
const inputs = document.querySelectorAll(".controls input");

function updateInput() {
    // returns data-sizing attribute value which is px
    const suffix = this.dataset.sizing || "";
    // overrides the initial value set on external css
    // sets style property internally
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);

}
// for each value of inputs nodelist, it will call a function
// where a function includes event handler that when mousemove event for all input triggers, it will call another function
inputs.forEach((input) => {input.addEventListener('mousemove', updateInput)});



