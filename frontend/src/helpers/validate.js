const validateUrl = (url) => {
  const expression = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
  const regex = new RegExp(expression);
  const isUrlValid = regex.test(url);
  return isUrlValid;
}

const validateEmail = (email) => {
  const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regex = new RegExp(expression);
  const isEmailValid = regex.test(email);
  return isEmailValid;
}

module.exports = {
  validateUrl,
  validateEmail,
}