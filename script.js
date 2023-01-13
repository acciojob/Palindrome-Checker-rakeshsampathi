// complete the given function
function palindrome(str){
const arr=str.split("");
	const revarr=arr.reverse();
	const joinarr=revarr.join("");
	
	if(str===joinarr){
		console.log(true);
	}
	else{
		console.log(false);
	}
}
module.exports = palindrome
