let menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

let mainEl = document.querySelector("main"); // selected the main element from the html doc
mainEl.style.backgroundColor = "var(--main-bg)";
// set background color to var --main-bg in css file
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

let topMainEl = document.querySelector("#top-menu"); // grab the top menu by ID
topMainEl.style.height = "100%"; // set the height to 100%
topMainEl.style.backgroundColor = "var(--top-menu-bg)"; // menu background color from css
topMainEl.classList.add("flex-around"); // added the class

menuLinks.forEach((link) => {
  const linkElement = document.createElement("a");
  linkElement.href = link.href;
  linkElement.textContent = link.text;

  topMainEl.appendChild(linkElement);
});
