/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;
/* your stop condition goes here */
while (x<=20) {    
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
    if(x%3===0 && x%5!==0) {
        console.log("Julia");
    }
    if(x%5===0 && x%3!==0) {
        console.log("James");
    }
    if(x%5===0 && x%3===0) {
        console.log("JuliaJames");
    }
    if(x%5!==0 && x%3!==0) {
        console.log(x);
    }
    x=x+1;
}
