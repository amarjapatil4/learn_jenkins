window.addEventListener("load", function() {
    let headers = new Headers();
    let fetchRes = fetch(
    "https://jsonplaceholder.typicode.com/todos/1", {mode: 'cors',
    credentials: 'omit'});

    // fetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        })
    document.querySelector("#main-panel").style.backgroundColor = "red";
})
