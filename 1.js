function submitAnswer(){
var comment = document.getElementById("comment").value;
if(comment == "// Your First Javascript Program"){
source = true;
}else{
source = false;
alert("Incorrect, please try again!");
}
return source;
}