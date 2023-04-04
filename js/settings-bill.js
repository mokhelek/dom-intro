var callCostSetting = document.querySelector(".callCostSetting").valueAsNumber;
var smsCostSetting = document.querySelector(".smsCostSetting").valueAsNumber;
var warningLevelSetting = document.querySelector(".warningLevelSetting").valueAsNumber;
var criticalLevelSetting = document.querySelector(".criticalLevelSetting").valueAsNumber;

let invalidCallAmount = document.getElementById("invalidCallAmount");
let invalidSMSAmount = document.getElementById("invalidSMSAmount");
let invalidWarningCriticalAmount = document.getElementById("invalidWarningCriticalAmount");

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
                        invalidCallAmount.style.display = "block";
                        setTimeout(() => {
                            invalidCallAmount.style.display = "none";
                        }, 5000);
                    }
                    break;

                case "sms":
                    if (smsCostSetting) {
                        smsTotal.innerHTML = Number(smsTotal.textContent) + smsCostSetting;
                    } else {
                        invalidSMSAmount.style.display = "block";
                        setTimeout(() => {
                            invalidSMSAmount.style.display = "none";
                        }, 5000);
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
    } else {
        invalidWarningCriticalAmount.style.display = "block";
        setTimeout(() => {
            invalidWarningCriticalAmount.style.display = "none";
        }, 5000);
    }
}

function updateSettingsAddBtnClicked() {
    let grandTotal = document.querySelector(".totalSettings");
    let colorChange = document.querySelector(".settingsColor");
    let settingsUpdatedMessage = document.getElementById("settingsUpdatedMessage");

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

    settingsUpdatedMessage.style.display = "block";
    setTimeout(() => {
        settingsUpdatedMessage.style.display = "none";
    }, 5000);
}

const updateSettingsBtn = document.querySelector(".updateSettings");
updateSettingsBtn.addEventListener("click", updateSettingsAddBtnClicked);

const settingsAddBtn = document.querySelector(".settingsAddBtn");
settingsAddBtn.addEventListener("click", settingsAddBtnClicked);

function refreshSettingsInput() {
    let callTotal = document.querySelector(".callTotalSettings");
    let smsTotal = document.querySelector(".smsTotalSettings");
    let grandTotal = document.querySelector(".totalSettings");
    let colorChange = document.querySelector(".settingsColor");

    grandTotal.innerHTML = 0;
    smsTotal.innerHTML = 0;
    callTotal.innerHTML = 0;
    colorChange.style.color = "black";
}
