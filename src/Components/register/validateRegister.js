function validateUsername(username){
    const existingUsernames =['user1','admin','testuser']; 
    if (existingUsernames.includes(username)){
        return "Username already exists. Please choose a different username.";
    }
    return null; 
}

function validatePassword(password){
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)){
        return "Password must contain at least 8 characters, including upper and lower case letters, numbers, and a special character.";
    }
    return null;
}

function validateEmail(email){
    const emailPattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(email)){
        return "Please enter a valid email address.";
    }
    return null;
}

export function validateForm(userObj){
    const errors={};

    const usernameError =validateUsername(userObj.Username);
    if(usernameError)errors.username =usernameError;

    const passwordError =validatePassword(userObj.Password);
    if(passwordError)errors.password =passwordError;

    const emailError =validateEmail(userObj.gmail);
    if(emailError)errors.email =emailError;

    return errors;
}
