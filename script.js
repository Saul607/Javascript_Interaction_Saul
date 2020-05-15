function halfNumber(num) {
  var num = document.getElementById("half-input").value
  // above is how your refrence value from html
  var hNum = num / 2;
  console.log(num / 2);
  console.log("Half of " + num + " is " +  num / 2);
  var numb = num/2;
  alert("Half of your number is " + num/2);
}



function fortune(UrName) {
  var UrName = document.getElementById("fortune-input").value
  console.log(UrName)
  var cookieArray = ['Your future is bleak. Try again later' , 'Play the lotto, you will win it all', 'Though there are nights that seem the darkest, the sun will always rise in the morning', 'Listen to THE WEEKND for realtionship advice']
  var rndIndex = Math.floor( Math.random() * cookieArray.length ) ;
  var rNum = cookieArray[rndIndex];
  var cookie = document.getElementById("fortune-output").innerHTML = (UrName + " fortune is " + rNum);
  cookie;
  restyle();
  // code above prints answer for cookie
}


function restyle() {
  var cookie = document.getElementById("fortune-output");
  var numCol = 255;
  var rCol1 = Math.floor(Math.random() * numCol);
  var rCol2 = Math.floor(Math.random() * numCol);
  var rCol3 = Math.floor(Math.random() * numCol);
  var textSize = Math.floor(Math.random() * 250)

  cookie.style.fontSize = textSize + "px";
  cookie.style.color = "rgb(" + rCol1 + "," + rCol2 + "," + rCol3 + ")" ;
  cookie.style.background = "rgb(" + rCol2 + "," + rCol3 + "," + rCol1 + ")" ;

}
