// ** All multilanguage logic **

var dataReload = document.querySelectorAll("[data-reload]");

if (window.location.hash) {
  if(window.location.hash === "#en"){
    hi.textContent = language.en.welcome;
    intro.textContent = language.en.intro;
  }
}

for (i = 0; i <= dataReload.length - 1; i++) {
    dataReload[i].onclick = function() {
        setTimeout(function () {
            location.reload(true);
        }, 150) // adjust the timer that works (1000 = 1 second)
    }
}