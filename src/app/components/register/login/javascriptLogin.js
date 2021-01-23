const form = document.getElementById('form')
const usernameLogin = document.getElementById('username-login');
const passwordLogin = document.getElementById('password-login');


// B1: 1 - show error
function showError(input, message) {
  const formControls = input.parentElement;
  formControls.className = 'form-control error';
  const small = formControls.querySelector('small');
  small.innerText = message;
}

//B1: 2 - showSuccess
function showSuccess(input) {
  const formControls = input.parentElement;
  formControls.className = 'form-control success';
}

//B2: checkRequired ( yêu cầu người dùng nhập nếu là "" gọi er báo lỗi.)
function checkRequired(inputArray) {
  inputArray.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `Nhập ${getTextField(input)}`);
      return false;
    }
    else {
      showSuccess(input);
      return true;
    } 
  });
}
//B2: getText
function getTextField(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1); 
}


// B3: checkUernameLogin
//      - thực tế sẽ check với giá trị lưu trên databse, này làm nhanh
function checkUsernameLogin(input) {
  if (input.value !== "guest") {
    showError(input, `Username do not match. Username test: guest`);
    }
  else {
      showSuccess(input);
      return true;
    }
}

// B4: checkPassword
function checkPassword(input) {  
  if (input.value !== "123123") {
    showError(input, `Password do not match. Password test: 123123`);
    }
  else {
      showSuccess(input);
      return true;
    }
}
function checkSubmitLogin() {
    if (checkUsernameLogin(usernameLogin) === true) {
        if (checkPassword(passwordLogin) === true) {
            console.log([usernameLogin.value, passwordLogin.value]);
        }
        else {
            console.log('username or password do no match');
        }
    }
    else {
        console.log('username or password do no match');
    }
}

// Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([usernameLogin, passwordLogin]);
    checkSubmitLogin();
}) 

