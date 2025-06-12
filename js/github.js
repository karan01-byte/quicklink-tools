function getGithubUrl(username) {
  const githubUsername = "https://github.com/" + username;
  return githubUsername;
}

function HandleGenerateClick() {
  const GithubUrl = getGithubUrl(inputElement.value);
  appElement.innerHTML = `<p><a href="${GithubUrl}" target="_blank">${GithubUrl}</a></p>`;
}

const inputElement = document.getElementById("InputUsername");

const buttonElement = document.getElementById("GenerateBtn");

const appElement = document.getElementById("app");

buttonElement.addEventListener("click", HandleGenerateClick);