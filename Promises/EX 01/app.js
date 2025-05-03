const form = document.forms[0];

// Profile container
const profileContainer = document.querySelector(".profile");

// Function to format numbers (eg., 1k, 1.5k, 15.5k, etc.)
function formatNumber(num) {
	if (num >= 1000) {
		return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
	}
	return num.toString();
}

// fetch latest repos by username 
function fetchRepos(username) {
    return fetch(`https://api.github.com/users/${username}/repos?sort=created&direction=desc&per_page=8`)
    .then(raw => raw.json())
    .then((data) => {
        let reposHTML = ``;
        for(let repo of data) {
            reposHTML += `<div class="repo">${repo.name}</div>`;
        }

        return reposHTML;
    });
}

function fetchUser(username) {
	fetch(`https://api.github.com/users/${username}`)
		.then((raw) => {
            if (raw.ok) return raw.json();
            else throw new Error("User not found!");
        })
		.then((data) => {
			// location
			let locationHTML = "";
			if (data.location) {
				locationHTML += `
                    <p href="#">
                        <img src="./icons/location-icon.svg" alt="location" />
                        ${data.location}
                    </p>
                `;
			}

			// email ID
			let emailHTML = "";
			if (data.email) {
				emailHTML += `
                    <a href="mailto:${data.email}">
                        <img src="./icons/email-icon.svg" alt="email" />
                        ${data.email}
                    </a>
                `;
			}
			// blog url
			let blogHTML = "";
			if (data.blog) {
				blogHTML += `
                    <a href="${data.blog}" target="_blank">
                        <img src="./icons/link-icon.svg" alt="link" />
                        ${data.blog}
                    </a>
                `;
			}

			profileContainer.innerHTML = `
                <div class="left-side">
                    <div class="profile-img">
                        <img src="${data.avatar_url || "./icons/default-image.png"}" alt="profile image" />
                    </div>
                    <div class="links">
                        ${locationHTML}
                        ${emailHTML}
                        ${blogHTML}
                    </div>
                </div>
                <div class="right-side">
                    <h1 class="name">${data.name}</h1>
                    <p class="profile-id">${data.login}</p>
                    <p class="connections-showcase">
                        <span>${formatNumber(data.followers)} followers</span> · 
                        <span>${formatNumber(data.following)} following</span>
                    </p>
                    <p class="bio">${data.bio}</p>
                    <p class="repo-count">${data.public_repos} Repos</p>
                    <div class="repos-container"></div>
                </div>
            `;

            fetchRepos(data.login).then(function(reposHTML) {
                document.querySelector(".repos-container").innerHTML = reposHTML;
            });
		})
        .catch(() => {
            alert("❌ User not found!!")
        });
}

form.addEventListener("submit", function (e) {
	const searchBox = document.querySelector("form input");
	e.preventDefault();

	fetchUser(searchBox.value.trim());
});
