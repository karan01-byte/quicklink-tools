function getTwitterLink(message) {
  const encodedMessage = encodeURIComponent(message);
  const link =
    "https://twitter.com/intent/tweet" + "?text=" + encodedMessage;
  return link;
}

function handleGenerateClick() {
  const message = document.getElementById("InputMessage").value;
  const resultDiv = document.getElementById("app");
  
  const twitterlink = getTwitterLink(message);
  resultDiv.innerHTML =
    '<p><a href="' +
    twitterlink +
    '" target="_blank">' +
    twitterlink +
    "</a></p>";
}

document
  .getElementById("GenerateBtn")
  .addEventListener("click", handleGenerateClick);