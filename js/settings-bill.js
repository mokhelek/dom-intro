// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function settingsAddBtnClicked() {
    let billItem = document.querySelector(".billItemTypeWithSettings:checked").value;

    let callTotal = document.querySelector(".callTotalSettings");
    let smsTotal = document.querySelector(".smsTotalSettings");
    let grandTotal = document.querySelector(".totalSettings");
    let colorChange = document.querySelector(".settingsColor");


    var callCostSetting = document.querySelector(".callCostSetting").valueAsNumber ;
    var smsCostSetting = document.querySelector(".smsCostSetting").valueAsNumber;

    var warningLevelSetting = document.querySelector(".warningLevelSetting").valueAsNumber;
    var criticalLevelSetting = document.querySelector(".criticalLevelSetting").valueAsNumber;

        if (colorChange.style.color != "red"){

            switch (billItem) {
                case "call":
                    callTotal.innerHTML = Number(callTotal.textContent) + callCostSetting ;
                    break;
                case "sms":
                    smsTotal.innerHTML = Number(smsTotal.textContent) + smsCostSetting ;
                    break;
                default:
                    console.log(" Invalid Input");
            }
        }
        grandTotal.innerHTML = Number(smsTotal.textContent) + Number(callTotal.textContent);

        if (Number(grandTotal.textContent) > warningLevelSetting && Number(grandTotal.textContent) <= criticalLevelSetting) {
            colorChange.style.color = "orange";
        } else if (Number(grandTotal.textContent) > criticalLevelSetting) {
            colorChange.style.color = "red";
        } else {
            colorChange.style.color = "black";
        }
}



const settingsAddBtn = document.querySelector(".settingsAddBtn");
settingsAddBtn.addEventListener("click", function () {
    settingsAddBtnClicked();
});

const updateSettingsBtn = document.querySelector(".updateSettings");
updateSettingsBtn.addEventListener("click", () =>{
    let grandTotal = document.querySelector(".totalSettings");
    let colorChange = document.querySelector(".settingsColor");
    
    var warningLevelSetting = document.querySelector(".warningLevelSetting").valueAsNumber;
    var criticalLevelSetting = document.querySelector(".criticalLevelSetting").valueAsNumber;

    if (Number(grandTotal.textContent) > warningLevelSetting && Number(grandTotal.textContent) <= criticalLevelSetting) {
        colorChange.style.color = "orange";
    } else if (Number(grandTotal.textContent) > criticalLevelSetting) {
        colorChange.style.color = "red";
    } else {
        colorChange.style.color = "black";
    }    

} );
