
function gatePin() {
    const pin = genarateRandom()
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return gatePin()
    }
}

function genarateRandom() {
    const random = Math.round(Math.random() * 10000)
    return random
}

document.getElementById('genarate-pin').addEventListener('click', function () {

    const pin = gatePin()
    const pinGenarat = document.getElementById('display-pin');
    pinGenarat.value = pin
})



document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const formControl = document.getElementById('form-control');
    const previusNumber = formControl.value;
    if (isNaN(number)) {
        if (number === 'C') {
            formControl.value = ''
        } else if (number === '<') {
            const digit = previusNumber.split('')
            digit.pop();
            const remining = digit.join('');
            formControl.value = remining
        }
    } else {


        const newNumber = previusNumber + number;
        formControl.value = newNumber;
        // return formControl
    }
    console.log();




})


document.getElementById('submit-button').addEventListener('click', function () {
    const pinGenarat = document.getElementById('display-pin');
    const displayPin = pinGenarat.value;

    const formControl = document.getElementById('form-control')
    const formPin = formControl.value;

    const pinSucces = document.getElementById('pin-success');
    const wrongPin = document.getElementById('wrong-pin');
    if (displayPin === formPin) {
        wrongPin.classList.add('d-none')
        pinSucces.classList.remove("d-none");

        pinGenarat.value = '';
        formControl.value = '';


    } else {
        wrongPin.classList.remove('d-none')
        pinSucces.classList.add("d-none");
        // formControl.value = '';
    }





})