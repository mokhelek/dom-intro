
var callCostSetting = document.querySelector(".callCostSetting").valueAsNumber;
var smsCostSetting = document.querySelector(".smsCostSetting").valueAsNumber;
var warningLevelSetting = document.querySelector(".warningLevelSetting").valueAsNumber;
var criticalLevelSetting = document.querySelector(".criticalLevelSetting").valueAsNumber;

function settingsAddBtnClicked() {
    let billItem = document.querySelector(".billItemTypeWithSettings:checked");
    let callTotal = document.querySelector(".callTotalSettings");
    let smsTotal = document.querySelector(".smsTotalSettings");
    let grandTotal = document.querySelector(".totalSettings");
    let colorChange = document.querySelector(".settingsColor");

    if (colorChange.style.color != "red") {
        if (billItem) {
            switch (billItem.value) {
                case "call":
                    if (callCostSetting) {
                        callTotal.innerHTML = Number(callTotal.textContent) + callCostSetting;
                    } else {
                        alert("enter valid call amount");
                    }
                    break;

                case "sms":
                    if (smsCostSetting) {
                        smsTotal.innerHTML = Number(smsTotal.textContent) + smsCostSetting;
                    } else {
                        alert("enter a valid sms cost");
                    }
                    break;
                default:
                    alert("Please enter valid input");
            }
        } else {
            alert("Please Pick SMS or Call");
        }
    }

    if (warningLevelSetting && criticalLevelSetting) {
        grandTotal.innerHTML = Number(smsTotal.textContent) + Number(callTotal.textContent);
        if (Number(grandTotal.textContent) > warningLevelSetting && Number(grandTotal.textContent) <= criticalLevelSetting) {
            colorChange.style.color = "orange";
        } else if (Number(grandTotal.textContent) > criticalLevelSetting) {
            colorChange.style.color = "red";
        } else {
            colorChange.style.color = "black";
        }
    }else{
        alert("Please enter both Warning and critical level amounts")
    }
}

function updateSettingsAddBtnClicked() {
    let grandTotal = document.querySelector(".totalSettings");
    let colorChange = document.querySelector(".settingsColor");

    if (Number(grandTotal.textContent) > warningLevelSetting && Number(grandTotal.textContent) <= criticalLevelSetting) {
        colorChange.style.color = "orange";
    } else if (Number(grandTotal.textContent) > criticalLevelSetting) {
        colorChange.style.color = "red";
    } else {
        colorChange.style.color = "black";
    }


    callCostSetting = document.querySelector(".callCostSetting").valueAsNumber;
    smsCostSetting = document.querySelector(".smsCostSetting").valueAsNumber;
    warningLevelSetting = document.querySelector(".warningLevelSetting").valueAsNumber;
    criticalLevelSetting = document.querySelector(".criticalLevelSetting").valueAsNumber;

}

const updateSettingsBtn = document.querySelector(".updateSettings");
updateSettingsBtn.addEventListener("click", updateSettingsAddBtnClicked);

const settingsAddBtn = document.querySelector(".settingsAddBtn");
settingsAddBtn.addEventListener("click", settingsAddBtnClicked);
