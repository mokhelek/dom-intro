// get a reference to the text box where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type text box is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function addBtnClicked() {
    let billItem = document.querySelector(".billTypeText").value; // This contains either sms or call

    let callTotal = document.querySelector(".callTotalOne");
    let smsTotal = document.querySelector(".smsTotalOne");
    let grandTotal = document.querySelector(".totalOne");
    let colorChange = document.querySelector(".red");

    switch (billItem.toLowerCase().trim() ) {
        case "call":
            callTotal.innerHTML = Number(callTotal.textContent) + 2.75;
            break;
        case "sms":
            smsTotal.innerHTML = Number(smsTotal.textContent) + 0.75;
            break;
        default:
            alert("Please enter either 'SMS' or 'Call'")
    }
    grandTotal.innerHTML = Number(smsTotal.textContent) + Number(callTotal.textContent);

    if (Number(grandTotal.textContent) > 30 && Number(grandTotal.textContent) < 50) {
        colorChange.style.color = "orange";
    } else if (Number(grandTotal.textContent) > 50) {
        colorChange.style.color = "red";
    } else {
        colorChange.style.color = "black";
    }
}

const addButton = document.querySelector(".addToBillBtn");
addButton.addEventListener("click", addBtnClicked);
