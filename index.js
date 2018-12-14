// вариант1 
function toUpperCaseSymbol1(str, sym) {
	let result = '';
	let pos = 0;
	let end = false;

	while (!end) {
		var foundPos = str.indexOf(sym, pos);

		if (foundPos === -1) {
			result += str.slice(pos);
			end = true;
		} else {
			result += str.slice(pos, foundPos);
			result += str[foundPos].toUpperCase();
			pos = foundPos + 1; 
		}
	} 

	return result;
}

// вариант2
function toUpperCaseSymbol2(str, sym) {
	let result = '';

	for (let i = 0; i < str.length; i++) {
		result += str[i] === sym ? str[i].toUpperCase() : str[i];
	}
	
	return result;
}