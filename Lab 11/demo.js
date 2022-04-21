//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    alert("The answer is 72");
}

function substract()
{
    alert("You got a C due to getting a 72");
}

function increment()
{ 
    alert("there are 15 multiples of 13 between 1 and 200"); 

}

/* JS statements
Conditional statements:
If statement
Switch statement
*/

function compare()
{
    alert("A, B, ABA, ABAB" );
}

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    alert(" there are five A's and four B's" );
}

/*
Loops:
For loop
While loop
Do while loop

Break
*/

function Repeat( message )
{
    var counter = 0;
    console.log("While loop:");
    while (counter < 5)
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for(var counter=0; counter < 5; counter++)
    {
        console.log(message);

    }
}

function CountMultiples(num)
{
    var totalMultiples = 0;

    for(var i=1;i<=100;i++)
    {
        if (i % num == 0)//This means it is a multiple
            totalMultiples++;
    }
    console.log("Total multiples of "+ num + " = "+totalMultiples);
}

function DisplayTriangle(num)
{
    var strRow="";
    var totalStars=0;
    for (var i=1;i<=num;i++){        
        strRow = ""      ;//Reset strRow
        for (var j=1; j<=i;j++){
            strRow = strRow + "*";
            totalStars++;
        }        
        //Now we have a row. Lets display the row
        console.log(strRow);     
    }
    return totalStars;
}

function CountStarsInTriangle(num)
{
    var total = DisplayTriangle(num);
    console.log("Total starts in a triangle with "+ num + " rows = "+ total);
}
