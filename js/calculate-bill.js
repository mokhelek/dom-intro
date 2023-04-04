//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

function calculateBtnClicked() {
    let billTotalElement = document.querySelector(".billTotal");
    let billString = document.querySelector(".billString").value;
    let billItems = billString.split(",");
    let billTotal = 0;

    for (var i = 0; i < billItems.length; i++) {
        let billItem = billItems[i].trim();
        if (billItem === "call") {
            billTotal += 2.75;
        } else if (billItem === "sms") {
            billTotal += 0.75;
        }
    }
    var roundedBillTotal = billTotal.toFixed(2)
    billTotalElement.innerHTML = roundedBillTotal;

    var total = document.querySelector(".total");

    if (roundedBillTotal > 20 && roundedBillTotal < 30) {
        total.style.color = "orange";
    } else if (roundedBillTotal > 30) {
        total.style.color = "red";
    } else {
        total.style.color = "black";
    }
}

const calculateBtn = document.querySelector(".calculateBtn");
calculateBtn.addEventListener("click", calculateBtnClicked);

function refreshStringInput(){
    let billTotalElement = document.querySelector(".billTotal");
    let total = document.querySelector(".total");

    billTotalElement.innerHTML = 0;
    total.style.color = "black";


}
