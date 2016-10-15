$(window).load(function(){



})

$(document).ready(function(){

  //  Canvas initialiseren
  var c=document.getElementById("draw");
  var ctx=c.getContext("2d");
  ctx.translate(0.5, 0.5);      //  Halve pixel opschuiven om blurry lijnen te voorkomen (rare  keuze bij het opstellen van de HTML5-specs, blijkbaar...)

  //  Array met coordinaten aanmaken
  var coords = [  [250,75], [250,250], [250,425], //  Midden
                  [50,150], [450, 150],           //  Buiten-boven
                  [50,350], [450,350],            //  Buiten-onder
                  [150,200], [350,200],           //  Binnen-boven
                  [150, 300], [350,300] ];        //  Binnen-onder
  var diameter = 7;

  //  Door de array heen lopen en de coordinaten op het canvas tekenen
  for(var i = 0; i < coords.length; i++){
      ctx.beginPath();
      ctx.arc(coords[i][0], coords[i][1], diameter, 0, Math.PI * 2, true);
      ctx.lineWidth = 1;            //  Breedte van de stroke
      ctx.strokeStyle = '#000';     //  Kleur van de lijn
      ctx.stroke();
  }

})
