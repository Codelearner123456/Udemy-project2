const myBtn = document.getElementById("myBtn");
const mypopover = document.getElementById("myPopover");
const closeBtn = document.getElementById("closeBtn");

myBtn.addEventListener("click", function () {

    mypopover.classList.add("active");

});

closeBtn.addEventListener("click", function () {

    mypopover.classList.remove("active");

});