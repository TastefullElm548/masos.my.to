const DOMAIN = "masos.my.to/";
const LINK = document.getElementById("link");

let baseURL = DOMAIN + window.location.search.replace("?", "");
let fullURL = "https://" + baseURL;

LINK.textContent = baseURL;
LINK.setAttribute("href", fullURL);