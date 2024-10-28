//WEB115.0007 - Cameron Morelock
//js portion for DOM hw

myDiv = document.getElementById("myDiv");

heading = document.createElement("h1");
heading.textContent = "Welcome to DOM homework";
heading.className = "highlight";  
myDiv.appendChild(heading);

paragraph = document.createElement("p");
paragraph.textContent = "This is your first DOM homework assignment";
//clase name?
myDiv.appendChild(paragraph);

ul = document.createElement("ul");
li1 = document.createElement("li");
li1.textContent = "Apples";
ul.appendChild(li1);

li2 = document.createElement("li");
li2.textContent = "Bananas";
ul.appendChild(li2);

li3 = document.createElement("li");
li3.textContent = "Oranges";
ul.appendChild(li3);

myDiv.appendChild(ul);

function randColor() {
    colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    return colors[Math.floor(Math.random() * colors.length)];
}

newItemCount = 1;
document.getElementById("addItemButton").onclick = function() {
    li = document.createElement("li");
    li.textContent = "New List Item " + (++newItemCount);
    li.style.color = randColor();
    ul.appendChild(li);
};

myDiv.onclick = function() {
    myDiv.style.backgroundColor = randColor();
};

