//("#quote-generator")
//("#quote")
function generateQuote(event) {
  event.preventDefault();
  new Typewriter("#quote", {
    strings: "“Knowing yourself is the beginning of all wisdom”",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let quoteElement = document.querySelector("#quote-generator");
quoteElement.addEventListener("submit", generateQuote);
