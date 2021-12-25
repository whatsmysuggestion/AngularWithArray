import {Component} from '@angular/core'

@Component({
	
selector:'hello',
template:` <button (click)="display()">Click Me</button>`

}) 
export class HelloWorldComponent
{

display() { 
 var nums = new Array(12, 13, 14, 15); 
console.log("Printing original array......"); 

for (var i = 0; i < nums.length; i++) { 
   console.log(nums[i]); 
} 
nums.reverse();  //reverses the array element 
console.log("Printing Reversed array...."); 

for (var i = 0; i < nums.length; i++) { 
   console.log(nums[i]); 
}
 
 		/*var alpha = ["a", "b", "c"]; 
			var numeric = [1, 2, 3];
			var alphaNumeric = alpha.concat(numeric); 
			console.log("alphaNumeric : " + alphaNumeric );
*/

			 var arr_names = new Array(4);
		for (var i = 0; i < arr_names.length; i++) {
		arr_names[i] = i * 2;
		console.log(arr_names[i]);
					}
					
var arr = new Array("First","Second","Third"); 
console.log("Data : " + arr );
var str = arr.join(":"); 
console.log("str : " + str );


var arr = new Array("First","Second","Third","Second"); 
console.log("Data : " + arr.indexOf("Second")); 
console.log("str : " + arr.lastIndexOf("Second") );	

var arr = new Array("A","B","C","D"); 
arr.push("ZZZ");
console.log("Data : " +arr); 
console.log("str : " + arr.pop());
console.log("str : " + arr.sort());
console.log("str : " + arr.reverse());




var arr = new Array("A","B","C","D"); 
arr.unshift("ZZZ");
console.log("Data : " +arr); 
console.log("str : " + arr.shift());

    }
	
} 