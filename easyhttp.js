/*
EasyHTTp library
Library for making HTTP requests

@version 2.0.0 
@author Prabina Regmi
@license UMass

// */
// class EasyHTTP{
// // Make an HTTP GET request
// get(url){
//     return new Promise((resolve, reject) => {
//     fetch(url)
//     .then(res => res.json())
//     .then (data => resolve(data))
//     .catch( err => reject(err)); 
//     })
   
// }

// // Make an HTTP POST request
// post(url, data){
//     return new Promise((resolve, reject) => {
//         fetch(url,{
//             method: "POST",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(data)
//         })
//         .then(res => res.json())
//         .then (data => resolve(data))
//         .catch( err => reject(err));  
//     })  
// }

// // Make an HTTP PUT request
// put(url, data){
//     return new Promise((resolve, reject) => {
//         fetch(url,{
//             method: "PUT",
//             headers:{
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(data)
//         })
//         .then(res => res.json())
//         .then (data => resolve(data))
//         .catch (err => reject(err));
//     })
// }

// // Make an HTTP DELETE request
// delete(url){
//     return new Promise((resolve, reject) => {
//         fetch(url,{
//             method: "DELETE",
//             headers:{
//                 "content-type": "application/json"
//             }
//         })
//         .then(res => res.json())
//         .then(() => resolve("Resource Deleted..."))
//         .catch(err => reject(err));
//     })
// }
// }





// Version 2 (using fetch with Async Await)
class EasyHTTP{
    // Make a HTTP GET  request
    async get(url){
        const response= await fetch(url);
        const resData = await response.json();
        return resData;
    }


    // Make a HTTP POST request
    async post(url, data){
        const response= await fetch(url,{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify (data)

    }) ;
    const resData = await response.json();
    return resData;
    }

    // Make a HTTP PUT request
    async put(url, data){
        const response = await fetch (url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
    return resData;
    }

    // Make a HTTP DELETE request
    async delete(url){
        const response= await fetch (url, {
            method: "Delete",
            headers: {
                "content-type": "application/json"
            }
        });
        const resData= await "Resource Deleted";
        return resData;
    }
    
}


