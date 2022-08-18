let count = 0;

const plusBtn = document.getElementById("plus-btn");
plusBtn.addEventListener("click", function () {
    count++;
    document.getElementById("count").innerText = count;
})

const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener("click", function () {
    count--;
    document.getElementById("count").innerText = count;
})