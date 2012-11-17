var strings = ["love", "am", "admire", "like", "want", "ate", "kicked", "hug", "sale", "want", "draw", "paint", "code", "art", "Google"];

function randomLucas()
{
document.getElementById("text").innerHTML = "";
var wordArr = strings[Math.floor(Math.random() * strings.length)].split("");
for (var i=0; i<wordArr.length; i++)
{
document.getElementById("text").innerHTML += wordArr[i];
}
}