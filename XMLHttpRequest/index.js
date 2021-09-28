// XMLHttpRequest Object API REQUEST

// event - onload(), onerror()
// property - response, responseText, responseType,  responseUrl, status, statusTest etc
// method - open(), send(), ()


// clear console old data
console.clear();

const makeRequest = (method, url, info) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = () => {
        let data = xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.onerror = () => {
        console.log("Error here")
    }

    xhr.send(JSON.stringify(info));
}

const getData = () => {
    makeRequest("GET", "https://jsonplaceholder.typicode.com/posts")
}

const sendData = () => {
    makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
}
const updateData = () => {
    makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1",{
        id: 1,
        title: 'foo1',
        body: 'bar1',
        userId: 1,
    })
}
const updateSingleData = () => {
    makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1",{
        title: 'This is a main title',
    })
}
const deleteData = () => {
    makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
}
getData();
sendData();
updateData();
updateSingleData();
deleteData();



// XMLHttpRequest(Promise) API REQUEST






const makeRequest = (method, url, info) => {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
    
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = () => {
            let data = xhr.response;
            console.log(JSON.parse(data));
        }
        xhr.onerror = () => {
            console.log("Error here")
        }
    
        xhr.send(JSON.stringify(info));
    });
}

const getData = () => {
    makeRequest("GET", "https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
}

const sendData = () => {
    makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
}
const updateData = () => {
    makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1",{
        id: 1,
        title: 'foo1',
        body: 'bar1',
        userId: 1,
    })
}
const updateSingleData = () => {
    makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1",{
        title: 'This is a main title',
    })
}
const deleteData = () => {
    makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
}
getData();
sendData();
updateData();
updateSingleData();
deleteData();