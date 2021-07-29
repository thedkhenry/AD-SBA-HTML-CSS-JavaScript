window.onload=function(){
    document.querySelector('#form-checkin').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            checkIn();
        }
    });
}
function checkIn(){
    const form = document.getElementById('form-checkin');
    if(validate()){
        toggleFormMessage(false);
        const table = document.getElementById('table-list');
        var record = document.createElement('tr');
        var arriveTime = document.createElement('td');
        var fullName = document.createElement('td');
        var phoneNumber = document.createElement('td');
        arriveTime.textContent = new Date().toLocaleTimeString();
        fullName.textContent = form.elements['inputFirstName'].value + " " + form.elements['inputLastName'].value
        phoneNumber.textContent = form.elements['inputNumber'].value
        record.appendChild(arriveTime);
        record.appendChild(fullName);
        record.appendChild(phoneNumber);
        table.appendChild(record);
        form.reset();
    }else{
        toggleFormMessage(true);
    }
}

function toggleFormMessage(display){
    const formMessage = document.getElementsByClassName('form-message');
    const form = document.getElementById('form-checkin');
    if(display && formMessage.length === 0){
        var messageDiv = document.createElement('div');
        messageDiv.classList.add('form-message');
        messageDiv.textContent = "Please fill out all fields correctly.";
        form.parentNode.insertBefore(messageDiv,form.nextElementSibling);
    }else if(!display && formMessage.length > 0){
        form.parentNode.removeChild(formMessage[0]);
    }
}

function validate(){
    const form = document.getElementById('form-checkin');
    var firstName = form.elements['inputFirstName'].value;
    var lastName = form.elements['inputLastName'].value;
    var phoneNumber = form.elements['inputNumber'].value;
    var regex = new RegExp(/^\d{3}-\d{3}-\d{4}$/);
    var result = regex.test(phoneNumber);
    if(firstName!=="" && lastName!=="" && result){
        return true;
    }
    return false;
}