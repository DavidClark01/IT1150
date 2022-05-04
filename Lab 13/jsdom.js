console.log("Inside jsdom.css!");
hello();

document.onload = function(){
    //All JS DOM code should go inside this function
    //Any function can be written outside this area        
}

function hello()
{
    console.log("hello");
}

function Homework()
{
    var header = document.getElementById("header");//this is the Element
    var text = header.innerText;//gives me the content of the header
    console.log("content of h4 with id as header = "+ text);
    //Change innerText of element
    header.innerText = "This is a new heading!"

    var link1 = document.getElementById("link1");//this is the Element
    var linkText = link1.innerText;
    var href = link1.href;
    console.log("content of link1 innertext :"+ linkText);
    console.log("content of href :"+ href);
    //Change innerText of element
    link1.innerText = "Link to the Tri-C website"
    link1.href="http://www.tri-c.edu";

}

function accessElementsByClassName()
{
    console.log("Accessing elements by Class Name");
    var links = document.getElementsByClassName("classA");//Collection of Elements
    console.log("Number of links: " + links.length);
    console.log("First link: " + links[0].innerText);
    for(var i=0;i<links.length;i++)
    {
        var text = links[i].innerText;
        console.log(text);
        links[i].innerText = links[i].innerText +" Link";        
    }

}

function accessElementsByTagName()
{
    console.log("Para elements");
    var paras = document.getElementsByTagName("p");//collection of elements
    for(var i=0;i<paras.length;i++)
    {
        var text = paras[i].innerText;
        console.log(text);
    }

    console.log("H4 elements");
    var h4s = document.getElementsByTagName("h4");//collection of elements
    for(var i=0;i<h4s.length;i++)
    {
        var text = h4s[i].innerText;
        console.log(text);
        h4s[i].innerText = "H4";
    }

}

function changeStylesForOneElement()
{
   var box = document.getHomework("box");//this is the Element
   box.style.width = "200px";
   box.style.height = "50px";
   box.style.backgroundColor="yellow";

   var h4 = document.getHomework("header");
   h4.style.backgroundColor = "yellow";
  
}

function changeStylesForManyElements()
{
    var paras = document.getElementsByTagName("p");
    for(var i=0;i<paras.length;i++){
        paras[i].style.color = "purple";
        paras[i].style.fontWeight = "bold";
    }
    var links = document.getElementsByClassName("classA");//Collection of Elements
    for(var i=0;i<links.length;i++)
    {
        links[i].classList.add("classB");        
    }
    
}

function createABox()
{
    var parent = document.getHomework("parent");
    var div = document.createElement("div");
    div.innerText="Box";
    div.classList.add("box");
    parent.appendChild(div);
}

function removeABox()
{
    var parent = document.getHomework("parent");
    var child = parent.lastElementChild;
    parent.removeChild(child);

    var item = document.getHomework("header");
    item.parentNode.removeChild(item);
}

function accessElementById()
{
    
    /*Task 1 - 
    Get the paragraph with id="copyright" 
    and update its background color to yellow
    */

    /*Task2
    Get all buttons by tagname "button" 
    loop through each element and 
    assign the background color to lightgreen
    */

    /*Task3
    Get all paragraphs by using the tagname "p"
    loop through each element
    and assign the classname "green"
    */

    /*Task 4
    Create a new link
    set the link's address (href) to "http://www.tri-c.edu"
    set its text to "Link"
    assign ClassA as its style
    Add it as a child to the the div with id="parent"
    */
    
}

