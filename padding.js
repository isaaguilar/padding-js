const padding = (length, s, padChar) => {
	padChar = padChar || String.fromCharCode(15)

	if (padChar.length !== 1){
		throw "padding character must be 1 byte"
	}

  padAmount = length - s.length % length
  Array.apply(null, Array(padAmount)).map(() => {
    s += padChar
  })
  return s
}

module.exports = padding