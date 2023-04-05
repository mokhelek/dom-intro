
function addBtnClicked() {
    let billItem = document.querySelector(".billTypeText").value; // This contains either sms or call
    let errorMessage = document.getElementById("textInputError");
    let callTotal = document.querySelector(".callTotalOne");
    let smsTotal = document.querySelector(".smsTotalOne");
    let grandTotal = document.querySelector(".totalOne");
    let colorChange = document.querySelector(".red");

    switch (billItem.toLowerCase().trim() ) {
        case "call":
            callTotal.innerHTML = (Number(callTotal.textContent) + 2.75).toFixed(2) ;
            break;
        case "sms":
            smsTotal.innerHTML = (Number(smsTotal.textContent) + 0.75).toFixed(2);
            break;
        default:
            errorMessage.style.display = "block";
            setTimeout(()=>{
                errorMessage.style.display = "none";
            },5000)
            
            
    }
    grandTotal.innerHTML = (Number(smsTotal.textContent) + Number(callTotal.textContent)).toFixed(2) ;

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


function refreshTextInput(){
    let callTotal = document.querySelector(".callTotalOne");
    let smsTotal = document.querySelector(".smsTotalOne");
    let grandTotal = document.querySelector(".totalOne");
    let colorChange = document.querySelector(".red");

   grandTotal.innerHTML = (0).toFixed(2) ;
   smsTotal.innerHTML =  (0).toFixed(2) ;
   callTotal.innerHTML = (0).toFixed(2) ;
   colorChange.style.color = "black"
}
