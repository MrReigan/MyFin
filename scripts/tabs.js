function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    if (evt) {
      evt.currentTarget.className += " active";
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var tablinks = document.getElementsByClassName("tablinks");
    var tabcontent = document.getElementsByClassName("tabcontent");
  
    // Получаем параметр "tab" из URL
    var urlParams = new URLSearchParams(window.location.search);
    var tabIndex = urlParams.get("tab");
  
    if (tabIndex && tablinks[tabIndex - 1]) {
      tablinks[tabIndex - 1].click(); // Открываем указанный таб
    } else if (tablinks.length > 0) {
      tablinks[0].click(); // Открываем первый таб по умолчанию
    }
  });