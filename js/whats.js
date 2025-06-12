function getWhatsappLink(number, message) {
        const encodedMessage = encodeURIComponent(message.trim());
        const link = "https://wa.me/91" + number + "?text=" + encodedMessage;

        return link;
      }
      function handleGenerateClick() {
        const number = document.getElementById("InputNumber").value.trim();
        const message = document.getElementById("inputMessage").value.trim();
        
        const resultDiv = document.getElementById("app");

        if (number === "" || message === "") {
          resultDiv.innerHTML = "<p>Please enter both number and message.</p>";
          return;
        }
    
        const whatsappLink = getWhatsappLink(number, message);
        resultDiv.innerHTML =
          '<p><a href="' +
          whatsappLink +
          '" target="_blank">' +
          whatsappLink +
          "</a></p>";
      }

      document
        .getElementById("GenerateBtn")
        .addEventListener("click", handleGenerateClick);