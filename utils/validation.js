const validationUsername = (username) => {
  const regex = /^[a-zA-Z\d_]{4,16}$/;
  const result = regex.test(username);
  return result;
};

const validatePassword = (password) => {
  const regex = /^.{4,20}$/;
  const result = regex.test(password);
  return result;
};

const validateForm = (username, password) => {
  if (validationUsername(username) && validatePassword(password)) {
    return true;
  } else if (!validationUsername(username)) {
    alert("username is not valid");
  } else if (!validatePassword(password)) {
    alert("password is must be between 4 to 20 charecters");
  }
};
export default validateForm;
