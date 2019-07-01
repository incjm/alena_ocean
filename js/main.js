var arrow = document.getElementById("click");
window.onscroll = function() {
  if (document.body.scrollTop > document.documentElement.clientHeight) {
    arrow.style.display = "none";
  } else {
    arrow.style.display = "block";
  }
};

var timeOut;
function scrolUp() {
  var top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  if (top > 0) {
    window.scrollBy(0, -5);
    timeOut = setTimeout("scrolUp()", 10);
  } else {
    clearTimeout(timeOut);
    arrow.style.display = "none";
  }
}

  function flashColor() {
    var elem=document.all.enjoy.style;
if (elem.color=="cyan")
    elem.color="rgb(0, 17, 250)"
else
    elem.color="cyan"
}

setInterval(flashColor, 1000)
