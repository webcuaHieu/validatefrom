const btnRegister = document.getElementById('btn-register');
const inputEles = document.querySelectorAll('.input-row');
const usernameEle = document.getElementById('username');
const emailEle = document.getElementById('email');
const phoneEle = document.getElementById('phone');

btnRegister.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();

    if (isValid) {
        alert('Registration submitted successfully');
    }
});

function checkValidate() {
    let usernameValue = usernameEle.value;
    let emailValue = emailEle.value;
    let phoneValue = phoneEle.value;

    let isCheck = true;

    // Check username field
    if (usernameValue == '') {
        setError(usernameEle, 'Username cannot be blank');
        isCheck = false;
    } else {
        setSuccess(usernameEle);
    }

    // Check email field
    if (emailValue == '') {
        setError(emailEle, 'Email cannot be blank');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, 'Email is invalid');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }

    // Check phone field
    if (phoneValue == '') {
        setError(phoneEle, 'Phone number cannot be blank');
        isCheck = false;
    } else if (!isPhone(phoneValue)) {
        setError(phoneEle, 'Phone number is invalid');
        isCheck = false;
    } else {
        setSuccess(phoneEle);
    }

    return isCheck;
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}