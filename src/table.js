var FormulaParser = require('hot-formula-parser').Parser;
class Table {
  constructor(arr) {
    this.arr = arr||[[]];
    this.parser = new FormulaParser();
    this.parser.on('callRangeValue', this.getter());
  }
  getter(){
    var data = this.arr;
    return function(startCellCoord, endCellCoord, done){
      var fragment = [];
      for (var row = startCellCoord.row.index; row <= endCellCoord.row.index; row++) {
        var rowData = data[row];
        var colFragment = [];
        for (var col = startCellCoord.column.index; col <= endCellCoord.column.index; col++) {
          colFragment.push(rowData[col]);
        }
        fragment.push(colFragment);
      }
      if (fragment) {
        done(fragment);
      }
    };
  }
  get(query){
    return this.parser.parse(query);
  }
}
var table = new Table([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ]);
console.log(table.get("A1:A1"));
