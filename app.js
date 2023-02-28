// const http = new EasyHTTP;

// // GET users
// // http.get("https://jsonplaceholder.typicode.com/users")
// // .then(data => console.log(data))
// // .catch(err => console.log(err));

// // User data
// const data ={
//     name: "Prabina",
//     username: "prabina",
//     email: "p@gmail.com"
// }

// // // Create User
// // http.post("https://jsonplaceholder.typicode.com/users", data)
// // .then(data => console.log(data))
// // .catch(err => console.log(err));

// // Upadate post/ Put
// // http.put("https://jsonplaceholder.typicode.com/users/3", data)
// // .then (data => console.log(data))
// // .catch(err => console.log(err));

// // Delete user
// http.delete("https://jsonplaceholder.typicode.com/users/3")
// .then(data => console.log(data))
// .catch(err => console.log(err));






// Version 2 (Using Fetch with Async Await)
const http = new EasyHTTP;

// GET Users
// http.get("https://jsonplaceholder.typicode.com/users")
// .then (data => console.log(data))
// .catch (err => console.log(err));

// User data
const data ={
    name: "Prabina",
    username: "prabina",
    email: "p@gmail.com"
}

// POST user
// http.post("https://jsonplaceholder.typicode.com/users", data)
// .then (data => console.log(data))
// .catch(err => console.log(err));

// Update user
// http.put("https://jsonplaceholder.typicode.com/users/4", data)
// .then (data => console.log(data))
// .catch(err => console.log(err));

// Delete user
http.delete("https://jsonplaceholder.typicode.com/users/4")
.then (data => console.log(data))
.catch( err => console.log(err));