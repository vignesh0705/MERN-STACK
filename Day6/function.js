// async function createPost() {
//     var post =new Promise((cPost)=>{
//         setTimeout(()=>{
//             cPost("Post Created Successfully")
//         },5000)
//     })
//     console.log( await  post);
// }
// createPost();



// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data fetched successfully!");
//         }, 2000); 
//     });
// }


// async function getData() {
//     console.log("Fetching data...");
//     const data = await fetchData(); 
//     console.log(data); 
// }

// getData();



// async function getDataWithErrorHandling() {
//     try {
//         console.log("Fetching data...");
//         const data = await fetchData();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// getDataWithErrorHandling();



// async function example() {
//     return "Hello, world!";
// }
// example().then(console.log); // Logs: Hello, world!




// Simulating a data fetch function
function fetchData(index) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (index === 2) {
                // Simulate an error for the second fetch
                reject(`Error fetching data for index ${index}`);
            } else {
                resolve(`Fetched data for index ${index}`);
            }
        }, 1000 * index); // Delays based on index for demo purposes
    });
}

// Correctly declaring an async function
async function fetchMultipleData() {
    try {
        console.log("Fetching multiple data...");
        const [data1, data2, data3] = await Promise.all([
            fetchData(1),
            fetchData(2), // This will throw an error
            fetchData(3),
        ]);
        console.log("Fetched Data:", data1, data2, data3);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

// Call the async function
fetchMultipleData();