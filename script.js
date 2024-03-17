function navFunction() {
  var x = document.getElementById("myNav");
  if (x.className === "nav") {
    x.className += "_responsive";
  } else {
    x.className = "nav";
  }
}
