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

    const nextButton = document.getElementById("nextButton");

    nextButton.addEventListener("click", function() {
        const mainConcern = document.getElementById("mainConcern").value;

        document.querySelector(".container").innerHTML = `
            <h1>Tell Us About Your Symptoms</h1>

            <p>Now let's collect some information about what you're experiencing.</p>

            <label for="symptoms">What symptoms are you experiencing?</label>

            <br><br>

            <input type="text" id="symptoms" placeholder="Example: headache, dizziness">

            <br><br>

            <button id="nextSymptoms">Next</button>
        `;
    });
});
