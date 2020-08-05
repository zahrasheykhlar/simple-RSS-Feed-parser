Array.prototype.mymap = function (callback) {
  const resultArray = []
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callback(this[index], index))
  }
  return resultArray
}
Array.prototype.myslice = function (startIndex, endIndex) {
  const result = []

  for (let index = startIndex; index < endIndex; index += 1) {
    if (index < this.length) {
      result.push(this[index])
    }
  }

  return result
}
