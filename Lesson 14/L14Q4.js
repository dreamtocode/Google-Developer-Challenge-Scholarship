/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(str){
    var string = "";
    for(var i=1; i<=str; i++) {
        string +="ha";
    }
    return string+("!");
}
console.log(laugh(10));
