async function fetchGitHubUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data);
}

fetchGitHubUser("shubhajit-paul-web");
// console.log("line 8 is executing...");
// console.log("line 9 is executing...");
// console.log("end...");

