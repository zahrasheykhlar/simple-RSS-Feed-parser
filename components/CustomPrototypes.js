Array.prototype.mymap = function(callback){
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}

Array.prototype.myslice = function (startIndex, endIndex) {
            const result = [];

             for (let index = startIndex; index < endIndex; index += 1) {
                 const value = this[index];

                 if (index < this.length) {
                   result.push(value);
                 }
             }

            return result;
        };