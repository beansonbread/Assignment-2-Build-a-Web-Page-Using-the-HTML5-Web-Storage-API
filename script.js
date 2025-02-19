const nameInput = document.getElementById("username");
const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clear-btn")
const displayName = document.getElementById("display-name");

saveButton.addEventListener("click", saveName);
clearButton.addEventListener("click", clearName);

//saving name
function saveName() {
    const name = nameInput.value;
    if (name) {
        localStorage.setItem("display-name", name);
        displayNameInput();
    }
}

//displaying name
function displayNameInput() {
    const savedName = localStorage.getItem("display-name");
    const time = new Date().getHours();
    let greeting; 

    //greeting types based on time
    switch (true) {
        case (time >= 0 && time < 12):
            greeting = "Good morning";
            break;
        case (time >= 12 && time < 17):
            greeting = "Good afternoon";
            break;
        case (time >= 18 && time < 20):
            greeting = "Good evening";
            break;
        case (time >=20 && time < 24):
            greeting = "Good night";
            break;
        default: 
            greeting = "Hi";
            break;
    }
    
    if (savedName) {
        displayName.innerHTML = `${greeting}, ${savedName}!`;
    } else {
        displayName.innerHTML = "What is your name?";
    }
}

//clearing name
function clearName() {
    localStorage.removeItem("display-name");
    displayName.innerHTML = "What is your name?";
    nameInput.value = "";
}

document.addEventListener("DOMContentLoaded", displayNameInput);