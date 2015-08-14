/*
* For functions that may have an unkown number
* of arguments passed in, we can pass the arguments
* through the javascript arguments object.
* The arguments object exists within every function.
* The arguments object is array-like, but is not
* really an array. (i.e. has length property, and
* an index for each item, but no filter or sorting methods)
*
* For the getSum() function, we can be able to execute it as:
* getSum() = 0
* getSum(10) = 10
* getSum(10,5) = 15
* getSum(10,5,4,1,10) = 30
*/
function getSum(){
    var x = 0;

    for(var i=0;i<arguments.length;i++){
        x += arguments[i];
    }

    return x;
}