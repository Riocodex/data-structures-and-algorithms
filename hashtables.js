// //checking palindromes
// function palindrome(word){
//    var letters=[];
//    var reverseWord="";

//    //put letters of every word into a stack
//    for(var i=0;i < word.length; i++){
//        letters.push(word[i]);
//    }

//    //puttin every last letter into reverseWord
//    for(var i=0;i < word.length; i++){
//        reverseWord += letters.pop();
//    }
//    //checking if word is a palindrome
//    if(reverseWord == word){
//        console.log('the word is a palindrome');
//    }
//    else{
//        console.log("this is not a palindrome");
//    }
// //    console.log(letters);
// }
// palindrome("racecar");

//======creating a stack
var Stack = function() {
    this.count=0;
    this.storage = {};

    //adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //removes and returns the value at the end of the stack
    this.pop=function(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    //checking the size/length of the array
    this.size = function(){
        return this.count;
    }

    //Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}
console.log("============Stack Functions===========");
var myStack=new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(4);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("Rio");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

