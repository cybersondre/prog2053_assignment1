function fetchHomeData() {
    //API Endpoint: https://jsonplaceholder.typicode.com/posts
    const response = fetch("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok) {
            throw new Error("Error with the status: " + response.status);
        }
        console.log(response)
    
    
}