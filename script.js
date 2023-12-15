document.addEventListener("DOMContentLoaded", function() {
    const acrdn1 = document.getElementById("accrdn-1");
    const acrdn2 = document.getElementById("accrdn-2");
    const acrdn3 = document.getElementById("accrdn-3");
    const acrdn4 = document.getElementById("accrdn-4");
    const plusBtn = document.getElementById("plus-btn");
    const minusBtn = document.getElementById("minus-btn");
    const mbtn2 = document.getElementById("minus-btn2");
    const mbtn3 = document.getElementById("minus-btn3");
    const mbtn4 = document.getElementById("minus-btn4");
    const answr1 = document.getElementById("answr-1");
    const answr2 = document.getElementById("answr-2");
    const answr3 = document.getElementById("answr-3");
    const answr4 = document.getElementById("answr-4");
    const tbtn1 = document.getElementById("tbtn1");
    const tbtn2 = document.getElementById("tbtn2");
    const tbtn3 = document.getElementById("tbtn3");
    const tbtn4 = document.getElementById("tbtn4");


    tbtn1.addEventListener("click", function() {
        if (answr1.style.display === "none") {
            answr1.style.display = "block";
            minusBtn.style.visibility = "visible";
            answr2.style.display = "none";
            answr3.style.display = "none";
            answr4.style.display = "none";
            mbtn2.style.visibility = "hidden";
            mbtn3.style.visibility = "hidden";
            mbtn4.style.visibility = "hidden";
            plusBtn.style.visibility = "visible";
        } else {
            answr1.style.display = "none";
            minusBtn.style.visibility = "hidden";
            plusBtn.style.visibility = "visible";
        }
    })
    tbtn2.addEventListener("click", function() {
        if (answr2.style.display === "none") {
            answr2.style.display = "block";
            mbtn2.style.visibility = "visible";
            plusBtn.style.visibility = "hidden";
            answr1.style.display = "none";
            answr3.style.display = "none";
            answr4.style.display = "none";
            mbtn3.style.visibility = "hidden";
            mbtn4.style.visibility = "hidden";
            minusBtn.style.visibility = "hidden";
            plusBtn.style.visibility = "visible";
        } else {
            answr2.style.display = "none";
            plusBtn.style.visibility = "visible";
            mbtn2.style.visibility = "hidden";
        }
    })
    tbtn3.addEventListener("click", function() {
        if (answr3.style.display === "none") {
            answr3.style.display = "block";
            mbtn3.style.visibility = "visible";
            plusBtn.style.visibility = "hidden";
            answr1.style.display = "none";
            answr2.style.display = "none";
            answr4.style.display = "none";
            mbtn2.style.visibility = "hidden";
            mbtn4.style.visibility = "hidden";
            minusBtn.style.visibility = "hidden";
            plusBtn.style.visibility = "visible";
        } else {
            answr3.style.display = "none";
            plusBtn.style.visibility = "visible";
            mbtn3.style.visibility = "hidden";
        }
    })
    tbtn4.addEventListener("click", function() {
        if (answr4.style.display === "none") {
            answr4.style.display = "block";
            mbtn4.style.visibility = "visible";
            plusBtn.style.visibility = "hidden";
            answr1.style.display = "none";
            answr2.style.display = "none";
            answr3.style.display = "none";
            mbtn3.style.visibility = "hidden";
            mbtn2.style.visibility = "hidden";
            minusBtn.style.visibility = "hidden";
            plusBtn.style.visibility = "visible";
        } else {
            answr4.style.display = "none";
            plusBtn.style.visibility = "visible";
            mbtn4.style.visibility = "hidden";
        }
    })
    
})