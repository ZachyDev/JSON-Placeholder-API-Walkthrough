// create a fetch request
fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log('something went wrong');
    })