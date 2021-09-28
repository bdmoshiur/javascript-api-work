// FATCH Method API REQUEST

// Fetch() - has replaced XMLHttpRequest 
// Fetch() - Global Method for Making HTTP Request
// 2 Ways to call - then, (async await)

// + fetch() - is easy to use compare to XMLHttpRequest
// + fetch() - returns a promise
// - fetch() - returned promise can only handle network error
// - fetch() - dose not support all the older browser


// clear console old data
console.clear();


// Get Single Resource
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((res) => {
    if (!res.ok) {
        let message = `Error Status Code : ${res.status}`;
        throw new Error(message);
    }

    return res.json();
})
.then((json) => console.log(json))
.catch((err) => console.log(err))

// Get All Resource
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((res) => {
    if (!res.ok) {
        let message = `Error Status Code : ${res.status}`;
        throw new Error(message);
    }

    return res.json();
})
.then((json) => console.log(json))
.catch((err) => console.log(err))


// Send Resource
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    title: 'foo one',
    body: 'bar one',
    userId: 1,
  }),
})
.then((res) => {
    if (!res.ok) {
        let message = `Error Status Code : ${res.status}`;
        throw new Error(message);
    }

    return res.json();
})
.then((json) => console.log(json))
.catch((err) => console.log(err))


// Update Resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    id: 1,
    title: 'foo one Update',
    body: 'bar one Update',
    userId: 1,
  }),
})
.then((res) => {
    if (!res.ok) {
        let message = `Error Status Code : ${res.status}`;
        throw new Error(message);
    }

    return res.json();
})
.then((json) => console.log(json))
.catch((err) => console.log(err))


// Update Single Resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    id: 1,
    title: 'foo one Update nested update',
  }),
})
.then((res) => {
    if (!res.ok) {
        let message = `Error Status Code : ${res.status}`;
        throw new Error(message);
    }

    return res.json();
})
.then((json) => console.log(json))
.catch((err) => console.log(err))



// Delete Resource
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((res) => {
    if (!res.ok) {
        let message = `Error Status Code : ${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((json) => console.log(json))
.catch((err) => console.log(err))




// FATCH Method (Async Await) API REQUEST


const makeRequist = async (url, data) => {
  const streamData = await fetch(url, data);
  if (!streamData.ok) {
    const message = `Error Message : ${streamData.status}`;
    throw new Error(message);
  }
  const jsonData = await streamData.json();
  return jsonData;
}

const getData = () => {
  makeRequist('https://jsonplaceholder.typicode.com/posts/1')
  .then((res) => console.log(res))
  .catch((err)=> console.log(err));
}

const postData = () => {
  makeRequist('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo next pro',
      body: 'bar next pro',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((res) => console.log(res))
  .catch((err)=> console.log(err));
}

const updateData = () => {
  makeRequist('https://jsonplaceholder.typicode.com/posts/1',{
    method: 'PUT',
    body: JSON.stringify({
      id : 1,
      title: 'foo next pro max',
      body: 'bar next pro max',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((res) => console.log(res))
  .catch((err)=> console.log(err));
}

const updateSingleData = () => {
  makeRequist('https://jsonplaceholder.typicode.com/posts/1',{
    method: 'PATCH',
    body: JSON.stringify({
      body: 'bar next pro max update update',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((res) => console.log(res))
  .catch((err)=> console.log(err));
}


const deleteData = () => {
  makeRequist('https://jsonplaceholder.typicode.com/posts/1')
  .then((res) => console.log(res))
  .catch((err)=> console.log(err));
}

// getData();
// postData();
// updateData();
// updateSingleData();
// deleteData();

