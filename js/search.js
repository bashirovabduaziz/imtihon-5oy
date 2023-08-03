const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const postPhotosContainer = document.getElementById("postPhotosContainer");
let allPosts = [];

fetch("https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts")
    .then((response) => response.json())
    .then((data) => {
        allPosts = data;
        if (allPosts.length > 0) {
            allPosts.forEach((post) => {
                const img = document.createElement("img");
                img.src = post.img;
                img.alt = post.title;
                postPhotosContainer.appendChild(img);

                const category = document.createElement("h5");
                category.classList.add("post-category1");
                category.textContent = post.category;
                postPhotosContainer.appendChild(category);

                const title = document.createElement("h2");
                title.classList.add("post-title1");
                title.textContent = post.title;
                postPhotosContainer.appendChild(title);

                const body = document.createElement("p");
                body.classList.add("post-body1");
                body.textContent = post.body.substring(0, 100) + "...";
                postPhotosContainer.appendChild(body);
            });
        }

    })
    .catch((error) => console.error("Error fetching data:", error));


function handleSearch(event) {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    const matchingPosts = allPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm)
    );

    postPhotosContainer.innerHTML = "";



    matchingPosts.forEach((post) => { 
        const img = document.createElement("img");
        img.src = post.img;
        img.alt = post.title;
        img.classList.add("img")
        postPhotosContainer.appendChild(img);

        const category = document.createElement("h5");
        category.classList.add("post-category1");
        category.textContent = post.category;
        postPhotosContainer.appendChild(category);

        const title = document.createElement("h2");
        title.classList.add("post-title1");
        title.textContent = post.title;
        postPhotosContainer.appendChild(title);

        const body = document.createElement("p");
        body.classList.add("post-body1");
        body.textContent = post.body.substring(0, 100) + "...";
        postPhotosContainer.appendChild(body);
    });
}

searchInput.addEventListener("input", handleSearch);