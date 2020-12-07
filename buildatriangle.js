function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(length) {
  var row = "";    
  for (i = 1; i <= length; i++) {
        row+= makeLine(i);
    }
  return row;
}

console.log(buildTriangle(10));
