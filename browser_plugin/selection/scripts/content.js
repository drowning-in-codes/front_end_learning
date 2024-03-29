chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request, sender);
  const { color, confirm } = request;
  const root = document.documentElement;
  if (confirm) {
    root.style.setProperty("--bgcolor", color);
    root.style.setProperty("--color", "#fff");
  } else {
    switch (color) {
      case "normal":
        root.style.setProperty("--color", "#fff");
        root.style.setProperty("--bgcolor", "#aeb9c5");
        break;
      case "blue":
        root.style.setProperty("--color", "#fff");
        root.style.setProperty("--bgcolor", "#a0c8e3");
        break;
      case "green":
        root.style.setProperty("--color", "#fff");
        root.style.setProperty("--bgcolor", "#5CB85C");
        break;
      case "pink":
        root.style.setProperty("--color", "#000");
        root.style.setProperty("--bgcolor", "#ff7eb9");
        break;
      case "orange":
        root.style.setProperty("--color", "#000");
        root.style.setProperty("--bgcolor", "#ff9800");
      default:
        break;
    }
  }
  sendResponse("Finish");
});

// const article = document.querySelector("article");

// // `document.querySelector` may return null if the selector doesn't match anything.
// if (article) {
//   const text = article.textContent;
//   const wordMatchRegExp = /[^\s]+/g; // Regular expression
//   const words = text.matchAll(wordMatchRegExp);
//   // matchAll returns an iterator, convert to array to get word count
//   const wordCount = [...words].length;
//   const readingTime = Math.round(wordCount / 200);
//   const badge = document.createElement("p");
//   // Use the same styling as the publish information in an article's header
//   badge.classList.add("color-secondary-text", "type--caption");
//   badge.textContent = `⏱️ ${readingTime} min read`;

//   // Support for API reference docs
//   const heading = article.querySelector("h1");
//   // Support for article docs with date
//   const date = article.querySelector("time")?.parentNode;

//   (date ?? heading).insertAdjacentElement("afterend", badge);
// }
