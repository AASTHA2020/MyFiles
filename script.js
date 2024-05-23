//Create a promise and resolve it when button is clicked

const myPromise = new Promise((res,rej) => {
    document.getElementById("myBtn").addEventListener("click", () =>{
      //console.log(Promise.resolve("myPromise"));
        res("myValue");
    });
    document.getElementById("myBtn").addEventListener("click", () => {
        rej("someReason");
    });
});

myPromise.then(res => console.log(res)).catch(err => {console.log(err)});

