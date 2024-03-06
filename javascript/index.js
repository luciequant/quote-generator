function displayQuote(response) {
  console.log("quote generated");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}
function generateQuote(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "5fb1305ca3a3b7a0bo4908f8ftf4371a";
  let context =
    "You are an expert on quotes, you are so smart and can create so many original quotes. Your goal is to generate at least 2 line quote in basic HTML and separate each line with a <br />. Do not comment it in the beggining and do not show the title.Sign the quote with 'SheCodes AI' inside a <strong> element at the end of the quote. Make sure to use quotation marks";
  let prompt = `Please generate a quote about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayQuote);
}

let quoteElement = document.querySelector("#quote-generator");
quoteElement.addEventListener("submit", generateQuote);
