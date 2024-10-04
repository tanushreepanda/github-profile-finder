// const URL = "https://api.github.com/users";
// const div = document.querySelector("input");
// const btn = document.querySelector("button");


// const getUser = async(username) => {
//     console.log("Getting data......");
//     const response = await fetch(URL + `/${username}`);
//     const data = await response.json();
//     console.log(data);
// }
// getUser("mojombo");


async function getUser() {
    const username = document.getElementById('username').value;
    const URL = `https://api.github.com/users/${username}`;
    const profile = document.getElementById('profile');
    const response = await fetch(URL);
    const data = await response.json();
    profile.innerHTML = `
    <div class="profile">
        <img src="${data.avatar_url}" alt="Avatar" width="100">
        <div class="profile-info">
            <h2>${data.name || 'No Name Available'}</h2>
            <p>@${data.login}</p>
            <p>${data.bio || 'No Bio Available'}</p>
            <p><a href="${data.html_url}" target="_blank">View Profile</a></p>
            <p>Followers: ${data.followers} - Following: ${data.following}</p>
            <p>Public Repos: ${data.public_repos}</p>
        </div>
    </div>
`;
}
username.addEventListener('keydown',function(e){
    if(e.key === 'Enter'){
        getUser();
    }
})