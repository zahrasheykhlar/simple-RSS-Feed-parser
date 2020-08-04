Array.prototype.mymap = function(callback){
    // let html = ``;
    // for (let i = 0; i < this.length; i++) {
    //               html += makeItem(this[i]);
    //             };
    // return html;

    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}