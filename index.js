let dictionary = [];
function addWord() {
	let newElement = document.getElementById("theWord").value;
	dictionary.push(newElement);
	document.getElementById("text").innerHTML = dictionary;
}
function serchWord() {
	let findWord = document.getElementById("theWord").value;
	if (dictionary.includes(findWord) == true) {
		document.getElementById("findSearch").innerHTML = "The word is in the dictionary.";
	} else {
		document.getElementById("findSearch").innerHTML = "The word is not in the dictionary.";
	}
}