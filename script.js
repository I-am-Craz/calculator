let toggle = document.getElementById("toggle");
const display = document.getElementById("display");
const btn = document.getElementsByTagName("button");
const equal = document.getElementById("equal");
const clearBtn = btn[0];
const backStepBtn  = btn[18];
for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", () => {
        display.value += btn[i].value;
    });
}
clearBtn.addEventListener("click", () => {
    display.value = " ";
});
backStepBtn.addEventListener("click", () => {
    display.value = display.value.slice(0, display.value.length - 1);
});
equal.addEventListener("click", () => {
    display.value = eval(display.value);
});
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    document.getElementById("body").classList.toggle("light");
    document.getElementById("wrapper").classList.toggle("light");
    for(let i = 0; i < btn.length; i++){
        btn[i].classList.toggle("light");
    }
    document.getElementById("display").classList.toggle("light");
})