
function radioAddBtnClicked() {
    let radioInputError = document.getElementById("radioInputError");

    let billItem = document.querySelector('.billItemTypeRadio:checked');
    console.log(billItem)
    if(billItem == null){
        radioInputError.style.display = "block";
        setTimeout(()=>{
            radioInputError.style.display = "none";
        },5000)
    }
    
    let callTotal = document.querySelector(".callTotalTwo");
    let smsTotal = document.querySelector(".smsTotalTwo");
    let grandTotal = document.querySelector(".totalTwo");
    let colorChange = document.querySelector(".orange");

    switch (billItem.value) {
        case "call":
            callTotal.innerHTML = Number(callTotal.textContent) + 2.75;
            break;
        case "sms":
            smsTotal.innerHTML = Number(smsTotal.textContent) + 0.75;
            break;
        default:
            radioInputError.style.display = "block";
            setTimeout(()=>{
                radioInputError.style.display = "none";
            },5000)
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

const radioAddBtn = document.querySelector(".radioBillAddBtn");
radioAddBtn.addEventListener("click", radioAddBtnClicked);
