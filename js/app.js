const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart) => {

    heart.addEventListener("click", () => {

        if (heart.innerHTML === "♡") {

            heart.innerHTML = "❤️";

        } else {

            heart.innerHTML = "♡";

        }

    });

});

const subscribeBtn = document.getElementById("subscribeBtn");

subscribeBtn.addEventListener("click", () => {

    const email =
    document.getElementById("emailInput").value;

    if(email === ""){

        alert("Please enter your email");

    }else{

        alert("Subscribed Successfully!");

        document.getElementById("emailInput").value = "";

    }

});