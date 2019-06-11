//$(document).ready(function (){
    //$("#click").click(function (){
       // $('html, body').animate({
        //    scrollTop: $("#home").offset().top
       // }, 2300);
    //});
//});

//$(document).ready(function(){
  //  $(window).scroll(function(){
   //   if($(window).scrollTop()>120){
    //    $('#click').fadeIn(900)
    //  }else{
    //    $('#click').fadeOut(100)
   //   }
   //});
//  });

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
  window.onload=function(){
    var image = document.getElementById("enjoy");
    var i = 0, colors = ['red', 'green', 'blue', 'yellow', 'orange'],t = [700,300]; //2 сек есть картинка, 5 сек нет
    function show() {
      let colorIndex = Math.floor(Math.random()*4);
    image.style.color = colors[colorIndex];
    setInterval(show,t[colorIndex], 1000);
    }
    show()
    }
