function randomNumberGenerate() {
    const random = Math.round(Math.random() * 10000);
    const randomString = random + '';
    if (randomString.length === 4) {
        return randomString;
    }
    else {
        return randomNumberGenerate();
    }
}

document.getElementById('generate-pin-btn').addEventListener('click', () => {
    const generatePin = randomNumberGenerate();
    console.log(typeof generatePin)
    const generatePinInputField = document.getElementById('generate-pin-input');
    generatePinInputField.value = generatePin;
})

document.getElementById('digit-btn').addEventListener('click', (event) => {
    const number = event.target.innerText;
    const showVerifyPin = document.getElementById('show-verify-pin');
    const previousTypeNumber = showVerifyPin.value;
    if (isNaN(number)) {
        if (number === 'C') {
            showVerifyPin.value = '';
        }
        else if (number === '<') {
            const numberArray = previousTypeNumber.split('');
            numberArray.pop();
            const remainingDigits = numberArray.join('')
            showVerifyPin.value = remainingDigits;
        }
    }
    else {
        const newTypeNumber = previousTypeNumber + number
        showVerifyPin.value = newTypeNumber;
    }
})


document.getElementById('verify-pin').addEventListener('click', ()=>{
    const displayPinField = document.getElementById('generate-pin-input');
    const displayPinValue = displayPinField.value;
    const typedPinField = document.getElementById('show-verify-pin');
    const typedPinValue = typedPinField.value;

    const pinError = document.getElementById('pin-error');
    const pinSuccess = document.getElementById('pin-success');

    if(displayPinValue === typedPinValue){        
        pinSuccess.style.display = 'block';        
        pinError.style.display = 'none';
    }
    else{
        pinSuccess.style.display = 'none';
        pinError.style.display = 'block';
    }
    displayPinField.value = '';
    typedPinField.value = '';
})