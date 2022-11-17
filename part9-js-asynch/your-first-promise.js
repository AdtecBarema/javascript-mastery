// promise

console.log("Synchronous 1")
const pormise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data back from the server");
  }, 3000);

  setTimeout(() => {
    reject("failed to get data from the server");
  }, 4000);
});

pormise.then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  }).finally(() => {
    console.log("done");
  });

  console.log("Synchronous 2")
