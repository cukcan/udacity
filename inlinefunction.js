function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions ("happy", function(num) {
    var sound = ""; 
    for (var i = 0 ; i < num ; i++) {
        sound += "ha" ;  
    }
    return sound + "!"; 
});
