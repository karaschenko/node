const doWorkpromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve([7,5,4]);
    reject('wrong');
  }, 2000)
})

doWorkpromise.catch((result) => {
  console.log('error', result);
});