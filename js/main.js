$(document).ready(function (){
    $("#click").click(function (){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 2300);
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
      if($(window).scrollTop()>120){
        $('#click').fadeIn(900)
      }else{
        $('#click').fadeOut(100)
      }
   });
  });

  //  let animeEnjoy = document.getElementById('enjoy');
  //  let animeEvery = document.getElementById('every');
  // animeEvery.style.color="black";
  // let animeMoment = document.getElementById('moment');

  
  // function animation() {
  // let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
  // let colorIndex = Math.floor(Math.random()*4);
  // return colors[colorIndex];
  // };

  // let anime = setInterval(animation(), 1000);
  // setInterval(anime, 1000);
  // function loop() {
  //  return setInterval(animation(), 1000);
  // };
    // setInterval (document.querySelector('#enjoy').style['color'] = animation(), 1000);
    // console.log(setInterval(animation()), 1000);
  // };
  // function styl() {
    // while (true) {
  // document.querySelector('#enjoy').style['color'] = animation();
    
      // }
  // };
  // animeEvery.style.color = "red";
  // animation()
  // animeEnjoy.style.color = "red";   //setInterval(animation(), 1000);
  // (animeEnjoy. animeEvery. animeMoment).classList.add("enjoyEveryMoment");

  // animeEnjoy.style.color = animation(anime);
  // setInterval(animeEnjoy.style.color = animation(), 1000);
  function flashColor() {
    var elem=document.all.enjoy.style;
if (elem.color=="deepskyblue")
    elem.color="midnightblue"
else
    elem.color="deepskyblue"
}

setInterval(flashColor, 1000)
