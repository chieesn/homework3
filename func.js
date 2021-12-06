const menu=['Italiano Pizza 250$', 'Fries 50$', 'Ichiraku Ramen 150$', 'Vietnamese Pho 100$', "Gordon Ramsay's Lamb without the lamb sauce 690$", 'Ratatouille 130$', 'Grilled Cheese Deluxe 420$', 'Gotcha! Pork Roast 500$', 'Egg Tart 30$', 'Crème Brûlée 80$', 'Death Sandwich 666$', 'Squid Ink Pasta 360$'];


function call(){
    document.getElementById("food").innerHTML = items(menu);
}

function items(array){
    return array[Math.floor(Math.random() * array.length)];
}
/*___________BINARY CALCULATOR_________*/
bt0.onclick = function() {
    display.innerHTML += "0";
}

bt1.onclick = function() {
    display.innerHTML += "1";
}

clrscr.onclick = function() {
    display.innerHTML = "";
}

add.onclick = function() {
    display.innerHTML += "+";
}

substr.onclick = function() {
    display.innerHTML += "-";
}

mul.onclick = function() {
    display.innerHTML += "*";
}

div.onclick = function() {
    display.innerHTML += "/";
}

equal.onclick = function() {

    let screen = display.innerHTML;

    if (screen.indexOf("+") != -1) {
        var num = screen.split("+");
        var x = parseInt(num[0], 2);
        var y = parseInt(num[1], 2);
        var sum = x + y;
        var ans = sum.toString(2);
      } else if (screen.indexOf("-") != -1) {
        var num = screen.split("-");
        var x = parseInt(num[0], 2);
        var y = parseInt(num[1], 2);
        var sub = x - y;
        var ans = sub.toString(2);
      } else if (screen.indexOf("*") != -1) {
        var num = screen.split("*");
        var x = parseInt(num[0], 2);
        var y = parseInt(num[1], 2);
        var mul = x * y;
        var ans = mul.toString(2);
      } else if (screen.indexOf("/") != -1) {
        var num = screen.split("/");
        var x = parseInt(num[0], 2);
        var y = parseInt(num[1], 2);
        var div = x / y;
        var ans = div.toString(2);
      }
      display.innerHTML = ans;
}

