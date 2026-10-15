var colors=["red", "blue", "black", "purple","yellow"] 
colors.sort()
document.write(colors+"<hr>");
colors.reverse()
document.write(colors+"<br><br><br>")


var numbers=[1,10,15,25,37,49,60,999,0,2];
numbers.sort(function(a,b){return a - b;});

document.write("Ascending order: "+numbers+"<hr>");

numbers.reverse(function(a,b){return b - a;});
document.write("Descending order: "+numbers+"<hr><br><br>");

let numb = [4,8,16,32,52];
let result= numb.map(x=>x + "3")
document.write(result);