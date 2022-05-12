document.addEventListener('DOMContentLoaded', function() {
   
  var paragraph2 = document.createElement("p");
  document.body.append(paragraph2);
  paragraph2.innerText = "Therapy House Professionals";
 

  paragraph2.style.fontSize = '30px';
  paragraph2.style.fontFamily = "sans-serif";
  paragraph2.style.border = "1px solid black";
  paragraph2.style.borderRadius = "0.2rem";
  paragraph2.style.padding = "30px";
  paragraph2.style.position = "absolute";
  paragraph2.style.top = "48%";
  paragraph2.style.left = "33%";

 
  paragraph2.addEventListener("mouseenter", function (event) {
    console.log(event);
    event.target.innerText = "Visit us to meet your new therapist!";
  });
  paragraph2.addEventListener("mouseenter", function(event) {
    event.target.style.color = "brown";
  });
  paragraph2.addEventListener("mouseout", function(event) {
    event.target.innerText = "Therapy House Professionals";
  });
  paragraph2.addEventListener("mouseout", function(event) {
    event.target.style.color = "black";
  });

});