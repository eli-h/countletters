function countLetters(string) {
	var string2 = string.replace(/ /g, "")
	var unique = {};
  for (var i = 0; i < string2.length; i++) {
  	if (unique[string2[i]] == undefined) {
      unique[string2[i]] = 1;
  	} else {
  		unique[string2[i]]++
  	}
  }
  return unique;
}

console.log(countLetters("lighthouse in the house"))