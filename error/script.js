let link = document.getElementById("link");
link.textContent = `masos.my.to/${window.location.search}`;
link.setAttribute("href") = `masos.my.to/${window.location.search.substr(1)}`;
