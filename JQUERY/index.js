// 4 ways to call API - XMLHttpRequest, Fetch, Axios, jQuery
// add jquery library cdn
// ajax - asynchoronus javascript and XML

console.clear();

const makeRequest = async ( url, method, data  ) => {
    try {
        const result = await $.ajax({
            url : url,
            method : method,
            data : data,
        });
    
        return result;
    } catch(err) {
        console.log(err);
    }
}

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'GET')
    .then((res) => console.log(res));
}

const createData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', 'POST', {
          title: 'foo',
          body: 'bar',
          userId: 1,
    })
    .then((res) => console.log(res));
}

const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PUT', {
          id: 1,
          title: 'foo update',
          body: 'bar update',
          userId: 1,
    })
    .then((res) => console.log(res));
}


const updateSingleData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PATCH', {
          title: 'foo update next time',
    })
    .then((res) => console.log(res));
}

const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'DELETE')
    .then((res) => console.log(res));
}

getData();
createData();
updateData();
updateSingleData();
deleteData();