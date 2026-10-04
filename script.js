const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function() {
    document.querySelector(".container").innerHTML = `
        <h1>Prepare for Your Visit</h1>

        <p>Let's start by identifying the main reason for your appointment.</p>

        <label for="mainConcern">What is the main reason for your appointment?</label>

        <br><br>

        <input type="text" id="mainConcern" placeholder="Example: headaches">

        <br><br>

        <button id="nextButton">Next</button>
    `;
});
