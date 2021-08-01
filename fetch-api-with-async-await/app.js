const http = new EasyHttp;


//TO get data 
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));


// TO Post data

const data = {
    name: 'vaibhav bhakare',
    phone: '1-121312121-2121'
}

http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// TO update/put data

const Updateddata = {
    name: 'vaibhav bhakare',
    phone: '1-121312121-2121'
}

http.put('https://jsonplaceholder.typicode.com/users/1', Updateddata)
    .then(data => console.log(data))
    .catch(err => console.log(err));


//to delete data
http.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(data => console.log(data))
    .catch(err => console.log(err));



