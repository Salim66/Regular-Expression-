

let str = "asf=9A";

/*
 let pattern = /love/; // sensitive 
 let pattern = /Love|too|much/i; // insensitive 
 let pattern = /^love$/; // start and end match
 let pattern = /lo.e/; // . any character put this position
 let pattern = /lo*e/; // * left sight character put this position or blank this position
 let pattern = /^lo[a-z]e$/; // any character put this position
 let pattern = /^lo[a-z]*e$/; // any character set put this position
 let pattern = /^lo[a-zA-Z0-9~!@#]*e$/; // any character set case insensitive or any digit or symbol put this position
 let pattern = /^lov?c?e$/; // this position has v or c 
 let pattern = /^lo[^abc]e$/; // this position except those character
 let pattern = /^lo[^~!@#$%^*()]*e$/; // this position except those character or blank
 let pattern = /^[a-zA-Z0-9]$/; // only one character accept
 let pattern = /^[a-zA-Z0-9]*$/; // only one or more character accept
 let pattern = /^[a-z0-9_.]*@(gmail|yehoo|neooo)\.[a-z]{2,4}$/; // email pattern just like salim66@gmail.com or salim.hasan@gmail.com
 let pattern = /^[a-z0-9_-]{5,12}$/; // user name validation
 let pattern = /^\w+$/; // except any character
 let pattern = /^\W+$/; // can not except any character
 let pattern = /^\d+$/; // except any digit
 let pattern = /^\D+$/; // can not except any digit
 let pattern = /^\s+$/; // except only white space
 let pattern = /^\S+$/; // can not except any white space
 let pattern = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[~!@#$%^&*()_\-\+\=]).{4,}$/; // password check, must have one character uppercase, lowercase, digit, and special symbol
*/
let pattern = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[~!@#$%^&*()_\-\+\=]).{4,}$/; // password check, must have one character uppercase, lowercase, digit, and special symbol

console.log(pattern.test(str));