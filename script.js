let korea = document.querySelector(".korea");
korea.addEventListener("click", function () {
    displayCountryContent("korea");
    displayCountryContentt("korea");
});

let finland = document.querySelector(".finland");
finland.addEventListener("click", function () {
    displayCountryContent("finland");
    displayCountryContentt("finland");
});

let japan = document.querySelector(".japan");
japan.addEventListener("click", function () {
    displayCountryContent("japan");
    displayCountryContentt("japan");
});

let australia = document.querySelector(".australia");
australia.addEventListener("click", function () {
    displayCountryContent("australia");
    displayCountryContentt("australia");
});

let france = document.querySelector(".france");
france.addEventListener("click", function () {
    displayCountryContent("france");
    displayCountryContentt("france");
});

let germany = document.querySelector(".germany");
germany.addEventListener("click", function () {
    displayCountryContent("germany");
    displayCountryContentt("germany");
});

function displayCountryContent(country) {
    let leftOne = document.querySelector(".leftOne");
    let leftTwo = document.querySelector(".leftTwo");
    let leftThree = document.querySelector(".leftThree");
    let leftFour = document.querySelector(".leftFour");
    let leftFive = document.querySelector(".leftFive");
    let leftSix = document.querySelector(".leftSix");

    leftOne.style.display = "none";
    leftTwo.style.display = "none";
    leftThree.style.display = "none";
    leftFour.style.display = "none";
    leftFive.style.display = "none";
    leftSix.style.display = "none";

    switch (country) {
        case "korea":
            leftOne.style.display = "block";
            break;
        case "finland":
            leftTwo.style.display = "block";
            break;
        case "japan":
            leftThree.style.display = "block";
            break;
        case "australia":
            leftFour.style.display = "block";
            break;
        case "france":
            leftFive.style.display = "block";
            break;
        case "germany":
            leftSix.style.display = "block";
            break;
    }
}

function displayCountryContentt(countryy) {
    // Get the specific right box for the clicked country
    let rightBox = document.querySelector("." + countryy);

    // Reset all boxes to their default state
    document.querySelectorAll(".right-box").forEach((box) => {
        box.style.position = "relative";
        box.style.left = "auto";
        box.style.bottom = "auto";
        box.style.height = "auto";
        box.style.backgroundColor = "initial";
        box.style.transform = "none";
    });

    // Apply styles to the clicked country's box
    rightBox.style.position = "absolute";
    rightBox.style.left = "200px";
    rightBox.style.bottom = "-393px";
    rightBox.style.height = "1698px";
    rightBox.style.width = "90px";

    rightBox.style.backgroundColor = "red";
    rightBox.style.transform = "rotate(90deg)";
    rightBox.style.display = "flex";
    rightBox.style.justifyContent = "center";
    rightBox.style.alignItems = "center";
}
