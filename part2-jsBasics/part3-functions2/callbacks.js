//callbacks
const greetUser = (username, callback) => {
  if (callback) {
    console.log(callback(username));
  } else {
    console.log(username);
  }
};
const clbak = (username) => {
  return "Hello " + username;
};
greetUser("james",clbak)

greetUser("james");
