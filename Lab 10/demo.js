//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function YesorNo() //function definition
{
    var e = 5;
    var f = 4;
    var g = 20;

    //conditional if statement

    if (5 * 4 > 20) {
        alert("No, 5*4 is equal to 20");
    }

    else {
        alert("No, 5*4 is equal to 20");
    }
}

function multiply()//function definition
{
    var x = 25;
    var y = 42;
    var sum = x * y;
    alert("Sum is " + sum);
}

function divide()
{
    var a = 48;
    var b = 12;
    var diff = a / b;
    alert("Difference is" + diff);
}

//Homework Lab- Complete Multiplication and Division functionality

function calculate()
{ 
    var y = 5;//local scope - resets y everytime function is called
    globalX = globalX+5;//can add any number to itself
    //y = y+5;
    y+=5;//same as y = y+5;
    alert("x="+globalX + "y="+y); 

}

function compare() {
    var d = 100;
    var c = 1000;

    //conditional if statement

    if (1000 > 100) {
        alert("No, 100 is not greater than 1000");
    }
    
    else {
        alert("100 is not greater than 1000");
    }
  
    
}