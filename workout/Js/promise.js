// const promisetester = (value) => Promise.resolve(value);
// const promisetester = (value) => Promise.reject(value);

// const promisetester = (value) => {
//   return new Promise((resolve) => {
//     resolve(value);
//   });
// };
// const promisetester = (value) => {
//   return new Promise((_, reject) => {
//     reject(new Error(value));
//   });
// };

// promisetester("123").catch((err) => {
//   console.log("caught: ", err.message);
// });

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

const promisetester = promise.then((value) => {
  console.log(value);
  return true;//
});
