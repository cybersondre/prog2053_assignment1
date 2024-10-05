let posts = null;

let k = 0;

async function fetchHomeData() {
    //API Endpoint: https://jsonplaceholder.typicode.com/posts
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok) {
            throw new Error("Error with the status: ");
        }
        posts = await response.json();
}

function makepost(title, body) {
    const container = document.createElement("div");
        container.classList.add("post");

        const header = document.createElement("h2");
        header.textContent = title;
        container.appendChild(header);

        const paragraph = document.createElement("p");
        paragraph.textContent = body;
        container.appendChild(paragraph);

        document.getElementById("main-container").appendChild(container);
}

const bottomIsVisible = () => // for recognizing scrolling down
    document.documentElement.clientHeight + window.scrollY >=
    document.documentElement.scrollHeight - 100;

async function main() {
    await fetchHomeData()
    for (let i = 0; i < 9; i++) {
        makepost(posts[k++].title,posts[k].body);
    }
    addEventListener("scroll", () => {
        if (bottomIsVisible()) {
            for (let i = 0; i < 3; i++) {
                makepost(posts[k++].title,posts[k].body);
            }
        }
    });
}

main()