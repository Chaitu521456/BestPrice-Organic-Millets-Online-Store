
function validateUsername(username){
    const existingUsernames = ['user1','admin','testuser']; 
    if (!username){
        return "Username is required.";
    }
    if (existingUsernames.includes(username)){
        return "Username not found. Please register.";
    }
    return null;
}

function validatePassword(password){
    if (!password){
        return "Password is required.";
    }
    return null;
}

export function validateForm(userObj){
    const errors={};

    const usernameError =validateUsername(userObj.Username);
    if (usernameError) errors.username =usernameError;

    const passwordError =validatePassword(userObj.Password);
    if (passwordError)errors.password =passwordError;
    return errors;
}



