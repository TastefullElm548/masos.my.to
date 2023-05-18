let link = document.getElementById("link");
link.textContent = `masos.my.to/${window.location.search.substr(1)}`;
link.setAttribute("href", `https://masos.my.to/${window.location.search.substr(1)}`);
