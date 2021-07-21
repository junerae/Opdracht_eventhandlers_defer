let btn = document.querySelector('#mybutton')


btn.addEventListener('click', function (e) {
    alert("button clicked");
})


let btn2 = document.querySelector('#buttonbackground')

btn2.addEventListener('click', function (changeColor) {
    const parent = changeColor.target.parentElement;
    parent.className = "red-background";
})


// btn2.addEventListener('click', function (changeColor) {
//     const parent = changeColor.target.parentElement;
//     parent.classList.toggle = ("red-background");
// })
