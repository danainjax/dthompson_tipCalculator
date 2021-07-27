function calculateTip() {
    let billAmt = document.querySelector('.billAmt').value;
    let service = document.querySelector('#serviceSelector').value;
    let numofPeople = document.querySelector('.peopleAmt').value;
    console.log(billAmt)
    console.log(service)
    console.log(numofPeople)
    if(billAmt === "" || service == 0){
        alert('Please enter some values to calculate.');
    }
    if(numofPeople ==="" || numofPeople <= 1){
        numofPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block"
    }
console.log(service)
    let total = (billAmt * service) /numofPeople;
    console.log(total)
    total = Math.round(total * 100) /100;
    total = total.toFixed(2)
    document.getElementById('totalTip').style.display = "block"
    document.getElementById("tip").innerHTML = total
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById('calculate').addEventListener('click', () => {
    calculateTip();
})