var runnerName = "George";
var position = 2;
var medal;

if (position === 1) {  
  medal = "gold";
} else if (position === 2) {
  medal = "silver";
} else if (position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back.";
}

console.log(runnerName + ' received a ' + medal + ' medal.');
