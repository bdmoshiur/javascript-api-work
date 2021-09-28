
// 4 ways to call API - XMLHttpRequest, Fetch, Axios, jQuery
// Axios is a js library
// it helps to make request from browser ( plain js, vue/react/angular ), node js


// + very easy to use
// + it support all modern browser including IE
// + it return promise
// + throw error Brilliantly
// + no need to set header cause axios is intellegent


// axios(config)
// axios(url [,config])
// axios.get(url [, config])
// axios.post(url [, config])
// axios.put( url [, config])
// axios.patch( url [, congfig])
// axios.delete( url [, confug])

//axios returns response object - data , status, tatusText, headers, congig


console.clear();


// Axios get method


// axios
// .get('https://jsonplaceholder.typicode.com/posts')
// .then((res) => console.log(res))
// .catch((err) => console.log(err));

// Axios post method


// axios
// .post('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     }, 
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err));


// Axios Update method


// axios
// .put('https://jsonplaceholder.typicode.com/posts/1', {
//     id: 1,
//     method: 'PUT',
//     body: JSON.stringify({
//       title: 'foo brrerere',
//       body: 'bar bsaghsdahgsad',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     }, 
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err));


// Axios single Update method
// id / method / headers not required but you use its no problem


// axios
// .patch('https://jsonplaceholder.typicode.com/posts/1', {
//     body: JSON.stringify({
//       body: 'bar bsaghsdahgsad update next step',
//     }),
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err));


// Axios delete method


// axios
// .delete('https://jsonplaceholder.typicode.com/posts/1')
// .then((res) => console.log(res))
// .catch((err) => console.log(err));



// Axios Async/await use API request

const makeRequest = async (config) => {
    return await axios(config);
}


// get data
const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1')
    .then((res)=> console.log(res.data))
    .catch((err) => console.log(err));
}

//post data
const postData = () => {
    makeRequest({
        url : 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
    })
    .then((res)=> console.log(res.data))
    .catch((err) => console.log(err));
}


//update data
const updateData = () => {
    makeRequest({
        url : 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'PUT',
        body: JSON.stringify({
            id : 1,
            title: 'foo one step',
            body: 'bar one step',
            userId: 1,
        })
    })
    .then((res)=> console.log(res.data))
    .catch((err) => console.log(err));
}

//update data
const updateSingleData = () => {
    makeRequest({
        url : 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo one step next step update',
        })
    })
    .then((res)=> console.log(res.data))
    .catch((err) => console.log(err));
}

//delete data
const deleteData = () => {
    makeRequest({
        url : 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'DELETE'
    })
    .then((res)=> console.log(res.data))
    .catch((err) => console.log(err));
}


getData();
postData();
updateData();
updateSingleData();
deleteData();