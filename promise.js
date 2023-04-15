let exampleTask = new Promise((resolve, reject) => {
    reject('promise rejected');
});

exampleTask.then(function successValue(result) {
    console.log(result);
}).catch(function failureValue(error) {
    console.log(error);
});