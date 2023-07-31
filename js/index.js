function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}

const apiUrl = "https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts";
const postContainer = document.getElementById("postContainer");

// Function to create a post card element
function createPostCard(post) {
	const postCard = document.createElement("div");
	postCard.classList.add("post-card");

	const img = document.createElement("img");
	img.classList.add("post-img");
	img.src = post.img;
	img.alt = "Post Image";
	postCard.appendChild(img);

	const authorDate = document.createElement("p");
	authorDate.classList.add("post-authorDate");
	authorDate.textContent = `By: ${post.category} | ${new Date(post.createdDate).toLocaleString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	})}`;
	postCard.appendChild(authorDate);

	const title = document.createElement("h2");
	title.classList.add("post-title");
	title.textContent = post.title;
	postCard.appendChild(title);

	const body = document.createElement("p");
	body.classList.add("post-body");
	body.textContent = post.body.substring(0, 100) + "...";
	postCard.appendChild(body);

	return postCard;
}

// Function to render posts
function renderPosts(posts) {
	posts.forEach((post) => {
		const postCard = createPostCard(post);
		postContainer.appendChild(postCard);
	});
}

// Function to fetch data from the API
async function getPosts() {
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		return [];
	}
}
