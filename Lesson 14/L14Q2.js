/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 */

function laugh(num) {
    var string ="";
    for(var i=1; i<=num; i++) {
        string += "ha";
    } 
    return (string+"!");
}
    console.log(laugh(3));