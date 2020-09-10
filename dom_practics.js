var findHist = document.querySelector("history");
var findH2 = document.querySelector("h2");
console.log(findH2);
findH2.innerHTML="Welcome to Antioch!!!";


var getThingsOfAnt = document.getElementsByClassName("thingsOfAntioch");
console.log(getThingsOfAnt);

var marina =getThingsOfAnt[0].children[1];
marina.style.color = "#F08080";

var somersvilleMall =getThingsOfAnt[0].children[2];
somersvilleMall.innerText = "Jamboree sandwich at the Jambo-ree";

var newImg = document.createElement("img");
newImg.setAttribute("src","https://images.squarespace-cdn.com/content/v1/5a3adeb11f318d9dd2dfadaa/1527611880550-6DUOWKQ67ULOTK1ODMLQ/ke17ZwdGBToddI8pDm48kFVfgRqeiJbezCllpJQtY_0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKciN1LM1HpqVwNixpz1hCKq8qoxvRXzjNTQ09MieJKwtnXQQXYw_DH5ZQqvplaE488/puppies.jpg?format=1500w");

var getPeopleOfAnt = document.getElementsByClassName("peopleOfAntioch");
getPeopleOfAnt[0].appendChild(newImg);

var removeDiv = document.querySelectorAll("div.peopleOfAntioch");
removeDiv[1].remove("div");